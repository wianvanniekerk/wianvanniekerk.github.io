const initApp = () => {
  const menuIcon = document.getElementById('menu-icon');
  const menuLinks = document.getElementById('menu-links');

  const toggleMenu = () => {
    menuLinks.classList.toggle('hidden');
    menuLinks.classList.toggle('flex');
  }
  
  menuIcon.addEventListener('click', toggleMenu);
  menuLinks.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);