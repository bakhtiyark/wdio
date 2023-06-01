const BaseComponent = require("../common/base.component");

class tempailBoxComponent extends BaseComponent {
  constructor() {
    super(`//html[@lang]`);
  }
  get copyEmailButton() {
    return this.rootEl.$(`.kopyala-link`);
  }
  get email() {
    return this.rootEl.$(`//*[@id="epostalar"]//li//a`);
    //*[@id="mail"]
    ////input[@id="eposta_adres"]
  }
  get price() {
    return this.rootEl.$('//h2[contains(text(),"Estimated Monthly Cost:")]')
  }
}

module.exports = tempailBoxComponent;
