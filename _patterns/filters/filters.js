$('.filter-btn').on('click', function (e) {
  e.preventDefault();

  if (catSelect != 'all') {
    $('#designer a:not(.' + catSelect + ')').attr('tabindex', '-1');
  }
});

document.querySelectorAll('.icon-link[data-category~="web"]');
document.querySelectorAll('.icon-link:not([data-category~="web"])');
