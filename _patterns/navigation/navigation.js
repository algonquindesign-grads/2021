var $toTopBtn = $('.to-top-btn');

$toTopBtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
