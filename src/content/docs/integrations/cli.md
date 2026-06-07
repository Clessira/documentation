---
title: CLI
description: Den clessira-Befehl im Terminal nutzen, um Tracking zu starten, Einträge nachzutragen und den Tagesstand abzufragen.
---

Clessira bringt einen kleinen Terminal-Befehl mit: **`clessira`**. Damit startest und stoppst du Tracking, trägst Zeit nach, fragst den heutigen Stand ab — alles ohne die App in den Vordergrund zu holen.

Der Befehl spricht intern mit der laufenden Mac-App über die [AppleScript-Schnittstelle](/integrations/applescript/). Die App muss also laufen (Menüleisten-Icon sichtbar).

## Installieren

In der Mac-App: **Einstellungen → Integrationen → CLI → Install in PATH**. Clessira legt den Befehl nach `~/.local/bin/clessira` und zeigt dir im Status-Bereich, ob `~/.local/bin` schon im `PATH` ist. Falls nicht, hängt die App dir den passenden `export`-Schnipsel für deine Shell aus, den du in `~/.zshrc` (oder `~/.bashrc`) übernimmst.

**Deinstallieren** geht im selben Bereich über **Deinstallieren**.

Nach einem App-Update genügt ein erneutes **Install in PATH**, um die CLI auf den Stand der App zu bringen.

## Befehle

```text
clessira start <activity> [--create-if-missing]
clessira stop
clessira log <activity> --duration <minutes|Xm|Xh|XhYm> [--note <text>] [--create-if-missing]
clessira today
clessira status
clessira help
```

### `start`

Startet das Tracking für eine vorhandene Aktivität:

```sh
clessira start "Refactor"
```

Mit `--create-if-missing` legt Clessira die Aktivität an, falls sie nicht existiert:

```sh
clessira start "PROJ-123 Review" --create-if-missing
```

Der Name muss exakt mit einer **aktiven** Aktivität übereinstimmen — archivierte werden ignoriert.

### `stop`

Beendet die laufende Sitzung:

```sh
clessira stop
```

Wenn nichts läuft, ist der Aufruf trotzdem erfolgreich (no-op).

### `log`

Trägt einen Zeitblock **rückwirkend** nach. Die Dauer kann als Minuten oder in Kurzform geschrieben werden:

```sh
clessira log "Standup" --duration 15
clessira log "Deep Work" --duration 1h30m --note "API-Refactor"
clessira log "Pairing" --duration 2h --create-if-missing
```

Akzeptierte Dauer-Formate: `30` (Minuten), `45m`, `2h`, `1h30m`. Der Eintrag endet **jetzt** und beginnt entsprechend früher.

### `today`

Gibt die heute insgesamt erfasste Zeit in Stunden aus:

```sh
$ clessira today
3.75
```

Die Ausgabe ist eine Dezimalzahl — praktisch für Shell-Pipelines.

### `status`

Gibt einen kompakten Statusblock aus:

```sh
$ clessira status
isTracking=true
currentActivity=Refactor
todayHours=3.75
```

Drei Zeilen im `key=value`-Format — direkt mit `grep` / `awk` weiterverarbeitbar.

## Beispiele

**Mittagspause als Eintrag nachtragen:**

```sh
clessira log "Mittag" --duration 45m --create-if-missing
```

**Aktive Aktivität in der Shell-Prompt anzeigen:**

```sh
clessira status | awk -F= '/currentActivity/ {print $2}'
```

**Tracking per Hotkey aus dem Terminal-Multiplexer starten:**

```sh
clessira start "Tickets" --create-if-missing && tmux display-message "tracking gestartet"
```

## Fehler & Exit-Codes

`clessira` beendet sich mit Exit-Code `0` bei Erfolg und `1` bei Fehlern. Typische Ursachen:

- **`Activity '…' not found`** — Aktivität fehlt oder ist archiviert. Mit `--create-if-missing` lösen.
- **`TrackingManager not available`** — Mac-App läuft nicht. Starte sie und versuche es erneut.
- **`Clessira is locked: no valid license installed`** — Lizenz fehlt oder ist abgelaufen. Sichtbar in **Einstellungen → Lizenz**.
- **AppleScript-Berechtigung** — beim ersten Aufruf fragt macOS, ob das Terminal Clessira steuern darf. Mit **OK** bestätigen. Falls versehentlich abgelehnt, in **Systemeinstellungen → Datenschutz & Sicherheit → Automation** wieder erlauben.

## Was die CLI **nicht** kann

- Aktivitäten umbenennen, archivieren oder löschen — das geht nur in der App.
- Einträge **bearbeiten** oder **löschen** — `log` legt nur neue Einträge an.
- Den Erfassungsdialog programmatisch öffnen — dafür gibt es die [HTTP-API](/integrations/http-api/) (`POST /branch-changed`).

Wenn du mehr Kontrolle brauchst (z. B. Suche nach Aktivitäten, Branch-Wechsel-Hook), nimm die [HTTP-API](/integrations/http-api/) oder eines der [SDKs](/integrations/sdks/).
