const BaseComponent = require("../common/base.component");

class tempailBoxComponent extends BaseComponent {
  constructor() {
    super(`//html[@lang]`);
  }
  get copyEmailButton() {
    return this.rootEl.$(`.kopyala-link`);
  }
  get email() {
    return this.rootEl.$(`#epostalar li:nth-child(2) a`);
    //*[@id="mail"]
    //input[@id="eposta_adres"]
    //*[@id="epostalar"]//li//a
  }
  get price() {
    return $('//h2[contains(text(),"Estimated Monthly Cost:")]')
  }
}

module.exports = tempailBoxComponent;
