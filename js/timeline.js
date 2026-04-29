let i = 1; 
let isAnimating = false;  

function updateTimeline(newIndex, count) {   
  if (isAnimating || newIndex === i) return;   
  isAnimating = true;    

  const oldIndex = i;   
  i = newIndex;      

  // Změněno na nový kontejner patičky
  const echo = jQuery('.education_timeline .timeline');    

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
  jQuery('.education_timeline .previous').toggleClass('button_active', i > 1);   
  jQuery('.education_timeline .next').toggleClass('button_active', i < count);    

  // 2. Textové divy (nyní cílené přes data-index)
  jQuery('.education_timeline > .div').removeClass('active');   
  jQuery('.education_timeline > .div[data-index="' + i + '"]').addClass('active');    

  // 3. Indikátory v patičce   
  jQuery('.education_timeline .timeline div').removeClass('active');   
  jQuery('.education_timeline .timeline div[data-index="' + i + '"]').addClass('active');    

  // KROK 2: Smrštění čáry po 400ms   
  setTimeout(function() {     
    echo.css({ '--line-left': newPercent + '%', '--line-width': '0%' });     
    isAnimating = false;   
  }, 400); 
}  

// POSLUCHAČI 
jQuery('.education_timeline .next, .education_timeline .previous').click(function() {   
  const count = jQuery('.education_timeline .timeline div').length;   
  const nextI = jQuery(this).hasClass('next') ? i + 1 : i - 1;      

  if (nextI >= 1 && nextI <= count) {     
    updateTimeline(nextI, count);   
  } 
});  

jQuery('.education_timeline .timeline div').click(function() {   
  const count = jQuery('.education_timeline .timeline div').length;   
  updateTimeline(parseInt(jQuery(this).attr('data-index'), 10), count); 
});
// INICIALIZACE PŘI NAČTENÍ
const initCount = jQuery('.education_timeline .timeline div').length;
const initEcho = jQuery('.education_timeline .timeline');
const initColWidth = 100 / initCount;

// Nastavení počátečních CSS proměnných pro 2 položky
initEcho.css('--col-half-width', (initColWidth / 2) + '%');
initEcho.css('--line-left', '0%');
initEcho.css('--line-width', '0%');
