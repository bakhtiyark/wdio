const BaseComponent = require("../../common/base.component");

class ComputeEngineFormComponent extends BaseComponent {
  constructor() {
    super("form[name=ComputeEngineForm]");
  }

  getlocationtValue(text) {
    return browser.$(
      `//md-select-menu//md-option[contains(@ng-repeat,'.computeServer')]//div[normalize-space(text())='${text}']`
    );
  }

  item(name) {
    const selectors = {
      quantity: 'input[ng-model="listingCtrl.computeServer.quantity"]',
      label: 'input[ng-model="listingCtrl.computeServer.label"]',
      os: '[ng-model="listingCtrl.computeServer.os"]',
      class: '[ng-model="listingCtrl.computeServer.class"]',
      family: '[ng-model="listingCtrl.computeServer.family"]',
      series: '[ng-model="listingCtrl.computeServer.series"]',
      instance: '[ng-model="listingCtrl.computeServer.instance"]',
      threads: '[ng-model="listingCtrl.computeServer.threadPerCore"]',
      bootDiskType: '[ng-model="listingCtrl.computeServer.bootDiskType"]',
      bootDiskSize: 'input[ng-model="listingCtrl.computeServer.bootDiskSize"]',
      addGPUs: '[ng-model="listingCtrl.computeServer.addGPUs"]',
      gpuType: '[ng-model="listingCtrl.computeServer.gpuType"]',
      gpuCount: '[ng-model="listingCtrl.computeServer.gpuCount"]',
      ssd: '[ng-model="listingCtrl.computeServer.ssd"]',
      location: '[ng-model="listingCtrl.computeServer.location"]',
      cud: '[ng-model="listingCtrl.computeServer.cud"]',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ComputeEngineFormComponent;
