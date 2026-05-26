---
title: Barrierefreiheit
description: Wie NowDoing mit VoiceOver, Tastatur-Navigation, dynamischen Schriftgrößen und den macOS-Bedienungshilfen zusammenspielt.
---

NowDoing ist auf die macOS-Bordmittel zur Barrierefreiheit abgestimmt. Statt eigene Schalter zu erfinden, folgt die App den System-Einstellungen unter `Systemeinstellungen → Bedienungshilfen` — du konfigurierst einmal zentral, NowDoing zieht nach.

## VoiceOver

Alle interaktiven Elemente — Statussymbol, Popover-Buttons, Combobox, Aktivitätszeilen, Stundenzettel-Tabellen, Widgets — tragen **beschreibende Labels und Hints**. Wo es sinnvoll ist, sind **VoiceOver-Custom-Actions** hinterlegt (z. B. „Tracking starten", „Eintrag löschen", „Pin umschalten"), damit du nicht durch jede Zeile rotieren musst.

VoiceOver aktivierst du mit <kbd>⌘F5</kbd> oder unter `Systemeinstellungen → Bedienungshilfen → VoiceOver`.

## Tastatur-Navigation

Jeder Workflow lässt sich ohne Maus erledigen — Popover öffnen, Aktivität wählen, Notiz tippen, bestätigen, Stundenzettel öffnen, Einstellungen ändern. Die Tab-Reihenfolge folgt der visuellen Lese-Reihenfolge.

Die vollständige Liste der Tastenkürzel findest du unter [Tastaturkürzel](/reference/keyboard-shortcuts/); die Bedienung der Tracking-Abfrage ist im [Prompt-Popover](/features/prompt-popover/) im Detail beschrieben.

## Fokus-Indikatoren

Das aktuell fokussierte Element ist immer sichtbar markiert — die macOS-System-Akzentfarbe wird respektiert, damit Nutzer:innen mit eigenen Akzent-Einstellungen den Fokus zuverlässig erkennen.

## Dynamische Schriftgrößen

NowDoing respektiert die **macOS-System-Textgröße** (`Systemeinstellungen → Anzeige → größere Texte`). Tabellen, Listen und Popover skalieren mit; das Layout passt sich an, ohne dass Inhalte abgeschnitten werden.

## Reduzierte Bewegung

Animationen — z. B. das Aufgleiten des Popovers oder der Notch-Drop — werden automatisch reduziert, wenn `Systemeinstellungen → Bedienungshilfen → Bildschirm → "Bewegung reduzieren"` aktiv ist.

## Farben & Kontrast

Aktivitätsfarben sind nie das einzige Erkennungsmerkmal — daneben stehen immer Name, Symbol oder Position. Bei aktiver „Mehr Kontrast"-Option in den Bedienungshilfen werden Rahmen und Text-Kontraste verstärkt. Light- und Dark-Mode werden voll unterstützt.

## Sprachausgabe für Stunden

Über den App Intent **„Heutige Stunden"** liest Siri die Tagessumme vor — siehe [App Intents](/integrations/app-intents/).

## Bedienungshilfen-Settings im Überblick

| macOS-Einstellung | Wirkung in NowDoing |
| :--- | :--- |
| VoiceOver (<kbd>⌘F5</kbd>) | Labels, Hints und Custom-Actions auf allen Elementen. |
| Tastatur-Navigation | Vollständige Bedienung via Tab, Pfeiltasten und Shortcuts. |
| Größere Texte | Popover, Tabellen und Listen skalieren mit. |
| Bewegung reduzieren | Animationen und Übergänge werden gekürzt oder ausgeblendet. |
| Mehr Kontrast | Verstärkte Rahmen und Text-Kontraste. |
| System-Akzentfarbe | Wird für Fokus-Ringe und Auswahl-Highlights übernommen. |

## Bekannte Lücken

Die Heatmap-Visualisierungen (Monatsansicht im Stundenzettel, Heatmap-Widget) bleiben primär grafisch. Als Alternative gibt es überall textuelle Listen mit den gleichen Daten — z. B. die Liste-Ansicht im Tag oder die Pivot-Ansicht im Stundenzettel.

Feedback zu Lücken oder Wünschen: [hello@nowdoing.app](mailto:hello@nowdoing.app).

Siehe auch [Menüleiste & Popover](/features/menu-bar/) und die Schwesterseite [Lokalisierung](/reference/localization/).
