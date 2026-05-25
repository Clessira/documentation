---
title: HTTP-API
description: Lokaler HTTP-Listener auf 127.0.0.1, mit dem eigene Tools NowDoing steuern können.
---

NowDoing kann auf Wunsch einen kleinen **HTTP-Server auf `127.0.0.1`** starten. Damit lassen sich eigene Skripte, Editor-Plugins oder CLIs an die App andocken — die laufende Aktivität abfragen, eine neue starten oder einen Branch-Wechsel melden. Standardmäßig ist der Listener aus.

## So aktivierst du sie

1. Öffne in der Mac-App **Einstellungen → Integrationen → HTTP-API**.
2. Aktiviere **HTTP-API einschalten**. Bei der ersten Aktivierung legt NowDoing ein Token im Schlüsselbund an — bestätige den macOS-Prompt mit **Immer erlauben**.
3. Wähle bei Bedarf einen anderen **Port** (Standard `39847`, erlaubt sind `1024–65535`).
4. Kopiere unter **Token** den geheimen Wert in deine Umgebung oder dein Tool.

Der Status-Bereich zeigt `Aktiv auf 127.0.0.1:<port>`, sobald der Listener läuft. Schalte den Toggle aus, um den Port wieder zu schließen.

## Endpunkte

Der Server beantwortet fünf Endpunkte. Alle Anfragen müssen signiert sein (siehe unten); für eigene Tools nimmst du am besten eines der [SDKs](/integrations/sdks/), die das Signieren erledigen.

| Methode + Pfad             | Zweck |
| -------------------------- | ----- |
| `GET /healthcheck`         | Verbindung prüfen, ohne etwas auszulösen. |
| `GET /current`             | Aktuelle Aktivität abfragen (oder `null`, wenn nichts läuft). |
| `GET /activities/search`   | Aktivitäten nach Namen durchsuchen. |
| `POST /activities/start`   | Aktivität starten (optional neu anlegen). |
| `POST /branch-changed`     | Branch-Wechsel melden — öffnet den Erfassungsdialog mit dem Branch vorausgefüllt. |

## Sicherheit

- Der Listener bindet ausschließlich an `127.0.0.1` und akzeptiert nur Verbindungen von deinem eigenen Mac. Es findet keine Netzwerkkommunikation nach außen statt.
- Jede Anfrage trägt eine **HMAC-SHA256-Signatur**, einen Zeitstempel und eine Nonce. Anfragen mit mehr als 60 Sekunden Zeitabweichung werden abgewiesen (`401`), wiederholte Nonces innerhalb von 180 Sekunden ebenfalls (`409`).
- Mehr als 10 fehlgeschlagene Authentifizierungen in 30 Sekunden lösen einen 60-Sekunden-Lockout aus (`429`).
- Das Token liegt verschlüsselt im macOS-Schlüsselbund.
- Die letzten 25 Anfragen kannst du in **Einstellungen → Debug → API-Zugriffe** einsehen (Zeit, Methode, Pfad, Status).
