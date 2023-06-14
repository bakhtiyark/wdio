const BaseComponent = require("../common/base.component");

class TempailBoxComponent extends BaseComponent {
  constructor() {
    super(`//html[@lang]`);
  }
  get copyEmailButton() {
    return this.rootEl.$(`.kopyala-link`);
  }
  get email() {
    return this.rootEl.$(`#epostalar li:nth-child(2) a`);
  }
  async enterIframe(){
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await browser.switchToFrame(2);
  }
  get price() {
    return $('tr:last-child td:last-child h3')
  }
}

module.exports = TempailBoxComponent;
