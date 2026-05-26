---
title: App Intents & Services
description: NowDoing in Shortcuts, Spotlight, Siri, and the macOS Services menu.
---

NowDoing ships **seven App Intents** and **three macOS Services**. Together they let you drive tracking from the Shortcuts app, from Spotlight, via Siri, and right inside the context menu of any app — without bringing NowDoing to the foreground.

If you prefer scripts, look at [AppleScript](/en/integrations/applescript/) or the [CLI](/en/integrations/cli/). The HTTP API for external tools is documented under [HTTP API](/en/integrations/http-api/).

## App Intents

The following actions show up in the **Shortcuts app**, in **Spotlight**, and in any Shortcuts automation:

| Intent | Parameters | Effect |
|---|---|---|
| **Start Tracking** | Activity | Starts tracking the given activity |
| **Stop Tracking** | – | Stops the current tracking session |
| **Toggle Pause** | – | Pauses / resumes the running entry |
| **Log Entry** | Activity, duration, note (optional) | Adds a back-dated entry |
| **Open Timesheet** | – | Brings the timesheet window to front |
| **Open Settings** | – | Brings the settings window to front |
| **Today's Hours** | – | Returns the day's tracked hours as a number |

Compose them freely — e.g. "when I arrive at the office: **Start Tracking → Coding**" via a Shortcuts automation, or a Stream Deck button that fires **Toggle Pause**.

### Voice phrases (App Shortcuts)

For common actions, German and English phrases are pre-defined:

| Phrase | Action |
|---|---|
| "Start tracking in NowDoing" | Opens activity picker |
| "Pause NowDoing" | Toggle pause |
| "Stop tracking in NowDoing" | Stop tracking |
| "How many hours today in NowDoing" | Reads today's hours |
| „Starte Tracking in NowDoing" | Activity picker (DE) |
| „Pause NowDoing" / „Stoppe Tracking in NowDoing" | Toggle / stop (DE) |
| „Wie viele Stunden heute in NowDoing" | Today's hours (DE) |

These phrases work with Siri (when enabled) and in global Spotlight input. Rename or extend them under **Shortcuts app → App Shortcuts → NowDoing**.

### Check availability

If the intents do not appear, open the **Shortcuts app**, select **App Shortcuts** in the sidebar and scroll to **NowDoing**. macOS sometimes indexes new apps with a delay — a restart resolves it.

## macOS Services

The context menu of any standard app (Mail, Notes, TextEdit, Safari, …) shows three NowDoing entries under **Services** whenever text is selected:

### "Log as note in NowDoing"

Appends the selected text as a **note** to the most recent entry of your current activity. If no entry exists yet but tracking is running, a small entry with the note is created.

Handy for: ticket descriptions from the browser, Slack quotes, meeting notes.

### "Create as new activity"

Turns the selected text into a **new activity**. NowDoing first checks case-insensitively whether it already exists and reports back via system notification if so.

### "Start tracking"

Looks up an activity with exactly the selected name (case-insensitive) and starts tracking it. If nothing matches, a notification surfaces the problem.

Good for: starting tracking on ticket numbers or task names directly from email, Jira, or your calendar.

### Assign keyboard shortcuts

Via **System Settings → Keyboard → Keyboard Shortcuts → Services** you can bind each service to a custom keystroke.

## Sandbox & permissions

Both App Intents and Services run entirely inside the **macOS App Sandbox**. **No** additional permissions (Full Disk Access, Accessibility) are required — actions go through the regular macOS interfaces.
