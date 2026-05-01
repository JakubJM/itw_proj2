const currentImage = document.getElementById("current_image");
const imageThumbs = document.getElementById("image_thumbs");
const closeButton = document.getElementById("close");
const openButton = document.querySelector(".open");
const gallery = document.getElementById("image_gallery");
const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let vsechnyNahledy = [];
let aktualniIndex = 0;

// 1. Vytažení dat z divů a vygenerování náhledů
const zdrojeDat = document.querySelectorAll(".image_gallery[data-prefix]");

zdrojeDat.forEach(zdroj => {
    const prefix = zdroj.getAttribute("data-prefix");
    const maxCount = parseInt(zdroj.getAttribute("data-max"));

    for (let i = 1; i <= maxCount; i++) {
        const thumb = document.createElement("img");
        thumb.src = `img/${prefix}_0${i}.jpg`;
        thumb.alt = `${prefix} ${i}`;
        thumb.classList.add("thumb");

        thumb.addEventListener("click", function() {
            aktualniIndex = vsechnyNahledy.indexOf(this);
            aktualizujGalerii();
            gallery.classList.add("is-visible");
        });

        imageThumbs.appendChild(thumb);
        vsechnyNahledy.push(thumb);
    }
});

// FUNKCE PRO AKTUALIZACI
function aktualizujGalerii() {
    const aktivniThumb = vsechnyNahledy[aktualniIndex];
    currentImage.src = aktivniThumb.src;
    currentImage.alt = aktivniThumb.alt;

    // Nastavení aktivní třídy
    vsechnyNahledy.forEach(t => t.classList.remove("active"));
    aktivniThumb.classList.add("active");

    // Výpočet pozice středu
    const scrollPos = aktivniThumb.offsetLeft - (imageThumbs.offsetWidth / 2) + (aktivniThumb.offsetWidth / 2);
    imageThumbs.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

// NASTAVENÍ PRVNÍHO OBRÁZKU JAKO AKTIVNÍHO (hned po načtení)
if (vsechnyNahledy.length > 0) {
    aktualizujGalerii();
}

// 2. Ovládání tlačítky
nextButton.addEventListener("click", function() {
    aktualniIndex = (aktualniIndex + 1) % vsechnyNahledy.length;
    aktualizujGalerii();
});

prevButton.addEventListener("click", function() {
    aktualniIndex = (aktualniIndex - 1 + vsechnyNahledy.length) % vsechnyNahledy.length;
    aktualizujGalerii();
});

// 3. Otevírání a zavírání
openButton.addEventListener("click", function() {
    gallery.classList.add("is-visible");
});

closeButton.addEventListener("click", function() {
    gallery.classList.remove("is-visible");
});
