let i = 1;
let isAnimating = false;

// 🔧 pomocná funkce – střed prvku v %
function getCenterPercent(item, timeline) {
  const itemOffset = item.offset().left;
  const timelineOffset = timeline.offset().left;

  const center = itemOffset - timelineOffset + item.outerWidth() / 2;
  return (center / timeline.outerWidth()) * 100;
}

// 🔧 šedá základní čára (fix pro libovolný počet, třeba 7)
function updateBaseLine() {
  const timeline = jQuery('.education_timeline .timeline');
  const items = timeline.find('div');

  const first = items.eq(0);
  const last = items.eq(items.length - 1);

  const firstPercent = getCenterPercent(first, timeline);
  const lastPercent = getCenterPercent(last, timeline);

  timeline.css('--base-left', firstPercent + '%');
  timeline.css('--base-width', (lastPercent - firstPercent) + '%');
}

function updateTimeline(newIndex, count) {
  if (isAnimating || newIndex === i) return;
  isAnimating = true;

  const oldIndex = i;
  i = newIndex;

  const timeline = jQuery('.education_timeline .timeline');
  const items = timeline.find('div');

  const oldItem = items.eq(oldIndex - 1);
  const newItem = items.eq(newIndex - 1);

  const oldPercent = getCenterPercent(oldItem, timeline);
  const newPercent = getCenterPercent(newItem, timeline);

  const isForward = newIndex > oldIndex;

  timeline.css({
    '--line-left': (isForward ? oldPercent : newPercent) + '%',
    '--line-width': Math.abs(newPercent - oldPercent) + '%'
  });

  // šipky
  jQuery('.education_timeline .previous')
    .toggleClass('button_active', i > 1);

  jQuery('.education_timeline .next')
    .toggleClass('button_active', i < count);

  // obsah
  jQuery('.education_timeline > .div').removeClass('active');
  jQuery('.education_timeline > .div[data-index="' + i + '"]').addClass('active');

  // timeline indikátor
  items.removeClass('active');
  items.eq(i - 1).addClass('active');

  // smrštění čáry
  setTimeout(function () {
    timeline.css({
      '--line-left': newPercent + '%',
      '--line-width': '0%'
    });
    isAnimating = false;
  }, 400);
}

// POSLUCHAČI
jQuery('.education_timeline .next, .education_timeline .previous').click(function () {
  const count = jQuery('.education_timeline .timeline div').length;
  const nextI = jQuery(this).hasClass('next') ? i + 1 : i - 1;

  if (nextI >= 1 && nextI <= count) {
    updateTimeline(nextI, count);
  }
});

jQuery('.education_timeline .timeline div').click(function () {
  const count = jQuery('.education_timeline .timeline div').length;
  updateTimeline(parseInt(jQuery(this).attr('data-index'), 10), count);
});

// 🔧 INIT
jQuery(document).ready(function () {
  const timeline = jQuery('.education_timeline .timeline');
  const items = timeline.find('div');

  // nastavení základní čáry
  updateBaseLine();

  // nastavení počáteční pozice červené čáry
  const firstPercent = getCenterPercent(items.eq(0), timeline);
  timeline.css('--line-left', firstPercent + '%');
  timeline.css('--line-width', '0%');
});

// 🔧 resize fix
jQuery(window).on('resize', function () {
  const timeline = jQuery('.education_timeline .timeline');
  const items = timeline.find('div');

  updateBaseLine();

  const percent = getCenterPercent(items.eq(i - 1), timeline);
  timeline.css('--line-left', percent + '%');
});
