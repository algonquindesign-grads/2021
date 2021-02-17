const toggleOpen = document.getElementById('toggle-open');
const navUl = document.getElementById('h-nav-ul');


toggleOpen.addEventListener('click', () => {
  navUl.classList.toggle("show");
});
