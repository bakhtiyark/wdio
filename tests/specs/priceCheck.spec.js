const { page } = require("../../pageobjects/index");
const dataLayer = require("../../constants/dataLayer.json");
const assert = require("node:assert/strict");

describe("Price check", function () {
  before("Get baseline data for further assertions", async () => {
    // Opening up and searching for required mode
    await page.home.open();
    await page.home.searchText(dataLayer.searchquery);
    await page.searchResults.goToTargetPage(dataLayer.searchquery);
    // Manipulations with Calculator
    await page.calculator.fillForm(dataLayer);
    await page.calculator.submitForm();
  });

  //Assertions

  describe("Conformance check", () => {
    it("should have same location", async () => {
      let location = await page.calculator.estimateBlock.getData("location", 1);
      assert.equal(location, dataLayer.location.split(" ")[0]);
    });

    it("Should have same commitment term", async () => {
      const cud = await page.calculator.estimateBlock.getData("cud", 2);
      assert.equal(cud, dataLayer.cud.split(" ")[0]);
    });

    it("Should have same VM class", async () => {
      const vm = await page.calculator.estimateBlock.getData("class", 2);
      assert.equal(vm, dataLayer.class);
    });

    it("Should have same instance type", async () => {
      const instance = await page.calculator.estimateBlock.getData("instance", 2, /[\s]/);
      assert.ok(dataLayer.instance.includes(instance));
    });

    it("Should have same SSD", async () => {
      const ssd = await page.calculator.estimateBlock.getData("ssd", 2);
      assert.equal(ssd, dataLayer.ssd.split(" ")[0]);
    });
    it("Should have same price per month as if filled manually", async () => {
      const cost = await page.calculator.estimateBlock.getData("estimatedCost", 4);
      assert.equal(cost, dataLayer.estimatedCost);
    });
  });
});