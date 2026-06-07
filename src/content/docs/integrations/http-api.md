---
title: HTTP-API
description: Lokaler HTTP-Listener auf 127.0.0.1, mit dem eigene Tools Clessira steuern können.
---

Clessira kann auf Wunsch einen kleinen **HTTP-Server auf `127.0.0.1`** starten. Damit lassen sich eigene Skripte, Editor-Plugins oder CLIs an die App andocken — die laufende Aktivität abfragen, eine neue starten oder einen Branch-Wechsel melden. Standardmäßig ist der Listener aus.

## So aktivierst du sie

1. Öffne in der Mac-App **Einstellungen → Integrationen → HTTP-API**.
2. Aktiviere **HTTP-API einschalten**. Bei der ersten Aktivierung legt Clessira ein Token im Schlüsselbund an — bestätige den macOS-Prompt mit **Immer erlauben**.
3. Wähle bei Bedarf einen anderen **Port** (Standard `39847`, erlaubt sind `1024–65535`).
4. Kopiere unter **Token** den geheimen Wert in deine Umgebung oder dein Tool.

Der Status-Bereich zeigt `Aktiv auf 127.0.0.1:<port>`, sobald der Listener läuft. Schalte den Toggle aus, um den Port wieder zu schließen.

## Endpunkte

Der Server beantwortet acht Endpunkte. Alle Anfragen müssen signiert sein (siehe unten); für eigene Tools nimmst du am besten eines der [SDKs](/integrations/sdks/), die das Signieren erledigen.

| Methode + Pfad             | Zweck |
| -------------------------- | ----- |
| `GET /healthcheck`         | Verbindung prüfen, ohne etwas auszulösen. |
| `GET /current`             | Aktuelle Aktivität abfragen (oder `null`, wenn nichts läuft). |
| `GET /status`              | Kompakter Statusblock: Tracking-Flag, Pause-Flag, laufende Aktivität, heute erfasste Sekunden. |
| `GET /activities/search`   | Aktivitäten nach Namen durchsuchen. |
| `POST /activities/start`   | Aktivität starten (optional neu anlegen). |
| `POST /activities/stop`    | Laufende Sitzung beenden. Idempotent — kein Fehler, wenn nichts läuft. |
| `POST /entries`            | Zeitblock rückwirkend nachtragen (Dauer in Minuten, optionale Notiz). |
| `POST /branch-changed`     | Branch-Wechsel melden — öffnet den Erfassungsdialog mit dem Branch vorausgefüllt. |

### `GET /status`

Antwort:

```json
{
  "ok": true,
  "result": {
    "isTracking": true,
    "isOnBreak": false,
    "currentActivity": { "activityID": "…", "activityName": "Refactor" },
    "todaySeconds": 13500
  }
}
```

`currentActivity` ist `null`, wenn gerade nichts läuft. `todaySeconds` zählt die heute insgesamt erfasste Zeit in Sekunden — die Formatierung bleibt dem Client überlassen.

### `POST /entries`

Body:

```json
{
  "activityID": "uuid",   // optional, alternativ:
  "name": "Standup",      // optional (eines von beiden ist Pflicht)
  "durationMinutes": 15,  // > 0, Pflicht
  "note": "…",            // optional
  "createIfMissing": false // optional, default false
}
```

Antwort enthält die neu angelegte Eintrags-ID, die Aktivitäts-Daten und ein `created`-Flag, das `true` ist, wenn die Aktivität für diese Anfrage frisch angelegt wurde.

## Lizenz-Gate

Ohne gültige Lizenz antwortet jeder Endpoint außer `/healthcheck` mit **`423 Locked`** und Body `{"error":"license locked"}`. So lässt sich Erreichbarkeit auch im gesperrten Zustand prüfen, ohne dass produktive Verben ungewollt durchgehen.

## Sicherheit

- Der Listener bindet ausschließlich an `127.0.0.1` und akzeptiert nur Verbindungen von deinem eigenen Mac. Es findet keine Netzwerkkommunikation nach außen statt.
- Jede Anfrage trägt eine **HMAC-SHA256-Signatur**, einen Zeitstempel und eine Nonce. Anfragen mit mehr als 60 Sekunden Zeitabweichung werden abgewiesen (`401`), wiederholte Nonces innerhalb von 180 Sekunden ebenfalls (`409`).
- Mehr als 10 fehlgeschlagene Authentifizierungen in 30 Sekunden lösen einen 60-Sekunden-Lockout aus (`429`).
- Das Token liegt verschlüsselt im macOS-Schlüsselbund.
- Die letzten 25 Anfragen kannst du in **Einstellungen → Debug → API-Zugriffe** einsehen (Zeit, Methode, Pfad, Status).
