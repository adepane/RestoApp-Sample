const DrawerInitiator = {
  init({
    button, drawer, content, skip, main, menu,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    skip.addEventListener('click', (event) => {
      this._goToMainContent(event, content);
    });

    main.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    for (let i = 0; i < menu.length; i += 1) {
      menu[i].addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    }
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    document.querySelector('#logo-mobile').innerHTML = '<h1>MakanEnak.Com</h1>';
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    document.querySelector('#logo-mobile').innerHTML = '';
    drawer.classList.remove('open');
  },

  _goToMainContent(event, content) {
    event.stopPropagation();
    content.scrollIntoView();
  },
};

export default DrawerInitiator;
