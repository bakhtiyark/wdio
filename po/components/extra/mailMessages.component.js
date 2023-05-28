const BaseComponent = require("../common/base.component");

class MailMessagesComponent extends BaseComponent {
  constructor() {
    super(".mail_messages");
  }
  get message() {
    return this.rootEl.$(".mail_message");
  }
  get price(){
    return this.rootEl.$('//h2[contains(text(),"Estimated Monthly Cost:")]')
  }
}

module.exports = MailMessagesComponent;
