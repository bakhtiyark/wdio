const BaseComponent = require("../common/base.component");
const ComputeEngineFormComponent = require("./tabsBlock/computeEngineForm.component");
const GkeBackupFormComponent = require("./tabsBlock/gkeBackupForm.component");
const GkeStandardFormComponent = require("./tabsBlock/gkeStandardForm.component");

class TabsBlockComponent extends BaseComponent {
  constructor() {
    super("md-tabs");
    this.computeEngineForm = new ComputeEngineFormComponent();
    this.gkeStandardForm = new GkeStandardFormComponent();
    this.gkeBackupForm = new GkeBackupFormComponent();
  }
  get addToEstimateButton() {
    return this.rootEl.$(`//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]`);
  }
  dropdownValue(text) {
    return browser.$(
      `//body/div/md-select-menu//md-option//div[normalize-space(text())='${text}']`
    );
  }
  item(text) {
    return this.rootEl.$(
      `//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[19]/button[contains(text())='${text}']`
    );
  }
}

module.exports = TabsBlockComponent;
