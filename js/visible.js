document.addEventListener("DOMContentLoaded", () => {
    // Vybere vše v sekcích a hlavní části
    const elementsToAnimate = document.querySelectorAll('.main > :not(video), section > *, footer > *, .hobby_container > article');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Když prvek vejde do záběru
                entry.target.classList.add('is-visible');
            } else {
                // Když prvek vyjde ze záběru (zmizí)
                entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.3   // Prvek začne mizet/naskakovat, jakmile je vidět méně než 10 %
    });

    elementsToAnimate.forEach(el => observer.observe(el));
});

