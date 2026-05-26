---
title: AppleScript
description: Drive NowDoing from AppleScript — from scripts, Shortcuts, Alfred, Raycast or directly via osascript.
---

NowDoing ships with its own **AppleScript interface**. Any source that speaks macOS Automation can trigger tracking actions: Apple Shortcuts, Alfred, Raycast, Keyboard Maestro, custom `.scpt` files, or `osascript` from the terminal.

The interface is also what the bundled [`nowdoing` CLI](/en/integrations/cli/) calls internally.

## Requirements

- The Mac app is running (menu-bar icon visible).
- A valid license is installed — without one, every command rejects with error `4` (`NowDoing is locked`).
- On the first call, macOS asks whether the calling program may control NowDoing. Confirm with **OK**. Change it later under **System Settings → Privacy & Security → Automation**.

## Open the dictionary

To see the full scripting dictionary, open it in **Script Editor**:

1. Launch Script Editor (`/System/Applications/Utilities/Script Editor.app`).
2. **File → Open Dictionary…** → **NowDoing**.

You'll see every verb, property and class with descriptions.

## Verbs

### `start tracking`

Starts tracking for an activity.

```applescript
tell application "NowDoing"
  start tracking "Refactor"
end tell
```

With `createIfMissing`, NowDoing creates the activity if it doesn't exist yet:

```applescript
tell application "NowDoing"
  start tracking "PROJ-123 Review" createIfMissing true
end tell
```

Return value: `true` on success. Name matching is against **active** (non-archived) activities only.

### `stop tracking`

Ends the running session.

```applescript
tell application "NowDoing" to stop tracking
```

If nothing is running, the call still succeeds.

### `log entry`

Logs a time block after the fact. The entry ends **now** and starts `duration` minutes earlier.

```applescript
tell application "NowDoing"
  log entry activity "Standup" duration 15
end tell
```

With an optional note and auto-create:

```applescript
tell application "NowDoing"
  log entry activity "Deep Work" duration 90 ¬
    note "API refactor" createIfMissing true
end tell
```

`duration` is an **integer minute count**. There is no hours shorthand — that lives in the [CLI](/en/integrations/cli/).

### `today hours`

Returns today's total tracked time as decimal hours:

```applescript
tell application "NowDoing" to today hours
-- → 3.75
```

### `tracking status`

Returns a compact status string in the format `isTracking|currentActivity|todayHours`:

```applescript
tell application "NowDoing" to tracking status
-- → "true|Refactor|3.75"
```

The `|` separator is deliberately simple so shell wrappers can split it without a JSON parser.

## Properties

The `application` class exposes four read-only properties:

| Property            | Type    | Meaning |
| ------------------- | ------- | ------- |
| `is tracking`       | boolean | Is a session running right now? |
| `current activity`  | text    | Name of the running activity (empty if nothing runs). |
| `today hours`       | real    | Hours tracked today. |
| `is on break`       | boolean | Break currently active? |

Example:

```applescript
tell application "NowDoing"
  if is tracking then
    return "Active: " & current activity & " (" & (today hours as text) & "h today)"
  else
    return "Idle"
  end if
end tell
```

## Classes

| Class        | Properties                                          |
| ------------ | --------------------------------------------------- |
| `activity`   | `id` (text), `name` (text), `archived` (boolean)    |
| `time entry` | `id`, `activity name`, `start date`, `end date`, `note` |

Both classes are registered as **readable elements** on `application` — useful when a script wants to inspect existing activities or entries. Write access is only available through the verbs above.

## Call from the shell

Every verb can be called directly via `osascript`:

```sh
osascript -e 'tell application "NowDoing" to start tracking "Refactor" createIfMissing true'
osascript -e 'tell application "NowDoing" to today hours'
```

If you do this often, the [`nowdoing` CLI](/en/integrations/cli/) is more convenient — it handles quoting and the duration shorthand for you.

## Apple Shortcuts

In Shortcuts, you can drive the verbs via the **Run AppleScript** action:

1. Create a new Shortcut.
2. Add the **Run AppleScript** action.
3. Paste a script, e.g.:

   ```applescript
   tell application "NowDoing"
     start tracking "Focus" createIfMissing true
   end tell
   ```

4. On the first run, macOS will ask for Automation permission.

This lets you hook hotkeys, Focus modes or NFC tags up to NowDoing actions.

## Error codes

When a verb fails, NowDoing sets a `script error number`:

| Code | Meaning |
| ---: | ------- |
| `1`  | Activity name missing. |
| `2`  | Mac app unreachable (`TrackingManager` not available). |
| `3`  | Activity not found (and `createIfMissing` was `false`). |
| `4`  | No valid license. |
| `5`  | Other internal error — the exact message is in the `script error string`. |

Script Editor surfaces the code with plain text; from `osascript` the message goes to `stderr` and the exit code is `1`.

## When **not** to use AppleScript

- **From your own apps or editor plugins:** use the [HTTP API](/en/integrations/http-api/). HMAC-signed, JSON, no osascript overhead, no per-app Automation permission.
- **From Node, Bun or Python:** use one of the [SDKs](/en/integrations/sdks/).
- **From the terminal as a human:** the [CLI](/en/integrations/cli/) is the convenient wrapper.

AppleScript is the right choice when the source already speaks AppleScript (Shortcuts, Alfred, Keyboard Maestro, Script Editor) or you want one hotkey without any tooling overhead.
