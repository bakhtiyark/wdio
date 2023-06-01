const tempailBoxComponent = require("../components/extra/tempailBox.component");
const BasePage = require("./base.page");

class tempailPage extends BasePage {
  constructor() {
    super("https://tempail.com/");
    this.mailBox = new tempailBoxComponent;
  }
}

module.exports = tempailPage;