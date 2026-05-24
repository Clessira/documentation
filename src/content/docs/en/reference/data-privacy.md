---
title: Data & privacy
description: Where your data lives, what the app sends, and what it doesn't — the core promise page.
---

**By default, your data stays on your Mac.** That's not a marketing slogan, it's the foundation NowDoing is built on. Anything that changes this default is **opt-in** and listed individually on this page.

## Where it lives

NowDoing stores everything in a single JSON file. By default it lives in the app container:

```
~/Library/Application Support/NowDoing/data.json
```

You can relocate the file under **Settings → Data → "Choose custom folder"** — for example into a cloud-drive folder, an encrypted volume, or an external drive. The file itself stays the same, only its location changes. When you pick a new location, the existing file is copied there once; from then on the app reads and writes exclusively at the new path.

The file contains:

- Your activities (names, colors, archived status)
- All time entries (activity, start, end)
- Personal app settings

That's all. No hidden tracking store, no telemetry caches.

## iCloud sync (optional, off by default)

If you want it, NowDoing can sync your `data.json` between multiple Macs via your private **iCloud Drive**. You enable it under **Settings → Data → "Sync with iCloud"**.

While iCloud sync is on:

- The file lives in your Apple ID's iCloud ubiquity container instead of the local app container.
- There is **no NowDoing server**. Sync runs exclusively over Apple's iCloud infrastructure — data does not pass through us.
- Editing on two Macs at the same time can produce iCloud conflicts. NowDoing writes atomically but has no control over Apple's sync ordering.
- iCloud sync and "custom folder" are mutually exclusive: while iCloud is active, the chosen folder is not used.

## What NowDoing does **not** do

- ❌ No NowDoing account, no sign-in.
- ❌ No first-party servers, no backend.
- ❌ No first-party analytics, no first-party crash reporting to a third-party service.
- ❌ No access to screen content, keystrokes, or other apps.
- ❌ No outbound network calls — the app contains **no calls to any external server**. The only exceptions are the optional mechanisms described above (iCloud sync, loopback listener) and Apple's TestFlight on beta builds.

## Loopback listener (optional)

If you enable the **VS Code integration**, the app opens a small HTTP listener on `127.0.0.1`. It binds **exclusively to the loopback interface** — not reachable from the network.

Messages to this listener are HMAC-signed, so only clients with the shared secret are accepted.

More under [VS Code integration](/en/integrations/vscode/).

## TestFlight beta builds

If you install NowDoing as a **beta through Apple's TestFlight**, Apple's standard TestFlight terms apply: Apple can forward crash reports and basic usage metrics to us as developers. That's Apple infrastructure, not a NowDoing-owned telemetry system — and only relevant while you're running a TestFlight build. The regular Mac App Store version sends nothing.

## Backups

Since all data lives in one file, backups are trivial:

- **Time Machine** captures the file as part of your usual system backup.
- **Manual export** via **Settings → Data → "Export data"**.

Restoring an export replaces existing data — the app prompts before writing.

## Sandboxing & hardened runtime

NowDoing runs with **App Sandbox** and **Hardened Runtime** enabled. That means:

- The app has **no access** to files outside its own container — except the custom-folder path you explicitly chose, which is granted via a security-scoped bookmark.
- No access to other apps, screen contents, or keyboard events.
- Code injection and library loading are blocked at the system level.

The only permissions ever requested are **notifications** (for the reminder toast) and optionally **login items** (for "launch at login").

## Failure modes

If a write fails (e.g. disk full), a red banner appears in **Settings → Data** with the error detail. NowDoing uses **atomic writes**: either the whole file is replaced, or nothing changes — a half-written, broken file cannot occur.
