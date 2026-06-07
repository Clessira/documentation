---
title: Export-Skripte
description: JavaScript-Editor mit Sandbox für eigene Exportformate — CSV-Varianten, JSON, Markdown-Reports, Abrechnungs-Payloads.
---

Wenn der eingebaute [CSV-Export](/features/csv-export/) nicht reicht, kannst du in Clessira **eigene Export-Skripte in JavaScript** schreiben. Damit lassen sich beliebige Formate erzeugen: CSV-Varianten, JSON, JSON Lines, Markdown-Tagesnotizen, HTML-Reports oder Abrechnungs-Payloads für dein Buchhaltungssystem.

## Editor öffnen

**Einstellungen → Export-Skripte → „Editor öffnen…"** startet einen vollständigen Editor in einem eigenen Fenster.

Der Editor basiert auf **CodeMirror 6** in einer WKWebView und bringt mit:

- Syntax-Highlighting für JavaScript
- Zeilennummern und Klammern-Matching
- Suche mit <kbd>⌘F</kbd>
- Light/Dark-Theme passend zum System
- Shortcuts: <kbd>⌘↩</kbd> **Run**, <kbd>⌘S</kbd> **Save**

Die Ausgabe erscheint in einem Text-Pane unterhalb des Editors. <kbd>⌘C</kbd> kopiert sie, **„Speichern als…"** schreibt sie in eine Datei.

## Sandbox

Skripte laufen in einem `JSContext` komplett offline:

- **kein** DOM
- **kein** `fetch`
- **kein** Datei-I/O
- **Soft-Timeout 5 Sekunden** Wall-Clock — Runaway-Skripte werden abgebrochen

## Helper-Funktionen

Vorinjiziert in jeden Lauf:

| Helper | Zweck |
|---|---|
| `csvRow(values)` | Escapt RFC-4180-konform und gibt eine CSV-Zeile zurück |
| `groupBy(items, key)` | Gruppiert Arrays nach Schlüssel |
| `formatDate(date, format)` | Formatiert ein Datum |
| `console.log(...)` | Schreibt ins Output-Pane |

## Datenmodell

Das vollständige Save-File-Modell wird an dein Skript übergeben — alle Einträge, Aktivitäten, Gruppen, wiederkehrende Vorlagen, Export-Skripte und Metadata wie Notizen, [Verrechnungsnummern](/features/activities/) und Farben. Die formale Beschreibung steht im JSON-Schema unter [Spezifikationen](/integrations/specs/).

## Vorlagen

Beim Anlegen eines neuen Skripts kannst du eine Vorlage als Startpunkt wählen:

| Vorlage | Zweck |
|---|---|
| CSV (Standard) | Wie der eingebaute CSV-Export, als Startpunkt zum Anpassen |
| Markdown Daily-Note | Tageszusammenfassung als Markdown für Obsidian, Bear oder Notion |
| Markdown Wochenrückblick | Wochenreport mit Aktivitätsgruppierung |
| JSON Lines (NDJSON) | Eine Zeile pro Eintrag, ideal für Pipelines |

## Beispiel: Markdown-Daily-Note

```javascript
const today = entries.filter(e => e.date === input.date);
const lines = today.map(e =>
  `- ${formatDate(e.start, "HH:mm")}–${formatDate(e.end, "HH:mm")} **${e.activity}** ${e.note ?? ""}`
);
return `# ${input.date}\n\n${lines.join("\n")}`;
```

`input.date` kommt aus dem Eingabefeld über dem Editor, `entries` ist das vorgeladene Daten-Array.

## Datenschutz

Export-Skripte laufen ausschließlich **lokal** in der App. Die Sandbox erlaubt keinen Netzwerkzugriff und kein Datei-I/O — der einzige Weg, Output zu persistieren, ist der manuelle **„Speichern als…"**-Dialog. Deine Daten verlassen den Mac nicht.
