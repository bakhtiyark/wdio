// imports
const { page } = require("../../po/index");
const constants = require("../../constants/compute.json");

describe("Hurt me plenty", function () {
  before(async () => {
    await page("home").open();
    const search = await page("home").header.input("search");
    await search.setValue(constants.searchquery);
    await page("home").header.submit();
  });
});
