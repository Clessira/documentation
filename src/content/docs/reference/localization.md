---
title: Sprache & Lokalisierung
description: Wie NowDoing Sprache, Region, Datums- und Zeitformat aus deinen macOS-Einstellungen übernimmt.
---

NowDoing ist **vollständig zweisprachig**: Deutsch (primär) und Englisch. Übersetzt sind alle benutzerseitigen Strings — Menüleiste, Popover, Einstellungen, Stundenzettel, Widgets, das AppleScript-Wörterbuch und die Voice-Phrasen.

## Wie die Sprache gewählt wird

Die UI-Sprache folgt automatisch der **macOS-Systemsprache**. Steht dein Mac auf Deutsch, läuft NowDoing auf Deutsch; steht er auf Englisch, läuft es auf Englisch. Einen eigenen Sprach-Schalter gibt es in der App **nicht** — bewusst, damit Sprache und Region immer mit dem Rest deines Systems übereinstimmen.

## Sprache wechseln

macOS bietet seit Ventura eine Per-App-Sprache. Du wechselst NowDoing wie folgt:

1. **Systemeinstellungen → Allgemein → Sprache & Region → Apps** öffnen.
2. **NowDoing** auswählen und die gewünschte Sprache festlegen.
3. NowDoing **neu starten** — die Einstellung wirkt ab dem nächsten Start.

## Region: Datum, Zeit, Wochenstart

Format-Details kommen ebenfalls aus den **macOS-Systemeinstellungen** unter *Sprache & Region* — getrennt nach Sprache (für die UI) und Region (für Formate).

| Element | Quelle | Beispiel |
|---|---|---|
| Zeitformat | Region / 24h-Schalter | `14:30` (DE) vs. `2:30 PM` (US) |
| Datumsformat | Region | `26.05.2026` (DE) vs. `5/26/2026` (US) |
| Wochenstart | Region | Montag (DE/AT/CH), Sonntag (US) |
| Kalenderwochen | Region | ISO-Wochen in DE, US-Wochen in US |
| Feiertage | Region | siehe [Arbeitszeiten](/features/working-hours/) |

Auch [CSV-Exporte](/features/csv-export/) verwenden die System-Locale, sodass Excel die Werte korrekt erkennt.

## Wenn etwas nicht übersetzt ist

Das ist ein Bug — gerne melden an [hello@nowdoing.app](mailto:hello@nowdoing.app). Eine fehlende Übersetzung fällt automatisch auf den englischen Originaltext zurück, sodass die UI nie leer bleibt.

## Technisch

Alle Strings liegen in einer einzigen `Localizable.xcstrings`-Datei (Apples String-Catalogue-Format). Weitere Sprachen lassen sich theoretisch ohne Code-Änderung ergänzen — aktuell sind nur Deutsch und Englisch ausgeliefert.

## Doku-Sprache

Diese Dokumentation ist selbst zweisprachig: Sprachumschalter findest du rechts oben in der Sidebar. Verwandte Seiten: [Einstellungen](/reference/settings/) und [Barrierefreiheit](/reference/accessibility/).
