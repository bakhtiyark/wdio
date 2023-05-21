const BaseComponent = require("../common/base.component");
const ComputeEngineEstimateComponent = require("./estimateBlock/ComputeEngineEstimate.component");

class EstimateBlockComponent extends BaseComponent {
  constructor() {
    super("#resultBlock");
    this.computerEngineEstimate = new ComputeEngineEstimateComponent();
  }
  item(text) {
    return this.rootEl.$(`//div[contains(text())='${text}']`);
  }
}

module.exports = EstimateBlockComponent;
