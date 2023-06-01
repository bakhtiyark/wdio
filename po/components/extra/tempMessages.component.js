const BaseComponent = require("../common/base.component");

class tempMessagesComponent extends BaseComponent {
  constructor() {
    super('.tm-content');
  }
  get message() {
    return this.rootEl.$(".mail_message");
  }
  get price(){
    return this.rootEl.$('//a[contains(text(),"Google")]')
  }
}

module.exports = tempMessagesComponent;
