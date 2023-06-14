const BaseComponent = require("../common/base.component");

class SearchElementsComponent extends BaseComponent {
  constructor() {
    super(".devsite-article");
  }
  input(text) {
    return this.rootEl.$(`//b[normalize-space(text())='${text}']`);
  }
}

module.exports = SearchElementsComponent;
