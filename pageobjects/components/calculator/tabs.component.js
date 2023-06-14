const BaseComponent = require("../common/base.component");

class TabsComponent extends BaseComponent {
  constructor() {
    super("md-tabs");
  }
  item(text) {
    return this.rootEl.$(`//div[contains(text())='${text}']`);
  }
}

module.exports = TabsComponent;
