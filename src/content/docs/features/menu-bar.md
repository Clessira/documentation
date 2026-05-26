---
title: Menüleiste & Popover
description: Wie das Menüleisten-Symbol, das Popover und die kontextsensitive Anzeige funktionieren.
---

NowDoing lebt komplett in der macOS-Menüleiste — kein Dock-Icon, kein Finder-Eintrag, kein Vollbild-Fenster, das deinen Workflow unterbricht.

## Das Statussymbol

Das Symbol in der Menüleiste zeigt einen kleinen farbigen Punkt — die Farbe der gerade laufenden Aktivität. So siehst du auf einen Blick, in welchem „Modus" du gerade getrackt bist, ohne klicken zu müssen.

**Mit der Maus drüber:** Tooltip mit der aktuellen Aktivität, der verstrichenen Zeit und der heutigen Gesamtdauer.

## Linksklick — Popover öffnen

Ein kurzer Klick auf das Symbol öffnet das Popover. Darin findest du:

- Die aktive Aktivität mit Live-Stoppuhr.
- Schnellauswahl deiner zuletzt genutzten Aktivitäten.
- Drei Ansichten auf den heutigen Tag (siehe [Tagesleiste & Ansichten](/features/timeline/)).
- Buttons für **„Aktivität anlegen"** und **„Stundenzettel öffnen"**.

Klick außerhalb des Popovers — es schließt sich automatisch.

## Popover anpinnen

Brauchst du das Popover länger sichtbar — etwa während eines Meetings, oder weil du parallel im Browser nachschlägst —, klick in der Steuerleiste unten auf das 📌-**Pin**-Symbol. Das Popover bleibt dann **offen, auch wenn du außerhalb klickst**; ein erneuter Klick auf das Symbol gibt das Standardverhalten wieder frei.

Im angepinnten Zustand behält das Popover seine Position relativ zum Statussymbol. Es bleibt über App-Wechsel hinweg sichtbar — ideal, um beim Tracking schnell Notizen zu ergänzen oder die Tagesleiste im Blick zu haben.

Das Anpinnen wirkt nur auf die jeweils geöffnete Sitzung — beim nächsten Linksklick auf das Statussymbol startet das Popover wieder im normalen, klick-zum-Schließen-Modus.

## Rechtsklick — Kontextmenü

Ein Rechtsklick (oder Ctrl-Klick) auf das Symbol öffnet ein klassisches macOS-Kontextmenü:

- **Stundenzettel** — öffnet das Fenster mit Tages- und Wochenansicht.
- **Einstellungen** — alle Optionen.
- **Pause** — pausiert das Tracking, bis du wieder aktiv bestätigst.
- **NowDoing beenden**.

## Anzeigemodus

Unter **Einstellungen → Allgemein → Menüleisten-Anzeige** legst du fest, was neben dem Symbol erscheint, während eine Aktivität läuft. Vier Modi stehen zur Auswahl:

| Modus | Anzeige |
| :--- | :--- |
| **Nur Icon** | Nur das Statussymbol. |
| **Icon + Text** | Symbol und Aktivitätsname. |
| **Icon + Zeit** | Symbol und verstrichene Zeit der laufenden Aktivität. |
| **Icon + Text + Zeit** | Symbol, Aktivitätsname und verstrichene Zeit. |

Lange Aktivitätsnamen werden nach 15 Zeichen abgeschnitten, damit das Symbol nicht beliebig viel Platz in der Menüleiste belegt. Die Zeit wird im Format `H:MM` angezeigt.

Auf engen Menüleisten — etwa MacBooks mit Notch und vielen Menübar-Apps — bleibt **Nur Icon** die platzsparendste Wahl. Auf großen Monitoren liefern die kombinierten Modi mehr Kontext, ohne dass du das Popover öffnen musst.

## Der automatische Prompt

Sobald dein Tracking-Intervall abläuft, öffnet sich das Popover **automatisch** und fokussiert sich. Du brauchst nicht zur Maus zu greifen — tippe los, navigiere mit Pfeiltasten, bestätige mit <kbd>Enter</kbd>.

Bestätigst du dieselbe Aktivität noch einmal, läuft der Live-Zähler weiter, ohne den vorherigen Eintrag zu beenden — der Block wird nahtlos verlängert.
