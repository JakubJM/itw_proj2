// Nacteni ulozeneho stavu darkmode
let darkmode = localStorage.getItem('darkmode');

// Tlacitko pro prepnuti
const themeSwitch = document.getElementById('theme-switch');

// Zapne darkmode
const enableDarkmode = () => {
    document.documentElement.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

// Vypne darkmode
const disableDarkmode = () => {
    document.documentElement.classList.remove('darkmode');
    localStorage.setItem('darkmode', null); // ulozeni stavu
}

// Pokud byl zapnuty, zapne ho hned po nacteni stranky
if (darkmode === "active") enableDarkmode()

// Kliknuti na tlacitko
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');

    // Prepne mezi zapnuto / vypnuto
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});