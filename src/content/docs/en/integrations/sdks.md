---
title: SDKs
description: Official client libraries for the HTTP API in JavaScript/TypeScript and Python.
---

If you want to wire your own tools into NowDoing, the official SDKs take care of HMAC signing, nonce handling, and error mapping. There are two packages — both are thin wrappers around the [HTTP API](/en/integrations/http-api/):

- **`@nowdoing/sdk`** on [npm](https://www.npmjs.com/package/@nowdoing/sdk) — TypeScript, ESM + CJS, runs on Node ≥ 20, Bun, and Deno.
- **`nowdoing-sdk`** on PyPI — Python ≥ 3.10, with both a sync and an async client; the only runtime dependency is `httpx`.

## Prerequisite

Both SDKs talk over the HTTP API, so you need to enable it first — see [HTTP API](/en/integrations/http-api/). Pass the token and port to the constructor, or set them as environment variables:

```sh
export NOWDOING_TOKEN="…"
export NOWDOING_PORT=39847   # optional, default
```

## JavaScript / TypeScript

Install:

```sh
npm install @nowdoing/sdk
```

Example:

```ts
import { NowDoingClient } from "@nowdoing/sdk";

const client = new NowDoingClient();

await client.healthcheck();

const current = await client.getCurrent();
if (current === null) {
  console.log("Nothing running.");
} else {
  console.log(`On: ${current.activityName} (since ${current.startedAt})`);
}

const started = await client.startActivity({
  name: "Refactor",
  createIfMissing: true,
});

await client.notifyBranchChange({
  branch: "feature/sdk-rewrite",
  repo: "nowdoingmac",
  previousBranch: "main",
});
```

Browser usage is intentionally unsupported — the listener binds to loopback, and most browsers refuse CORS to `127.0.0.1`.

## Python

Install:

```sh
pip install nowdoing-sdk
```

Sync client:

```python
from nowdoing import NowDoingClient

with NowDoingClient() as client:
    client.healthcheck()

    current = client.get_current()
    if current is None:
        print("Nothing running.")
    else:
        print(f"On: {current.activity_name} (since {current.started_at})")

    client.start_activity(name="Refactor", create_if_missing=True)
    client.notify_branch_change(
        branch="feature/sdk-rewrite",
        repo="nowdoingmac",
        previous_branch="main",
    )
```

For async, use `AsyncNowDoingClient`:

```python
import asyncio
from nowdoing import AsyncNowDoingClient

async def main() -> None:
    async with AsyncNowDoingClient() as client:
        current = await client.get_current()
        print(current)

asyncio.run(main())
```

## API overview

Both SDKs cover the same five endpoints:

| Method (JS / Python)                                  | Endpoint                  |
| ----------------------------------------------------- | ------------------------- |
| `healthcheck()` / `healthcheck()`                     | `GET  /healthcheck`       |
| `getCurrent()` / `get_current()`                      | `GET  /current`           |
| `searchActivities(q)` / `search_activities(q)`        | `GET  /activities/search` |
| `startActivity({…})` / `start_activity(…)`            | `POST /activities/start`  |
| `notifyBranchChange({…})` / `notify_branch_change(…)` | `POST /branch-changed`    |

## Errors

All HTTP failures map to typed exceptions that inherit from `NowDoingError`:

| Status | Class                        | Typical cause |
| -----: | ---------------------------- | ------------- |
|    400 | `NowDoingValidationError`    | Bad payload (e.g. empty branch). |
|    401 | `NowDoingAuthError`          | Wrong or missing token, or bad signature. |
|    404 | `NowDoingNotFoundError`      | Activity UUID unknown. |
|    409 | `NowDoingReplayError`        | Nonce already used in the last 180 s. |
|    503 | `NowDoingUnavailableError`   | Endpoint handler not wired in the app. |
|  other | `NowDoingHttpError`          | Anything else (incl. 5xx). |

## Source

Both SDKs live in the [`NowDoingApp/sdk`](https://github.com/NowDoingApp/sdk) monorepo and are published to npm / PyPI from GitHub Actions on tag. File bugs and feature requests there.
