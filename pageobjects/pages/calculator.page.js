const BasePage = require("./base.page");
const TabsBlockComponent = require("../components/calculator/tabsBlock.component");
const EstimateBlockComponent = require("../components/calculator/estimateBlock.component");

class Calculator extends BasePage {
  constructor() {
    super("");
    this.tabsBlock = new TabsBlockComponent();
    this.estimateBlock = new EstimateBlockComponent();
  }

  async fillForm(datalayer) {
    await browser.switchToFrame(await $("//devsite-iframe//iframe"));
    await browser.switchToFrame(await $("#myFrame"));
    await this.fillField("quantity", datalayer, "setValue");
    await this.fillField("os", datalayer);
    await this.fillField("series", datalayer);
    await this.fillField("instance", datalayer);
    await this.fillField("addGPUs", datalayer, "checkbox");
    await this.fillField("gpuType", datalayer);
    await this.fillField("gpuCount", datalayer);
    await this.fillField("ssd", datalayer);
    await this.fillField("location", datalayer);
    await this.fillField("cud", datalayer);
  }
  async submitForm() {
    await this.tabsBlock.addToEstimateButton.click();
  }
  async fillField(fieldName, datalayer, type = "dropDown") {
    if (type === "setValue") {
      const formElement = this.tabsBlock.computeEngineForm.item(fieldName);
      await formElement.waitForDisplayed();
      await formElement.setValue(datalayer[fieldName]);
    }
    if (type === "dropDown") {
      const formElement = this.tabsBlock.computeEngineForm.item(fieldName);
      await formElement.waitForDisplayed();
      await formElement.click();
      const targetValue = this.tabsBlock.dropdownValue(datalayer[fieldName]);
      await targetValue.waitForDisplayed();
      await targetValue.click();
    }
    if (type === "checkbox") {
      const formElement = this.tabsBlock.computeEngineForm.item(fieldName);
      await formElement.waitForDisplayed();
      await formElement.click();
    }
  }
}
module.exports = Calculator;
