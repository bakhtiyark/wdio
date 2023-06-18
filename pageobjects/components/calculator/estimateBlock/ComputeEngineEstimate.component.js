const BaseComponent = require("../../common/base.component");

class ComputeEngineEstimateComponent extends BaseComponent {
  constructor() {
    super("md-content #compute");
  }

  getlocationtValue(text) {
    return browser.$(
      `//md-select-menu//md-option[contains(@ng-repeat,'.computeServer')]//div[normalize-space(text())='${text}']`
    );
  }
  //to be replaced
  item(name) {
    const selectors = {
      location: '//div[contains(text(),"Region:")]',
      cud: '//div[contains(text(),"Commitment term:")]',
      class: '//div[contains(text(),"Provisioning model:")]',
      instance: '//div[contains(text(),"Instance type:")]',
      os: '//div[contains(text(),"Operating System / Software:")]',
      gpu: '//div[contains(text(),"Operating System / GPU dies:")]',
      ssd: '//div[contains(text(),"Local SSD:")]',
      estimatedCost: '//div//b[contains(text(),"Estimated Component Cost:")]',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = ComputeEngineEstimateComponent;
