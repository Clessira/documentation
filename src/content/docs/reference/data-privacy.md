---
title: Daten & Datenschutz
description: Wo deine Daten liegen, was die App sendet und was nicht — die zentrale Versprechen-Seite.
---

**Deine Daten bleiben auf deinem Mac.** Das ist nicht Marketing-Phrase, sondern die Grundlage, auf der NowDoing gebaut ist.

## Speicherort

NowDoing speichert alle Daten in einer einzigen JSON-Datei im App-Container:

```
~/Library/Application Support/NowDoing/data.json
```

Die Datei enthält:

- Deine angelegten Aktivitäten (Namen, Farben, Archiv-Status)
- Alle Zeiteinträge (Aktivität, Start, Ende)
- Persönliche App-Einstellungen

Das ist alles. Kein versteckter Tracking-Speicher, keine Telemetry-Caches.

## Was NowDoing **nicht** tut

- ❌ Kein Konto, keine Anmeldung.
- ❌ Keine Cloud-Synchronisation, kein Server.
- ❌ Kein Analytics, kein Crash-Reporting an einen externen Dienst.
- ❌ Kein Zugriff auf Bildschirminhalte, Tastatureingaben oder Apps.
- ❌ Kein Versand deiner Daten ins Internet — die App enthält **keine Netzwerk-Aufrufe nach außen**.

## Loopback-Listener (optional)

Wenn du die **VS Code Integration** aktivierst, öffnet die App einen kleinen HTTP-Listener auf `127.0.0.1`. Dieser bindet **ausschließlich an die Loopback-Schnittstelle** — er ist vom Netzwerk aus nicht erreichbar.

Nachrichten an diesen Listener sind HMAC-signiert, sodass nur Clients mit dem geteilten Geheimnis (Shared Secret) angenommen werden.

Mehr dazu unter [VS Code Integration](/integrations/vscode/).

## Backups

Da alle Daten in einer einzelnen Datei liegen, sind Backups trivial:

- **Time Machine** sichert die Datei automatisch mit deinem normalen System-Backup.
- **Manueller Export** über **Einstellungen → Daten → „Daten exportieren"**.

Beim Import einer Backup-Datei werden vorhandene Daten ersetzt — die App fragt vor dem Schreiben nach.

## Sandboxing & Hardened Runtime

NowDoing läuft mit aktiviertem **App Sandbox** und **Hardened Runtime**. Das bedeutet:

- Die App hat **keinen Zugriff** auf Dateien außerhalb ihres eigenen Containers.
- Kein Zugriff auf andere Apps, Bildschirminhalte oder Tastatur-Events.
- Code-Injection und Library-Loading sind systemseitig blockiert.

Die einzigen abgefragten Rechte sind **Benachrichtigungen** (für den Erinnerungs-Toast) und optional **Login-Items** (für „Bei Anmeldung starten").

## App-Sterben / Datenverlust

Falls beim Schreiben ein Fehler auftritt (z. B. Festplatte voll), erscheint in den **Einstellungen → Daten** ein rotes Banner mit dem Fehler-Detail. NowDoing benutzt **atomare Schreibvorgänge**: entweder die ganze Datei wird ersetzt, oder nichts ändert sich — eine halbe, kaputte Datei kann nicht entstehen.
