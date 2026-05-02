// Vyber prvku z HTML
const hamMenu = document.querySelector('.ham_menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Kliknuti na hamburger menu
hamMenu.addEventListener('click', () => {
    // Prepne otevreni menu
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
});

// Kliknuti na odkaz v menu
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Zavre menu po kliknuti
        hamMenu.classList.remove('active');
        menu.classList.remove('active');
    });
});