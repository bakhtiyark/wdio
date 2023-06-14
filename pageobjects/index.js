﻿const HomePage = require("./pages/home.page");
const CalculatorPage = require("./pages/calculator.page");
const SearchResultsPage = require("./pages/searchResult.page");
const TenMinuteEmailPage = require("./pages/emailServices/tenMinuteEmail.page");
const tempMailPage = require("./pages/emailServices/tempMail.page");
const tempailPage = require("./pages/emailServices/tempail.page");

function page(name) {
  const items = {
    home: new HomePage(),
    calculator: new CalculatorPage(),
    searchResults: new SearchResultsPage(),
    email: new TenMinuteEmailPage(),
    altEmail: new tempMailPage(),
    alt2Email: new tempailPage()
  };
  return items[name];
}
module.exports = {
  HomePage,
  CalculatorPage,
  SearchResultsPage,
  TenMinuteEmailPage,
  page,
  tempMailPage,
  tempailPage
};