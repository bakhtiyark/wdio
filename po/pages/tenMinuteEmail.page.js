const BasePage = require("./base.page");
const MailBoxComponent = require("../components/extra/mailBox.component");
const MailContentComponent = require("../components/extra/mailContent.component");
class TenMinuteEmailPage extends BasePage {
  constructor() {
    super("https://10minutemail.com");
    this.mailBox = new MailBoxComponent();
    this.mailContent = new MailContentComponent();
  }
}
module.exports = TenMinuteEmailPage;
