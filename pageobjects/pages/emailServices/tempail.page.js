const TempailBoxComponent = require("../../components/mailServices/tempailBox.component");
const BasePage = require("../base.page");

class TempailPage extends BasePage {
  constructor() {
    super("https://tempail.com/");
    this.mailBox = new TempailBoxComponent();
  }
}

module.exports = TempailPage;