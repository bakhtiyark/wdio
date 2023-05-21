const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
  constructor() {
    super(".devsite-header--inner");
  }
  get rootEl() {
    return $(this.rootSelector);
  }
  input(name) {
    const selectors = {
      search: ".devsite-search-field",
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = HeaderComponent;
