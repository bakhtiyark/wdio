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

    //Email manipulation

    await page("calculator").estimateBlock.emailFormButton.click();

    await page("calculator").exitIframe();

    const calcPageUrl = await browser.getUrl();
    await browser.newWindow("https://10minutemail.com/");

    const tempEmailButton = await page("email").mailBox.copyEmailButton;
    await tempEmailButton.waitForDisplayed(40000);
    await tempEmailButton.click();

    await browser.switchWindow(calcPageUrl);

    await page("calculator").enterIframe();
    
    const tempEmail = await page("calculator").estimateBlock.sendEstimate.item("email");
    await tempEmail.waitForDisplayed(40000);
    await tempEmail.click();
    await tempEmail.keys(["Control", "v"])
    await page("calculator").estimateBlock.sendEstimateButton.click();
    
  });
  /*
  describe("Conformance check", () => {
    it("should have same location", async () => {
      const location = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("location");
      await location.waitForDisplayed();
      const locationTextContent = await location.getText();
      assert.equal(
        locationTextContent.split(" ")[1],
        constants.locationAlt.split(" ")[0],
        `Invalid value, expected ${constants.locationAlt.split(" ")[0]} got ${
          locationTextContent.split(" ")[1]
        }`
      );
    });
    it("Should have same commitment term", async () => {
      const cud = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("cud");
      await cud.waitForDisplayed();
      const cudTextContent = await cud.getText();
      assert.equal(
        cudTextContent.split(" ")[2],
        constants.cud.split(" ")[0],
        `Invalid value, expected ${constants.cud.split(" ")[0]} got ${
          cudTextContent.split(" ")[1]
        }`
      );
    });
    it("Should have same VM class", async () => {
      const vmclass = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("class");
      await vmclass.waitForDisplayed();
      const vmclassTextContent = await vmclass.getText();
      assert.equal(
        vmclassTextContent.split(" ")[2],
        constants.class,
        `Invalid value, expected ${constants.class} got ${
          vmclassTextContent.split(" ")[1]
        }`
      );
    });
    it("Should have same instance type", async () => {
      const instance = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("instance");
      await instance.waitForDisplayed();
      const instanceTextContent = await instance.getText();
      assert.ok(
        instanceTextContent
          .toString()
          .includes(constants.instance.split(" ")[0])
      );
    });
    it("Should have same SSD", async () => {
      const ssd = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("ssd");
      await ssd.waitForDisplayed();
      const ssdTextContent = await ssd.getText();
      assert.equal(
        ssdTextContent.split(" ")[2],
        constants.ssd.split(" ")[0],
        `Invalid value, expected ${constants.ssd} got ${
          ssdTextContent.split(" ")[2]
        }`
      );
    });
    it("Should have same price per month as if filled manually", async () => {
      const cost = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("estimatedCost");
      await cost.waitForDisplayed();
      const costTextContent = await cost.getText();
      assert.equal(
        costTextContent.split(" ")[4],
        constants.estimatedCost,
        `Invalid value, expected ${constants.estimatedCost} got ${
          costTextContent.split(" ")[4]
        }`
      );
    });
  });*/
});
