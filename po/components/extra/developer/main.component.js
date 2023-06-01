const BaseComponent = require("../common/base.component");

class DeveloperMailBoxComponent extends BaseComponent {
  constructor() {
    super(`//main[@role="main"]`);
  }
  get emailButton() {
    return this.rootEl.$(`//a[contains(text(), "Get Your Email Address Now!")]`);
  }
}

module.exports = DeveloperMailBoxComponent;
