---
title: Backups & restore
description: Versioned JSON snapshots, optional iCloud sync, and a custom storage location — all local, with no external cloud provider.
---

Clessira protects your data with **versioned backups**, optional **iCloud sync**, and a **custom storage location**. Everything stays local on your Mac — the only non-local route is Apple's own iCloud infrastructure, and only if you turn it on. See [Data & privacy](/en/reference/data-privacy/) for the underlying principles.

## Rolling snapshots

Before every write to `data.json`, Clessira automatically places a versioned JSON copy into a `backups/` folder next to the data file. A half-written file never reaches disk, and an accidental change stays recoverable. The snapshot format is identical to `data.json` and is documented as a JSON Schema in [Specifications](/en/integrations/specs/).

An **automatic cleanup** thins out the folder using a rolling strategy: many recent snapshots are kept, older ones are kept at larger intervals, very old ones are dropped. The backup folder will not grow indefinitely.

## Manage & restore

Everything lives under **Settings → Storage & Backups**:

- A list of all snapshots with timestamp and size.
- Per-snapshot actions: **Restore**, **Show in Finder**, **Delete**.

Clicking **Restore** opens a confirmation dialog. Once confirmed, Clessira replaces the active `data.json` with the chosen snapshot and reloads. **Before** doing so, it saves the state that is about to be replaced as a fresh backup — so a restore can itself be undone.

## Storage location

Pick the storage location under **Settings → Storage & Backups → Location** or already in the [welcome assistant](/en/getting-started/first-run/). When you switch, Clessira copies the current `data.json` once into the new folder — if one already exists there, it stays untouched. The file at the old path is **not** deleted.

| Option | Description | Data flow |
|---|---|---|
| **App container** (default) | `~/Library/Application Support/Clessira/` | Local only |
| **Custom folder** | e.g. a Dropbox folder, external drive, encrypted volume | Local — any sync depends on the folder provider |
| **iCloud sync** | iCloud container of your Apple account | Apple iCloud Drive |

## iCloud sync

Toggle it under **Settings → Storage & Backups → "Sync with iCloud"**. When enabled, Clessira migrates the local file once into the iCloud container; when disabled, it migrates back — no data loss either way. **iCloud Drive** must be enabled in System Settings. Snapshots in the `backups/` folder also land in the iCloud container.

If another Mac writes to the same file, Clessira detects the external change and **merges it entry by entry into your local state** (most recent edit wins, deletions stay deleted) — local changes that hadn't synced yet aren't lost.

**iCloud + custom folder at the same time?** As long as iCloud sync is on, iCloud takes precedence; the custom folder sits idle. This prevents conflicts from two sources.

## Manual export

For a portable copy of the full history as a spreadsheet, use **Settings → Data → "Export"** — German CSV format with `;` as separator, UTF-8 BOM, RFC-4180-compliant. Details under [CSV export](/en/features/csv-export/). For custom formats (yearly report, JSON, Markdown …) see [Export scripts](/en/features/export-scripts/).
