const BaseComponent = require("../common/base.component");
const ComputeEngineEstimateComponent = require("./estimateBlock/ComputeEngineEstimate.component");
const SendEstimateEmailComponent = require("./estimateBlock/sendEstimateEmail.component");

class EstimateBlockComponent extends BaseComponent {
  constructor() {
    super("#resultBlock");
    this.computerEngineEstimate = new ComputeEngineEstimateComponent();
    this.sendEstimate = new SendEstimateEmailComponent();
  }
  item(text) {
    return this.rootEl.$(`//div[contains(text())='${text}']`);
  }
  get emailFormButton() {
    return this.rootEl.$(`//button[@id="Email Estimate"]`);
  }

  async getData(item, index, limiter = " ") {
    const itemElement = await this.computerEngineEstimate.item(item);
    await itemElement.waitForDisplayed();
    const itemElementTextContent = await itemElement.getText();
    const result = await itemElementTextContent.split(limiter)[index];
    return result;
  }
  async sendEstimateMessage() {
    const tempEmail = await this.sendEstimate.item("email");
    await tempEmail.waitForDisplayed({ timeout: 150000, interval: 75000 });
    await tempEmail.click();
    await browser.keys(["Control", "v"]);
    await this.sendEstimate.sendEstimateButton.click();
  }
}

module.exports = EstimateBlockComponent;
