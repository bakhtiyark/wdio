const BaseComponent = require("../common/base.component");
const ComputeEngineEstimateComponent = require("./estimateBlock/ComputeEngineEstimate.component");
const SendEstimateEmailComponent = require("./estimateBlock/sendEstimateEmail.component");

class EstimateBlockComponent extends BaseComponent {
  constructor() {
    super("#resultBlock");
    this.computerEngineEstimate = new ComputeEngineEstimateComponent();
    this.sendEstimate = new SendEstimateEmailComponent();
  }
  get emailFormButton() {
    return this.rootEl.$(`//button[@id="Email Estimate"]`);
  }

  async getData(target, index, limiter = " ") {
    const itemElement = await this.computerEngineEstimate.item(target);
    await itemElement.waitForDisplayed();
    const itemElementTextContent = await itemElement.getText();
    const result = await itemElementTextContent.split(limiter)[index];
    return result;
  }
  async sendEstimateMessage() {
    const tempEmail = await this.sendEstimate.email;
    await tempEmail.waitForDisplayed({ timeout: 150000, interval: 75000 });
    await tempEmail.click();
    await browser.keys(["Control", "v"]);
    await this.sendEstimate.sendEstimateButton.click();
  }
}

module.exports = EstimateBlockComponent;
