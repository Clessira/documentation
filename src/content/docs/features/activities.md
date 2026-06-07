---
title: Aktivitäten & Gruppen
description: Aktivitäten anlegen, ordnen, einfärben, gruppieren, anheften und archivieren — die Bausteine deiner Zeiterfassung.
---

Eine **Aktivität** in Clessira ist alles, was du tracken möchtest: `Coding`, `📞 Calls`, `Mittagspause`, `Lesen`. Aktivitäten haben einen Namen (Emojis sind Teil davon), eine optionale Farbe und können in **Gruppen** zusammengefasst werden — eine Ebene, mehr nicht.

## Eine Aktivität anlegen

Du kannst eine neue Aktivität an zwei Stellen anlegen:

- **Im Popover** — tippe einen Namen ins Suchfeld, der noch nicht existiert, und bestätige mit <kbd>Enter</kbd>. Auf einem vergangenen Tag musst du zusätzlich eine Dauer (`45m`, `1h30m`) eintragen.
- **In den Einstellungen** — öffne **Einstellungen → Aktivitäten**, wähle im Footer unten `Aktivität`, tippe den Namen und drücke <kbd>Enter</kbd> oder klick den Plus-Knopf.

**Tipp:** Wenige, aussagekräftige Aktivitäten sind besser als viele zu spezifische. Drei bis acht ist ein guter Bereich. Lieber eine Aktivität `Coding` und im Eintrag eine Notiz „Feature X" als zehn Aktivitäten pro Feature.

## Aktivitäten verwalten

**Einstellungen → Aktivitäten** zeigt eine Baumliste mit drei Bereichen:

1. **Gruppen** — jede Gruppe als Sektion mit ihren Aktivitäten und einem Zähler.
2. **Ohne Gruppe** — alle Aktivitäten, die zu keiner Gruppe gehören.
3. **Archiv** — eingeklappte Sektion mit den archivierten Aktivitäten und einem **Wiederherstellen**-Knopf pro Zeile.

Per **Drag-and-Drop** ziehst du Aktivitäten zwischen Sektionen — auf einen Gruppen-Header, in eine Gruppensektion oder in den Bereich „Ohne Gruppe".

### Inline umbenennen

Rechtsklick auf eine Aktivität → **Umbenennen**. Die Zeile wird zur Eingabezeile: links eine Farbauswahl, daneben das Namensfeld, rechts ein grüner Bestätigen- und ein grauer Abbrechen-Knopf. <kbd>Enter</kbd> speichert. Dasselbe funktioniert per Rechtsklick auf einen Gruppen-Header.

### Aktivitäts-Einstellungen (Sheet)

Rechtsklick → **Einstellungen…** öffnet ein Sheet mit allen Details einer Aktivität:

- **Allgemein** — Name, Farbe, Gruppe (Picker mit allen Gruppen oder „Ohne Gruppe"), **Angeheftet (Schnellauswahl)**: angeheftete Aktivitäten erscheinen als Ein-Klick-Chips im Prompt-Popover.
- **Ziele** — optionales **Wochenziel** in Stunden (0,25 – 168 h, Schritte von 0,5 h).
- **Notizen & Verrechnung** — optionale **Standard-Notiz**, die beim Loggen in das Notizfeld vorausgefüllt wird, sowie eine optionale **Verrechnungsnummer**.
- **Timer** — optionales **eigenes Prompt-Intervall** in Minuten (1 – 120). Ohne Override gilt das globale Intervall.
- Ganz unten: **Archivieren** (rot, schließt das Sheet).

Speichern bestätigt das Sheet, Abbrechen verwirft die Änderungen. Die Farbauswahl in der Zeile (Inline-Bearbeitung) und im Sheet schreibt direkt — sie wird durch den Speichern-Knopf nicht zurückgenommen.

### Anheften (Schnellauswahl)

Rechtsklick → **Anheften** markiert eine Aktivität als Schnellauswahl. Sie taucht im Prompt-Popover prominent auf. **Loslösen** macht es rückgängig. Ein kleines Pin-Symbol in der Zeile zeigt den Zustand.

### Aktivität einer Gruppe zuordnen

Zwei Wege:

- **Drag-and-Drop** auf die Zielgruppe (oder „Ohne Gruppe").
- **Rechtsklick → Verschieben nach → \<Gruppe\> / Ohne Gruppe**.

## Gruppen

Gruppen bündeln verwandte Aktivitäten und bekommen eine eigene Farbe und einen optionalen Standard-Wert für Notiz und Verrechnungsnummer. Sie haben **keine eigenen Zeiteinträge** — Summen entstehen aus den Einträgen ihrer Mitglieder.

### Eine Gruppe anlegen

**Einstellungen → Aktivitäten → Footer**: Wähle `Gruppe` im Segmented-Picker, tippe den Namen, bestätige.

### Eine Gruppe bearbeiten

- **Rechtsklick auf den Gruppen-Header → Umbenennen** — Inline-Editor wie bei Aktivitäten.
- **Rechtsklick → Einstellungen…** — Sheet mit **Name**, **Farbe**, **Standard-Notiz verwenden** (optional), **Verrechnungsnummer**.

### Eine Gruppe löschen

**Rechtsklick auf den Gruppen-Header → Gruppe löschen**. Ein Bestätigungsdialog warnt: „Aktivitäten in *Name* werden ungruppiert. Zeiteinträge bleiben erhalten." Nach dem Löschen wandern die Mitglieder in den Bereich „Ohne Gruppe", behalten alle ihre Einträge und können einer anderen Gruppe zugewiesen werden.

## Archivieren statt Löschen

Eine Aktivität kannst du **nicht direkt löschen**, solange Einträge an ihr hängen — deine historischen Daten sollen konsistent bleiben. Stattdessen **archivierst** du sie (Rechtsklick → **Archivieren**, oder über das Aktivitäts-Sheet → **Archivieren**):

- Sie verschwindet aus der Schnellauswahl und aus den Aktivitäts-Listen im Popover.
- Sie erscheint im **Archiv**-Bereich in der Liste und in alten Einträgen, die sie weiter referenzieren.
- **Wiederherstellen** über den Knopf in der Archiv-Zeile bringt sie zurück.

## Einträge bearbeiten

In der Tagesansicht (Popover und Stundenzettel) kannst du **einen einzelnen Zeiteintrag löschen**: bewege die Maus auf die Zeile, ein kleines Mülltonnen-Symbol erscheint rechts neben der Uhrzeit. Klick darauf entfernt den Eintrag und rechnet die Tagessumme neu.

Eine Inline-Bearbeitung von Start-/Endzeit oder das nachträgliche Umhängen eines Eintrags auf eine andere Aktivität gibt es derzeit nicht — wenn du einen Eintrag korrigieren willst, lösche ihn und log ihn neu. Für vergangene Tage hat das Popover ein **Dauer-Feld** (`45m`, `1h30m`), mit dem du Einträge nachtragen kannst.
