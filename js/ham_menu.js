const hamMenu = document.querySelector('.ham_menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    menu.classList.toggle('active');
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        menu.classList.remove('active');
    });
});