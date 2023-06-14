const BasePage = require("./base.page");
const TabsComponent = require("../components/calculator/tabs.component");
const TabsBlockComponent = require("../components/calculator/tabsBlock.component");
const EstimateBlockComponent = require("../components/calculator/estimateBlock.component");

class Calculator extends BasePage {
  constructor() {
    super("");
    this.tabs = new TabsComponent();
    this.tabsBlock = new TabsBlockComponent();
    this.estimateBlock = new EstimateBlockComponent();
  }
  async enterIframe() {
    await browser.switchToFrame(await $("//devsite-iframe//iframe"));
    await browser.switchToFrame(await $("#myFrame"));
  }
  async exitIframe() {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);
  }
  async inputData(datalayer) {
    const quantityElement = this.tabsBlock.computeEngineForm.item("quantity");
    await quantityElement.waitForDisplayed();
    await quantityElement.setValue(datalayer.quantity);

    const osElement = await this.tabsBlock.computeEngineForm.item("os");
    await osElement.waitForDisplayed();
    await osElement.click();

    const osValue = this.tabsBlock.dropdownValue(datalayer.os);
    await osValue.waitForDisplayed();
    await osValue.click();

    const seriesElement = await this.tabsBlock.computeEngineForm.item("series");
    await seriesElement.waitForDisplayed();
    await seriesElement.click();

    const seriesValue = await this.tabsBlock.dropdownValue(datalayer.series);
    await seriesValue.waitForDisplayed();
    await seriesValue.click();

    const instanceElement = await this.tabsBlock.computeEngineForm.item(
      "instance"
    );
    await instanceElement.waitForDisplayed();
    await instanceElement.click();

    const instanceValue = await this.tabsBlock.dropdownValue(
      datalayer.instance
    );
    await instanceValue.waitForDisplayed(20000);
    await instanceValue.click();

    const addGPUElement = await this.tabsBlock.computeEngineForm.item("addGPUs");
    await addGPUElement.waitForDisplayed();
    await addGPUElement.click();

    const gpuTypeElement = await this.tabsBlock.computeEngineForm.item("gpuType");
    await gpuTypeElement.waitForDisplayed();
    await gpuTypeElement.click();
    const gpuTypeValue = await this.tabsBlock.dropdownValue(datalayer.gpuType);
    await gpuTypeValue.waitForDisplayed();
    await gpuTypeValue.click();

    const gpuCountElement = await this.tabsBlock.computeEngineForm.item("gpuCount");
    await gpuCountElement.waitForDisplayed();
    await gpuCountElement.click();

    const gpuCountValue = await this.tabsBlock.dropdownValue(
      datalayer.gpuCount
    );
    await gpuCountValue.waitForDisplayed();
    await gpuCountValue.click();

    const ssdElement = await this.tabsBlock.computeEngineForm.item("ssd");
    await ssdElement.waitForDisplayed();
    await ssdElement.click();

    const ssdValue = await this.tabsBlock.dropdownValue(datalayer.ssd);
    await ssdValue.waitForDisplayed();
    await ssdValue.click();

    const locationElement = await this.tabsBlock.computeEngineForm.item("location");
    await locationElement.waitForDisplayed();
    await locationElement.click();

    // NVIDIA Tesla V100 is currently unavailable in Frankfurt, thus alternative location has been selected.
    const locationValue = await this.tabsBlock.dropdownValue(
      datalayer.locationAlt
    );
    await locationValue.waitForDisplayed();
    await locationValue.click();

    const committedUsageElement = await this.tabsBlock.computeEngineForm.item("cud");
    await committedUsageElement.waitForDisplayed();
    await committedUsageElement.click();

    const commitedUsageValue = await this.tabsBlock.dropdownValue(
      datalayer.cud
    );
    await commitedUsageValue.waitForDisplayed();
    await commitedUsageValue.click();
  }
}
module.exports = Calculator;
