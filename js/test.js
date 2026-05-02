let i = 1; // aktualni index
let isAnimating = false; // jestli bezi animace

// Funkce pro update timeline
function updateTimeline(newIndex, count) {
  // zabrani opakovane animaci nebo stejnemu indexu
  if (isAnimating || newIndex === i) return;
  isAnimating = true;

  const oldIndex = i;
  i = newIndex;

  const echo = jQuery('.timeline_echo');

  // Vypocet sirky jednoho sloupce
  const colWidth = 100 / count;
  echo.css('--col-half-width', (colWidth / 2) + '%');

  // Vypocet pozice cary
  const usableWidth = 100 - colWidth;
  const oldPercent = ((oldIndex - 1) / (count - 1)) * usableWidth;
  const newPercent = ((newIndex - 1) / (count - 1)) * usableWidth;

  const isForward = newIndex > oldIndex;

  // Nastaveni pozice a delky cary
  echo.css({
    '--line-left': (isForward ? oldPercent : newPercent) + '%',
    '--line-width': Math.abs(newPercent - oldPercent) + '%'
  });

  // Okamzite prepne obsah

  // Tlacitka (aktivni / neaktivni)
  jQuery('.previous').toggleClass('button_active', i > 1);
  jQuery('.next').toggleClass('button_active', i < count);

  // Texty
  jQuery('.timeline > .div').removeClass('active');
  jQuery('.div0' + i).addClass('active');

  // Indikatory dole
  jQuery('.timeline_echo div').removeClass('active');
  jQuery('.timeline_echo [data-index="' + i + '"]').addClass('active');

  // Po chvili zmensi caru zpatky
  setTimeout(function () {
    echo.css({ '--line-left': newPercent + '%', '--line-width': '0%' });
    isAnimating = false;
  }, 400); // milisekundy
}

// Kliknuti na sipky
jQuery('.next, .previous').click(function () {
  const count = jQuery('.timeline_echo div').length;
  const nextI = jQuery(this).hasClass('next') ? i + 1 : i - 1;

  // kontrola rozsahu
  if (nextI >= 1 && nextI <= count) {
    updateTimeline(nextI, count);
  }
});

// Kliknuti na indikator dole
jQuery('.timeline_echo div').click(function () {
  const count = jQuery('.timeline_echo div').length;
  updateTimeline(parseInt(jQuery(this).attr('data-index'), 10), count);
});