const HomePage = require("./pages/home.page");
const CalculatorPage = require("./pages/calculator.page");
const SearchResultsPage = require("./pages/searchResult.page");

class Page {
  constructor() {
    this.home = new HomePage(),
    this.calculator = new CalculatorPage(),
    this.searchResults = new SearchResultsPage(),
    this.email = new TempailPage();
  }
}
const page = new Page()
module.exports = {
  page
};
