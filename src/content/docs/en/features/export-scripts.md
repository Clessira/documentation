---
title: Export scripts
description: Sandboxed JavaScript editor for custom export formats — CSV variants, JSON, Markdown reports, billing payloads.
---

When the built-in [CSV export](/en/features/csv-export/) isn't enough, NowDoing lets you write **your own export scripts in JavaScript**. Use it for any output format: CSV variants, JSON, JSON Lines, Markdown daily notes, HTML reports or billing payloads for your accounting system.

## Opening the editor

**Settings → Export scripts → "Open editor…"** launches a full editor in its own window.

The editor is built on **CodeMirror 6** running in a WKWebView and ships with:

- JavaScript syntax highlighting
- Line numbers and bracket matching
- Search via <kbd>⌘F</kbd>
- Light/dark theme that follows the system
- Shortcuts: <kbd>⌘↩</kbd> **Run**, <kbd>⌘S</kbd> **Save**

Output appears in a text pane below the editor. <kbd>⌘C</kbd> copies it; **"Save as…"** writes it to a file.

## Sandbox

Scripts run in a `JSContext` and are fully offline:

- **no** DOM
- **no** `fetch`
- **no** file I/O
- **5-second soft timeout** on wall-clock time — runaway scripts are aborted

## Helper functions

Pre-injected into every run:

| Helper | Purpose |
|---|---|
| `csvRow(values)` | Escapes per RFC 4180 and returns a CSV row |
| `groupBy(items, key)` | Groups arrays by key |
| `formatDate(date, format)` | Formats a date |
| `console.log(...)` | Writes to the output pane |

## Data model

The complete save-file model is passed into your script — all entries, activities, groups, recurring templates, export scripts and metadata such as notes, [billing numbers](/en/features/activities/) and colors. The formal description lives in the JSON schema under [Specifications](/en/integrations/specs/).

## Templates

When you create a new script, you can scaffold from one of these templates:

| Template | Purpose |
|---|---|
| CSV (default) | Mirrors the built-in CSV export — a starting point to customize |
| Markdown daily note | Day summary as Markdown for Obsidian, Bear or Notion |
| Markdown weekly review | Weekly report grouped by activity |
| JSON Lines (NDJSON) | One line per entry, ideal for pipelines |

## Example: Markdown daily note

```javascript
const today = entries.filter(e => e.date === input.date);
const lines = today.map(e =>
  `- ${formatDate(e.start, "HH:mm")}–${formatDate(e.end, "HH:mm")} **${e.activity}** ${e.note ?? ""}`
);
return `# ${input.date}\n\n${lines.join("\n")}`;
```

`input.date` comes from the input field above the editor; `entries` is the pre-loaded data array.

## Privacy

Export scripts run **locally** inside the app. The sandbox allows no network access and no file I/O — the only way to persist output is the manual **"Save as…"** dialog. Your data never leaves the Mac.
