import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, skip, main, menu,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skip = skip;
    this._main = main;
    this._menu = menu;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      skip: this._skip,
      main: this._main,
      menu: this._menu,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const dt = new Date();
    document.querySelector('footer').innerHTML = `
        <div class="copyright">Copyright &copy; ${dt.getFullYear()} - MakanEnak Apps</div>
        <div class="author">handcraft with love by Ade Pane</div>
    `;
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
