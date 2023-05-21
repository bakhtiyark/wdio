const BasePage = require("./base.page");
const TabsComponent = require("../components/calculator/tabs.component");
const TabsBlockComponent = require("../components/calculator/tabsBlock.component");
const { By } = require("selenium-webdriver");

const element = "//iframe[contains(@name,'goog_')]";
class Calculator extends BasePage {
  constructor() {
    super("");
    this.tabs = new TabsComponent();
    this.tabsBlock = new TabsBlockComponent();
  }
  async enterIframe() {
    await browser.switchToFrame(await $("//devsite-iframe//iframe"));
    await browser.switchToFrame(await $("#myFrame"));
  }
}
module.exports = Calculator;
