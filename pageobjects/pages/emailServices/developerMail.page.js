const BasePage = require("../base.page");

class DeveloperMailPage extends BasePage {
  constructor() {
    super("https://www.developermail.com/");
    this.mailBox = new MailBoxComponent();
    this.mailMessages = new MailMessagesComponent();
  }
}

module.exports = DeveloperMailPage;