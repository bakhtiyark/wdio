const tempBoxComponent = require("../components/extra/tempBox.component");
const tempMessagesComponent = require("../components/extra/tempMessages.component");
const BasePage = require("./base.page");

class tempMailPage extends BasePage {
  constructor() {
    super("https://temp-mail.org/en/");
    this.mailBox = new tempBoxComponent();
    this.mailMessages = new tempMessagesComponent();
  }
}

module.exports = tempMailPage;