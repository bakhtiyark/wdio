const { page } = require("../../pageobjects/index");
const constants = require("../dataLayer.json");
const assert = require("node:assert/strict");

describe("Hardcore", function () {
  it("SendEmail", async () => {
    // Opening up and searching for required mode
    await page("home").open();
    await page("home").searchText(dataLayer.searchquery)
    await page("searchResults").goToTargetPage(dataLayer.searchquery)
    // Manipulations with Calculator
    await browser.switchToFrame(await $("//devsite-iframe//iframe"));
    await browser.switchToFrame(await $("#myFrame"));
    await page("calculator").fillForm(dataLayer)
    await page("calculator").submitForm();

    const cost = await page("calculator").estimateBlock.getPrice()

    await page("calculator").estimateBlock.emailFormButton.click();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[0]);

    //Email manipulation

    const calcPageUrl = await browser.getUrl();
    const emailPageUrl = "https://tempail.com/";
    await browser.newWindow(emailPageUrl);

    const tempEmailButton = await page("alt2Email").mailBox.copyEmailButton;
    await tempEmailButton.click();

    await browser.switchWindow(calcPageUrl);

    await page("calculator").enterIframe();

    const tempEmail = await page("calculator").estimateBlock.sendEstimate.item(
      "email"
    );
    await tempEmail.waitForDisplayed({ timeout: 150000, interval: 75000 });
    await tempEmail.click();
    await browser.keys(["Control", "v"]);
    await page(
      "calculator"
    ).estimateBlock.sendEstimate.sendEstimateButton.click();
    await browser.switchWindow(emailPageUrl);
    //browser.scroll(0, 600);

    const estimateMessage = await page("alt2Email").mailBox.email;
    await estimateMessage.waitForDisplayed({
      timeout: 1600000,
      interval: 5000,
      timeoutMsg: "Message hasn't arrived at specified timeout",
    });
    await estimateMessage.click();
    const messageIframe = await $("#iframe");
    await browser.waitUntil(
      async () => {
        console.log(
          `Target iFrame exists - ${await messageIframe.isExisting()}`
        );
        console.log(
          `Window handles available ${await browser.getWindowHandles()}`
        );
        return await messageIframe.isExisting();
      },
      { timeout: 500000 }
    );
    await messageIframe.waitForExist({ timeout: 690000, interval: 5000 });

    await browser.switchToFrame(2)

    const mailedCost = await page("alt2Email").mailBox.price;
    await mailedCost.waitForDisplayed({ timeout: 690000, interval: 5000 });
    console.log(await ` Mailed cost is ${mailedCost}`);
    const mailedCostTextContent = await mailedCost.getText();

    assert.equal(
      costTextContent.split(" ")[4],
      mailedCostTextContent.split(" ")[1],
      `Invalid value, expected ${costTextContent} got ${mailedCostTextContent}`
    );
  });
});
