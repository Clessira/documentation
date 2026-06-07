---
title: SDKs
description: Official client libraries for the HTTP API in JavaScript/TypeScript and Python.
---

If you want to wire your own tools into Clessira, the official SDKs take care of HMAC signing, nonce handling, and error mapping. There are two packages — both are thin wrappers around the [HTTP API](/en/integrations/http-api/):

- **`@clessira/sdk`** on [npm](https://www.npmjs.com/package/@clessira/sdk) — TypeScript, ESM + CJS, runs on Node ≥ 20, Bun, and Deno.
- **`clessira-sdk`** on PyPI — Python ≥ 3.10, with both a sync and an async client; the only runtime dependency is `httpx`.

## Prerequisite

Both SDKs talk over the HTTP API, so you need to enable it first — see [HTTP API](/en/integrations/http-api/). Pass the token and port to the constructor, or set them as environment variables:

```sh
export CLESSIRA_TOKEN="…"
export CLESSIRA_PORT=39847   # optional, default
```

## JavaScript / TypeScript

Install:

```sh
npm install @clessira/sdk
```

Example:

```ts
import { ClessiraClient } from "@clessira/sdk";

const client = new ClessiraClient();

await client.healthcheck();

const status = await client.getStatus();
console.log(
  status.isTracking
    ? `${status.currentActivity?.activityName} running (${status.todaySeconds}s today)`
    : "Nothing running.",
);

await client.startActivity({ name: "Refactor", createIfMissing: true });

await client.logEntry({
  name: "Standup",
  durationMinutes: 15,
  note: "Daily",
  createIfMissing: true,
});

await client.stopActivity();

await client.notifyBranchChange({
  branch: "feature/sdk-rewrite",
  repo: "clessiramac",
  previousBranch: "main",
});
```

Browser usage is intentionally unsupported — the listener binds to loopback, and most browsers refuse CORS to `127.0.0.1`.

## Python

Install:

```sh
pip install clessira-sdk
```

Sync client:

```python
from clessira import ClessiraClient

with ClessiraClient() as client:
    client.healthcheck()

    status = client.get_status()
    if status.is_tracking and status.current_activity:
        print(f"{status.current_activity.activity_name} running ({status.today_seconds}s today)")
    else:
        print("Nothing running.")

    client.start_activity(name="Refactor", create_if_missing=True)
    client.log_entry(
        name="Standup",
        duration_minutes=15,
        note="Daily",
        create_if_missing=True,
    )
    client.stop_activity()

    client.notify_branch_change(
        branch="feature/sdk-rewrite",
        repo="clessiramac",
        previous_branch="main",
    )
```

For async, use `AsyncClessiraClient`:

```python
import asyncio
from clessira import AsyncClessiraClient

async def main() -> None:
    async with AsyncClessiraClient() as client:
        current = await client.get_current()
        print(current)

asyncio.run(main())
```

## API overview

Both SDKs cover the same eight endpoints:

| Method (JS / Python)                                  | Endpoint                   |
| ----------------------------------------------------- | -------------------------- |
| `healthcheck()` / `healthcheck()`                     | `GET  /healthcheck`        |
| `getCurrent()` / `get_current()`                      | `GET  /current`            |
| `getStatus()` / `get_status()`                        | `GET  /status`             |
| `searchActivities(q)` / `search_activities(q)`        | `GET  /activities/search`  |
| `startActivity({…})` / `start_activity(…)`            | `POST /activities/start`   |
| `stopActivity()` / `stop_activity()`                  | `POST /activities/stop`    |
| `logEntry({…})` / `log_entry(…)`                      | `POST /entries`            |
| `notifyBranchChange({…})` / `notify_branch_change(…)` | `POST /branch-changed`     |

## Errors

All HTTP failures map to typed exceptions that inherit from `ClessiraError`:

| Status | Class                        | Typical cause |
| -----: | ---------------------------- | ------------- |
|    400 | `ClessiraValidationError`    | Bad payload (e.g. empty branch, `durationMinutes ≤ 0`). |
|    401 | `ClessiraAuthError`          | Wrong or missing token, or bad signature. |
|    404 | `ClessiraNotFoundError`      | Activity UUID or name unknown. |
|    409 | `ClessiraReplayError`        | Nonce already used in the last 180 s. |
|    423 | `ClessiraHttpError`          | Clessira is locked (no valid license). |
|    503 | `ClessiraUnavailableError`   | Endpoint handler not wired in the app. |
|  other | `ClessiraHttpError`          | Anything else (incl. 5xx). |

## Source

Both SDKs live in the [`ClessiraApp/sdk`](https://github.com/ClessiraApp/sdk) monorepo and are published to npm / PyPI from GitHub Actions on tag. File bugs and feature requests there.
