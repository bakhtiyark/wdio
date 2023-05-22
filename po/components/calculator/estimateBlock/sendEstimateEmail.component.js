const BaseComponent = require("../../common/base.component");

class SendEstimateEmailComponent extends BaseComponent {
  constructor() {
    super('form[name="emailForm"');
  }

  get sendEstimateButton() {
    return this.rootEl.$(`//button[@ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"]`);
  }

  item(name) {
    const selectors = {
      email: `//input[@id="input_487"]`,
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = SendEstimateEmailComponent;
