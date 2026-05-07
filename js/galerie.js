// Ziskani odkazu na prvky v HTML
const currentImage = document.getElementById("current_image");
const imageThumbs = document.getElementById("image_thumbs");
const closeButton = document.getElementById("close");
const openButton = document.querySelector(".open");
const gallery = document.getElementById("image_gallery");
const prevButton = document.querySelector(".previous.gallery");
const nextButton = document.querySelector(".next.gallery");

let preview = [];
let index = 0;

// Nacteni dat z divu a vytvoreni nahledu
const dataSource = document.querySelectorAll(".image_gallery[data-prefix]");

dataSource.forEach(zdroj => {
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
            index = preview.indexOf(this);
            refreshGallery();
            gallery.classList.add("is-visible");
        });

        imageThumbs.appendChild(thumb);
        preview.push(thumb);
    }
});

// Funkce ktera prepne aktualni obrazek
function refreshGallery() {
    const aktivniThumb = preview[index];
    currentImage.src = aktivniThumb.src;
    currentImage.alt = aktivniThumb.alt;

    // Nastavi aktivni tridu
    preview.forEach(t => t.classList.remove("active"));
    aktivniThumb.classList.add("active");

    // Posune seznam tak aby byl aktivni uprostred
    const scrollPos = aktivniThumb.offsetLeft - (imageThumbs.offsetWidth / 2) + (aktivniThumb.offsetWidth / 2);
    imageThumbs.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

// Nastavi prvni obrazek po nacteni
if (preview.length > 0) {
    refreshGallery();
}

// Tlacitko dalsi obrazek
nextButton.addEventListener("click", function () {
    index = (index + 1) % preview.length;
    refreshGallery();
});

// Tlacitko predchozi obrazek
prevButton.addEventListener("click", function () {
    index = (index - 1 + preview.length) % preview.length;
    refreshGallery();
});

// Otevreni galerie
openButton.addEventListener("click", function () {
    gallery.classList.add("is-visible");
});

// Zavreni galerie
closeButton.addEventListener("click", function () {
    gallery.classList.remove("is-visible");
});