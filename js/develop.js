// Najdeme všechny galerie na stránce
const galerie = document.querySelectorAll(".image_gallery");

galerie.forEach(g => {
    // Pro každou galerii najdeme její konkrétní prvky
    const currentImage = g.querySelector(".current_image");
    const previous = g.querySelector(".previous");
    const next = g.querySelector(".next");
    
    // Zjistíme si název a počet fotek z data- atributů v HTML
    const prefix = g.getAttribute("data-prefix");
    const maxImages = parseInt(g.getAttribute("data-max"));
    
    let i = 1;

    previous.addEventListener("click", function() {
        i = (i > 1) ? i - 1 : maxImages;
        currentImage.src = `img/${prefix}_0${i}.jpg`;
    });

    next.addEventListener("click", function() {
        i = (i < maxImages) ? i + 1 : 1;
        currentImage.src = `img/${prefix}_0${i}.jpg`;
    });
});
