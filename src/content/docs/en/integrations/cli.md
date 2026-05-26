---
title: CLI
description: Drive NowDoing from the terminal — start and stop tracking, log entries, query today's totals.
---

NowDoing ships with a small terminal helper called **`nowdoing`**. Use it to start and stop tracking, log time after the fact, or query the current state — without bringing the app to the foreground.

Under the hood, the CLI talks to the running Mac app via the [AppleScript interface](/en/integrations/applescript/). The app needs to be running (menu-bar icon visible).

## Install

In the Mac app: **Settings → Integrations → CLI → Install in PATH**. NowDoing drops the command into `~/.local/bin/nowdoing` and shows in the status pane whether `~/.local/bin` is already on your `PATH`. If not, the app hands you the matching `export` snippet for your shell — add it to `~/.zshrc` (or `~/.bashrc`).

**Uninstall** via the same pane using **Deinstallieren** (Uninstall).

After an app update, run **Install in PATH** again to bring the CLI back in sync with the app.

## Commands

```text
nowdoing start <activity> [--create-if-missing]
nowdoing stop
nowdoing log <activity> --duration <minutes|Xm|Xh|XhYm> [--note <text>] [--create-if-missing]
nowdoing today
nowdoing status
nowdoing help
```

### `start`

Starts tracking for an existing activity:

```sh
nowdoing start "Refactor"
```

With `--create-if-missing`, NowDoing creates the activity if it doesn't exist:

```sh
nowdoing start "PROJ-123 Review" --create-if-missing
```

The name must match an **active** activity exactly — archived ones are ignored.

### `stop`

Stops the running session:

```sh
nowdoing stop
```

If nothing is running, the call still succeeds (no-op).

### `log`

Logs a time block **after the fact**. The duration can be expressed as minutes or in shorthand:

```sh
nowdoing log "Standup" --duration 15
nowdoing log "Deep Work" --duration 1h30m --note "API refactor"
nowdoing log "Pairing" --duration 2h --create-if-missing
```

Accepted duration formats: `30` (minutes), `45m`, `2h`, `1h30m`. The entry ends **now** and starts that far in the past.

### `today`

Prints the total time tracked today, in hours:

```sh
$ nowdoing today
3.75
```

The output is a decimal number — handy for shell pipelines.

### `status`

Prints a compact status block:

```sh
$ nowdoing status
isTracking=true
currentActivity=Refactor
todayHours=3.75
```

Three `key=value` lines, ready for `grep` or `awk`.

## Examples

**Log a lunch break after the fact:**

```sh
nowdoing log "Mittag" --duration 45m --create-if-missing
```

**Show the active activity in your shell prompt:**

```sh
nowdoing status | awk -F= '/currentActivity/ {print $2}'
```

**Start tracking from a terminal multiplexer keybinding:**

```sh
nowdoing start "Tickets" --create-if-missing && tmux display-message "tracking started"
```

## Errors & exit codes

`nowdoing` exits with `0` on success and `1` on errors. Common causes:

- **`Activity '…' not found`** — activity is missing or archived. Use `--create-if-missing`.
- **`TrackingManager not available`** — the Mac app isn't running. Launch it and retry.
- **`NowDoing is locked: no valid license installed`** — missing or expired license. Check **Settings → License**.
- **AppleScript permission** — on the first call, macOS asks whether your terminal may control NowDoing. Confirm with **OK**. If you accidentally denied it, re-enable under **System Settings → Privacy & Security → Automation**.

## What the CLI does **not** do

- Rename, archive or delete activities — only the app can do that.
- **Edit** or **delete** entries — `log` only appends new ones.
- Open the tracking prompt programmatically — use the [HTTP API](/en/integrations/http-api/) (`POST /branch-changed`) for that.

For more control (e.g. searching activities, branch-change hooks), use the [HTTP API](/en/integrations/http-api/) or one of the [SDKs](/en/integrations/sdks/).
