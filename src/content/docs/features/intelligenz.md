---
title: Intelligenz
description: Auto-Bestätigen, Rückgängig-Toast, adaptive Intervalle und Focus-Erkennung — wie NowDoing sich an deinen Rhythmus anpasst.
---

NowDoing versucht, sich aus dem Weg zu halten, wenn du tief im Thema bist, und nur dann zu fragen, wenn es etwas zu fragen gibt. Die folgenden Helfer laufen still im Hintergrund. Alle Schalter findest du unter **Einstellungen → Intelligenz**.

## Auto-Bestätigen

Wenn du dreimal hintereinander dieselbe Aktivität bestätigst, kommt NowDoing zu dem Schluss, dass du gerade im Flow bist. Das Prompt-Popover wird dann **übersprungen** und der laufende Block läuft still weiter — kein Pop-up, kein Sound, keine Unterbrechung.

- Sobald du selbst aktiv wirst (Hotkey, Menüleisten-Klick) oder die Aktivität wechselst, geht es zurück in den normalen Modus.
- Pausen, Snooze und Verwerfen brechen die Serie ab.
- Abschalten unter **Einstellungen → Intelligenz → Auto-Bestätigen**.

## Adaptive Intervalle

Das [Tracking-Intervall](/features/tracking-interval/) ist nicht in Stein gemeißelt — bei aktiviertem Schalter passt NowDoing es an dein Verhalten an:

| Situation | Wirkung |
|---|---|
| 3× dieselbe Aktivität in Folge | Intervall **verdoppelt sich** (max. 1 Stunde) |
| Mehrere Aktivitätswechsel kurz hintereinander | Intervall **halbiert sich** (min. 1 Minute) |
| Aktivität wechselt nach längerer Phase | Intervall pendelt sich zum eingestellten Wert ein |

So bekommst du in Fokus-Phasen Ruhe, bleibst in reaktiven Phasen aber feinkörnig dabei. Den Basiswert (auf den NowDoing zurückkehrt) stellst du weiterhin unter **Tracking-Intervall** ein.

## Rückgängig-Toast

Nach jedem geloggten Eintrag erscheint am unteren Rand des Popovers für **8 Sekunden** ein kleines Banner mit einem **„Rückgängig"**-Knopf. Ein Klick (oder <kbd>⌘Z</kbd>, solange der Toast sichtbar ist) entfernt den gerade angelegten Eintrag und stellt den vorherigen Zustand wieder her.

Praktisch, wenn du dich vertippt, die falsche Aktivität gewählt oder eine Quick-Pick-Taste daneben gehabt hast. Nach Ablauf der 8 Sekunden ist der Eintrag wie jeder andere editierbar — siehe [Tag-Ansicht](/features/day-view/).

## Focus & Nicht stören

Ist auf deinem Mac ein **macOS-Focus** aktiv — *Nicht stören*, *Präsentation*, *Schlafenszeit*, ein eigener Focus —, unterdrückt NowDoing den automatischen Prompt komplett. Du wirst weder mit Popover noch mit Ton unterbrochen.

- Tracking läuft im Hintergrund **weiter** — die laufende Aktivität wird nicht abgebrochen.
- Sobald der Focus endet, fragt NowDoing beim nächsten regulären Intervall wieder.
- Manuelle Wege bleiben offen: per Hotkey <kbd>⌃⌥⌘L</kbd> oder Menüleisten-Klick kannst du jederzeit selbst loggen.

Diese Erkennung nutzt die Standard-Schnittstelle, die macOS jedem Programm zur Verfügung stellt — es werden keine Daten über deine Focus-Modi gespeichert oder übertragen.

## Zusammenspiel

Alle vier Helfer greifen ineinander: Adaptive Intervalle dehnen die Pause zwischen Prompts, Auto-Bestätigen überspringt sie ganz, der Focus-Modus pausiert sie temporär, und der Rückgängig-Toast fängt seltene Fehlklicks ab. Schalte einzelne Funktionen unter **Einstellungen → Intelligenz** ab, wenn du lieber starr getaktet erfasst.
