---
title: AppleScript
description: Clessira per AppleScript steuern — aus Skripten, Shortcuts, Alfred, Raycast oder direkt via osascript.
---

Clessira bringt eine eigene **AppleScript-Schnittstelle** mit. Damit lassen sich Tracking-Aktionen aus jeder Quelle auslösen, die mit macOS-Automation spricht — Apple Shortcuts, Alfred, Raycast, Keyboard Maestro, eigene `.scpt`-Dateien oder `osascript` aus dem Terminal.

Die Schnittstelle ist auch das, was die mitgelieferte [`clessira` CLI](/integrations/cli/) intern aufruft.

## Voraussetzungen

- Die Mac-App läuft (Menüleisten-Icon sichtbar).
- Eine gültige Lizenz ist eingespielt — ohne Lizenz lehnen alle Befehle mit Fehler `4` (`Clessira is locked`) ab.
- Beim ersten Aufruf fragt macOS, ob das aufrufende Programm Clessira steuern darf. Mit **OK** bestätigen. Korrektur später unter **Systemeinstellungen → Datenschutz & Sicherheit → Automation**.

## Dictionary anzeigen

Das vollständige Scripting-Dictionary kannst du im **Script-Editor** öffnen:

1. Script-Editor starten (`/System/Applications/Utilities/Script Editor.app`).
2. **Ablage → Dictionary öffnen…** → **Clessira**.

Dort siehst du alle Verben, Eigenschaften und Klassen inklusive Beschreibung.

## Verben

### `start tracking`

Startet das Tracking für eine Aktivität.

```applescript
tell application "Clessira"
  start tracking "Refactor"
end tell
```

Mit `createIfMissing` legt Clessira die Aktivität an, wenn sie noch nicht existiert:

```applescript
tell application "Clessira"
  start tracking "PROJ-123 Review" createIfMissing true
end tell
```

Rückgabewert: `true` bei Erfolg. Vergleiche mit `name` werden gegen **aktive** (nicht archivierte) Aktivitäten geprüft.

### `stop tracking`

Beendet die laufende Sitzung.

```applescript
tell application "Clessira" to stop tracking
```

Wenn nichts läuft, ist der Aufruf trotzdem erfolgreich.

### `log entry`

Trägt einen Zeitblock rückwirkend nach. Der Eintrag endet **jetzt** und beginnt entsprechend `duration` Minuten früher.

```applescript
tell application "Clessira"
  log entry activity "Standup" duration 15
end tell
```

Mit optionaler Notiz und automatischem Anlegen:

```applescript
tell application "Clessira"
  log entry activity "Deep Work" duration 90 ¬
    note "API-Refactor" createIfMissing true
end tell
```

`duration` ist eine **ganzzahlige Minutenangabe**. Es gibt keine Stunden-Kurzform — die übernimmt die [CLI](/integrations/cli/).

### `today hours`

Liefert die heute insgesamt erfasste Zeit als Dezimal-Stunden:

```applescript
tell application "Clessira" to today hours
-- → 3.75
```

### `tracking status`

Liefert einen kompakten Status-String im Format `isTracking|currentActivity|todayHours`:

```applescript
tell application "Clessira" to tracking status
-- → "true|Refactor|3.75"
```

Die Trennung mit `|` ist absichtlich simpel gehalten, damit Shell-Wrapper sie ohne JSON-Parser zerlegen können.

## Eigenschaften

Auf der `application`-Klasse stehen vier nur-lesbare Eigenschaften:

| Eigenschaft        | Typ      | Bedeutung |
| ------------------ | -------- | --------- |
| `is tracking`      | boolean  | Läuft gerade eine Sitzung? |
| `current activity` | text     | Name der laufenden Aktivität (leer, wenn nichts läuft). |
| `today hours`      | real     | Heute erfasste Stunden. |
| `is on break`      | boolean  | Pause aktiv? |

Beispiel:

```applescript
tell application "Clessira"
  if is tracking then
    return "Aktiv: " & current activity & " (" & (today hours as text) & "h heute)"
  else
    return "Nicht aktiv"
  end if
end tell
```

## Klassen

| Klasse       | Eigenschaften                                       |
| ------------ | --------------------------------------------------- |
| `activity`   | `id` (text), `name` (text), `archived` (boolean)    |
| `time entry` | `id`, `activity name`, `start date`, `end date`, `note` |

Aktuell sind beide Klassen als **lesbare Elemente** auf der `application` registriert — nützlich, wenn ein Skript bestehende Aktivitäten oder Einträge inspizieren möchte. Schreibzugriff gibt es ausschließlich über die Verben oben.

## Aufruf aus der Shell

Jedes Verb lässt sich direkt mit `osascript` aufrufen:

```sh
osascript -e 'tell application "Clessira" to start tracking "Refactor" createIfMissing true'
osascript -e 'tell application "Clessira" to today hours'
```

Wenn du das öfter brauchst, ist die [`clessira` CLI](/integrations/cli/) bequemer — sie übernimmt das Quoten und die Dauer-Kurzform.

## Apple Shortcuts

In Shortcuts lassen sich die Verben über **„AppleScript ausführen"** ansteuern:

1. Neuen Shortcut anlegen.
2. Aktion **AppleScript ausführen** hinzufügen.
3. Skript einfügen, z. B.:

   ```applescript
   tell application "Clessira"
     start tracking "Fokus" createIfMissing true
   end tell
   ```

4. Beim ersten Lauf bestätigt macOS die Automation-Berechtigung.

So lassen sich Hotkeys, Focus-Modi oder NFC-Tags an Clessira-Aktionen koppeln.

## Fehlercodes

Schlägt ein Verb fehl, setzt Clessira eine `script error number`:

| Code | Bedeutung |
| ---: | --------- |
| `1`  | Aktivitätsname fehlt. |
| `2`  | Mac-App nicht erreichbar (`TrackingManager` nicht verfügbar). |
| `3`  | Aktivität nicht gefunden (und `createIfMissing` war `false`). |
| `4`  | Keine gültige Lizenz. |
| `5`  | Sonstiger interner Fehler — die genaue Meldung steht im `script error string`. |

Im Script-Editor erscheinen die Codes inkl. Klartext; aus `osascript` kommt die Meldung auf `stderr` und der Exit-Code ist `1`.

## Wann lieber **nicht** AppleScript?

- **Aus eigenen Apps oder Editor-Plugins:** nimm die [HTTP-API](/integrations/http-api/). HMAC-signiert, JSON, kein osascript-Overhead, keine Automation-Berechtigung pro App.
- **Aus Node, Bun oder Python:** nimm eines der [SDKs](/integrations/sdks/).
- **Aus dem Terminal als Mensch:** die [CLI](/integrations/cli/) ist der bequeme Wrapper.

AppleScript ist die richtige Wahl, wenn die Quelle bereits AppleScript spricht (Shortcuts, Alfred, Keyboard Maestro, Script-Editor) oder du genau einen Hotkey ohne weitere Tooling-Kosten brauchst.
