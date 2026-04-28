jQuery('article').click(function(e) {
  if (jQuery(e.target).closest('button').length) {
    return;
  }
  
  jQuery(this).toggleClass('active');
});