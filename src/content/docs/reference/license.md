---
title: Lizenz
description: Wie NowDoing eine Lizenz prüft, sie über das Aktivierungs-Fenster eingibst und im Einstellungs-Tab verwaltest.
---

NowDoing wird mit einem signierten Lizenzschlüssel freigeschaltet. Die Prüfung läuft vollständig auf deinem Mac — der Schlüssel wird gegen einen in der App eingebetteten öffentlichen Schlüssel verifiziert, es geht kein Request an einen Server.

## Lizenz aktivieren

Beim ersten Start (oder solange keine gültige Lizenz hinterlegt ist) zeigt NowDoing ein kompaktes Aktivierungs-Fenster mit Medaillon, Eingabefeld und Drop-Zone. Solange dieses Fenster offen ist, sind Menüleisten-Icon, globaler Shortcut, Rechtsklick-Menü und alle externen Integrationen deaktiviert.

So aktivierst du:

1. Lizenzschlüssel besorgen — als Text oder als `.txt`-Datei aus der Bestätigungs-Mail.
2. Schlüssel in das Eingabefeld einfügen **oder** die Datei direkt auf das Eingabefeld ziehen.
3. **„Aktivieren"** klicken (oder <kbd>Enter</kbd>). Bei gültigem Schlüssel schließt sich das Fenster und das Menüleisten-Icon erscheint.

Schlägt die Prüfung fehl, steht der Grund direkt unter dem Eingabefeld — falsches Format, ungültige Signatur, abgelaufenes Datum oder nicht für diese App-Version gültig.

## Lizenz-Tab in den Einstellungen

Eine aktive Lizenz verwaltest du unter **Einstellungen → Lizenz**. Die Karte zeigt oben das Medaillon und eine Reihe Badges, darunter die Lizenz-Details.

### Badges

| Badge | Bedeutung |
|---|---|
| **Aktiv** | Lizenz ist gültig und signaturgeprüft. |
| **Lifetime** | Lizenz hat kein Ablaufdatum. |
| **`N` Tage** | Tage bis Ablauf. Blau ab 31 Tagen, orange darunter — Hinweis, dass die Verlängerung ansteht. |
| **v`X`** | Lizenz gilt nur bis zu einer bestimmten App-Major-Version (z. B. `v1`). Fehlt das Badge, gilt sie für jede Version. |

### Details

- **Lizenznehmer** und **E-Mail** — der Name auf der Lizenz.
- **Ausgestellt am** und (sofern gesetzt) **Gültig bis**.
- **Max. App-Version** — Versions-Obergrenze, falls die Lizenz dafür ein Limit trägt.
- **Lizenz-ID** — die UUID, mit der du dich beim Support identifizieren kannst.

### Aktionen

- **Lizenz ändern** öffnet ein zweites Eingabefeld in derselben Karte — etwa, um nach einer Verlängerung den neuen Schlüssel einzusetzen.
- **Lizenz entfernen** löscht den gespeicherten Schlüssel und führt dich zurück ans Aktivierungs-Fenster. Daten bleiben unberührt; getrackte Zeiten und Aktivitäten gehen nicht verloren.

## Was die Lizenz enthält

Der Schlüssel ist ein kurzer Text in der Form `<payload>.<signatur>`. Der `payload` ist Base64URL-kodiertes JSON mit:

| Feld | Bedeutung |
|---|---|
| `id` | UUID — stabile Lizenz-ID. |
| `name` | Lizenznehmer (Anzeige). |
| `email` | E-Mail des Lizenznehmers. |
| `issued` | Ausstellungsdatum (ISO 8601). |
| `expires` | Ablaufdatum (ISO 8601). Fehlt das Feld, ist die Lizenz lebenslang. |
| `maxVersion` | Versions-Obergrenze (`"1"` deckt alle 1.x-Versionen ab). Optional. |

Die Signatur ist Ed25519, die Verifikation läuft über die `CryptoKit`-API von macOS.

## Wann eine Lizenz ungültig wird

Drei Gründe sind möglich:

- **Ablauf.** Erreicht `expires` die aktuelle Systemzeit, läuft die Lizenz ab. NowDoing prüft das stündlich erneut und außerdem bei jedem gesperrten Zugriff — so erwischt der Check auch eine Lizenz, die mitten in der Session abläuft oder eine Uhr, die manuell zurückgestellt wurde.
- **Versions-Limit überschritten.** Trägt die Lizenz `maxVersion`, gilt sie nur für die genannte Major-Version. Ein App-Update auf eine höhere Major-Linie sperrt die App, bis du eine neue Lizenz einträgst.
- **Signatur stimmt nicht.** Die Lizenz wurde verändert, korrumpiert oder ist gefälscht. Solche Schlüssel landen direkt in der „Lizenz ungültig"-Karte mit dem Grund als Untertitel.

In allen drei Fällen verhält sich die App wie ohne Lizenz: das Aktivierungs-Fenster erscheint, das Menüleisten-Icon zeigt nur noch **„Lizenz eingeben…"** im Rechtsklick-Menü.

## Was im gesperrten Zustand passiert

Solange keine gültige Lizenz aktiv ist, sind diese Wege blockiert:

- Linksklick aufs Menüleisten-Icon (führt direkt zum Aktivierungs-Fenster).
- Globaler Prompt-Hotkey und die ⌃⌥⌘1–9 Pinned-Quick-Picks.
- Rechtsklick-Menü außer „Lizenz eingeben…", „Über NowDoing" und „Beenden".
- VS-Code-Branch-Wechsel über die [HTTP-API](/integrations/http-api/) (Antwort `401`).
- Befehle aus *Kurzbefehle* und AppleScript (`licenseLocked`-Fehler).
- macOS-Services-Menü.

Daten und Einstellungen bleiben dabei unangetastet. Sobald eine gültige Lizenz eingetragen ist, sind alle Wege sofort wieder offen.

## Wo der Schlüssel gespeichert wird

Der eingegebene Schlüssel liegt in den UserDefaults der App (`~/Library/Containers/app.nowdoing/Data/Library/Preferences/`). Bei jedem Start und einmal pro Stunde im Hintergrund wird er erneut geprüft. Die App sendet den Schlüssel nie ins Netz — die Verifikation ist eine reine Offline-Operation.
