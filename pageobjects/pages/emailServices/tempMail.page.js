const TempBoxComponent = require("../../components/mailServices/tempBox.component");
const TempMessagesComponent = require("../../components/mailServices/tempMessages.component");
const BasePage = require("../base.page");

class TempMailPage extends BasePage {
  constructor() {
    super("https://temp-mail.org/en/");
    this.mailBox = new TempBoxComponent();
    this.mailMessages = new TempMessagesComponent();
  }
}

module.exports = TempMailPage;