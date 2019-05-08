var btn = $('.header-body__burger'),
  menu = $('.header-body'),
  mobileNav = $('.header-body__nav'),
  mask = $('.mask');

function menuShow() {
  btn.on('click', function() {
    menu.toggleClass('is-active');
    mobileNav.toggleClass('is-active');
    mask.toggleClass('is-active');
  });
}
