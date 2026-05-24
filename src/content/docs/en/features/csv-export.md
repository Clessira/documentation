---
title: CSV export
description: Export a day or a week as CSV — Excel-compatible, UTF-8 BOM, semicolon-separated.
---

NowDoing can export your day or your week as **CSV** — for example, to pull hours into an invoice or build a weekly report.

## Start the export

1. Open the **Timesheet** (right-click the menu bar icon → **"Timesheet"**).
2. Pick the period (day or week).
3. Click **"Export CSV"**.
4. Choose destination and filename.

## Format

The exported file is **Excel- and Numbers-compatible** under standard macOS locale settings:

- **Separator:** semicolon (`;`) — German CSV convention
- **Encoding:** UTF-8 with BOM, so umlauts and emojis render correctly
- **Escaping:** RFC-4180-compliant, fields with special characters wrapped in double quotes
- **Line ending:** `\n`

### Columns

| Column | Meaning |
|---|---|
| Datum / Date | `YYYY-MM-DD` |
| Start | `HH:MM` |
| Ende / End | `HH:MM` |
| Dauer / Duration | Hours:minutes, e.g. `1:25` |
| Aktivität / Activity | Name including emoji |

### Example

```csv
Datum;Start;Ende;Dauer;Aktivität
2026-05-24;09:00;10:20;1:20;🛠️ Coding
2026-05-24;10:20;10:45;0:25;📞 Calls
2026-05-24;10:45;11:00;0:15;☕ Break
```

## Importing into Excel or Numbers

- **Numbers** (macOS): double-click the file — umlauts are detected correctly thanks to the BOM.
- **Excel**: **File → Import → CSV** and set the separator to `;`. Encoding should auto-detect as UTF-8.
- **Google Sheets**: in the import dialog, set separator to **semicolon**.
