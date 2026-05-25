# Changelog

Per-session log of substantive doc changes. Newest on top.

## 2026-05-25 — vscode-uds-rewrite

- Rewrote `integrations/vscode` (DE + EN) to match the shipped extension: setup steps, status-bar readout (connection / current activity / elapsed time), toggle commands, and current settings (`showCurrentActivity`, `showElapsedTime`, `currentPollSeconds`).
- Dropped references to the obsolete `nowdoing.port` setting and the `Set Token` command.
- Privacy paragraph now mentions the Unix-domain-socket transport instead of a TCP port.

## 2026-05-24 — first-run-rewrite

- Rewrote `getting-started/first-run` (DE + EN) as `.mdx` to match the shipped eight-step welcome wizard: Welcome, Interval (default 45 min), Display & break, Workdays + holidays, Integrations (Spotlight + VS Code), Privacy + storage location, Import, Finish + autostart. Replaced the older five-section how-to that no longer matched the real onboarding flow.
- Added inline screenshots for every step, embedded via `astro:assets` `Image`.
- Normalized `src/assets/welcome-screen/` filenames to `welcome-step{1..8}-{slug}.png` (verified step numbers by counting active dots in the wizard footer; the user-supplied names were partly off-by-one).
- New pages (DE + EN) for every feature surfaced in the wizard:
  - `features/prompt-display` — popover vs centered, menu-bar mode, default day view, sound, global shortcut.
  - `features/working-hours` — active weekdays, weekly target (0–80 h), holiday mode with country picker.
  - `features/breaks` — manual pause, default duration (5–120 min in 5-min steps), behavior in the Timesheet.
  - `features/recurring` — work-in-progress page; documents intent + UI location, fuller walkthrough deferred until the feature stabilizes.
  - `features/import` — Jira / CSV / Markdown / plain-text formats, dedup behavior, what is *not* imported (times, Jira API, attachments).
  - `integrations/spotlight` — what gets indexed, where the index lives, enable/disable, privacy.
- Updated `features/tracking-interval` (DE + EN): default 20 min → **45 min**, expanded interval table, example uses 45-min cadence.
- Sidebar in `astro.config.mjs` extended with all six new pages under Funktionen / Integrationen.
- Added cross-links from `first-run.mdx` (DE + EN) into the new feature pages.

## 2026-05-24 — data-privacy-and-faq-refresh

- `reference/data-privacy` (DE + EN): documented two opt-in mechanisms previously omitted — custom storage location ("Eigener Ordner wählen") and iCloud sync ("Mit iCloud synchronisieren"). Added a TestFlight section clarifying that beta builds inherit Apple's crash/usage reporting (App Store build sends nothing). Refined the "what NowDoing does not do" list so opt-ins are honestly disclosed (iCloud, loopback listener, TestFlight). Sandbox section now notes the security-scoped bookmark for custom folders.
- `reference/faq` (DE + EN): updated "Was kostet NowDoing?" to point to nowdoing.app instead of mentioning subscriptions; softened the platform answer (iPad/iPhone/Watch are conceivable but not on the roadmap); rewrote the sync FAQ — iCloud sync is now built in, custom folder is the alternative for Dropbox/OneDrive setups.

## 2026-05-24 — vscode-integration-refresh

- Rewrote `integrations/vscode` (DE + EN) to match the shipped extension: corrected default port to `39847`, real settings path **Einstellungen → Integrationen → VSCode**, actual Command Palette commands (`Set Token`, `Test Connection`, `Reconnect`, `Start Activity`, `Show Output Log`, `Open Settings`), real config keys (`nowdoing.enabled`, `nowdoing.port`, `nowdoing.debounceMs`), HMAC/timestamp/nonce details, token storage in Keychain + SecretStorage.
- Removed invented options that don't exist in the extension (`nowdoing.sharedSecret`, `nowdoing.branchAsActivity`) and the inaccurate "branch appended as note" behavior — branch switches open the tracking prompt with the branch prefilled.
- Added a dedicated "Schlüsselbund-Zugriff" / "Keychain access" section explaining the two-step prompt on first enable (NowDoing info dialog → macOS Keychain prompt → "Always Allow") and the "Schlüsselbund-Fehler" status if denied.
