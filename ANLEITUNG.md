# PokéGrader PSA – APK Installation

## Schritt 1: GitHub Account
1. Öffne https://github.com und registriere dich (kostenlos)
2. Klicke oben rechts auf „+" → „New repository"
3. Name: `pokeGrader` · Sichtbarkeit: **Public** · Klicke „Create repository"

## Schritt 2: Dateien hochladen
1. Im neuen Repository auf „uploading an existing file" klicken
2. **Alle Dateien aus diesem ZIP-Ordner** in den Upload-Bereich ziehen:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - Ordner `icons/` mit allen PNG-Dateien
3. „Commit changes" klicken

## Schritt 3: GitHub Pages aktivieren
1. Im Repository auf „Settings" klicken
2. Links „Pages" auswählen
3. Source: „Deploy from a branch"
4. Branch: **main** · Folder: **/ (root)**
5. „Save" klicken
6. Nach ca. 2 Minuten ist die App live unter:
   **https://DEIN-USERNAME.github.io/pokeGrader/**

## Schritt 4: APK mit PWABuilder erstellen
1. Öffne https://www.pwabuilder.com
2. Gib deine GitHub Pages URL ein:
   `https://DEIN-USERNAME.github.io/pokeGrader/`
3. Klicke „Start" → die App wird analysiert
4. Klicke auf „Package for stores"
5. Wähle **„Android"**
6. Klicke „Generate Package" → APK wird erstellt
7. APK herunterladen

## Schritt 5: APK auf Android installieren
1. APK-Datei aufs Handy übertragen (USB, E-Mail, Google Drive)
2. Auf Android: Einstellungen → Sicherheit → „Unbekannte Quellen" erlauben
3. APK-Datei öffnen und installieren
4. PokéGrader erscheint im App-Drawer

---
**Hinweis:** Die App benötigt eine Internetverbindung für die KI-Analyse (Anthropic API).
Der Verlauf wird lokal auf dem Gerät gespeichert (IndexedDB).
