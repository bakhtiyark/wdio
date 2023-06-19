const BaseComponent = require("../common/base.component");
const ComputeEngineFormComponent = require("./tabsBlock/computeEngineForm.component");


class TabsBlockComponent extends BaseComponent {
  constructor() {
    super("md-tabs");
    this.computeEngineForm = new ComputeEngineFormComponent();
  }
  get addToEstimateButton() {
    return this.rootEl.$(`//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]`);
  }
  dropdownValue(text) {
    return browser.$(
      `//body/div/md-select-menu//md-option//div[normalize-space(text())='${text}']`
    );
  }
}

module.exports = TabsBlockComponent;
