---
title: VS Code Integration
description: Branch-Wechsel in VS Code lösen automatisch den NowDoing-Erfassungsdialog aus.
---

Die **NowDoing VS Code Extension** verbindet deinen Editor mit der Mac-App. Wenn du in einem geöffneten Repository den Git-Branch wechselst, öffnet NowDoing automatisch den Erfassungsdialog mit dem neuen Branch-Namen vorausgefüllt. Zusätzlich zeigt VS Code die aktuell laufende Aktivität direkt in der Statusleiste an.

Die Kommunikation läuft ausschließlich lokal über einen Unix-Domain-Socket im Sandbox-Container der Mac-App. Es wird kein Netzwerk-Port geöffnet.

## So richtest du sie ein

1. Öffne in der Mac-App **Einstellungen → Integrationen → VSCode** und aktiviere die Integration.
2. Bestätige den Hinweis **„Schlüsselbund-Zugriff"** mit **Verstanden**, dann den macOS-Prompt mit **Immer erlauben**.
3. Installiere in VS Code die Extension **NowDoing** vom Publisher `NowDoing` aus dem Marketplace.
4. Führe in VS Code **NowDoing: Test Connection** aus (<kbd>⇧⌘P</kbd>) — die Statusleiste zeigt dann `✓ NowDoing`.

Mehr ist nicht nötig. Es gibt keinen Port einzustellen und kein Token einzugeben — die Extension findet Socket-Pfad und Token automatisch über die Capability-Datei, die die Mac-App beim Aktivieren schreibt.

## Schlüsselbund-Zugriff

Beim ersten Aktivieren zeigt NowDoing einen kurzen Hinweis-Dialog „Schlüsselbund-Zugriff" — bestätige mit **Verstanden**. Direkt danach fragt macOS selbst nach Erlaubnis, weil das Token verschlüsselt im **macOS-Schlüsselbund** abgelegt wird. Klicke dort auf **Immer erlauben**, sonst muss NowDoing dich bei jedem Start erneut fragen.

Lehnst du den macOS-Prompt ab, bleibt die Integration ausgeschaltet und im Status-Bereich erscheint „Schlüsselbund-Fehler" mit der Meldung von macOS. Du kannst es jederzeit erneut versuchen, indem du den Schalter aus- und wieder einschaltest.

## Wie es funktioniert

Bei aktivierter Integration startet die Mac-App einen kleinen HTTP-Listener auf einem Unix-Domain-Socket innerhalb des Sandbox-Containers (`~/Library/Containers/com.mattes.nowdoing/Data/api.sock`, Modus `0600`, nur für den eigenen Benutzer lesbar). Daneben legt die App eine Capability-Datei `api-endpoint.json` ab, in der Socket-Pfad, Auth-Token und PID stehen.

Die Extension liest diese Datei bei jeder Anfrage neu — dadurch funktioniert die Integration sofort, sobald du sie in der Mac-App einschaltest, und es gibt keinen separaten Konfigurationsschritt in VS Code.

Branch-Wechsel werden von der eingebauten Git-API von VS Code beobachtet und nach einer kurzen Beruhigungs-Phase (Standard 1,5 Sekunden, vermeidet Spam bei Rebases) signiert an die Mac-App geschickt. Jede Anfrage trägt eine HMAC-SHA256-Signatur, Zeitstempel und Nonce als Defense-in-Depth obendrauf. NowDoing weist Anfragen mit mehr als 60 Sekunden Zeitabweichung ab — falls du „expired timestamp"- oder „signature invalid"-Fehler siehst, prüfe die Systemzeit (NTP).

## Statusleiste in VS Code

Die Extension zeigt bei aktiver Verbindung bis zu drei Einträge in der Statusleiste:

- **`✓ NowDoing`** — Verbindungsstatus. Klick prüft die Verbindung erneut.
- **Aktuelle Aktivität** — Name der gerade laufenden NowDoing-Aktivität (mit `(Pause)`-Suffix, wenn pausiert). Klick blendet den Eintrag aus.
- **Verstrichene Zeit** — Dauer seit Beginn der aktuellen Aktivität (`<1m`, `42m`, `1h 5m`). Klick blendet den Eintrag aus.

Aktivität und Zeit werden alle 10 Sekunden aktualisiert (`nowdoing.currentPollSeconds`) und zwischendurch alle 30 Sekunden lokal hochgezählt, damit die Anzeige flüssig wirkt ohne die Mac-App ständig zu fragen.

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

Das Auth-Token wird **nicht** in den VS-Code-Einstellungen oder im SecretStorage gespeichert. Es lebt ausschließlich in der Capability-Datei (Modus `0600`, nur für den eigenen Benutzer lesbar), die die Mac-App schreibt. Auf der Mac-Seite liegt es zusätzlich verschlüsselt im macOS-Schlüsselbund.

## Daten und Datenschutz

Die Extension überträgt an die Mac-App: den Ordnernamen des Repositories, den absoluten Repository-Pfad, den neuen Branch-Namen und den vorherigen Branch-Namen. Es findet keine Netzwerkkommunikation statt — der Socket liegt innerhalb des Sandbox-Containers und ist auf den eigenen Benutzer beschränkt.
