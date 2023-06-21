const BasePage = require("./base.page");

class HomePage extends BasePage {
  constructor() {
    super("/");
  }
  async searchText(searchQuery){;
    await this.header.input.setValue(searchQuery);
    await this.header.submit();
  }
}
module.exports = HomePage;
