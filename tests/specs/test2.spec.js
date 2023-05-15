// imports
const { By, Builder, Select, until, Key } = require("selenium-webdriver");
require("chromedriver");
const constants = require("../../constants/compute.json");

// #1
const smoke = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  driver.get(constants.website);
  await driver
    .findElement(By.name("q"))
    .sendKeys(constants.searchquery, Key.RETURN);
  let ele = await driver.wait(
    until.elementLocated(
      By.xpath(`//b[contains(text(), "Google Cloud Platform ")]/parent::a`)
    ),
    10000, "Element not Found"
  );
  await ele.click()

  
};
smoke();
