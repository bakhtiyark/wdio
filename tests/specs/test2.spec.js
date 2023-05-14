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
  ;
};

smoke();
