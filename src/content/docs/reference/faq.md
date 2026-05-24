---
title: FAQ
description: Häufig gestellte Fragen zu NowDoing.
---

## Allgemein

### Was kostet NowDoing?

Während der Beta-Phase ist NowDoing **kostenlos**. Aktuelle Preise und Konditionen siehe [nowdoing.app](https://nowdoing.app).

### Auf welchen Plattformen läuft NowDoing?

Aktuell nur **macOS** (ab Version 26.4). Versionen für iPad, iPhone oder Apple Watch sind denkbar, stehen aber gerade nicht auf der Roadmap.

### Wo sind meine Daten?

Standardmäßig lokal auf deinem Mac unter `~/Library/Application Support/NowDoing/data.json`. Du kannst den Speicherort frei wählen oder optional iCloud-Sync aktivieren. Mehr dazu unter [Daten & Datenschutz](/reference/data-privacy/).

## Funktionen

### Kann ich vergangene Tage bearbeiten?

Ja. Im Stundenzettel-Fenster kannst du jeden Eintrag anpassen (Aktivität ändern, Start- oder Endzeit verschieben, löschen). Die Tagessumme wird automatisch neu berechnet.

### Was passiert, wenn ich den Mac schlafen lege?

NowDoing erkennt, wenn der Mac in den Ruhezustand geht, und unterbricht den laufenden Eintrag. Beim Aufwachen erscheint der nächste Prompt — die Lücke bleibt als „nicht getrackt" sichtbar.

### Was, wenn ich den Prompt verpasse?

Der Prompt bleibt geöffnet, bis du ihn beantwortest. Du kannst die Startzeit des resultierenden Eintrags nachträglich anpassen, falls du z. B. erst zehn Minuten später bestätigst.

### Kann ich mehrere Aktivitäten gleichzeitig tracken?

Nein. NowDoing ist bewusst **mono-tasking**: nur eine Aktivität läuft gleichzeitig. Das spiegelt wider, dass auch deine Aufmerksamkeit gleichzeitig nur eine Sache fokussieren kann.

### Gibt es Pomodoro-Modus / Pausen-Erinnerung / Reports?

Nein, nicht eingebaut. NowDoing macht eine Sache: aufzeichnen, was du tust. Pomodoro-Apps, Break-Reminder und Report-Tools gibt es bereits gute, und sie kombinieren sich gut mit NowDoing.

## Daten & Sync

### Kann ich zwischen mehreren Macs synchronisieren?

Ja, optional über **iCloud Drive**: **Einstellungen → Daten → „Mit iCloud synchronisieren"**. Die Synchronisation läuft ausschließlich über deinen privaten iCloud-Container, ohne NowDoing-Server. Details unter [Daten & Datenschutz](/reference/data-privacy/).

Alternativ kannst du unter **„Eigener Ordner wählen"** einen Pfad in Dropbox, OneDrive o. Ä. angeben. **Achtung:** Bei gleichzeitigem Schreiben von zwei Geräten kann es zu Konflikten kommen — iCloud-Sync ist robuster.

### Kann ich meine Daten exportieren / migrieren?

Ja. Über **Einstellungen → Daten → „Daten exportieren"** bekommst du die komplette JSON-Datei. Für tabellen-orientiertes Exportieren siehe [CSV-Export](/features/csv-export/).

## Technisches

### NowDoing reagiert nicht / das Popover öffnet sich nicht.

Versuche zuerst, die App über das Kontextmenü zu beenden und neu zu starten. Wenn das Problem bleibt:

1. Öffne **Einstellungen → Debug → Logs**.
2. Suche nach Einträgen rund um den Zeitpunkt des Problems.
3. Schicke uns das Log bei [Support / Feedback](https://nowdoing.app).

### Wie deaktiviere ich das Live-Label wieder?

**Einstellungen → Allgemein** → Schalter **„Live Label in der Menüleiste"** deaktivieren.

### Funktioniert NowDoing mit mehreren Spaces / Displays?

Ja. Das Menüleisten-Symbol ist Teil der macOS-Menüleiste und damit auf allen Spaces sichtbar. Das Popover öffnet sich immer auf dem aktiven Display.
