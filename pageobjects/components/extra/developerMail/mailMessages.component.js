const BaseComponent = require("../common/base.component");

class MailMessagesComponent extends BaseComponent {
  constructor() {
    super(`//main`);
  }
  get emailAddress(){
    return this.rootEl.$(`//*[@id="mailbox-header"]/div[1]/nobr/a`)
  }
  get message() {
    return this.rootEl.$(".mail_message");
  }
  get price(){
    return this.rootEl.$('//h2[contains(text(),"Estimated Monthly Cost:")]')
  }
  async enterIframe() {
    await browser.switchToFrame(await $("#iFrame"));
  }
}

module.exports = MailMessagesComponent;
