---
title: Backups & Wiederherstellung
description: Versionierte JSON-Snapshots, optionale iCloud-Synchronisation und ein frei wählbarer Speicherort — alles lokal, ohne externen Cloud-Anbieter.
---

NowDoing schützt deine Daten mit **versionierten Backups**, optionalem **iCloud-Sync** und einem **eigenen Speicherort**. Alles bleibt lokal auf deinem Mac — der einzige nicht-lokale Weg ist Apples eigene iCloud-Infrastruktur, und nur, wenn du sie aktiv einschaltest. Grundlagen dazu in [Daten & Datenschutz](/reference/data-privacy/).

## Rolling Snapshots

Vor jedem Schreibvorgang an `data.json` legt NowDoing automatisch eine versionierte JSON-Kopie im Ordner `backups/` neben der Datendatei ab. So kommt nie eine halbe Datei zustande, und ein versehentlicher Eingriff bleibt rückholbar. Das Datei-Format der Snapshots ist identisch mit `data.json` und in [Spezifikationen](/integrations/specs/) als JSON Schema dokumentiert.

Ein **automatisches Aufräumen** dünnt den Ordner nach einer Rolling-Strategie aus: viele frische Snapshots bleiben erhalten, ältere werden in größeren Abständen behalten, ganz alte fallen weg. Damit wächst der Backup-Ordner nicht unbegrenzt.

## Verwalten & Wiederherstellen

Alles läuft über **Einstellungen → Speicher & Backups**:

- Liste aller Snapshots mit Zeitstempel und Größe.
- Aktionen pro Snapshot: **Wiederherstellen**, **Im Finder anzeigen**, **Löschen**.

Ein Klick auf **Wiederherstellen** öffnet eine Sicherheits-Rückfrage. Bestätigst du, ersetzt NowDoing die aktive `data.json` durch den gewählten Snapshot und lädt neu. **Vorher** wird der gerade ersetzte Stand selbst noch einmal als Backup gesichert — eine Wiederherstellung ist also rückgängig zu machen.

## Speicherort

Den Speicherort wählst du unter **Einstellungen → Speicher & Backups → Speicherort** oder bereits im [Willkommens-Assistenten](/getting-started/first-run/). Beim Wechsel kopiert NowDoing die aktuelle `data.json` einmalig in den neuen Ordner — existiert dort schon eine, bleibt sie unangetastet. Die Datei am alten Pfad wird **nicht** gelöscht.

| Option | Beschreibung | Datenfluss |
|---|---|---|
| **App-Container** (Default) | `~/Library/Application Support/NowDoing/` | Nur lokal |
| **Eigener Ordner** | z. B. Dropbox-Ordner, externe Platte, verschlüsseltes Volume | Lokal — Sync abhängig vom Ordner-Anbieter |
| **iCloud-Sync** | iCloud-Container deines Apple-Accounts | Apple iCloud Drive |

## iCloud-Sync

Aktivierbar unter **Einstellungen → Speicher & Backups → iCloud-Sync**. Beim Einschalten migriert NowDoing die lokale Datei einmalig in den iCloud-Container, beim Ausschalten zurück — ohne Datenverlust. Voraussetzung ist ein in den Systemeinstellungen aktives **iCloud Drive**. Auch die Snapshots im `backups/`-Ordner liegen dann im iCloud-Container.

Schreibt ein anderer Mac an derselben Datei, erkennt NowDoing die externe Änderung und lädt sie nach.

**iCloud + eigener Ordner gleichzeitig?** Solange iCloud-Sync aktiv ist, hat iCloud Vorrang; der eigene Ordner liegt dann brach. Das verhindert Konflikte aus zwei Quellen.

## Manueller Export

Für eine portable Kopie der gesamten Historie als Tabelle gibt es **Einstellungen → Daten → „Exportieren"** — deutsches CSV-Format mit `;` als Trennzeichen, UTF-8 BOM, RFC-4180-konform. Details unter [CSV-Export](/features/csv-export/). Für eigene Formate (Jahresreport, JSON, Markdown …) siehe [Export-Skripte](/features/export-scripts/).
