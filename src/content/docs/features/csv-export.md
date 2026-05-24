---
title: CSV-Export
description: Tag oder Woche als CSV exportieren — Excel-kompatibel, mit UTF-8-BOM und Semikolon.
---

NowDoing kann deinen Tag oder deine Woche als **CSV** exportieren — z. B. um Stunden in eine Rechnung zu übernehmen oder einen Wochenreport zu erstellen.

## Export starten

1. Öffne den **Stundenzettel** (Rechtsklick auf das Menüleisten-Symbol → **„Stundenzettel"**).
2. Wähle die gewünschte Periode (Tag oder Woche).
3. Klicke auf **„CSV exportieren"**.
4. Wähle Speicherort und Dateinamen.

## Format

Die exportierte Datei ist **Excel- und Numbers-kompatibel** unter macOS-Standardspracheinstellungen:

- **Trennzeichen:** Semikolon (`;`) — deutsches CSV-Format
- **Encoding:** UTF-8 mit BOM, damit Umlaute und Emojis korrekt dargestellt werden
- **Escaping:** RFC-4180-konform, d. h. Felder mit Sonderzeichen werden in Anführungszeichen gesetzt
- **Zeilenende:** `\n`

### Spalten

| Spalte | Bedeutung |
|---|---|
| Datum | `YYYY-MM-DD` |
| Start | `HH:MM` |
| Ende | `HH:MM` |
| Dauer | Stunden:Minuten, z. B. `1:25` |
| Aktivität | Name inkl. Emoji |

### Beispiel

```csv
Datum;Start;Ende;Dauer;Aktivität
2026-05-24;09:00;10:20;1:20;🛠️ Coding
2026-05-24;10:20;10:45;0:25;📞 Calls
2026-05-24;10:45;11:00;0:15;☕ Pause
```

## Import in Excel oder Numbers

- **Numbers** (macOS): Doppelklick auf die Datei genügt — Umlaute werden dank BOM korrekt erkannt.
- **Excel**: Über **Datei → Importieren → CSV** und Trennzeichen `;` wählen. Encoding sollte automatisch UTF-8 erkennen.
- **Google Sheets**: Beim Import in den Optionen den Separator auf **Semikolon** umstellen.
