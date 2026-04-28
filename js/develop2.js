jQuery('article').click(function(e) {
  if (jQuery(e.target).closest('button').length) {
    return;
  }
  
  jQuery('article').not(this).removeClass('active')
  jQuery(this).toggleClass('active');
});