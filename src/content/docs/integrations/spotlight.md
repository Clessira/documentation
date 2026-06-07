---
title: Spotlight
description: Aktivitäten und Notizen direkt über macOS Spotlight finden — alles lokal, kein Netzwerk.
---

Clessira kann seine Aktivitäten und Notizen für die **macOS-Spotlight-Suche** indexieren. Damit sind Notizen wie „PROJ-123" oder „Standup" direkt über <kbd>⌘ Space</kbd> erreichbar — ohne die App vorher zu öffnen.

## Aktivieren

Im [Willkommens-Assistenten](/getting-started/first-run/) bei Schritt 5 — oder jederzeit unter **Einstellungen → Integrationen → Notizen in Spotlight indexieren**.

Beim Aktivieren legt Clessira einen lokalen Index in `~/Library/Application Support/Clessira` an. Spotlight liest diesen Index direkt — es findet keine Kommunikation mit einem Server statt.

## Was wird indexiert?

- **Aktivitätsnamen** inkl. Emojis.
- **Notizen** zu Aktivitäten (sofern vorhanden).
- **Ticket-IDs** aus dem [Aktivitäten-Import](/features/import/) (z. B. `PROJ-123`).

Nicht indexiert werden Zeiteinträge, Stundenzettel-Daten oder einzelne Tages-Logs — Spotlight findet nur den Aktivitätsstamm, nicht den Zeitverlauf.

## Was zeigt Spotlight?

Ein Treffer öffnet die App und springt direkt zur passenden Aktivität. Wenn du in Spotlight keinen Treffer siehst, hilft meistens:

1. Index in den Einstellungen aus- und wieder einschalten.
2. macOS-Spotlight unter **Systemeinstellungen → Spotlight** prüfen, ob Clessira als Quelle erlaubt ist.

## Deaktivieren

Toggle abschalten → der Index wird entfernt. Spotlight findet die Aktivitäten ab dem nächsten Reindex nicht mehr.

## Datenschutz

Der Index liegt **ausschließlich lokal**. Spotlight selbst sendet keine Inhalte an Apple — siehe [Daten & Datenschutz](/reference/data-privacy/).
