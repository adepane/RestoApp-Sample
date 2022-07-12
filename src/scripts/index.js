import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/tablet.css';
import '../styles/phone.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#menu'),
  content: document.querySelector('#main-content'),
  skip: document.querySelector('#to-main-content'),
  main: document.querySelector('main'),
  menu: document.querySelectorAll('.menu-item'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
