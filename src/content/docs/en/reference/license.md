---
title: License
description: How Clessira verifies a license, how you enter one through the activation window, and how to manage it in the settings tab.
---

Clessira is unlocked with a signed license key. Verification runs entirely on your Mac — the key is checked against a public key embedded in the app, no request goes out to a server.

## Activate your license

On first launch (or whenever no valid license is on file) Clessira shows a compact activation window with a medallion, a key field and a drop zone. While that window is open, the menu bar icon, the global shortcut, the right-click menu and all external integrations are disabled.

To activate:

1. Get hold of your license key — as text or as a `.txt` file from the confirmation email.
2. Paste the key into the field **or** drop the file onto the field directly.
3. Click **"Activate"** (or press <kbd>Enter</kbd>). On success the window closes and the menu bar icon appears.

If verification fails, the reason shows right below the field — bad format, invalid signature, expired, or not valid for this app version.

## License tab in settings

An active license is managed under **Settings → License**. The card shows the medallion and a row of badges at the top, with the license details below.

### Badges

| Badge | Meaning |
|---|---|
| **Active** | License is valid and signature-checked. |
| **Lifetime** | License has no expiry date. |
| **`N` days** | Days until expiry. Blue from 31 days onwards, orange below — a hint that a renewal is due. |
| **v`X`** | License is only valid up to a given app major version (e.g. `v1`). Missing means it covers every version. |

### Details

- **Licensee** and **Email** — the name on the license.
- **Issued** and (if set) **Valid until**.
- **Max app version** — version ceiling, if the license carries one.
- **License ID** — the UUID you'd quote to support.

### Actions

- **Edit license** opens a second input field on the same card — handy for pasting a fresh key after a renewal.
- **Remove license** clears the stored key and takes you back to the activation window. Data stays untouched; tracked time and activities don't get lost.

## What's inside the license

The key is a short string of the form `<payload>.<signature>`. The `payload` is Base64URL-encoded JSON with:

| Field | Meaning |
|---|---|
| `id` | UUID — stable license ID. |
| `name` | Licensee (display). |
| `email` | Licensee email. |
| `issued` | Issue date (ISO 8601). |
| `expires` | Expiry date (ISO 8601). When missing, the license is lifetime. |
| `maxVersion` | Version ceiling (`"1"` covers all 1.x versions). Optional. |

The signature is Ed25519, verification runs through macOS's `CryptoKit` APIs.

## When a license stops being valid

Three reasons:

- **Expiry.** When `expires` is in the past, the license expires. Clessira re-checks hourly and on every gated access — so it also catches a license that expires mid-session or a clock that was manually rolled back.
- **Version cap exceeded.** If the license carries `maxVersion`, it only applies to that major line. Updating the app to a higher major locks it again until you enter a new license.
- **Bad signature.** The license was modified, corrupted or forged. Those keys land directly in the "License invalid" card with the reason as a subtitle.

In all three cases the app behaves as if no license was installed: the activation window comes up, and the menu bar icon's right-click menu only shows **"Enter license…"** alongside About and Quit.

## What's blocked while locked

While no valid license is active, these paths are off-limits:

- Left-click on the menu bar icon (goes straight to the activation window).
- The global prompt hotkey and the ⌃⌥⌘1–9 pinned quick-picks.
- Right-click menu except "Enter license…", "About Clessira" and "Quit".
- VS Code branch switches via the [HTTP API](/en/integrations/http-api/) (answer `401`).
- Commands from Shortcuts and AppleScript (`licenseLocked` error).
- macOS Services menu.

Data and settings stay untouched throughout. As soon as a valid license is on file, every path opens up again.

## Where the key is stored

The entered key lives in the app's UserDefaults (`~/Library/Containers/app.clessira/Data/Library/Preferences/`). It's re-verified at every launch and once an hour in the background. The app never sends the key over the network — verification is a pure offline operation.
