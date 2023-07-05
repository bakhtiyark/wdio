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
  async openEmailForm(){
    await this.emailFormButton.click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
  }

  async getData(target, index) {
    const itemElement = await this.computerEngineEstimate.item(target);
    await itemElement.waitForDisplayed();
    const itemElementTextContent = await itemElement.getText();
    const result = await itemElementTextContent.split(/[\s]/)[index];
    return result;
  }
  async sendEstimateMessage() {
    await browser.switchToFrame(await $("//devsite-iframe//iframe"));
    await browser.switchToFrame(await $("#myFrame"));
    await this.sendEstimate.email.click();
    await browser.keys(["Control", "v"]);
    await this.sendEstimate.sendEstimateButton.click();
  }
}

module.exports = EstimateBlockComponent;
