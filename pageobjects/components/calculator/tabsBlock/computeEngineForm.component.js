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
      quantity: '//form//input[@id="input_96"]',
      label: '//form//input[@id="input_97"]',
      os: '//form//*[@id="select_value_label_88"]',
      class: '//form//*[@id="select_113"]',
      family: '//form//*[@id="select_119"]',
      series: '//form//*[@id="select_121"]',
      instance: '//form//*[@id="select_123"]',
      threads: '//form//*[@id="select_224"]',
      bootDiskType: '//form//*[@id="select_125"]',
      bootDiskSize: '//form//*[@id="input_127"]',
      addGPUs: '//*[@ng-model="listingCtrl.computeServer.addGPUs"]',
      gpuType: `//md-select[@placeholder="GPU type"]`,
      gpuCount: `//md-select[@placeholder="Number of GPUs"]`,
      ssd: '//form//*[@id="select_447"]',
      location: '//form//*[@id="select_129"]',
      cud: '//form//*[@id="select_136"]',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ComputeEngineFormComponent;
