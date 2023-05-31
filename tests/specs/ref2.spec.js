// imports
const { page } = require("../../po/index");
const constants = require("../../constants/compute.json");
const assert = require("node:assert/strict");

describe("Hardcore", function () {
  it("SendEmail", async () => {
    // Start
    await page("home").open();
    const search = await page("home").header.input("search");
    await search.setValue(constants.searchquery);
    await page("home").header.submit();

    const searchTarget = await page("searchResults").searchElements.input(
      constants.searchquery
    );
    await searchTarget.waitForDisplayed();
    await searchTarget.click();

    // Manipulations with Calculator
    await page("calculator").enterIframe();
    const quantityElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("quantity");
    await quantityElement.waitForDisplayed();
    await quantityElement.setValue(constants.quantity);

    const osElement = await page("calculator").tabsBlock.computeEngineForm.item(
      "os"
    );
    await osElement.waitForDisplayed();
    await osElement.click();
    const osValue = await page("calculator").tabsBlock.dropdownValue(
      constants.os
    );
    await osValue.waitForDisplayed();
    await osValue.click();

    const seriesElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("series");
    await seriesElement.waitForDisplayed();
    await seriesElement.click();

    const seriesValue = await page("calculator").tabsBlock.dropdownValue(
      constants.series
    );
    await seriesValue.waitForDisplayed();
    await seriesValue.click();

    const instanceElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("instance");
    await instanceElement.waitForDisplayed();
    await instanceElement.click();

    const instanceValue = await page("calculator").tabsBlock.dropdownValue(
      constants.instance
    );
    await instanceValue.waitForDisplayed(20000);
    await instanceValue.click();

    const addGPUElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("addGPUs");
    await addGPUElement.waitForDisplayed();
    await addGPUElement.click();

    const gpuTypeElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("gpuType");
    await gpuTypeElement.waitForDisplayed();
    await gpuTypeElement.click();
    const gpuTypeValue = await page("calculator").tabsBlock.dropdownValue(
      constants.gpuType
    );
    await gpuTypeValue.waitForDisplayed();
    await gpuTypeValue.click();

    const gpuCountElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("gpuCount");
    await gpuCountElement.waitForDisplayed();
    await gpuCountElement.click();

    const gpuCountValue = await page("calculator").tabsBlock.dropdownValue(
      constants.gpuCount
    );
    await gpuCountValue.waitForDisplayed();
    await gpuCountValue.click();

    const ssdElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("ssd");
    await ssdElement.waitForDisplayed();
    await ssdElement.click();

    const ssdValue = await page("calculator").tabsBlock.dropdownValue(
      constants.ssd
    );
    await ssdValue.waitForDisplayed();
    await ssdValue.click();

    const locationElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("location");
    await locationElement.waitForDisplayed();
    await locationElement.click();

    // NVIDIA Tesla V100 is currently unavailable in Frankfurt, thus alternative location has been selected.
    const locationValue = await page("calculator").tabsBlock.dropdownValue(
      constants.locationAlt
    );
    await locationValue.waitForDisplayed();
    await locationValue.click();

    const committedUsageElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("cud");
    await committedUsageElement.waitForDisplayed();
    await committedUsageElement.click();

    const commitedUsageValue = await page("calculator").tabsBlock.dropdownValue(
      constants.cud
    );
    await commitedUsageValue.waitForDisplayed();
    await commitedUsageValue.click();

    await page("calculator").tabsBlock.addToEstimateButton.click();

    const cost = await page(
      "calculator"
    ).estimateBlock.computerEngineEstimate.item("estimatedCost");
    await cost.waitForDisplayed();
    const costTextContent = await cost.getText();

    //Email manipulation

    await page("calculator").estimateBlock.emailFormButton.click();

    await page("calculator").exitIframe();

    const calcPageUrl = await browser.getUrl();
    const emailPageUrl = "https://10minutemail.com/";
    await browser.newWindow(emailPageUrl);

    const tempEmail10 = await page("email").mailBox.email;
    const tempEmailButton = await page("email").mailBox.copyEmailButton;
    await tempEmail10.waitForDisplayed({
      timeout: 150000,
      interval: 75000,
    });
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
    await page("calculator").exitIframe();

    await browser.switchWindow(emailPageUrl);
    //browser.scroll(0, 600);

    const estimateMessage = await page("email").mailMessages.message;
    estimateMessage.waitForDisplayed({ timeout: 1600000, interval: 5000 });
    console.log(await estimateMessage);

    estimateMessage.click();

    const mailedCost = await page("email").mailMessages.price;
    mailedCost.waitForDisplayed({ timeout: 600000, interval: 5000 });
    console.log(await mailedCost);
    const mailedCostTextContent = await mailedCost.getText();

    assert.equal(
      costTextContent.split(" ")[4],
      mailedCostTextContent.split(" ")[4],
      `Invalid value, expected ${costTextContent} got ${mailedCostTextContent}`
    );
  });
});
