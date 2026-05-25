---
title: VS Code Integration
description: Branch-Wechsel in VS Code lösen den NowDoing-Erfassungsdialog aus.
---

Die **NowDoing VS Code Extension** verbindet deinen Editor mit der Mac-App. Wenn du in einem geöffneten Repository den Git-Branch wechselst, öffnet NowDoing den Erfassungsdialog mit dem neuen Branch-Namen vorausgefüllt. VS Code zeigt zusätzlich die laufende Aktivität in der Statusleiste an.

## So richtest du sie ein

1. Öffne in der Mac-App **Einstellungen → Integrationen → VSCode** und aktiviere die Integration.
2. Bestätige den Hinweis **„Schlüsselbund-Zugriff"** mit **Verstanden**, dann den macOS-Prompt mit **Immer erlauben**.
3. Installiere in VS Code die Extension **NowDoing** vom Publisher `NowDoing` aus dem Marketplace.
4. Führe in VS Code **NowDoing: Test Connection** aus (<kbd>⇧⌘P</kbd>). Die Statusleiste zeigt dann `✓ NowDoing`.

## Schlüsselbund-Zugriff

Beim Aktivieren zeigt NowDoing einen kurzen Hinweis-Dialog „Schlüsselbund-Zugriff" — bestätige mit **Verstanden**. Direkt danach fragt macOS selbst nach Erlaubnis, weil das Sicherheits-Token verschlüsselt im **macOS-Schlüsselbund** abgelegt wird. Klicke dort auf **Immer erlauben**, sonst muss NowDoing dich bei jedem Start erneut fragen.

Lehnst du den macOS-Prompt ab, bleibt die Integration ausgeschaltet und im Status-Bereich erscheint „Schlüsselbund-Fehler" mit der Meldung von macOS. Du kannst es jederzeit erneut versuchen, indem du den Schalter aus- und wieder einschaltest.

## Statusleiste in VS Code

Bei aktiver Verbindung zeigt die Extension bis zu drei Einträge:

- **`✓ NowDoing`** — Verbindungsstatus. Klick prüft die Verbindung erneut.
- **Aktuelle Aktivität** — Name der laufenden Aktivität, mit `(Pause)`-Suffix bei Pausen. Klick blendet den Eintrag aus.
- **Verstrichene Zeit** — Dauer seit Start der Aktivität (`<1m`, `42m`, `1h 5m`). Klick blendet den Eintrag aus.

Die Werte werden alle 10 Sekunden bei der Mac-App abgefragt und zwischendurch lokal hochgezählt.

## Befehle in der Command Palette

| Befehl | Was er macht |
| --- | --- |
| `NowDoing: Test Connection` | Prüft die Erreichbarkeit der Mac-App. |
| `NowDoing: Reconnect` | Neuer Verbindungsversuch und Fehleranzeige. |
| `NowDoing: Start Activity` | Aktivität per Suche starten (legt bei Bedarf eine neue an). |
| `NowDoing: Show Output Log` | Öffnet das Diagnose-Log der Extension. |
| `NowDoing: Open Settings` | Springt direkt zu den Extension-Einstellungen. |
| `NowDoing: Toggle Current Activity in Status Bar` | Aktuelle Aktivität ein-/ausblenden. |
| `NowDoing: Toggle Elapsed Time in Status Bar` | Verstrichene Zeit ein-/ausblenden. |

## Einstellungen der Extension

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| `nowdoing.enabled` | `true` | Schaltet die Benachrichtigung bei Branch-Wechseln ein oder aus. |
| `nowdoing.debounceMs` | `1500` | Ruhezeit nach einem Branch-Wechsel, bevor benachrichtigt wird. |
| `nowdoing.showCurrentActivity` | `true` | Aktuelle Aktivität in der Statusleiste anzeigen. |
| `nowdoing.showElapsedTime` | `true` | Verstrichene Zeit in der Statusleiste anzeigen. |
| `nowdoing.currentPollSeconds` | `10` | Wie oft die laufende Aktivität von der Mac-App abgefragt wird. |

## Sicherheit

- Der Listener liegt auf einem Unix-Domain-Socket im Sandbox-Container der Mac-App (Modus `0600`, nur für deinen Benutzer lesbar). Es wird kein TCP-Port geöffnet.
- Jede Anfrage trägt eine HMAC-SHA256-Signatur, einen Zeitstempel und eine Nonce. Mehr als 60 Sekunden Zeitabweichung werden abgewiesen.
- Das Token liegt ausschließlich in der Capability-Datei `api-endpoint.json` (ebenfalls `0600`) und in der Mac-App verschlüsselt im macOS-Schlüsselbund — nicht in den VS-Code-Einstellungen oder im SecretStorage.

## Daten und Datenschutz

Übertragen werden: der Ordnername des Repositories, der absolute Repository-Pfad, der neue Branch-Name und der vorherige Branch-Name. Es findet keine Netzwerkkommunikation statt.
