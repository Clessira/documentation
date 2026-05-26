---
title: Language & localization
description: How NowDoing picks up language, region, date and time format from your macOS settings.
---

NowDoing is **fully bilingual**: German (primary) and English. Every user-facing string is translated — menu bar, popover, settings, timesheet, widgets, the AppleScript dictionary, and the voice phrases.

## How the language is chosen

The UI language follows your **macOS system language** automatically. If your Mac is set to English, NowDoing runs in English; if it's set to German, NowDoing runs in German. There is **no** dedicated language switcher inside the app — by design, so that language and region always match the rest of your system.

## Switching the language

macOS offers a per-app language setting. To change NowDoing:

1. Open **System Settings → General → Language & Region → Applications**.
2. Select **NowDoing** and pick the language you want.
3. **Restart** NowDoing — the change takes effect at the next launch.

## Region: date, time, week start

Format details also come from **macOS System Settings** under *Language & Region* — separately for language (the UI) and region (formats).

| Element | Source | Example |
|---|---|---|
| Time format | Region / 24-hour toggle | `2:30 PM` (US) vs. `14:30` (DE) |
| Date format | Region | `5/26/2026` (US) vs. `26.05.2026` (DE) |
| Week start | Region | Sunday (US), Monday (DE/AT/CH) |
| Week numbers | Region | US weeks in US, ISO weeks in DE |
| Holidays | Region | see [Working hours](/en/features/working-hours/) |

[CSV exports](/en/features/csv-export/) also use the system locale, so Excel parses the values correctly.

## If something isn't translated

That's a bug — please report it to [hello@nowdoing.app](mailto:hello@nowdoing.app). A missing translation falls back to the English source string automatically, so the UI is never empty.

## Under the hood

All strings live in a single `Localizable.xcstrings` file (Apple's string catalogue format). Adding further languages is possible without code changes — currently only German and English ship with the app.

## Documentation language

This documentation is itself bilingual: use the language switcher at the top right of the sidebar. Related pages: [Settings](/en/reference/settings/) and [Accessibility](/en/reference/accessibility/).
