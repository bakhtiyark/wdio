const SearchElementsComponent = require("../components/searchResults/searchElements.component");
const BasePage = require("./base.page");

class SearchResultsPage extends BasePage{
    constructor(){
        super("");
        this.searchElements = new SearchElementsComponent()
    }
    async goToTargetPage(searchText){
        const searchTarget = await page("searchResults").searchElements.input(searchText);
        await searchTarget.waitForDisplayed();
        await searchTarget.click();
    }
    
}
module.exports = SearchResultsPage