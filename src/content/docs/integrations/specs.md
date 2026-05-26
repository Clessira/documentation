---
title: Spezifikationen
description: OpenAPI- und JSON-Schema-Dateien für die HTTP-API und das Save-File-Format — zum Generieren eigener Clients und Validieren der Datendatei.
---

Wer eigene Clients, Editor-Plugins oder Export-Tools gegen NowDoing baut, soll dafür nicht den Swift-Quelltext lesen müssen. Zwei maschinenlesbare Specs beschreiben die beiden stabilen Außenflächen der App.

| Datei | Beschreibt | Format |
|---|---|---|
| [`openapi.yaml`](https://nowdoing.app/specs/openapi.yaml) | Lokale [HTTP-API](/integrations/http-api/) (UDS + 127.0.0.1 TCP) | OpenAPI 3.1 |
| [`data-schema.json`](https://nowdoing.app/specs/data-schema.json) | Save-File `data.json` | JSON Schema (Draft 2020-12) |

## OpenAPI-Spec der HTTP-API

`openapi.yaml` beschreibt alle fünf Endpunkte des Loopback-Listeners samt:

- Capability-File-Discovery (`~/api-endpoint.json` mit `socketPath`, `token`, `pid`),
- HMAC-SHA256-Signaturschema mit kanonischer Request-Zeile (Methode, Pfad+Query, Timestamp, Nonce, SHA-256 des Bodys),
- Replay-Schutz (Nonce 180 s, Timestamp ±60 s), Rate-Limit (10 Fehlversuche/30 s → 60 s Lockout) und Browser-Blockade (`Origin`-Header → `403`),
- Per-Endpoint Request- und Response-Schemas inklusive Fehlercodes.

Anzeigen oder Client generieren — jedes OpenAPI-Tooling reicht:

```sh
# Im Browser ansehen
npx @redocly/cli preview-docs https://nowdoing.app/specs/openapi.yaml

# TypeScript-Client erzeugen
npx @openapitools/openapi-generator-cli generate \
  -i https://nowdoing.app/specs/openapi.yaml \
  -g typescript-fetch \
  -o ./client
```

Die offiziellen [SDKs](/integrations/sdks/) implementieren genau diese Spec — wenn dein Tool in JavaScript/TypeScript oder Python lebt, nimm lieber die fertigen Wrapper, sie übernehmen Discovery und Signieren.

## JSON Schema für die Datendatei

`data-schema.json` beschreibt das gesamte On-Disk-Format von `data.json`:

- `schemaVersion`, `contentHash` (SHA-256-Selbstabsicherung), und die sechs Top-Level-Arrays (`activities`, `entries`, `groups`, `adjustments`, `recurringEntries`, `dayLocations`).
- Format-Constraints: UUIDs in 8-4-4-4-12-Form, Zeitstempel als ISO 8601 in UTC ohne Sekundenbruchteile (`2026-05-26T14:30:00Z`), Farben als `#RRGGBB`.
- Soft-Delete-Felder (`deletedAt`) für iCloud-Sync.
- Das alte `Activity.emoji`-Feld, das ältere Dateien noch tragen können — der Loader faltet es beim Lesen in `name`.

Eine vorhandene Datendatei prüfen:

```sh
npx ajv-cli@5 validate \
  -s https://nowdoing.app/specs/data-schema.json \
  -d ~/Library/Application\ Support/NowDoing/data.json \
  --spec=draft2020
```

Bei aktivem iCloud-Sync liegt die Datei stattdessen unter `iCloud.com.mattes.nowdoing/Documents/data.json`. Mehr zum Speicherort steht in [Daten & Datenschutz](/reference/data-privacy/).

## In CI gegen die Schemas prüfen

Wenn dein Tool eigene `data.json`-Fixtures committet oder eine OpenAPI-konforme Antwort serialisiert, lohnt sich ein CI-Schritt, der bei jedem Push prüft, ob die Specs noch passen. Beispiel für GitHub Actions:

```yaml
name: validate-against-nowdoing-specs

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Fetch upstream specs
        run: |
          mkdir -p .specs
          curl -fsSL -o .specs/openapi.yaml \
            https://nowdoing.app/specs/openapi.yaml
          curl -fsSL -o .specs/data-schema.json \
            https://nowdoing.app/specs/data-schema.json

      - name: Lint OpenAPI spec
        run: npx --yes @redocly/cli@latest lint .specs/openapi.yaml

      - name: Validate data.json fixtures
        run: |
          npx --yes ajv-cli@5 validate \
            -s .specs/data-schema.json \
            -d 'fixtures/**/*.json' \
            --spec=draft2020 \
            --strict=false
```

`curl -f` lässt den Build früh fehlschlagen, wenn eine Spec-URL nicht mehr antwortet. Willst du auf einer geprüften Version pinnen statt immer die jeweils aktuelle zu ziehen, ersetz die URLs durch ihre versionierte Form (`/specs/openapi-1.0.0.yaml`).

## Versionierung und Stabilität

Beide Specs sind versioniert; dein Tool sollte auf einer geprüften Version pinnen:

- **`openapi.yaml`** trägt `info.version`. Umbenannte Endpunkte, entfernte Felder oder semantische Verschiebungen erhöhen die Major-Version.
- **`data-schema.json`** spiegelt das `schemaVersion`-Feld in der Datei. Stimmt es nicht mit dem aktuellen Wert der App überein, lehnt der Loader die Datei ab statt still zu migrieren. Neue optionale Felder erfordern keinen Versions-Bump.

Beide URLs sind stabil — eine ältere Version bekommst du über den Versions-Suffix (`/specs/openapi-1.0.0.yaml`).
