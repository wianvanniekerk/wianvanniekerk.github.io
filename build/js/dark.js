const darkToggle = document.getElementById('darkToggle');
const icon = darkToggle.querySelector('i');
const blackElements = document.querySelectorAll('.black');
const whiteElements = document.querySelectorAll('.white');
const grayElements = document.querySelectorAll('.gray');
const darkGrayElements = document.querySelectorAll('.darkGray');
const menuIcon = document.getElementById('menu-icon');

let isDarkMode = localStorage.getItem('darkMode') === 'true';

const applyDarkMode = () => {
  icon.style.color = 'white';
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
  
  menuIcon.style.color = 'white';

  blackElements.forEach(element => {
    element.style.backgroundColor = 'black';
  });
  whiteElements.forEach(element => {
    element.style.color = 'white';
  });
  grayElements.forEach(element => {
    element.style.color = '#9ca3af';
  });
  darkGrayElements.forEach(element => {
    element.style.backgroundColor = '#374151';
  });
};

const applyLightMode = () => {
  icon.style.color = 'black';
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');

  menuIcon.style.color = 'black';
  
  blackElements.forEach(element => {
    element.style.backgroundColor = 'white';
  });
  whiteElements.forEach(element => {
    element.style.color = 'black';
  });
  grayElements.forEach(element => {
    element.style.color = '#4b5563';
  });
  darkGrayElements.forEach(element => {
    element.style.backgroundColor = '#f9fafb';
  });
};

if (isDarkMode) {
  applyDarkMode();
}

darkToggle.addEventListener('mouseenter', () => {
  icon.style.color = '#0ea5e9';
});

darkToggle.addEventListener('mouseleave', () => {
  icon.style.color = isDarkMode ? 'white' : 'black';
});

darkToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;

  localStorage.setItem('darkMode', isDarkMode);
  
  if (isDarkMode) {
    applyDarkMode();
  } else {
    applyLightMode();
  }
});