﻿const HomePage = require("./pages/home.page");
const CalculatorPage = require("./pages/calculator.page");
const SearchResultsPage = require("./pages/searchResult.page")
const TenMinuteEmailPage = require("./pages/tenMinuteEmail.page")

function page(name) {
  const items = {
    home: new HomePage(),
    calculator: new CalculatorPage(),
    searchResults: new SearchResultsPage(),
    tempEmail: new TenMinuteEmailPage()
  };
  return items[name];
}
module.exports = { HomePage, CalculatorPage, SearchResultsPage, page };