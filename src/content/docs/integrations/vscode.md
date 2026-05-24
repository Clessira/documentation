---
title: VS Code Integration
description: Branch-Wechsel in VS Code lösen automatisch den NowDoing-Erfassungsdialog aus.
---

Die **NowDoing VS Code Extension** verbindet deinen Editor mit der Mac-App. Wenn du in einem geöffneten Repository den Git-Branch wechselst, öffnet NowDoing automatisch den Erfassungsdialog mit dem neuen Branch-Namen vorausgefüllt. Die Kommunikation läuft ausschließlich lokal über `127.0.0.1`.

## So richtest du sie ein

1. Öffne in der Mac-App **Einstellungen → Integrationen → VSCode**, aktiviere die Integration und bestätige den Schlüsselbund-Zugriff, wenn macOS danach fragt.
2. Klicke auf **Kopieren** neben dem Token. Notiere den Port (Standard `39847`), falls du ihn geändert hast.
3. Installiere in VS Code die Extension **NowDoing** vom Publisher `NowDoing` aus dem Marketplace.
4. Führe in VS Code den Befehl **NowDoing: Set Token** aus (<kbd>⇧⌘P</kbd>) und füge das Token ein.
5. Prüfe mit **NowDoing: Test Connection**, ob die Verbindung steht — die Statusleiste zeigt dann `✓ NowDoing`.

## Schlüsselbund-Zugriff

Beim Aktivieren zeigt NowDoing zuerst einen kurzen Hinweis-Dialog „Schlüsselbund-Zugriff" — bestätige mit **Verstanden**. Direkt danach fragt macOS selbst nach Erlaubnis, weil das Token verschlüsselt im **macOS-Schlüsselbund** abgelegt wird. Klicke dort auf **Immer erlauben**, sonst muss NowDoing dich bei jedem Start erneut fragen.

Lehnst du den macOS-Prompt ab, bleibt die Integration ausgeschaltet und im Status-Bereich erscheint „Schlüsselbund-Fehler" mit der Meldung von macOS. Du kannst es jederzeit erneut versuchen, indem du den Schalter aus- und wieder einschaltest.

## Wie es funktioniert

Die Mac-App startet bei aktivierter Integration einen kleinen HTTP-Listener, der ausschließlich an `127.0.0.1` gebunden ist. Die Extension beobachtet die Git-API von VS Code und schickt bei einem Branch-Wechsel eine signierte Nachricht an die App. Nach einer kurzen Beruhigungs-Phase (Standard 1,5 Sekunden, vermeidet Spam bei Rebases) öffnet NowDoing den Erfassungsdialog mit dem neuen Branch.

Jede Anfrage wird per HMAC-SHA256 mit dem geteilten Token signiert und trägt zusätzlich Zeitstempel und Nonce. NowDoing weist Anfragen mit mehr als 60 Sekunden Zeitabweichung ab — falls du „expired timestamp"- oder „signature invalid"-Fehler siehst, prüfe die Systemzeit (NTP).

## Befehle in der Command Palette

| Befehl | Was er macht |
| --- | --- |
| `NowDoing: Set Token` | Speichert das Token in VS Code SecretStorage. |
| `NowDoing: Test Connection` | Prüft die Erreichbarkeit der Mac-App. |
| `NowDoing: Reconnect` | Neuer Verbindungsversuch und Fehleranzeige. |
| `NowDoing: Start Activity` | Aktivität per Suche starten (legt bei Bedarf eine neue an). |
| `NowDoing: Show Output Log` | Öffnet das Diagnose-Log der Extension. |
| `NowDoing: Open Settings` | Springt direkt zu den Extension-Einstellungen. |

## Einstellungen der Extension

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| `nowdoing.enabled` | `true` | Schaltet die Benachrichtigung bei Branch-Wechseln ein oder aus. |
| `nowdoing.port` | `39847` | Muss zum Port in der Mac-App passen. |
| `nowdoing.debounceMs` | `1500` | Ruhezeit nach einem Branch-Wechsel, bevor benachrichtigt wird. |

Das Token liegt in VS Code SecretStorage unter dem Schlüssel `nowdoing.apiToken`. In der Mac-App liegt es verschlüsselt im macOS-Schlüsselbund.

## Daten und Datenschutz

Die Extension überträgt an den lokalen Listener: den Ordnernamen des Repositories, den absoluten Repository-Pfad, den neuen Branch-Namen und den vorherigen Branch-Namen. Es findet keine Netzwerkkommunikation über `127.0.0.1` hinaus statt.
