// imports
const { By, Builder, Select, until } = require("selenium-webdriver");
require("chromedriver");
const constants = require("../../constants/constants.json");

// #1
const task1 = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  driver.get(constants.website);

  await driver
    .findElement(By.id(constants.textSpaceId))
    .sendKeys(constants.message1);
  await driver.findElement(By.id(constants.expirationContainer)).click();
  await driver.findElement(By.xpath(constants.expirationOption)).click();
  await driver
    .findElement(By.id(constants.postformTitleId))
    .sendKeys(constants.postForm1);

  await driver.findElement(By.className(constants.submitBtnClassName)).click();
};
// #2
const task2 = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  driver.get(constants.website);

  await driver
    .findElement(By.id(constants.textSpaceId))
    .sendKeys(constants.message2);
  await driver.findElement(By.id(constants.syntaxOptionContainerId)).click();
  await driver.findElement(By.xpath(constants.syntaxBashOption)).click();
  await driver.findElement(By.id(constants.expirationContainer)).click();
  await driver.findElement(By.xpath(constants.expirationOption)).click();
  await driver
    .findElement(By.id(constants.postformTitleId))
    .sendKeys(constants.postForm2);
  await driver.findElement(By.className(constants.submitBtnClassName)).click();

  await driver.wait(
    until.titleIs(`${constants.postForm2} - Pastebin.com`),
    10000,
    "Something went wrong"
  );
};

//task1();
task2();