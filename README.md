Tady je přepsaná verze s diakritikou:

---

# Osobní stránka

HTML, CSS, JavaScript, jQuery

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

Kliknutím na obrázek se přesunete na konkrétní projekt. U HTML stránky vás to hodí na odkaz staré školní stránky, později nahradím souborem se stránkou. U JavaScript letadla se otevře nová karta s letadlem. Některé fotky nemusí fungovat kvůli špatné cestě, vzniklé při rychlé úpravě.

### JavaScript letadlo

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
| `style.css` | Styly |

### JavaScript
| Soubor | Popis |
|---|---|
| `visible.js` | Postupné objevování obsahu podle scrollu |
| `timeline.js` | Fungování timeline – přepínání divů, výpočet čáry od bodu k bodu, aktivní div |
| `galerie.js` | Sloučení mini-galerií do jedné velké |
| `mini-galerie.js` | Malé galerie jednotlivých hobby kartiček |
| `ham-menu.js` | Hamburger menu |
| `my-age.js` | Výpočet aktuálního věku |
| `theme-switch.js` | Dark / light mode přepínač |

### jQuery
| Soubor | Popis |
|---|---|
| `article-zoom.js` | Přidávání třídy `active` pro rozbalení karty |

---

## Vedlejší soubory

Slouží pouze pro návrh a pozdější implementaci prvků.

- `test.html`
- `style-test.html`
- `test.js`