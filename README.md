# Osobni stranka

HTML, CSS, JavaScript, jQuery

Polozky na ktere se da kliknout maji stin u mensich zarizeni.
U vetsich zarizeni se po najetí na prvek objevi stin (glow efekt).

---

## Navigacni menu

Kliknutim na jednotlive nazvy sekci se dostanete primo na sekce.

- **Galerie** – zobrazi vsechny fotky malych galerii sloucenych do jedne velke. Pomoci sipek se presunete na jine obrazky, nebo kliknutim na konkretni miniaturu. Zavre se pomoci tlacitka s krizkem.
- **Mesic / Slunce** – prepinani stylu stranky na dark / light. Vybrany styl zustane i pri opusteni nebo obnoveni stranky.

---

## Vzdelani

Obsahuje timeline, na ktere cervene kolecko urcuje aktualni clanek. Prepinat se da kliknutim na konkretni bod na timeline nebo pomoci tlacitek po bocich sekce. Navrh a implementaci jsem vymyslel sam – s efektem prelitnuti kulicky (cerveny bar) a vypoctem sirky timeline z bodu k bodu mi pomahalo AI.

---

## Projekty

Kliknutim na obrazek se presunete na konkretni projekt. U HTML stranky vas to hodi na odkaz stare skolni stranky, pozdeji nahradim souborem se strankou. U JavaScript letadla se otevře nova karta s letadlem. Nektere fotky nemusi fungovat kvuli spatne ceste, vznikle pri rychle uprave.

### JavaScript letadlo

Dole je lista s tlacitky:

| Tlacitko | Funkce |
|---|---|
| Start / Stop | Zapne nebo pauzne hru |
| BOOM | Shodi bombu – nejde shodit behem vzletu nebo pokud uz nejaka pada |
| Landing gear | Zatahuje / vytahuje podvozek (pouze vizualni) |

Vedle tlacitka Landing gear se vybira typ bomby. Vpravo je ukazatel paliva – pokud dojde, hra skonci a pres celou obrazovku se objevi napis restart. Po kliknuti se hra restartuje. Cilem je trefovat nepratelske tanky a sbirat skore, tanky jsou omezene.

---

## Konicky

Po kliknuti na kartu konicku se rozbali a objevi se obsah. Pomoci sipek se da prepinat obrazek. Kliknutim znovu na kartu nebo na jinou kartu se karta zavre s aktualnim obrazkem.

---

## Soubory

### HTML
| Soubor | Popis |
|---|---|
| `index.html` | Hlavni stranka |
| `plane.html` | Stranka minihry, stredoskolsky projekt |

### CSS
| Soubor | Popis |
|---|---|
| `style.css` | Styly |

### JavaScript
| Soubor | Popis |
|---|---|
| `visible.js` | Postupne objevovani obsahu podle scrollu |
| `timeline.js` | Fungovani timeline – prepinani divu, vypocet cary od bodu k bodu, aktivni div |
| `galerie.js` | Slouceni mini-galerii do jedne velke |
| `mini-galerie.js` | Male galerie jednotlivych hobby karticek |
| `ham-menu.js` | Hamburger menu |
| `my-age.js` | Vypocet aktualniho veku |
| `theme-switch.js` | Dark / light mode prepinac |

### jQuery
| Soubor | Popis |
|---|---|
| `article-zoom.js` | Pridavani tridy `active` pro rozbaleni karty |

---

## Vedlejsi soubory

Slouzi pouze pro navrh a pozdejsi implementaci prvku.

- `test.html`
- `style-test.html`
- `test.js`