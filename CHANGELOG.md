# Changelog

Per-session log of substantive doc changes. Newest on top.

## 2026-05-24 — vscode-integration-refresh

- Rewrote `integrations/vscode` (DE + EN) to match the shipped extension: corrected default port to `39847`, real settings path **Einstellungen → Integrationen → VSCode**, actual Command Palette commands (`Set Token`, `Test Connection`, `Reconnect`, `Start Activity`, `Show Output Log`, `Open Settings`), real config keys (`nowdoing.enabled`, `nowdoing.port`, `nowdoing.debounceMs`), HMAC/timestamp/nonce details, token storage in Keychain + SecretStorage.
- Removed invented options that don't exist in the extension (`nowdoing.sharedSecret`, `nowdoing.branchAsActivity`) and the inaccurate "branch appended as note" behavior — branch switches open the tracking prompt with the branch prefilled.
- Added a dedicated "Schlüsselbund-Zugriff" / "Keychain access" section explaining the two-step prompt on first enable (NowDoing info dialog → macOS Keychain prompt → "Always Allow") and the "Schlüsselbund-Fehler" status if denied.
