Tady je přepsaná verze s diakritikou:

---

# Osobní stránka

HTML, CSS, JavaScript

Stránka je optimalizována pro mobilní zařízení, tablety a počítače.

Stránka obsahuje 6 hlavních sekcí:
- `O mně`
- `Vzdělání`
- `Projekty`
- `Koníčky`
- `Galerie`
- `Kontakty`

Navigace je globální a dostupná po celou dobu, u menších zařízení je skryta v hamburger menu.

Stránka je řešena jako single page s plynulým scrollováním.

Položky, na které se dá kliknout, mají stín u menších zařízení. U větších zařízení se po najetí na prvek objeví stín (glow efekt).

---

## Navigační menu

Kliknutím na jednotlivé názvy sekcí se dostanete přímo na sekce.

- **Galerie** – zobrazí všechny fotky malých galerií sloučených do jedné velké. Pomocí šipek se přesunete na jiné obrázky, nebo kliknutím na konkrétní miniaturu. Zavře se pomocí tlačítka s křížkem.
- **Měsíc / Slunce** – přepínání stylu stránky na dark / light. Vybraný styl zůstane i při opuštění nebo obnovení stránky.

---

## Vzdělání

Obsahuje timeline, na které červené kolečko určuje aktuální článek. Přepínat se dá kliknutím na konkrétní bod na timeline nebo pomocí tlačítek po bocích sekce. Návrh a implementaci jsem vymyslel sám – s efektem přelétnutí kuličky (červený bar) a výpočtem šířky timeline z bodu k bodu mi pomáhalo AI.

---

## Projekty

Kliknutím na obrázek se přesunete na konkrétní projekt. U HTML stránky přesměruje uživatele na staré školní stránky, později nahradím souborem se stránkou. U JavaScript letadla se otevře nová karta s letadlem.

### JavaScript letadlo
Některé fotky mohou být nedostupné kvůli špatné cestě, vzniklé při rychlé úpravě.

Dole je lišta s tlačítky:

| Tlačítko | Funkce |
|---|---|
| Start / Stop | Zapne nebo pauzne hru |
| BOOM | Shodí bombu – nejde shodit během vzletu nebo pokud už nějaká padá |
| Landing gear | Zatahuje / vytahuje podvozek (pouze vizuální) |

Vedle tlačítka Landing gear se vybírá typ bomby. Vpravo je ukazatel paliva – pokud dojde, hra skončí a přes celou obrazovku se objeví nápis restart. Po kliknutí se hra restartuje. Cílem je trefovat nepřátelské tanky a sbírat skóre, tanky jsou omezené.

---

## Koníčky

Po kliknutí na kartu koníčků se rozbalí a objeví se obsah. Pomocí šipek se dá přepínat obrázek. Kliknutím znovu na kartu nebo na jinou kartu se karta zavře s aktuálním obrázkem.

---

## Soubory

### HTML
| Soubor | Popis |
|---|---|
| `index.html` | Hlavní stránka |
| `plane.html` | Stránka minihry, středoškolský projekt |

### CSS
| Soubor | Popis |
|---|---|
| `style.css` | Styly pro index.html|
| `style-let.css` | Styly pro plane.html |

### JavaScript
| Soubor | Popis |
|---|---|
| `visible.js` | Postupné objevování obsahu podle scrollu |
| `timeline.js` | Fungování timeline – přepínání divů, výpočet čáry od bodu k bodu, aktivní div, využití jQuery|
| `galerie.js` | Sloučení mini-galerií do jedné velké |
| `mini-galerie.js` | Malé galerie jednotlivých hobby kartiček |
| `ham-menu.js` | Hamburger menu |
| `my-age.js` | Výpočet aktuálního věku |
| `theme-switch.js` | Dark / light mode přepínač |
| `article-zoom.js` | Přidávání třídy `active` pro rozbalení karty |

---

## Vedlejší soubory

Slouží pouze pro návrh a pozdější implementaci prvků.

- `test.html`
- `style-test.html`
- `test.js`

## Využití Ai
- `Formátování kódu a odstranění duplicit style,css, zdůvodu lepší orientace`
- `Při implementaci animace červené čáry timeliny vzdělání`
- `Hledání chyb`

## Odkazy

Web je dostupný zde: 
https://jakubjm.github.io/itw_proj2/  
Github: 
https://github.com/JakubJM
