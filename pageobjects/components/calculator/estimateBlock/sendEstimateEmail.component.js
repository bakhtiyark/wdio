const BaseComponent = require("../../common/base.component");

class SendEstimateEmailComponent extends BaseComponent {
  constructor() {
    super('form[name="emailForm"');
  }

  get sendEstimateButton() {
    return this.rootEl.$(`//button[contains(text(),"Send Email")]`);
  }

  get email() {
    return this.rootSelector.$(`//input[@ng-model="emailQuote.user.email"]`);
  }
}

module.exports = SendEstimateEmailComponent;
