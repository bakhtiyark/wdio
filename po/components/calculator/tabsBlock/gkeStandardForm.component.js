const BaseComponent = require("../../common/base.component");

class GkeStandardFormComponent extends BaseComponent {
  constructor() {
    super("form[name=GKEClusterForm]");
  }

  getlocationtValue(text) {
    return browser.$(
      `//md-select-menu//md-option[contains(@ng-repeat,'.gkeClusters')]//div[normalize-space(text())='${text}']`
    );
  }

  item(name) {
    const selectors = {
      quantity: 'input[ng-model="listingCtrl.containerEngine.quantity"]',
      family: 'input[ng-model="listingCtrl.containerEngine.family"]',
      os: '[ng-model="listingCtrl.containerEngine.os"]',
      class: '[ng-model="listingCtrl.containerEngine.class"]',
      series: '[ng-model="listingCtrl.containerEngine.series"]',
      instance: '[ng-model="listingCtrl.containerEngine.instance"]',
      bootType: '[ng-model="listingCtrl.containerEngine.bootDiskType"]',
      diskSize: '[ng-model="listingCtrl.containerEngine.bootDiskSize"]',
      ssd: '[ng-model="listingCtrl.containerEngine.ssd"]',
      location: '[ng-model="listingCtrl.containerEngine.location"]',
      cud: '[ng-model="listingCtrl.containerEngine.cud"]',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = GkeStandardFormComponent;
