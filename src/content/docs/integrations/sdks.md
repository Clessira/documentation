---
title: SDKs
description: Offizielle Client-Bibliotheken für die HTTP-API in JavaScript/TypeScript und Python.
---

Wenn du eigene Tools an NowDoing andocken willst, sparen dir die offiziellen SDKs das HMAC-Signieren, die Nonce-Verwaltung und das Fehler-Mapping. Es gibt zwei Pakete — beides sind dünne Wrapper um die [HTTP-API](/integrations/http-api/):

- **`@nowdoing/sdk`** auf [npm](https://www.npmjs.com/package/@nowdoing/sdk) — TypeScript, ESM + CJS, läuft auf Node ≥ 20, Bun und Deno.
- **`nowdoing-sdk`** auf PyPI — Python ≥ 3.10, mit synchronem und asynchronem Client; einzige Laufzeit-Abhängigkeit ist `httpx`.

## Voraussetzung

Beide SDKs sprechen über die HTTP-API, also musst du sie zuerst aktivieren — siehe [HTTP-API](/integrations/http-api/). Übergib Token und Port entweder direkt an den Konstruktor oder setze sie als Umgebungsvariablen:

```sh
export NOWDOING_TOKEN="…"
export NOWDOING_PORT=39847   # optional, Standard
```

## JavaScript / TypeScript

Installation:

```sh
npm install @nowdoing/sdk
```

Beispiel:

```ts
import { NowDoingClient } from "@nowdoing/sdk";

const client = new NowDoingClient();

await client.healthcheck();

const status = await client.getStatus();
console.log(
  status.isTracking
    ? `${status.currentActivity?.activityName} läuft (${status.todaySeconds}s heute)`
    : "Nichts läuft gerade.",
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
  repo: "nowdoingmac",
  previousBranch: "main",
});
```

Browser wird absichtlich nicht unterstützt — der Listener bindet auf Loopback, und die meisten Browser verweigern CORS auf `127.0.0.1`.

## Python

Installation:

```sh
pip install nowdoing-sdk
```

Synchroner Client:

```python
from nowdoing import NowDoingClient

with NowDoingClient() as client:
    client.healthcheck()

    status = client.get_status()
    if status.is_tracking and status.current_activity:
        print(f"{status.current_activity.activity_name} läuft ({status.today_seconds}s heute)")
    else:
        print("Nichts läuft gerade.")

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
        repo="nowdoingmac",
        previous_branch="main",
    )
```

Asynchron geht's mit `AsyncNowDoingClient`:

```python
import asyncio
from nowdoing import AsyncNowDoingClient

async def main() -> None:
    async with AsyncNowDoingClient() as client:
        current = await client.get_current()
        print(current)

asyncio.run(main())
```

## API-Übersicht

Beide SDKs decken dieselben acht Endpunkte ab:

| Methode (JS / Python)                           | Endpunkt                   |
| ----------------------------------------------- | -------------------------- |
| `healthcheck()` / `healthcheck()`               | `GET  /healthcheck`        |
| `getCurrent()` / `get_current()`                | `GET  /current`            |
| `getStatus()` / `get_status()`                  | `GET  /status`             |
| `searchActivities(q)` / `search_activities(q)`  | `GET  /activities/search`  |
| `startActivity({…})` / `start_activity(…)`      | `POST /activities/start`   |
| `stopActivity()` / `stop_activity()`            | `POST /activities/stop`    |
| `logEntry({…})` / `log_entry(…)`                | `POST /entries`            |
| `notifyBranchChange({…})` / `notify_branch_change(…)` | `POST /branch-changed` |

## Fehler

Alle HTTP-Fehler werden auf typisierte Exceptions abgebildet, die von `NowDoingError` erben:

| Status | Klasse                       | Typische Ursache |
| -----: | ---------------------------- | ---------------- |
|    400 | `NowDoingValidationError`    | Ungültiger Request (z. B. leerer Branch, `durationMinutes ≤ 0`). |
|    401 | `NowDoingAuthError`          | Falsches/fehlendes Token oder Signatur. |
|    404 | `NowDoingNotFoundError`      | Aktivitäts-UUID/-Name unbekannt. |
|    409 | `NowDoingReplayError`        | Nonce in den letzten 180 s schon benutzt. |
|    423 | `NowDoingHttpError`          | NowDoing ist gesperrt (keine gültige Lizenz). |
|    503 | `NowDoingUnavailableError`   | Endpunkt-Handler nicht verdrahtet. |
|  sonst | `NowDoingHttpError`          | Alles andere (inkl. 5xx). |

## Quellcode

Beide SDKs leben im Monorepo [`NowDoingApp/sdk`](https://github.com/NowDoingApp/sdk) und werden über GitHub Actions per Tag auf npm bzw. PyPI veröffentlicht. Bugs und Feature-Wünsche bitte dort.
