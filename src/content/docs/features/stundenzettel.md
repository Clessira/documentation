---
title: Stundenzettel-Fenster
description: Wochen-, Pivot-, Monats- und Zeitraumansicht in einem eigenen Fenster — inklusive Rundung, Gleitzeitkonto und Lücken-Analyse.
---

Der **Stundenzettel** ist ein eigenes Fenster für alle Auswertungen über mehrere Tage. Öffnen per Rechtsklick auf das Menüleisten-Symbol → **„Stundenzettel"**, oder per App Intent **„Stundenzettel öffnen"** (siehe [App Intents & Services](/integrations/app-intents/)). Für die Tagesansicht im Popover ist [Tagesleiste & Ansichten](/features/timeline/) zuständig.

## Wochenansicht

Tag-für-Tag-Breakdown zum Aufklappen, mit Wochentotal und Target-Progress. Darunter siehst du die **Überstundenbalance** der Woche sowie dein kumulatives **YTD-Gleitzeitkonto** (Ist − Soll seit Jahresbeginn) — gedacht für europäische Teams mit flexiblen Arbeitszeitkonten. Target und Wochenstunden konfigurierst du unter [Arbeitszeiten](/features/working-hours/).

## Pivot-Ansicht

Klassisches Stundenzettel-Grid: Zeilen sind Aktivitäten **oder** Gruppen, Spalten die Wochentage, Zellen die Stunden. Ein Toggle wechselt zwischen Aktivitäts- und Gruppenebene (siehe [Aktivitäten & Gruppen](/features/activities/)). Das Grid skaliert responsiv mit der Fensterbreite — perfekt für Spreadsheet-artige Analyse.

```
                Mo    Di    Mi    Do    Fr    Σ
🛠️ Coding      3:42  4:10  2:30  3:15  4:00  17:37
📞 Calls       1:15  0:45  1:00  0:30  0:50   4:20
```

## Monatsansicht

Heatmap-Kalender mit farbcodierten Tagen: Intensität entspricht den Stunden, **grün** markiert erreichte Tagesziele, ein **Orangeton** kennzeichnet Feiertage. Der Feiertagsname steht in der Zelle, der Tooltip zeigt Name plus Stunden. Klick auf einen Tag öffnet die Detailansicht. Eine Monatszusammenfassung listet Arbeitstage und warnt bei Lücken.

## Beliebiger Zeitraum

Custom Range mit Von/Bis-Datumspickern — für Sprints, Abrechnungsperioden oder beliebige Zeiträume. Du siehst einen gruppierten Breakdown und die Periodensumme.

## Statistik-Tab

Kennzahlen, Trends und Verteilungen über längere Zeiträume sind ausgelagert in [Insights & Statistik](/features/insights/).

## Toolbar-Funktionen

| Funktion | Wirkung |
|---|---|
| **Rundung** | Display-only Picker: `exact` / `15 min` / `30 min`. Originale Eintragszeiten bleiben **unverändert** — wirkt nur auf Anzeige und Export. |
| **KW-Sprung** | Kalenderwoche direkt im Textfeld eingeben und springen — deutsche KW-Navigation. |
| **Gleitzeitkonto** | Kumulatives Delta (Ist − Soll) pro Woche und YTD in der Wochenansicht. |
| **Lücken-Analyse** | Untracked Blöcke ≥ 1 min werden in der Tagesansicht mit exakten Timestamps und Gesamtdauer hervorgehoben. |
| **CSV-Export ↑** | Exportiert **nur den sichtbaren Zeitraum**, nicht die gesamte Historie. Details: [CSV-Export](/features/csv-export/). |

## Inline-Bearbeitung

In der Tagesansicht klappst du die Disclosure **„Einträge"** auf — alle Einträge des Tages werden sichtbar. Klick auf die Start- oder End-Zeit eines Eintrags öffnet einen DatePicker zum Bearbeiten, der Trash-Button löscht den Eintrag.
