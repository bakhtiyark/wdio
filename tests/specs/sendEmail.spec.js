const { page } = require("../../pageobjects/index");
const dataLayer = require("../../constants/dataLayer.json");
const assert = require("node:assert/strict");

describe("Send Email", function () {
  it("Calculated and E-mailed prices must match", async () => {
    // Opening up and searching for required mode
    await page.home.open();
    await page.home.searchText(dataLayer.searchquery);
    await page.searchResults.goToTargetPage(dataLayer.searchquery);
    // Manipulations with Calculator
    await page.calculator.fillForm(dataLayer);
    await page.calculator.submitForm();
    const cost = await page.calculator.estimateBlock.getData("estimatedCost", 4);
    await page.calculator.estimateBlock.openEmailForm();
    const calcPageUrl = await browser.getUrl();

    //Email manipulation
    await browser.newWindow(dataLayer.tempail);
    await page.email.copyEmail();
    await browser.switchWindow(calcPageUrl);
    await page.calculator.estimateBlock.sendEstimateMessage();
    
    await browser.switchWindow(dataLayer.tempail);
    await page.email.receiveEstimate();
    const mailedPrice = await page.email.getMailedPrice();

    //Assertion
    assert.equal(cost, mailedPrice);
  });
});
