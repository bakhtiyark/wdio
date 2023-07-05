const TempailBoxComponent = require("../../components/mailServices/tempailBox.component");
const BasePage = require("../base.page");

class TempailPage extends BasePage {
  constructor() {
    super("https://tempail.com/");
    this.mailBox = new TempailBoxComponent();
  }
  async copyEmail(){
    const tempEmailButton = await this.mailBox.copyEmailButton;
    await tempEmailButton.click();
  }
  async receiveEstimate(){
    const estimateMessage = await this.mailBox.email;
    await estimateMessage.waitForDisplayed({
      timeout: 1600000,
      interval: 5000,
      timeoutMsg: "Message hasn't arrived at specified timeout",
    });
    await estimateMessage.click();
  }
  async getMailedPrice(){
    const messageIframe = await $("#iframe");
    await messageIframe.waitForExist({ timeout: 690000, interval: 5000 });
    await browser.switchToFrame(2);

    const mailedCost = await this.mailBox.price;
    await mailedCost.waitForDisplayed({ timeout: 690000, interval: 5000 });
    const mailedCostTextContent = await mailedCost.getText();
    return mailedCostTextContent.split(" ")[1]
  }
}

module.exports = TempailPage;