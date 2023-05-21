const SearchElementsComponent = require("../components/searchResults/searchElements.component");
const BasePage = require("./base.page");

class SearchResultsPage extends BasePage{
    constructor(){
        super("");
        this.searchElements = new SearchElementsComponent()
    }
}
module.exports = SearchResultsPage