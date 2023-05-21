const HomePage = require("./pages/home.page");
const CalculatorPage = require("./pages/calculator.page");
const SearchResultsPage = require("./pages/searchResult.page")

function page(name) {
  const items = {
    home: new HomePage(),
    calculator: new CalculatorPage(),
    searchResults: new SearchResultsPage()
  };
  return items[name];
}
module.exports = { HomePage, CalculatorPage, SearchResultsPage, page };
