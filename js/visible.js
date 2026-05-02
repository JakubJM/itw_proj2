// Po nacteni stranky
document.addEventListener("DOMContentLoaded", () => {

    // Vybere vsechny prvky ktere se maji animovat
    const elementsToAnimate = document.querySelectorAll('.main > :not(video), section > *, footer > *, .hobby_container > article');

    // Observer sleduje jestli je prvek videt na obrazovce
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                // Prvek je videt -> prida tridu
                entry.target.classList.add('is-visible');
            } else {
                // Prvek neni videt -> odebere tridu
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1 // kolik musi byt videt aby se spustila animace
    });

    // Prida observer na vsechny prvky
    elementsToAnimate.forEach(el => observer.observe(el));
});
