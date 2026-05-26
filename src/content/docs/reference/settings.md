---
title: Einstellungen
description: Alle Einstellungs-Tabs der App im Überblick — Allgemein, Organisieren, Daten, Debug.
---

Du öffnest die Einstellungen mit Rechtsklick auf das Menüleisten-Symbol → **„Einstellungen"** (oder <kbd>⌘,</kbd> bei fokussierter App).

Die Einstellungen sind in vier Tabs gegliedert.

## Allgemein

Die wichtigsten Optionen für den Alltag:

- **Tracking-Intervall** — wie oft NowDoing nachfragt (5–60 min). Siehe [Tracking-Intervall](/features/tracking-interval/).
- **Menüleisten-Anzeige** — wählt, was neben dem Symbol erscheint: nur Icon, Icon + Text, Icon + Zeit oder Icon + Text + Zeit. Siehe [Menüleiste & Popover](/features/menu-bar/).
- **Bei Anmeldung starten** — fügt NowDoing zu den Login-Items hinzu.
- **Benachrichtigungen anzeigen** — Erinnerungs-Notification, wenn der Prompt im Hintergrund anliegt.
- **Sprache** — Folgt der macOS-Systemsprache (Deutsch oder Englisch). Details unter [Sprache & Lokalisierung](/reference/localization/).

## Organisieren

Verwaltung deiner Aktivitäten:

- Anlegen, umbenennen, einfärben, archivieren.
- Reihenfolge per Drag-and-Drop.
- Archivierte Aktivitäten ein-/ausblenden.

Siehe [Aktivitäten](/features/activities/).

## Daten

Alles rund um deine Datendatei:

- **Speicherort anzeigen** — öffnet den Ordner im Finder. Standard: `~/Library/Application Support/NowDoing/data.json`.
- **Daten exportieren** — komplette JSON-Datei als Backup.
- **Daten importieren** — Wiederherstellen aus einer früheren Export-Datei.
- **Alle Daten löschen** — setzt die App zurück. **Diese Aktion ist unwiderruflich.**

Falls ein Schreib- oder Lese-Fehler auftritt, erscheint hier ein Banner mit dem Fehler-Detail.

## Debug

Für Entwickler:innen und Beta-Tester:innen:

- **Kurz-Intervall (Sekunden)** — für UI-Tests des Tracking-Verhaltens.
- **VS Code Integration** — aktivieren, Shared Secret anzeigen, Port konfigurieren. Siehe [VS Code](/integrations/vscode/).
- **Logging-Level** — Standard, Verbose, Trace. Logs landen lokal unter `~/Library/Logs/NowDoing/`.
- **Logs öffnen** — öffnet das aktuelle Log im Konsole-App.

Im Alltag bleibt Debug-Tab eingeklappt — keine Auswirkung auf die normale Nutzung.
