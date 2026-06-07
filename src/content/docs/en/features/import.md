---
title: Import activities
description: Bring existing tickets or tasks from Jira, Excel, Markdown, or plain text into Clessira as activities.
---

If you already have a list of tickets or tasks, you don't need to retype them. Clessira detects four input formats and turns them into activities. Import is available in the [welcome wizard](/en/getting-started/first-run/) at step 7 and any time later under **Settings → Management → Import**.

## Supported sources

### Jira tickets

Format: `PROJ-123 Summary` (one ticket per line).

- The **project key** (before the dash) becomes the **group**.
- The **summary** becomes the activity name.
- The ticket ID stays in the name and is searchable in the Timesheet.

Example:

```
PROJ-101 Pay-by-link integration
PROJ-102 Refactor onboarding wizard
INFRA-9  CI flake on macOS runners
```

### Excel / CSV

Tab-, comma-, or semicolon-separated with a **header row**. The activity-name column is detected automatically. Optional columns (project, group) are picked up as activity metadata if they map cleanly.

UTF-8 is expected. Clessira detects the separator automatically — you don't need to specify it.

### Markdown lists

Bullets, numbered lists, and nesting come in as a flat list of activities. Example:

```markdown
- Client project A
  - Sprint planning
  - Code review
- Internal
  - Hiring interviews
```

Each line becomes an activity; the hierarchy is dropped on import (every item is independent).

### Plain text

One activity per line. Blank lines are ignored. The simplest mode, when you only have a rough list.

## How the import flows

1. **Import…** in the wizard or under **Settings → Management**.
2. Paste your list — Clessira detects the format automatically.
3. A **preview** shows the detected activities; you can deselect rows.
4. Confirm — the activities land in [manage activities](/en/features/activities/).

Existing activities with the same name are **not** duplicated.

## What is not imported

- **Times** — import creates activities only, no time entries. You still build out the Timesheet yourself.
- **Tickets API** — Clessira does not query Jira live. You paste the list manually (copy from a Jira backlog or a JQL export).
- **Attachments or descriptions** — only the activity name comes along.
