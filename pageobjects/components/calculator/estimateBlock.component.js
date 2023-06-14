const BaseComponent = require("../common/base.component");
const ComputeEngineEstimateComponent = require("./estimateBlock/ComputeEngineEstimate.component");
const SendEstimateEmailComponent = require("./estimateBlock/sendEstimateEmail.component");

class EstimateBlockComponent extends BaseComponent {
  constructor() {
    super("#resultBlock");
    this.computerEngineEstimate = new ComputeEngineEstimateComponent();
    this.sendEstimate = new SendEstimateEmailComponent()
  }
  item(text) {
    return this.rootEl.$(`//div[contains(text())='${text}']`);
  }
  get emailFormButton(){
    return this.rootEl.$(`//button[@id="Email Estimate"]`)
  }
}

module.exports = EstimateBlockComponent;