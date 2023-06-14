const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/");
  }
  async searchText(searchQuery){
    const search = await this.header.input("search");
    await search.setValue(searchQuery);
    await page("home").header.submit();
  }
}
module.exports = HomePage;
