---
title: HTTP API
description: Local HTTP listener on 127.0.0.1 that lets your own tools drive Clessira.
---

Clessira can optionally run a small **HTTP server on `127.0.0.1`** so your own scripts, editor plugins, or CLIs can talk to it — read the currently tracked activity, start a new one, or report a branch switch. The listener is off by default.

## How to enable it

1. In the Mac app, open **Einstellungen → Integrationen → HTTP-API** (Settings → Integrations → HTTP API).
2. Turn on **HTTP-API einschalten** (Enable HTTP API). On first enable, Clessira creates a token in the Keychain — confirm the macOS prompt with **Always Allow**.
3. Pick a different **Port** if you need to (default `39847`, allowed range `1024–65535`).
4. Copy the secret value under **Token** into your environment or tool.

The status area shows `Aktiv auf 127.0.0.1:<port>` (Active on …) once the listener is running. Toggle the switch off to close the port again.

## Endpoints

The server exposes eight endpoints. Every request must be signed (see below); for your own tools, the easiest path is one of the [SDKs](/en/integrations/sdks/), which handle the signing for you.

| Method + path              | Purpose |
| -------------------------- | ------- |
| `GET /healthcheck`         | Check the connection without triggering anything. |
| `GET /current`             | Read the current activity (or `null` when nothing is running). |
| `GET /status`              | Compact status block: tracking flag, break flag, current activity, seconds tracked today. |
| `GET /activities/search`   | Search activities by name. |
| `POST /activities/start`   | Start an activity (optionally creating it). |
| `POST /activities/stop`    | End the running session. Idempotent — no error if nothing is running. |
| `POST /entries`            | Log a time block after the fact (duration in minutes, optional note). |
| `POST /branch-changed`     | Report a branch switch — opens the tracking prompt with the branch prefilled. |

### `GET /status`

Response:

```json
{
  "ok": true,
  "result": {
    "isTracking": true,
    "isOnBreak": false,
    "currentActivity": { "activityID": "…", "activityName": "Refactor" },
    "todaySeconds": 13500
  }
}
```

`currentActivity` is `null` when nothing is running. `todaySeconds` is the total time tracked today in seconds — formatting is left to the client.

### `POST /entries`

Body:

```json
{
  "activityID": "uuid",   // optional, alternatively:
  "name": "Standup",      // optional (one of the two is required)
  "durationMinutes": 15,  // > 0, required
  "note": "…",            // optional
  "createIfMissing": false // optional, defaults to false
}
```

The response contains the new entry ID, the activity data and a `created` flag — `true` when the activity was freshly created for this request.

## License gate

Without a valid license, every endpoint except `/healthcheck` responds with **`423 Locked`** and body `{"error":"license locked"}`. That way reachability can still be probed while the app is locked, without productive verbs going through unintentionally.

## Security

- The listener binds to `127.0.0.1` only and accepts connections from your own Mac. There is no outbound network communication.
- Every request carries an **HMAC-SHA256 signature**, a timestamp, and a nonce. Requests with more than 60 seconds of clock drift are rejected (`401`); reused nonces within 180 seconds are also rejected (`409`).
- More than 10 failed authentications in 30 seconds trigger a 60-second lockout (`429`).
- The token lives encrypted in the macOS Keychain.
- The last 25 requests are visible in **Einstellungen → Debug → API-Zugriffe** (time, method, path, status).
