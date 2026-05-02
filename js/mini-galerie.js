// Vybere vsechny galerie na strance
const galerie = document.querySelectorAll(".image_gallery");

galerie.forEach(g => {
    // Prvky uvnitr jedne galerie
    const currentImage = g.querySelector(".current_image");
    const previous = g.querySelector(".previous");
    const next = g.querySelector(".next");

    // Nacteni dat z atributu
    const prefix = g.getAttribute("data-prefix");
    const maxImages = parseInt(g.getAttribute("data-max"));

    let i = 1; // aktualni index obrazku

    // Tlacitko predchozi
    previous.addEventListener("click", function () {
        // Posun dozadu nebo skok na konec
        i = (i > 1) ? i - 1 : maxImages;
        currentImage.src = `img/${prefix}_0${i}.jpg`;
        currentImage.alt = `${prefix} ${i}`;
    });

    // Tlacitko dalsi
    next.addEventListener("click", function () {
        // Posun dopredu nebo skok na zacatek
        i = (i < maxImages) ? i + 1 : 1;
        currentImage.src = `img/${prefix}_0${i}.jpg`;
        currentImage.alt = `${prefix} ${i}`;
    });
});