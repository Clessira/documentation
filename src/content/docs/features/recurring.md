---
title: Wiederkehrende Aktivitäten
description: Vorlagen für Standups, Daily-Checks oder Meetings — Clessira füllt fehlende Einträge automatisch.
---

Manche Aktivitäten fallen jeden Tag oder jede Woche an: Daily Standup um 9:15, Lunch, der wöchentliche Team-Sync. Mit **wiederkehrenden Vorlagen** definierst du sie einmal und wendest sie auf Tage an, denen die entsprechenden Einträge noch fehlen.

## Wo das lebt

**Verwaltung → Wiederkehrend** (oder **Einstellungen → Verwaltung → Wiederkehrend**). Alles passiert inline in der UI — du legst Vorlagen direkt an, editierst und löschst sie. **Keine** JSON-Dateien, keine Konfigs.

## Vorlage anlegen

Pro Vorlage definierst du:

| Feld | Beschreibung |
|---|---|
| **Aktivität** | aus deiner Liste, siehe [Aktivitäten](/features/activities/) |
| **Wochentage** | z. B. Mo–Fr, oder einzelne Tage |
| **Startzeit / Endzeit** | woraus die Dauer abgeleitet wird |
| **Dauer** | alternativ direkt eintragen |
| **Standard-Notiz** | optional, wird in den Eintrag übernommen |

Speichern legt die Vorlage an — ab dann ist sie für die ausgewählten Wochentage verfügbar.

## Anwenden auf einen Tag

Vorlagen werden auf einen konkreten Tag angewendet und legen die hinterlegten Einträge an. Typisch nutzt du das für Standups, Daily-Checks, regelmäßige Meetings oder Pausen-Slots — alles, was du sonst jeden Morgen manuell tippen oder anheften würdest.

Beim Prompt entlastet die Vorlage das [Prompt-Popover](/features/prompt-popover/): der Eintrag steht schon, du bestätigst nur noch.

## Idempotenz

Vorlagen legen **nur fehlende** Einträge an. Existiert zur gleichen Zeit bereits ein Eintrag, bleibt er unverändert. Du kannst dieselbe Vorlage mehrfach auf denselben Tag anwenden — kein Duplikat, kein Risiko.

## Verwalten

Jede Vorlage ist nachträglich editierbar. Gelöschte Vorlagen wirken sich **nicht** auf bereits angelegte Einträge aus — die Historie bleibt unangetastet.

## Verhältnis zu manueller Erfassung

Vorlagen ersetzen die manuelle Erfassung nicht, sie unterstützen sie. Fällt der Standup mal aus oder dauert doppelt so lange, trägst du wie gewohnt manuell ein — am nächsten Tag greift die Vorlage wieder. Für den Bezug zum täglichen Soll siehe [Arbeitszeiten](/features/working-hours/).
