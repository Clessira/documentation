---
title: Daten & Datenschutz
description: Wo deine Daten liegen, was die App sendet und was nicht — die zentrale Versprechen-Seite.
---

**Deine Daten bleiben standardmäßig auf deinem Mac.** Das ist nicht Marketing-Phrase, sondern die Grundlage, auf der Clessira gebaut ist. Alles, was diese Standard-Annahme verändert, ist **opt-in** und auf dieser Seite einzeln aufgeführt.

## Speicherort

Clessira speichert alle Daten in einer einzigen JSON-Datei. Standardmäßig liegt sie im App-Container:

```
~/Library/Application Support/Clessira/data.json
```

Du kannst den Speicherort unter **Einstellungen → Daten → „Eigener Ordner wählen"** auf ein beliebiges Verzeichnis umstellen — etwa einen Ordner in einem Cloud-Drive, auf einem verschlüsselten Volume oder einem externen Laufwerk. Die Datei selbst bleibt unverändert, nur ihr Ort ändert sich. Bei Auswahl wird die bestehende Datei einmalig an den neuen Ort kopiert; ab dann wird ausschließlich dort gelesen und geschrieben.

Die Datei enthält:

- Deine angelegten Aktivitäten (Namen, Farben, Archiv-Status)
- Alle Zeiteinträge (Aktivität, Start, Ende)
- Persönliche App-Einstellungen

Das ist alles. Kein versteckter Tracking-Speicher, keine Telemetry-Caches.

## iCloud-Sync (optional, standardmäßig aus)

Wenn du es willst, kann Clessira deine `data.json` über deinen privaten **iCloud Drive** zwischen mehreren Macs synchronisieren. Aktiviert wird das unter **Einstellungen → Speicher & Backups → „Mit iCloud synchronisieren"**.

Bei aktivem iCloud-Sync:

- Die Datei liegt im iCloud-Ubiquity-Container deines Apple-Accounts statt im lokalen App-Container.
- Es gibt **keinen Clessira-Server**. Sync läuft ausschließlich über Apples iCloud-Infrastruktur — die Daten gehen nicht an uns.
- Bearbeitest du auf zwei Macs gleichzeitig, **gehen keine Einträge verloren**: Clessira führt beide Stände Eintrag für Eintrag zusammen. Änderungen an verschiedenen Einträgen bleiben beide erhalten; ändern beide Macs denselben Eintrag, gewinnt die zuletzt gemachte Änderung, und Gelöschtes bleibt gelöscht.
- iCloud-Sync und „Eigener Ordner" schließen sich aus: solange iCloud aktiv ist, wird der gewählte Ordner nicht verwendet.

## Was Clessira **nicht** tut

- ❌ Kein Konto, keine Anmeldung bei Clessira.
- ❌ Keine eigenen Server, kein Backend.
- ❌ Kein eigenes Analytics, kein eigenes Crash-Reporting an einen externen Dienst.
- ❌ Kein Zugriff auf Bildschirminhalte, Tastatureingaben oder andere Apps.
- ❌ Kein Versand deiner Daten ins Internet — die App enthält **keine Netzwerk-Aufrufe nach außen**. Die einzigen Ausnahmen sind die optionalen, oben beschriebenen Mechanismen (iCloud-Sync, Loopback-Listener) und Apples TestFlight bei Beta-Builds.

## Loopback-Listener (optional)

Wenn du die **VS Code Integration** aktivierst, öffnet die App einen kleinen HTTP-Listener auf `127.0.0.1`. Dieser bindet **ausschließlich an die Loopback-Schnittstelle** — er ist vom Netzwerk aus nicht erreichbar.

Nachrichten an diesen Listener sind HMAC-signiert, sodass nur Clients mit dem geteilten Geheimnis (Shared Secret) angenommen werden.

Mehr dazu unter [VS Code Integration](/integrations/vscode/).

## TestFlight-Beta-Builds

Wenn du Clessira als **Beta über Apples TestFlight** installierst, gelten Apples Standard-Bedingungen für TestFlight: Apple kann Absturzberichte und grundlegende Nutzungs-Metriken an uns als Entwickler weiterreichen. Das ist Apple-Infrastruktur, kein Clessira-eigenes Telemetry-System — und ausschließlich relevant, solange du eine TestFlight-Build benutzt. Die normale Version aus dem Mac App Store sendet nichts.

## Backups

Da alle Daten in einer einzelnen Datei liegen, sind Backups trivial:

- **Time Machine** sichert die Datei automatisch mit deinem normalen System-Backup.
- **Manueller Export** über **Einstellungen → Daten → „Daten exportieren"**.

Beim Import einer Backup-Datei werden vorhandene Daten ersetzt — die App fragt vor dem Schreiben nach.

## Sandboxing & Hardened Runtime

Clessira läuft mit aktiviertem **App Sandbox** und **Hardened Runtime**. Das bedeutet:

- Die App hat **keinen Zugriff** auf Dateien außerhalb ihres eigenen Containers — ausgenommen der von dir explizit gewählte Eigene-Ordner-Pfad, der über ein Security-Scoped Bookmark freigegeben ist.
- Kein Zugriff auf andere Apps, Bildschirminhalte oder Tastatur-Events.
- Code-Injection und Library-Loading sind systemseitig blockiert.

Die einzigen abgefragten Rechte sind **Benachrichtigungen** (für den Erinnerungs-Toast) und optional **Login-Items** (für „Bei Anmeldung starten").

## App-Sterben / Datenverlust

Falls beim Schreiben ein Fehler auftritt (z. B. Festplatte voll), erscheint in den **Einstellungen → Daten** ein rotes Banner mit dem Fehler-Detail. Clessira benutzt **atomare Schreibvorgänge**: entweder die ganze Datei wird ersetzt, oder nichts ändert sich — eine halbe, kaputte Datei kann nicht entstehen.
