---
title: FAQ
description: Häufig gestellte Fragen zu Clessira.
---

## Allgemein

### Was kostet Clessira?

Während der Beta-Phase ist Clessira **kostenlos**. Aktuelle Preise und Konditionen siehe [clessira.app](https://clessira.app).

### Auf welchen Plattformen läuft Clessira?

Aktuell nur **macOS** (ab Version 26.0). Begleit-Apps für iPhone, iPad und Apple Watch sind in Entwicklung, aber noch nicht verfügbar.

### Wo sind meine Daten?

Standardmäßig lokal auf deinem Mac unter `~/Library/Application Support/Clessira/data.json`. Du kannst den Speicherort frei wählen oder optional iCloud-Sync aktivieren. Mehr dazu unter [Daten & Datenschutz](/reference/data-privacy/).

## Funktionen

### Kann ich vergangene Tage bearbeiten?

Ja. Im Stundenzettel-Fenster kannst du jeden Eintrag anpassen (Aktivität ändern, Start- oder Endzeit verschieben, löschen). Die Tagessumme wird automatisch neu berechnet.

### Was passiert, wenn ich den Mac schlafen lege?

Clessira erkennt, wenn der Mac in den Ruhezustand geht, und unterbricht den laufenden Eintrag. Beim Aufwachen erscheint der nächste Prompt — die Lücke bleibt als „nicht getrackt" sichtbar.

### Was, wenn ich den Prompt verpasse?

Der Prompt bleibt geöffnet, bis du ihn beantwortest. Du kannst die Startzeit des resultierenden Eintrags nachträglich anpassen, falls du z. B. erst zehn Minuten später bestätigst.

### Kann ich mehrere Aktivitäten gleichzeitig tracken?

Nein. Clessira ist bewusst **mono-tasking**: nur eine Aktivität läuft gleichzeitig. Das spiegelt wider, dass auch deine Aufmerksamkeit gleichzeitig nur eine Sache fokussieren kann.

### Gibt es Pomodoro-Modus / Pausen-Erinnerung / Reports?

Nein, nicht eingebaut. Clessira macht eine Sache: aufzeichnen, was du tust. Pomodoro-Apps, Break-Reminder und Report-Tools gibt es bereits gute, und sie kombinieren sich gut mit Clessira.

## Daten & Sync

### Kann ich zwischen mehreren Macs synchronisieren?

Ja, optional über **iCloud Drive**: **Einstellungen → Speicher & Backups → „Mit iCloud synchronisieren"**. Die Synchronisation läuft ausschließlich über deinen privaten iCloud-Container, ohne Clessira-Server. Details unter [Daten & Datenschutz](/reference/data-privacy/).

Alternativ kannst du unter **„Eigener Ordner wählen"** einen Pfad in Dropbox, OneDrive o. Ä. angeben. **Achtung:** Solche Anbieter synchronisieren immer die ganze Datei — schreiben zwei Geräte gleichzeitig, kann das zu Konflikten oder verlorenen Änderungen führen. iCloud-Sync ist robuster und führt Änderungen Eintrag für Eintrag zusammen, statt die Datei zu ersetzen.

### Kann ich meine Daten exportieren / migrieren?

Ja. Über **Einstellungen → Daten → „Daten exportieren"** bekommst du die komplette JSON-Datei. Für tabellen-orientiertes Exportieren siehe [CSV-Export](/features/csv-export/).

## Technisches

### Clessira reagiert nicht / das Popover öffnet sich nicht.

Versuche zuerst, die App über das Kontextmenü zu beenden und neu zu starten. Wenn das Problem bleibt:

1. Öffne **Einstellungen → Debug → Logs**.
2. Suche nach Einträgen rund um den Zeitpunkt des Problems.
3. Schicke uns das Log bei [Support / Feedback](https://clessira.app).

### Wie blende ich Text und Zeit neben dem Symbol wieder aus?

**Einstellungen → Allgemein → Menüleisten-Anzeige** auf **„Nur Icon"** stellen.

### Funktioniert Clessira mit mehreren Spaces / Displays?

Ja. Das Menüleisten-Symbol ist Teil der macOS-Menüleiste und damit auf allen Spaces sichtbar. Das Popover öffnet sich immer auf dem aktiven Display.
