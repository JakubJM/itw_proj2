let i = 1;
let isAnimating = false;

function updateTimeline(newIndex, count) {
  if (isAnimating || newIndex === i) return;
  isAnimating = true;

  const oldIndex = i;
  i = newIndex;
  
  const echo = jQuery('.timeline_echo');

  // VÝPOČET A NASTAVENÍ ČÁRY
  const colWidth = 100 / count;
  echo.css('--col-half-width', (colWidth / 2) + '%');

  const usableWidth = 100 - colWidth;
  const oldPercent = ((oldIndex - 1) / (count - 1)) * usableWidth;
  const newPercent = ((newIndex - 1) / (count - 1)) * usableWidth;

  const isForward = newIndex > oldIndex;
  echo.css({
    '--line-left': (isForward ? oldPercent : newPercent) + '%',
    '--line-width': Math.abs(newPercent - oldPercent) + '%'
  });

  // OKAMŽITÉ PŘEPNUTÍ OBSAHU
  // 1. Šipky
  jQuery('.previous').toggleClass('button_active', i > 1);
  jQuery('.next').toggleClass('button_active', i < count);

  // 2. Textové divy (Zjednodušeno pro < 10 položek)
  jQuery('.timeline > .div').removeClass('active');
  jQuery('.div0' + i).addClass('active');

  // 3. Indikátory v patičce
  jQuery('.timeline_echo div').removeClass('active');
  jQuery('.timeline_echo [data-index="' + i + '"]').addClass('active');

  // KROK 2: Smrštění čáry po 400ms
  setTimeout(function() {
    echo.css({ '--line-left': newPercent + '%', '--line-width': '0%' });
    isAnimating = false;
  }, 400);
}

// POSLUCHAČI
jQuery('.next, .previous').click(function() {
  const count = jQuery('.timeline_echo div').length;
  const nextI = jQuery(this).hasClass('next') ? i + 1 : i - 1;
  
  if (nextI >= 1 && nextI <= count) {
    updateTimeline(nextI, count);
  }
});

jQuery('.timeline_echo div').click(function() {
  const count = jQuery('.timeline_echo div').length;
  updateTimeline(parseInt(jQuery(this).attr('data-index'), 10), count);
});
