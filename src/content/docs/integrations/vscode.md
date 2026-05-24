---
title: VS Code Integration
description: Branch-Wechsel in VS Code automatisch als Aktivität in NowDoing loggen.
---

Die **NowDoing VS Code Extension** verbindet deinen Editor mit der Mac-App. Wenn du in VS Code den Git-Branch wechselst, kann NowDoing das automatisch als Aktivität erfassen — kein manuelles Bestätigen mehr.

## Installation

1. Öffne in VS Code den **Extensions**-Tab (<kbd>⇧⌘X</kbd>).
2. Suche nach **„NowDoing"** (Publisher: `NowDoing`).
3. Klicke auf **„Install"**.

Die Extension funktioniert nur in Verbindung mit der **NowDoing Mac-App** — sie kommuniziert lokal über `127.0.0.1` mit der App.

## Wie es funktioniert

Die Mac-App betreibt einen kleinen **HTTP-Listener auf der Loopback-Schnittstelle**. Die VS Code Extension beobachtet Git-Branch-Wechsel im aktuellen Workspace und schickt eine signierte Nachricht an die App.

- **Lokal:** Keine Daten verlassen je deinen Mac.
- **Signiert:** Die Nachrichten sind HMAC-signiert, sodass nur deine eigene Extension die App ansprechen kann.
- **Loopback-only:** Der Listener bindet ausschließlich an `127.0.0.1`, ist also vom Netzwerk aus nicht erreichbar.

## Konfiguration

In den NowDoing-Einstellungen (**Einstellungen → Debug** in der Mac-App) findest du:

- **VS Code Integration aktivieren** — schaltet den Listener ein.
- **Shared Secret** — die App generiert beim ersten Start ein Geheimnis und zeigt es an. Übertrage es in die VS Code-Settings unter `nowdoing.sharedSecret`.
- **Port** — Standard `52345`, kannst du bei Konflikten anpassen.

In VS Code: <kbd>⌘,</kbd> → suche `nowdoing` und trage Secret + Port ein.

## Palette-Befehle

Zusätzlich zur automatischen Erfassung bietet die Extension manuelle Kommandos in der Command Palette (<kbd>⇧⌘P</kbd>):

- **NowDoing: Start Activity** — startet eine Aktivität, ohne den Mac-App-Popover zu öffnen.
- **NowDoing: Stop Activity** — pausiert das Tracking.
- **NowDoing: Show Status** — zeigt die aktuelle Aktivität in der VS Code-Statuszeile an.

## Branch-Wechsel als Aktivität

Standardmäßig wird der Branch-Name als Notiz angehängt; die Aktivität bleibt deine zuletzt aktive (z. B. `🛠️ Coding`). Wenn du Branches als komplett eigene Aktivitäten loggen möchtest, kannst du in der VS Code-Settings `nowdoing.branchAsActivity` aktivieren.
