const BasePage = require("./base.page");
const MailBoxComponent = require("../components/extra/mailBox.component");
const MailMessagesComponent = require("../components/extra/mailMessages.component");

class TenMinuteEmailPage extends BasePage {
  constructor() {
    super("https://10minutemail.com");
    this.mailBox = new MailBoxComponent();
    this.mailMessages = new MailMessagesComponent();
  }
}

module.exports = TenMinuteEmailPage;