// imports
const { By, Builder, Select, until } = require("selenium-webdriver");
require("chromedriver");

// Variables

const website = "https://pastebin.com";
const textSpaceId = "postform-text";
const message1 = "Hello from WebDriver";
const message2 = `git config --global user.name "New Sheriff in Town"
git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
git push origin master --force`;
const postformTitleId = "postform-name";
const postForm1 = "helloweb";
const postForm2 = "how to gain dominance among developers";
const syntaxOptionContainerId = "select2-postform-format-container";
const syntaxBashOption = "//li[text()='Bash']";
const expirationContainer = "select2-postform-expiration-container";
const expirationOption = "//li[text()='10 Minutes']";
const submitBtnClassName = "btn -big";

// #1
const task1 = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  driver.get(website);

  await driver.findElement(By.id(textSpaceId)).sendKeys(message1);
  await driver.findElement(By.id(expirationContainer)).click();
  await driver.findElement(By.xpath(expirationOption)).click();
  await driver.findElement(By.id(postformTitleId)).sendKeys(postForm1);

  await driver.findElement(By.className(submitBtnClassName)).click();
};
// #2
const task2 = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  driver.get(website);

  await driver.findElement(By.id(textSpaceId)).sendKeys(message2);
  await driver.findElement(By.id(syntaxOptionContainerId)).click();
  await driver.findElement(By.xpath(syntaxBashOption)).click();
  await driver.findElement(By.id(expirationContainer)).click();
  await driver.findElement(By.xpath(expirationOption)).click();
  await driver.findElement(By.id(postformTitleId)).sendKeys(postForm2);
  await driver.findElement(By.className(submitBtnClassName)).click();

  await driver.wait(until.titleIs(`${postForm2} - Pastebin.com`),10000,"Something went wrong");
};

//task1();
//task2();
