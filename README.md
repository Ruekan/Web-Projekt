# SV Ente Heidenheim – Vereinswebsite

Webprojekt für den Studiengang Wirtschaftsinformatik an der DHBW Heidenheim.

## Projektübersicht

Für dieses Projekt haben wir eine Website für den fiktiven Sportverein „SV Ente Heidenheim“ entwickelt. Die Seite stellt alle wichtigen Informationen rund um den Verein bereit – von Sportangeboten bis zum Shop.  
Wichtig war uns, dass die Seite übersichtlich, barrierearm und auf verschiedenen Geräten gut nutzbar ist.

Die Seite umfasst 11 HTML-Seiten mit unterschiedlichen Layout- und Inhaltsbereichen.

## Inhalt der Website

- **Homepage** – Hero-Banner, kurze Einordnung, Infokarten  
- **Sportangebote** – Übersicht + detaillierte Seiten zu Basketball, Fußball, Handball  
- **Shop** – Produktübersicht, Filter visuell umgesetzt (CSS-only)  
- **News** – Nachrichtenseite + einzelne Artikel  
- **Mitgliedschaft** – Informationen + Formular  
- **Kontakt** – Kontaktformular und Vereinsinformationen  

## Technische Umsetzung

### Verwendete Technologien
- **HTML5** für die Struktur und semantische Elemente  
- **CSS3** für Layout, Design, Responsiveness (Flexbox, Grid, Transitions, Media Queries)  


## Design-Entscheidungen

### Farbschema
Passend zum Vereinswappen „Ente“ haben wir uns für grüne und goldene Akzente entschieden:

- Primärfarbe: **#1e5631** (Dunkelgrün)  
- Akzentfarbe: **#c5a572** (Gold)  

### Layout-Varianten
1. Hero-Banner Layout (Startseite)  
2. Grid-basiertes Shop-Layout  
3. Artikel-Layout für News  
4. Sportdetailseiten mit großem Bildbereich  
5. Formular-Layout für Mitgliedschaft & Kontakt  

### Responsive Design
Die Responsiveness basiert auf Breakpoints bei **768px**, **480px** und **320px**.  

## Barrierefreiheit (WCAG 2.2 Level A)

Um die Seite barriereärmer zu gestalten, wurden folgende Punkte umgesetzt:

- **Skip-Link** zu Beginn der Seite  
- **Semantische Struktur**: `<header>`, `<nav>`, `<main>`, `<article>` usw.  
- **Alt-Texte** für alle Bilder  
- **Fokus-Indikatoren** für Tastaturbedienung  
- **ARIA-Labels**, wo zusätzliche Orientierung nötig war  
- **Kontrastverhältnis** von mindestens 4.5:1  
- **Saubere Überschriftenhierarchie** (H1 → H2 → H3)  

## Browser-Kompatibilität

Die Website wurde getestet in:

- Chrome (Windows)  
- Firefox (Windows)  
- Safari (mobil)  

Alle relevanten Seiten wurden auf Darstellung, Responsiveness und Navigierbarkeit geprüft.

## Projektstruktur

```
web-seitenprojekt/
│
├── index.html              # Startseite
├── shop.html               # Shop
├── newspage.html           # News-Übersicht
├── newseins.html           # Blogartikel
├── Sportangebote.html      # Übersicht Sportarten
├── Basketball1.html        # Basketball-Seite
├── Fußball1.html          # Fußball-Seite
├── Handball1.html         # Handball-Seite
├── Mitgliedschaft.html     # Mitgliedschaftsformular
├── Kontakt.html            # Kontaktformular
├── leer.html               # Vorlage/Platzhalter
│
├── main.css                # Zentrales Stylesheet
│
└── Bilder/                 # Bildmaterial
```

# Besonderheiten im Code (Quellcode-Dokumentation)

## 1. Dropdown-Menü ohne JavaScript

Um die Navigation ohne JS umzusetzen, wurde ein CSS-Only Dropdown gebaut.

**HTML-Struktur:**
```html
<li class="dropdown">
  <a href="#">Sportangebote</a>
  <ul class="submenu">
    <li><a href="Basketball1.html">Basketball</a></li>
  </ul>
</li>
```

**CSS-Logik:**
```css
.dropdown:hover .submenu,
.dropdown:focus-within .submenu {
    display: block;
}
```

`:focus-within` sorgt dafür, dass die Navigation auch per Tastatur funktioniert.

## 2. Sticky Header

```css
header {
    position: sticky;
    top: 0;
    z-index: 100;
}
```

Dadurch bleibt der Header beim Scrollen sichtbar.

## 3. Responsive Bilder

```css
img {
    max-width: 100%;
    height: auto;
}
```

Damit passen sich Bilder automatisch der verfügbaren Breite an.

## 4. Shop-Layout mit CSS-Grid

```css
.shop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2rem;
}
```

Das Gitter passt sich flexibel an verschiedene Fenstergrößen an.

## 5. Shop-Filter (CSS-only)

Der Filterbereich ist rein optisch vorhanden.  
Eine echte Filterlogik würde JavaScript erfordern.

# Testhinweise

## Responsiveness getestet
- Browser DevTools verwenden (Geräteansicht)  
- Wichtige Seiten testen: Startseite, Shop, Formulare  
- Typische Testbreiten: **320px**, **480px**, **768px**, **1024px**

## Barrierefreiheit getestet
- Navigation per **Tab-Taste**  
- Skip-Link ausprobieret  
- Fokus-Markierungen  

## Bildquellen
Alle verwendeten Bilder wurden selbst bzw. KI-basiert erzeugt.

## Autoren
Peter Lang (Matrikelnummer: 8613964)  
Janek Frank (Matrikelnummer: 5607006)
Lukas Reiser (Matrikelnummer: 5527863)
Tarek Kadu Turkmani (Matrikelnummer: 1650970)
