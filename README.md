# SV Ente Heidenheim - Vereinswebsite

Angular/TypeScript-Projekt für eine fiktive Vereinswebsite des SV Ente Heidenheim.
Die Anwendung ist die Weiterentwicklung einer statischen HTML/CSS-Seite aus dem ersten Semester.

## Kurzüberblick

Wichtige Bereiche:

- `News`: Artikelliste, Detailseiten, Kommentare und Redakteursmodus
- `Shop`: Produktsuche, Filter, Warenkorb und Preisberechnung
- `Sportangebote`: Übersicht und dynamische Detailseiten je Sportart
- `Mitgliedschaft` und `Kontakt`: Vereinsinformationen und Formulare
- `404-Seite`: Fallback für unbekannte URLs

## Voraussetzungen

- Node.js, empfohlen: aktuelle gerade LTS-Version
- npm, wird mit Node.js installiert

## Installation

```bash
npm install
```

Falls PowerShell unter Windows `npm` blockiert, stattdessen `npm.cmd` verwenden:

```bash
npm.cmd install
```

## Projekt starten

```bash
npm start
```

Danach läuft die Anwendung lokal unter:

```text
http://localhost:4200
```

## Build und Tests

Produktionsbuild:

```bash
npm run build
```

Tests einmalig ausführen:

```bash
npm test -- --watch=false
```

Tests im Watch-Modus:

```bash
npm test
```

Aktuell gibt es kein eigenes `lint`-Script.

## Tech Stack

| Bereich | Technologie |
|---|---|
| Framework | Angular 21 mit Standalone Components |
| Sprache | TypeScript 5.9 im Strict Mode |
| Routing | Angular Router |
| Formulare | Angular Forms und Reactive Forms |
| State | Angular Signals (`signal`, `computed`) |
| Persistenz | Browser-`localStorage` |
| Tests | Vitest mit Angular TestBed |
| Formatierung | Prettier |
| Paketmanager | npm |

## Routen

Das Projekt nutzt Hash-Routing über `withHashLocation()`. Die Routen sind intern in Angular ohne `#` definiert, im Browser werden sie aber mit `/#/` aufgerufen.

| Angular-Route | Browser-URL | Seite | Zweck |
|---|---|---|---|
| `/` | `http://localhost:4200/#/` | Startseite | Einstieg in die Vereinswebsite |
| `/news` | `http://localhost:4200/#/news` | Newsübersicht | Artikel anzeigen, filtern und sortieren |
| `/news/neu` | `http://localhost:4200/#/news/neu` | Redakteursmodus | Lokalen Newsartikel erstellen |
| `/news/:slug` | `http://localhost:4200/#/news/beispiel-artikel` | Newsdetailseite | Einzelartikel und Kommentare |
| `/shop` | `http://localhost:4200/#/shop` | Shop | Produkte suchen, filtern und in den Warenkorb legen |
| `/warenkorb` | `http://localhost:4200/#/warenkorb` | Warenkorb | Artikelmengen ändern und Summe berechnen |
| `/cart` | `http://localhost:4200/#/cart` | Redirect | Leitet auf `/warenkorb` weiter |
| `/sportangebote` | `http://localhost:4200/#/sportangebote` | Sportübersicht | Alle Sportarten anzeigen |
| `/sportangebote/:sportId` | `http://localhost:4200/#/sportangebote/fussball` | Sportdetailseite | Details zu einer Sportart |
| `/mitgliedschaft` | `http://localhost:4200/#/mitgliedschaft` | Mitgliedschaft | Infos und Formular |
| `/kontakt` | `http://localhost:4200/#/kontakt` | Kontakt | Kontaktdaten, Formular und Karte |
| `**` | unbekannte Hash-Route | 404-Seite | Fallback für unbekannte URLs |

## Dynamische Funktionen

### Shop

- Produktsuche nach Name, Beschreibung und Kategorie
- Filter nach Kategorie, Preisbereich und Größe
- Filterzustand wird in der URL gespeichert
- Warenkorb mit Mengensteuerung
- Berechnung von Zwischensummen und Gesamtsumme
- Warenkorb bleibt über `localStorage` nach einem Reload erhalten
- Validierung der lokalen Produktdaten im Data Layer

### News

- Artikelliste aus lokalen Standarddaten und `localStorage`
- Filterung nach Tags
- Sortierung nach Datum oder Titel
- Detailseiten über Slugs
- Kommentarfunktion mit Formularvalidierung
- Redakteursmodus zum Erstellen und Löschen lokaler Artikel
- Löschbestätigung vor dem Entfernen eines Artikels
- Demo-PIN für den Redakteursmodus: `1234`

### Sportangebote

- Sportarten werden aus zentralen lokalen Daten geladen
- Zugriff läuft über `SportsService`
- Detailseiten werden über den URL-Parameter `sportId` aufgebaut
- Unbekannte Sportarten zeigen einen Fehlerzustand mit Link zurück zur Übersicht

### Mitgliedschaft

- Beitragsrechner für Mitgliedschaftstyp und Sportart
- Monats- und Jahresbeitrag werden direkt berechnet
- Sportart-Auswahl zeigt, dass die Angebote im Beitrag enthalten sind
- Berechnung läuft vollständig lokal ohne Speicherung oder Backend

### Zustände

An mehreren Stellen sind Loading-, Empty- und Error-States eingebaut, zum Beispiel im Shop, bei News, im Warenkorb und auf Sportdetailseiten.

## Projektstruktur

```text
src/
└── app/
    ├── data/
    │   └── sports.data.ts
    ├── layout/
    │   ├── site-header/
    │   └── site-footer/
    ├── models/
    │   └── article.ts
    ├── pages/
    │   ├── cart-page/
    │   ├── home-page/
    │   ├── kontakt-page/
    │   ├── mitgliedschaft-page/
    │   │   ├── components/
    │   │   │   ├── fee-calculator/
    │   │   │   ├── membership-benefits/
    │   │   │   ├── membership-cta/
    │   │   │   ├── membership-faq/
    │   │   │   ├── membership-registration-form/
    │   │   │   └── membership-types/
    │   │   └── data/
    │   ├── news-one-page/
    │   ├── news-page/
    │   │   └── components/news-card/
    │   ├── news-upload-page/
    │   ├── not-found-page/
    │   ├── shop-page/
    │   │   ├── components/
    │   │   │   ├── shop-filter-panel/
    │   │   │   └── shop-product-grid/
    │   │   └── data/
    │   ├── sport-detail-page/
    │   └── sportangebote-page/
    ├── services/
    │   ├── news.service.ts
    │   └── sports.service.ts
    ├── app.config.ts
    ├── app.html
    ├── app.routes.ts
    └── app.ts
```

Weitere wichtige Ordner:

- `public/Bilder/`: Bilder für Verein, Sportangebote, Shop und News
- `public/Bilder/slideshow/`: Slideshow-Bilder für die Sportangebote
- `public/`: öffentliche statische Dateien

## Architektur

### Angular

Das Projekt nutzt Angular mit Standalone Components. Die zentrale Routen-Konfiguration liegt in `src/app/app.routes.ts`.

Header und Footer sind globale Layout-Komponenten:

- `src/app/layout/site-header/`
- `src/app/layout/site-footer/`

Seiten liegen unter `src/app/pages/`.

### Data Layer

Der Datenzugriff ist lokal und servicebasiert:

- `NewsService`: Artikel, Kommentare, Redakteursfunktionen und `localStorage`
- `SportsService`: validierter Zugriff auf Sportangebote
- `shop.service.ts`: Produktdaten, Filterlogik und Produktvalidierung
- `CartService`: Warenkorb-State, Mengenlogik und `localStorage`

Komponenten sollen Daten möglichst über Services erhalten und nicht direkt aus Datenarrays lesen.

### State

Die Anwendung nutzt Angular Signals:

- `signal()` für lokalen Zustand
- `computed()` für abgeleitete Werte
- `toSignal()` für Routenparameter aus Angular/RxJS

Beispiele:

- Warenkorbanzahl im Header
- gefilterte Produkte im Shop
- aktueller Sporteintrag auf der Detailseite
- Formular- und Fehlerzustände im Newsbereich

## Angular-Konzepte im Projekt

### Standalone Components

Die Seiten und UI-Bausteine sind als Standalone Components umgesetzt. Dadurch werden keine klassischen Angular-Module benötigt. Die wichtigsten Seiten liegen unter `src/app/pages/`, globale Layout-Bausteine unter `src/app/layout/`.

### Services als Data Layer

Datenlogik liegt möglichst in Services oder Data-Dateien:

- `NewsService` verwaltet Artikel, Kommentare und lokale Speicherung.
- `SportsService` stellt validierte Sportangebote bereit.
- `shop.service.ts` enthält Produktvalidierung und Filterlogik.
- `CartService` verwaltet Warenkorbzustand und Summen.

### Routing

Die Routen sind zentral in `src/app/app.routes.ts` definiert und werden in `src/app/app.config.ts` mit Hash-Routing registriert. Detailseiten wie `/#/news/:slug` und `/#/sportangebote/:sportId` lesen Daten anhand der URL-Parameter.

### Forms

Für Eingaben werden Angular Forms und Reactive Forms genutzt, zum Beispiel im Redakteursmodus und bei Kommentaren. Pflichtfelder und ungültige Eingaben werden direkt in der UI angezeigt.

### Signals und berechnete Werte

Für lokalen Zustand werden Angular Signals verwendet. Abgeleitete Werte, zum Beispiel Warenkorbanzahl oder gefilterte Produktlisten, werden mit `computed()` berechnet.

## Lokale Speicherung

Die Anwendung speichert nur im Browser:

- Warenkorb im `localStorage`
- selbst erstellte Newsartikel im `localStorage`
- Kommentare im `localStorage`

Zum Zurücksetzen der lokalen Daten kann im Browser der `localStorage` für `localhost:4200` gelöscht werden.

## Tests

Tests liegen direkt neben den getesteten Bereichen, zum Beispiel:

- `src/app/app.routes.spec.ts`
- `src/app/services/news.service.spec.ts`
- `src/app/services/sports.service.spec.ts`
- `src/app/pages/shop-page/data/shop.service.spec.ts`
- `src/app/pages/shop-page/data/cart.service.spec.ts`
- `src/app/pages/news-one-page/news-one-page.spec.ts`
- `src/app/pages/news-upload-page/news-upload-page.spec.ts`
- `src/app/pages/sport-detail-page/sport-detail-page.spec.ts`

Getestet werden unter anderem:

- Routing
- Newsvalidierung und Kommentare
- Redakteursformular
- Shopfilter und Produktvalidierung
- Warenkorb-Logik
- Sportdetailseiten und Fehlerzustände

## Typische Einstiegspunkte für neue Entwickler

Wenn du eine neue Seite hinzufügen möchtest:

1. Component unter `src/app/pages/` anlegen.
2. Route in `src/app/app.routes.ts` ergänzen.
3. Navigation bei Bedarf in `src/app/layout/site-header/` erweitern.

Wenn du neue Sportangebote ändern möchtest:

1. Daten in `src/app/data/sports.data.ts` anpassen.
2. Zugriff erfolgt automatisch über `SportsService`.
3. Danach prüfen, ob die Detailseite unter `/#/sportangebote/:sportId` funktioniert.

Wenn du Shopdaten ändern möchtest:

1. Daten in `src/app/pages/shop-page/data/shop.data.ts` anpassen.
2. Typen in `shop.models.ts` beachten.
3. Validierung in `shop.service.ts` prüfen.
4. Tests ausführen.

Wenn du Newslogik ändern möchtest:

1. Typen und Standardartikel in `src/app/models/article.ts` prüfen.
2. Logik in `src/app/services/news.service.ts` anpassen.
3. Betroffene Tests ausführen.

## Code Scaffolding

Angular CLI kann genutzt werden, um neue Dateien einheitlich anzulegen:

```bash
# Neue Page-Komponente
ng generate component pages/example-page

# Neue wiederverwendbare Komponente
ng generate component pages/example-page/components/example-card

# Neuer Service
ng generate service services/example

# Hilfe zu weiteren Generatoren
ng generate --help
```

Vor dem Übernehmen neuer generierter Dateien bitte prüfen, ob die Benennung zur bestehenden Struktur passt.

## Bekannte Hinweise

- Der Redakteursmodus ist nur eine lokale Demo-Funktion und keine echte Authentifizierung.
- Es gibt aktuell kein eigenes `lint`-Script.

## Weiterführende Links

- [Angular Dokumentation](https://angular.dev)
- [Angular Standalone Components](https://angular.dev/guide/components)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Router](https://angular.dev/guide/routing)
- [Angular Forms](https://angular.dev/guide/forms)
- [Vitest Dokumentation](https://vitest.dev)

## Autoren

| Name | Matrikelnummer |
|---|---|
| Peter Lang | 8613964 |
| Janek Frank | 5607006 |
| Lukas Reiser | 5527863 |
| Tarek Kadu Turkmani | 1650970 |

DHBW Heidenheim - Studiengang Wirtschaftsinformatik
