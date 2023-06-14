const BaseComponent = require("../../common/base.component");

class GkeBackupFormComponent extends BaseComponent {
  constructor() {
    super("form[name=gkeBackupForm]");
  }

  getlocationtValue(text) {
    return browser.$(
      `//md-select-menu//md-option[contains(@ng-repeat,'.gkeClusters')]//div[normalize-space(text())='${text}']`
    );
  }

  item(name) {
    const selectors = {
      count: 'input[ng-model="listingCtrl.gkeBackup.backupPlanCount"]',
      podCount: 'input[ng-model="listingCtrl.gkeBackup.avgPodCount"]',
      os: '[ng-model="listingCtrl.gkeBackup.os"]',
      size: '[ng-model="listingCtrl.gkeBackup.backUpSize.value"]',
      uom: '[ng-model="listingCtrl.gkeBackup.backUpSize.unit"]',
      retention: '[ng-model="listingCtrl.gkeBackup.retentionPeriod"]',
      changeRate: '[ng-model="listingCtrl.gkeBackup.changeRate"]',
      diskSize: '[ng-model="listingCtrl.gkeBackup.bootDiskSize"]',
      location: '[ng-model="listingCtrl.gkeBackup.location"]',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = GkeBackupFormComponent;
