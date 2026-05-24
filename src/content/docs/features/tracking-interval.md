---
title: Tracking-Intervall
description: Wie oft NowDoing nachfragt — und wie du das Intervall zu deinem Arbeitsrhythmus passend einstellst.
---

Das Tracking-Intervall bestimmt, wie oft NowDoing dich automatisch fragt: **„Was hast du gerade gemacht?"**

## Standard: 45 Minuten

Beim ersten Start ist das Intervall auf **45 Minuten** eingestellt — ein guter Mittelweg zwischen Genauigkeit und Ruhe. Du wählst den Wert direkt im Willkommens-Assistenten.

## Intervall ändern

Rechtsklick auf das Menüleisten-Symbol → **Einstellungen → Allgemein** → **Tracking-Intervall**.

Verfügbare Werte: **5, 10, 15, 20, 30, 45, 60 Minuten**.

| Intervall | Wirkt sich aus auf |
|---|---|
| 5–10 min | Sehr präzise Erfassung, häufige Unterbrechung |
| 15–20 min | Feinkörnige Erfassung für taktische Tage |
| 30–45 min | Empfohlen — Standard, weniger störend |
| 60 min | Stündliche Übersicht, eher als Hintergrund-Check |

## Wie wird der Eintrag berechnet?

Bestätigst du eine Aktivität, schreibt NowDoing den Eintrag **vom letzten Eintrag (oder App-Start) bis jetzt** in die Datenbank.

Beispiel mit 45-Minuten-Intervall:

```
09:00  App-Start → noch kein Eintrag
09:45  Prompt → du wählst „Coding" → Eintrag 09:00 – 09:45 (Coding)
10:30  Prompt → wieder „Coding" → der Block wird verlängert auf 09:00 – 10:30
11:15  Prompt → du wählst „Calls" → neuer Eintrag 10:30 – 11:15 (Calls)
```

Bestätigst du dieselbe Aktivität erneut, läuft die Stoppuhr in der Menüleiste nahtlos weiter — der alte Block wird gestreckt, nicht ein neuer angelegt.

## Pause

Wenn du eine längere Pause machst (Mittag, Termin außer Haus), kannst du das Tracking **pausieren**:

- Rechtsklick → **„Pause"**

In der Pause läuft die Stoppuhr nicht weiter, und es entstehen **keine neuen Einträge**. Sobald du das Tracking wieder startest, geht's mit der nächsten Bestätigung weiter.

## Debug-Intervall

Für Entwickler:innen und neugierige Tester:innen gibt es im **Debug-Tab** der Einstellungen ein zusätzliches Kurz-Intervall (5–30 Sekunden), mit dem du das Verhalten der App ohne langes Warten ausprobieren kannst. Im Alltag bitte ausgeschaltet lassen — das nervt schnell.
