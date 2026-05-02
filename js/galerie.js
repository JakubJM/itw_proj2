// Ziskani odkazu na prvky v HTML
const currentImage = document.getElementById("current_image");
const imageThumbs = document.getElementById("image_thumbs");
const closeButton = document.getElementById("close");
const openButton = document.querySelector(".open");
const gallery = document.getElementById("image_gallery");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let vsechnyNahledy = [];
let aktualniIndex = 0;

// Nacteni dat z divu a vytvoreni nahledu
const zdrojeDat = document.querySelectorAll(".image_gallery[data-prefix]");

zdrojeDat.forEach(zdroj => {
    const prefix = zdroj.getAttribute("data-prefix");
    const maxCount = parseInt(zdroj.getAttribute("data-max"));

    // Vytvori jednotlive obrazky podle prefixu
    for (let i = 1; i <= maxCount; i++) {
        const thumb = document.createElement("img");
        thumb.src = `img/${prefix}_0${i}.jpg`;
        thumb.alt = `${prefix} ${i}`;
        thumb.classList.add("thumb");

        // Kliknuti na nahled
        thumb.addEventListener("click", function () {
            aktualniIndex = vsechnyNahledy.indexOf(this);
            aktualizujGalerii();
            gallery.classList.add("is-visible");
        });

        imageThumbs.appendChild(thumb);
        vsechnyNahledy.push(thumb);
    }
});

// Funkce ktera prepne aktualni obrazek
function aktualizujGalerii() {
    const aktivniThumb = vsechnyNahledy[aktualniIndex];
    currentImage.src = aktivniThumb.src;
    currentImage.alt = aktivniThumb.alt;

    // Nastavi aktivni tridu
    vsechnyNahledy.forEach(t => t.classList.remove("active"));
    aktivniThumb.classList.add("active");

    // Posune seznam tak aby byl aktivni uprostred
    const scrollPos = aktivniThumb.offsetLeft - (imageThumbs.offsetWidth / 2) + (aktivniThumb.offsetWidth / 2);
    imageThumbs.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

// Nastavi prvni obrazek po nacteni
if (vsechnyNahledy.length > 0) {
    aktualizujGalerii();
}

// Tlacitko dalsi obrazek
nextButton.addEventListener("click", function () {
    aktualniIndex = (aktualniIndex + 1) % vsechnyNahledy.length;
    aktualizujGalerii();
});

// Tlacitko predchozi obrazek
prevButton.addEventListener("click", function () {
    aktualniIndex = (aktualniIndex - 1 + vsechnyNahledy.length) % vsechnyNahledy.length;
    aktualizujGalerii();
});

// Otevreni galerie
openButton.addEventListener("click", function () {
    gallery.classList.add("is-visible");
});

// Zavreni galerie
closeButton.addEventListener("click", function () {
    gallery.classList.remove("is-visible");
});