// Kliknuti na clanek
jQuery('article').click(function (e) {

  // Pokud bylo kliknuto na tlacitko uvnitr clanku, nic nedelej
  if (jQuery(e.target).closest('button').length) {
    return;
  }

  // Zavre vsechny ostatni clanky
  jQuery('article').not(this).removeClass('active');

  // Prepne aktivni stav u kliknuteho clanku
  jQuery(this).toggleClass('active');
});