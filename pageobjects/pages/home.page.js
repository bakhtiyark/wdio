const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/");
  }
  async searchText(searchQuery){
    const search = await this.header.input("search");
    await search.setValue(searchQuery);
    await this.header.submit();
  }
}
module.exports = HomePage;
