---
title: App Intents & Services
description: NowDoing in Kurzbefehlen, Spotlight, Siri und im macOS-Services-Menü.
---

NowDoing stellt **sieben App Intents** und **drei macOS-Services** bereit. Damit lässt sich Tracking aus der Shortcuts-App, aus Spotlight, per Siri und direkt aus dem Kontextmenü beliebiger Apps starten — ohne dass NowDoing in den Vordergrund kommt.

Wenn du lieber Skripte schreibst, sieh dir [AppleScript](/integrations/applescript/) oder das [CLI](/integrations/cli/) an. Die HTTP-API für externe Tools ist unter [HTTP-API](/integrations/http-api/) beschrieben.

## App Intents

Die folgenden Aktionen tauchen in **Kurzbefehle.app**, in **Spotlight** und in jeder Shortcuts-Automation auf:

| Intent | Parameter | Wirkung |
|---|---|---|
| **Tracking starten** | Aktivität | Startet Tracking für die genannte Aktivität |
| **Tracking stoppen** | – | Stoppt die laufende Erfassung |
| **Pause umschalten** | – | Pausiert / setzt den laufenden Eintrag fort |
| **Eintrag loggen** | Aktivität, Dauer, Notiz (optional) | Legt rückwirkend einen Eintrag an |
| **Stundenzettel öffnen** | – | Bringt das Stundenzettel-Fenster nach vorn |
| **Einstellungen öffnen** | – | Bringt das Einstellungen-Fenster nach vorn |
| **Heutige Stunden** | – | Gibt die gebuchten Stunden des Tages als Zahl zurück |

Die Aktionen lassen sich frei kombinieren — etwa „bei Eintreffen am Büro **Tracking starten → Coding**" über die Shortcuts-Automation, oder ein Stream-Deck-Knopf, der **Pause umschalten** auslöst.

### Sprachbefehle (App Shortcuts)

Für die häufigsten Aktionen sind voreingestellte deutsche und englische Phrasen hinterlegt:

| Phrase | Aktion |
|---|---|
| „Starte Tracking in NowDoing" | Öffnet Aktivitäts-Auswahl |
| „Pause NowDoing" | Pause umschalten |
| „Stoppe Tracking in NowDoing" | Tracking stoppen |
| „Wie viele Stunden heute in NowDoing" | Heutige Stunden vorlesen |
| "Start tracking in NowDoing" | Activity picker (EN) |
| "Pause NowDoing" / "Stop NowDoing" | Toggle pause / stop |
| "How many hours today in NowDoing" | Today's hours (EN) |

Diese Phrasen funktionieren mit Siri (sofern aktiviert) und in der globalen Spotlight-Eingabe. Du kannst sie in **Kurzbefehle.app → App-Kurzbefehle → NowDoing** umbenennen oder eigene anlegen.

### Verfügbarkeit prüfen

Tauchen die Intents nicht auf, öffne **Kurzbefehle.app**, in der Seitenleiste **App-Kurzbefehle** wählen und nach **NowDoing** scrollen. macOS indiziert neu installierte Apps manchmal mit Verzögerung — ein Neustart hilft notfalls.

## macOS-Services

Im Kontextmenü jeder Standard-App (Mail, Notizen, TextEdit, Safari, …) erscheinen unter **Dienste** drei NowDoing-Einträge, sobald Text markiert ist:

### „Als Notiz in NowDoing loggen"

Hängt den markierten Text als **Notiz** an den jüngsten Eintrag der aktuellen Aktivität an. Existiert noch kein Eintrag, aber Tracking läuft, wird ein kleiner Eintrag mit der Notiz angelegt.

Praktisch für: Ticket-Beschreibungen aus dem Browser, Slack-Zitate, Meeting-Notizen.

### „Als neue Aktivität anlegen"

Macht aus dem markierten Text eine **neue Aktivität**. NowDoing prüft vorher case-insensitive, ob diese Aktivität schon existiert, und meldet sich per Systembenachrichtigung, falls ja.

### „Tracking starten"

Sucht eine Aktivität mit exakt dem markierten Namen (case-insensitive) und startet die Erfassung. Findet sich keine, zeigt eine Benachrichtigung das Problem.

Gut für: Ticket-Nummern oder Task-Namen direkt aus E-Mail, Jira oder Kalender heraus zu tracken.

### Tastenkürzel zuweisen

Über **Systemeinstellungen → Tastatur → Tastaturkurzbefehle → Dienste** lassen sich allen drei Services eigene Tastenkürzel zuordnen.

## Sandbox & Berechtigungen

Sowohl App Intents als auch die Services laufen vollständig innerhalb der **macOS App Sandbox**. Es sind **keine** zusätzlichen Berechtigungen (Vollzugriff, Bedienungshilfen) nötig — die Aktionen werden über die regulären macOS-Schnittstellen ausgeführt.
