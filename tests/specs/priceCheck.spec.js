// imports
const { page } = require("../../pageobjects/index");
const dataLayer = require("../dataLayer.json");
const assert = require("node:assert/strict");
describe("Hurt me plenty", function () {
  before("Get baseline data for further assertions", async () => {
    // Start
    await page("home").open();
    await page("home").searchText(dataLayer.searchquery)
    await page("searchResults").goToTargetPage(dataLayer.searchquery)
    // Manipulations with Calculator
    await page("calculator").enterIframe();
    await page("calculator").inputData(dataLayer)
    await page("calculator").tabsBlock.addToEstimateButton.click();
  });

  //Assertions

  describe("Conformance check", () => {
    it("should have same location", async () => {
      const location = await page(
        "calculator"
      ).estimateBlock.computerEngineEstimate.item("location");
      await location.waitForDisplayed();
      const locationTextContent = await location.getText();
      assert.equal(
        locationTextContent.split(" ")[1],
        dataLayer.locationAlt.split(" ")[0],
        `Invalid value, expected ${dataLayer.locationAlt.split(" ")[0]} got ${
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
        dataLayer.cud.split(" ")[0],
        `Invalid value, expected ${dataLayer.cud.split(" ")[0]} got ${
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
        dataLayer.class,
        `Invalid value, expected ${dataLayer.class} got ${
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
          .includes(dataLayer.instance.split(" ")[0])
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
        dataLayer.ssd.split(" ")[0],
        `Invalid value, expected ${dataLayer.ssd} got ${
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
        dataLayer.estimatedCost,
        `Invalid value, expected ${dataLayer.estimatedCost} got ${
          costTextContent.split(" ")[4]
        }`
      );
    });
  });
});
