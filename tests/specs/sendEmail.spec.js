const { page } = require("../../pageobjects/index");
const dataLayer = require("../../constants/dataLayer.json");
const assert = require("node:assert/strict");

describe("Send Email", function () {
  it("Calculated and E-mailed prices must match", async () => {
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
    const calcPageUrl = await browser.getUrl();

    //Email manipulation
    const emailPageUrl = "https://tempail.com/";
    await browser.newWindow(emailPageUrl);
    await page("alt2Email").copyEmail()
    await browser.switchWindow(calcPageUrl);

    await browser.switchToFrame(await $("//devsite-iframe//iframe"));
    await browser.switchToFrame(await $("#myFrame"));

    await page("calculator").estimateBlock.sendEstimateMessage();
    
    await browser.switchWindow(emailPageUrl);

    await page("alt2Email").receiveEstimate();

    const messageIframe = await $("#iframe");
    await messageIframe.waitForExist({ timeout: 690000, interval: 5000 });
    await browser.switchToFrame(2)

    const mailedPrice = await page("alt2Email").getMailedPrice();

    //Assertion
    assert.equal(cost,mailedPrice,`Invalid value, expected ${cost} got ${mailedPrice}`);
  });
});
