import menuElementTpl from './menu.hbs';
import menuElements from './menu.json';
import './styles.css';

const menuRef = document.querySelector('.js-menu');
const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markUpMenu = makeMarkupMenu(menuElements);

menuRef.insertAdjacentHTML('beforeend', markUpMenu);

function makeMarkupMenu(menuElements) {
  return menuElementTpl(menuElements);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

inputRef.addEventListener('change', onInputChange);

function onInputChange() {
  if (inputRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
}

const savedTheme = localStorage.getItem('theme');
const parsedSavedTheme = JSON.parse(savedTheme);

const keepOfTheme = () => {
  if (savedTheme) {
    bodyRef.classList.add(parsedSavedTheme);
  }
};

keepOfTheme();

function savePositionOfCheckbox() {
  if (parsedSavedTheme === Theme.DARK) {
    inputRef.checked = true;
  }
}

savePositionOfCheckbox();
