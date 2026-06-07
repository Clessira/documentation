---
title: Aktivitäten importieren
description: Bestehende Tickets oder Aufgaben aus Jira, Excel, Markdown oder Plain Text als Aktivitäten übernehmen.
---

Wenn du bereits eine Liste von Tickets oder Aufgaben hast, musst du sie nicht abtippen. Clessira erkennt vier Eingabeformate und legt daraus Aktivitäten an. Der Import steht im [Willkommens-Assistenten](/getting-started/first-run/) bei Schritt 7 und dauerhaft unter **Einstellungen → Verwaltung → Importieren** zur Verfügung.

## Unterstützte Quellen

### Jira-Tickets

Format: `PROJ-123 Summary` (eine Zeile pro Ticket).

- Das **Projektkürzel** (vor dem Bindestrich) wird zur **Gruppe**.
- Der **Summary**-Teil wird zum Aktivitätsnamen.
- Die Ticket-ID bleibt im Namen erhalten und ist später im Stundenzettel suchbar.

Beispiel:

```
PROJ-101 Pay-by-link integration
PROJ-102 Refactor onboarding wizard
INFRA-9  CI flake on macOS runners
```

### Excel / CSV

Tab-, Komma- oder Semikolon-getrennt — mit **Header-Zeile**. Die Spalte mit dem Aktivitätsnamen wird automatisch erkannt. Optionale Spalten (Projekt, Gruppe) werden als Aktivitäts-Metadaten übernommen, wenn sie eindeutig zuzuordnen sind.

UTF-8 wird erwartet. Clessira erkennt das Trennzeichen automatisch — du musst es nicht angeben.

### Markdown-Listen

Aufzählungen, Nummerierungen und Verschachtelungen werden als flache Aktivitätsliste eingelesen. Beispiel:

```markdown
- Kundenprojekt A
  - Sprint planning
  - Code review
- Internes
  - Hiring interviews
```

Jede Zeile wird zu einer Aktivität; die Hierarchie geht beim Import verloren (jedes Item ist eigenständig).

### Plain Text

Eine Aktivität pro Zeile. Leerzeilen werden ignoriert. Der einfachste Modus, wenn du nur eine grobe Liste hast.

## Wie der Import läuft

1. **Importieren…** im Wizard oder unter **Einstellungen → Verwaltung**.
2. Liste einfügen — Clessira erkennt das Format automatisch.
3. **Vorschau** zeigt die erkannten Aktivitäten; du kannst Zeilen ab- und anwählen.
4. Bestätigen → die Aktivitäten landen in [Aktivitäten verwalten](/features/activities/).

Bereits vorhandene Aktivitäten mit identischem Namen werden **nicht** dupliziert.

## Was nicht importiert wird

- **Zeiten** — der Import legt nur Aktivitäten an, keine Zeiteinträge. Bestehende Stundenzettel-Daten musst du weiter selbst pflegen.
- **Tickets-API** — Clessira fragt Jira nicht live ab. Du fügst die Liste manuell ein (Copy/Paste aus Jira-Backlog oder JQL-Export).
- **Anhänge oder Beschreibungen** — nur der Aktivitätsname wandert mit.
