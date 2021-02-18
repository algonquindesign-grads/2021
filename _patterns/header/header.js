const toggle = document.getElementById('toggle');
const navUL = document.getElementById('h-nav-ul');
const toggleClose = document.getElementById('toggle-close');
const toggleOpen = document.getElementById('toggle-open');

toggle.addEventListener('click', () => {
  navUL.classList.toggle('nav-show');
  toggleClose.classList.toggle('show');
  toggleOpen.classList.toggle('hide');
});
