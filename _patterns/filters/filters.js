$('#all-btn').on('click', function () {
  $('.filtered-web').removeClass('filtered-web');
  $('.filtered-branding').removeClass('filtered-branding');
  $('.filtered-uxui').removeClass('filtered-uxui');
  $('.filtered-print').removeClass('filtered-print');
  $('.filtered-illustration').removeClass('filtered-illustration');
  $('.filtered-motion').removeClass('filtered-motion');
  // $('.icon-link:not([data-category~="all"]) .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link:not([data-category~="all"])').removeClass('no-click');
  $('.icon-link:not([data-category~="all"])').attr('tabindex', '0');
  $('.filter-btn').removeClass('selected-filter');
});

$('#motion-btn').on('click', function () {
  $('.filtered-web').removeClass('filtered-web');
  $('.filtered-branding').removeClass('filtered-branding');
  $('.filtered-uxui').removeClass('filtered-uxui');
  $('.filtered-print').removeClass('filtered-print');
  $('.filtered-illustration').removeClass('filtered-illustration');
  // $('.icon-link:not([data-category~="motion"]) .student-card-photo img').addClass('filtered-student-photo');
  // $('.icon-link[data-category~="motion"] .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link[data-category~="motion"]').removeClass('no-click');
  $('.icon-link:not([data-category~="motion"])').addClass('no-click');
  $('.icon-link:not([data-category~="motion"])').attr('tabindex', '-1');
  $('.icon-link[data-category~="motion"]').attr('tabindex', '0');
  $('.home-card-grid > a[data-category~="motion"] .student-card-photo img').addClass('filtered-motion');
  $('#motion-btn').addClass('selected-filter');
  $('.filter-btn:not(#motion-btn)').removeClass('selected-filter');
});

$('#branding-btn').on('click', function () {
  $('.filtered-web').removeClass('filtered-web');
  $('.filtered-uxui').removeClass('filtered-uxui');
  $('.filtered-print').removeClass('filtered-print');
  $('.filtered-illustration').removeClass('filtered-illustration');
  $('.filtered-motion').removeClass('filtered-motion');
  // $('.icon-link:not([data-category~="branding"]) .student-card-photo img').addClass('filtered-student-photo');
  // $('.icon-link[data-category~="branding"] .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link[data-category~="branding"]').removeClass('no-click');
  $('.icon-link:not([data-category~="branding"])').addClass('no-click');
  $('.icon-link:not([data-category~="branding"])').attr('tabindex', '-1');
  $('.icon-link[data-category~="branding"]').attr('tabindex', '0');
  $('.home-card-grid > a[data-category~="branding"] .student-card-photo img').addClass('filtered-branding');
  $('#branding-btn').addClass('selected-filter');
  $('.filter-btn:not(#branding-btn)').removeClass('selected-filter');
});

$('#illustration-btn').on('click', function () {
  $('.filtered-web').removeClass('filtered-web');
  $('.filtered-branding').removeClass('filtered-branding');
  $('.filtered-uxui').removeClass('filtered-uxui');
  $('.filtered-print').removeClass('filtered-print');
  $('.filtered-motion').removeClass('filtered-motion');
  // $('.icon-link:not([data-category~="illustration"]) .student-card-photo img').addClass('filtered-student-photo');
  // $('.icon-link[data-category~="illustration"] .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link[data-category~="illustration"]').removeClass('no-click');
  $('.icon-link:not([data-category~="illustration"])').addClass('no-click');
  $('.icon-link:not([data-category~="illustration"])').attr('tabindex', '-1');
  $('.icon-link[data-category~="illustration"]').attr('tabindex', '0');
  $('.home-card-grid > a[data-category~="illustration"] .student-card-photo img').addClass('filtered-illustration');
  $('#illustration-btn').addClass('selected-filter');
  $('.filter-btn:not(#illustration-btn)').removeClass('selected-filter');
});

$('#print-btn').on('click', function () {
  $('.filtered-web').removeClass('filtered-web');
  $('.filtered-branding').removeClass('filtered-branding');
  $('.filtered-uxui').removeClass('filtered-uxui');
  $('.filtered-illustration').removeClass('filtered-illustration');
  $('.filtered-motion').removeClass('filtered-motion');
  // $('.icon-link:not([data-category~="print"]) .student-card-photo img').addClass('filtered-student-photo');
  // $('.icon-link[data-category~="print"] .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link[data-category~="print"]').removeClass('no-click');
  $('.icon-link:not([data-category~="print"])').addClass('no-click');
  $('.icon-link:not([data-category~="print"])').attr('tabindex', '-1');
  $('.icon-link[data-category~="print"]').attr('tabindex', '0');
  $('.home-card-grid > a[data-category~="print"] .student-card-photo img').addClass('filtered-print');
  $('#print-btn').addClass('selected-filter');
  $('.filter-btn:not(#print-btn)').removeClass('selected-filter');
});

$('#uxui-btn').on('click', function () {
  $('.filtered-web').removeClass('filtered-web');
  $('.filtered-branding').removeClass('filtered-branding');
  $('.filtered-print').removeClass('filtered-print');
  $('.filtered-illustration').removeClass('filtered-illustration');
  $('.filtered-motion').removeClass('filtered-motion');
  // $('.icon-link:not([data-category~="uxui"]) .student-card-photo img').addClass('filtered-student-photo');
  // $('.icon-link[data-category~="uxui"] .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link[data-category~="uxui"]').removeClass('no-click');
  $('.icon-link:not([data-category~="uxui"])').addClass('no-click');
  $('.icon-link:not([data-category~="uxui"])').attr('tabindex', '-1');
  $('.icon-link[data-category~="uxui"]').attr('tabindex', '0');
  $('.home-card-grid > a[data-category~="uxui"] .student-card-photo img').addClass('filtered-uxui');
  $('#uxui-btn').addClass('selected-filter');
  $('.filter-btn:not(#uxui-btn)').removeClass('selected-filter');
});

$('#web-btn').on('click', function () {
  $('.filtered-branding').removeClass('filtered-branding');
  $('.filtered-uxui').removeClass('filtered-uxui');
  $('.filtered-print').removeClass('filtered-print');
  $('.filtered-illustration').removeClass('filtered-illustration');
  $('.filtered-motion').removeClass('filtered-motion');
  // $('.icon-link:not([data-category~="web"]) .student-card-photo img').addClass('filtered-student-photo');
  // $('.icon-link[data-category~="web"] .student-card-photo img').removeClass('filtered-student-photo');
  $('.icon-link[data-category~="web"]').removeClass('no-click');
  $('.icon-link:not([data-category~="web"])').addClass('no-click');
  $('.icon-link:not([data-category~="web"])').attr('tabindex', '-1');
  $('.icon-link[data-category~="web"]').attr('tabindex', '0');
  $('.home-card-grid > a[data-category~="web"] .student-card-photo img').addClass('filtered-web');
  $('#web-btn').addClass('selected-filter');
  $('.filter-btn:not(#web-btn)').removeClass('selected-filter');
});
