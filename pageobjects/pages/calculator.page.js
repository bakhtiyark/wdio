const BasePage = require("./base.page");
const TabsComponent = require("../components/calculator/tabs.component");
const TabsBlockComponent = require("../components/calculator/tabsBlock.component");
const EstimateBlockComponent = require("../components/calculator/estimateBlock.component");

const element = "//iframe[contains(@name,'goog_')]";
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
}
module.exports = Calculator;
