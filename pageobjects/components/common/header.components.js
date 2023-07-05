const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
  constructor() {
    super(".devsite-header--inner");
  }
  get input() {return this.rootEl.$(".devsite-search-field");}
}

module.exports = HeaderComponent;
