const TempailBoxComponent = require("../../components/extra/tempailBox.component");
const BasePage = require("../base.page");

class TempailPage extends BasePage {
  constructor() {
    super("https://tempail.com/");
    this.mailBox = new TempailBoxComponent();
  }
}

module.exports = TempailPage;