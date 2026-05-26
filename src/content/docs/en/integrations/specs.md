---
title: Specs
description: OpenAPI and JSON Schema files for the HTTP API and the save-file format — for generating your own clients and validating the data file.
---

If you're building your own client, editor plugin or export tool against NowDoing, you shouldn't have to read the Swift sources to do it. Two machine-readable specs cover the app's two stable external surfaces.

| File | Describes | Format |
|---|---|---|
| [`openapi.yaml`](https://nowdoing.app/specs/openapi.yaml) | Local [HTTP API](/en/integrations/http-api/) (UDS + 127.0.0.1 TCP) | OpenAPI 3.1 |
| [`data-schema.json`](https://nowdoing.app/specs/data-schema.json) | On-disk save file `data.json` | JSON Schema (draft 2020-12) |

## OpenAPI spec for the HTTP API

`openapi.yaml` covers all five endpoints of the loopback listener including:

- Capability-file discovery (`~/api-endpoint.json` with `socketPath`, `token`, `pid`),
- the HMAC-SHA256 signing scheme with its canonical request layout (method, path+query, timestamp, nonce, SHA-256 of the body),
- replay protection (nonce 180 s, timestamp ±60 s), rate limiting (10 failed attempts / 30 s → 60 s lockout) and browser blocking (any `Origin` header → `403`),
- per-endpoint request and response schemas including error codes.

Render or generate a client — any OpenAPI tooling will do:

```sh
# View in a browser
npx @redocly/cli preview-docs https://nowdoing.app/specs/openapi.yaml

# Generate a TypeScript client
npx @openapitools/openapi-generator-cli generate \
  -i https://nowdoing.app/specs/openapi.yaml \
  -g typescript-fetch \
  -o ./client
```

The first-party [SDKs](/en/integrations/sdks/) implement exactly this spec — if your tool runs on JavaScript/TypeScript or Python, the wrappers handle discovery and signing for you.

## JSON Schema for the save file

`data-schema.json` describes the full on-disk format of `data.json`:

- `schemaVersion`, `contentHash` (a SHA-256 self-check), and the six top-level arrays (`activities`, `entries`, `groups`, `adjustments`, `recurringEntries`, `dayLocations`).
- Format constraints: UUIDs in 8-4-4-4-12 form, timestamps as ISO 8601 in UTC with no fractional seconds (`2026-05-26T14:30:00Z`), colors as `#RRGGBB`.
- Soft-delete fields (`deletedAt`) kept for iCloud sync.
- The legacy `Activity.emoji` field that older files may still carry — the loader folds it into `name` on read.

Validate an existing save file:

```sh
npx ajv-cli@5 validate \
  -s https://nowdoing.app/specs/data-schema.json \
  -d ~/Library/Application\ Support/NowDoing/data.json \
  --spec=draft2020
```

With iCloud sync on, the file lives at `iCloud.com.mattes.nowdoing/Documents/data.json` instead. More on storage paths is in [Data & privacy](/en/reference/data-privacy/).

## Validate against the specs in CI

If your tool commits `data.json` fixtures or serializes an OpenAPI-shaped response, a CI step that checks both on every push catches drift early. Example for GitHub Actions:

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

`curl -f` makes the build fail early if a spec URL stops responding. To pin to a tested version instead of always pulling the latest, swap the URLs for their versioned form (`/specs/openapi-1.0.0.yaml`).

## Versioning and stability

Both specs are versioned; your tool should pin to a version you tested:

- **`openapi.yaml`** carries `info.version`. Renamed endpoints, removed fields, or semantic shifts bump the major.
- **`data-schema.json`** mirrors the `schemaVersion` field inside the file. If it doesn't match the app's current value the loader refuses to open the file instead of silently migrating. New optional fields don't require a bump.

Both URLs are stable — older versions are available with the version suffix (`/specs/openapi-1.0.0.yaml`).
