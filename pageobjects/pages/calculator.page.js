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
    await this.fillSetValue("quantity", datalayer);
    await this.selectDropdownEl("os", datalayer);
    await this.selectDropdownEl("series", datalayer);
    await this.selectDropdownEl("instance", datalayer);
    await this.fillCheckbox("addGPUs");
    await this.selectDropdownEl("gpuType", datalayer);
    await this.selectDropdownEl("gpuCount", datalayer);
    await this.selectDropdownEl("ssd", datalayer);
    await this.selectDropdownEl("location", datalayer);
    await this.selectDropdownEl("cud", datalayer);
  }
  async submitForm() {
    await this.tabsBlock.addToEstimateButton.click();
  }
  async fillSetValue(fieldName, datalayer) {
    const formElement = this.tabsBlock.computeEngineForm.item(fieldName);
    await formElement.waitForDisplayed();
    await formElement.setValue(datalayer[fieldName]);
  }
  async fillCheckbox(fieldName) {
    const formElement = this.tabsBlock.computeEngineForm.item(fieldName);
    await formElement.waitForDisplayed();
    await formElement.click();
  }
  async selectDropdownEl(fieldName, datalayer) {
    const formElement = this.tabsBlock.computeEngineForm.item(fieldName);
    await formElement.waitForDisplayed();
    await formElement.click();
    const targetValue = this.tabsBlock.dropdownValue(datalayer[fieldName]);
    await targetValue.waitForDisplayed();
    await targetValue.click();
  }
}
module.exports = Calculator;
