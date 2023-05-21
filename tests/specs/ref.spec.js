// imports
const { page } = require("../../po/index");
const constants = require("../../constants/compute.json");

describe("Hurt me plenty", function () {
  it("Search", async () => {
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
    
    const seriesValue = await page(
      "calculator"
    ).tabsBlock.dropdownValue(constants.series);
    await seriesValue.waitForDisplayed();
    await seriesValue.click();

    const instanceElement = await page(
      "calculator"
    ).tabsBlock.computeEngineForm.item("instance");
    await instanceElement.waitForDisplayed();
    await instanceElement.click();
    
    const instanceValue = await page(
      "calculator"
    ).tabsBlock.dropdownValue(constants.instance);
    await instanceValue.waitForDisplayed(20000);
    await instanceValue.click();

  });
});
