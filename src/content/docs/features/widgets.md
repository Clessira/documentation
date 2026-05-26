---
title: Widgets
description: NowDoing in der macOS-Mitteilungszentrale und auf dem Schreibtisch — vier Widgets für Übersicht und Schnellzugriff.
---

NowDoing liefert vier **WidgetKit-Widgets**, die du in der macOS-Mitteilungszentrale, auf dem Sperrbildschirm oder seit macOS Sonoma direkt auf dem Schreibtisch platzieren kannst. Alle Widgets lesen ihre Daten über eine **AppGroup** aus dem App-Sandbox-Container — sie sind immer aktuell und brauchen keine Netzwerkverbindung.

## Widget hinzufügen

1. Rechtsklick auf den Schreibtisch (oder Klick aufs Datum oben rechts) → **Widgets bearbeiten…**
2. Im Sucher **„NowDoing"** eingeben.
3. Größe wählen, an die gewünschte Stelle ziehen.

Du kannst dasselbe Widget mehrfach platzieren — z. B. einen *Now Tracking*-Streifen in der Mitteilungszentrale und einen *Heatmap*-Block auf dem Desktop.

## Die vier Widgets

### Heute total (klein)

Zeigt die heute gebuchte **Gesamtdauer** als große Zahl. Aktualisiert stündlich und nach jedem abgeschlossenen Eintrag.

Gut für: schneller Tagesüberblick ohne Popover.

### Aktuell (klein)

Zeigt **laufende Aktivität** und **verstrichene Zeit** als Live-Timeline. Aktualisiert sich, solange ein Eintrag läuft, alle 60 Sekunden.

Tipp: Klick aufs Widget öffnet NowDoing direkt mit dem Popover.

### Quick Log (mittel)

Zeigt deine **fünf gepinnten Aktivitäten** als Tap-Buttons. Ein Tipp loggt die Aktivität sofort — die App wird dafür **nicht** in den Vordergrund geholt. Implementiert via App Intents (siehe [App Intents & Services](/integrations/app-intents/)).

Welche Aktivitäten erscheinen, regelst du wie überall sonst über die [Pinned-Quick-Picks](/features/activities/).

### Heatmap (groß)

Zeigt einen **Monatskalender** mit farbcodierten Tagen — Intensität entspricht den gebuchten Stunden, Tagesziel-Tage werden grün hervorgehoben, Feiertage erscheinen mit einem Orange-Ton.

Klick auf einen Tag öffnet die Detailansicht im Stundenzettel.

## Aktualisierungsrhythmus

| Widget | Refresh |
|---|---|
| Heute total | Stündlich + Push nach jedem Eintrag |
| Aktuell | Sekündlich, solange ein Eintrag läuft |
| Quick Log | Bei Aktivitäts- oder Pin-Änderungen |
| Heatmap | Mehrmals täglich + nach Logging |

macOS kann die Frequenz weiter drosseln, wenn dein Mac im Energiesparmodus läuft oder das Widget länger nicht sichtbar war — das ist eine Systemvorgabe, kein NowDoing-Verhalten.

## Daten & Datenschutz

Widgets greifen ausschließlich lokal auf den gemeinsamen AppGroup-Container zu (`group.com.mattes.nowdoing`). Es werden **keine Netzwerkanfragen** gestellt, keine Telemetrie übermittelt, und keine externen Dienste eingebunden. Wenn du iCloud-Sync aktiv hast, werden die Daten unverändert aus der bereits synchronisierten Datei gelesen.
