const BaseComponent = require("../common/base.component");
const ComputeEngineEstimateComponent = require("./estimateBlock/ComputeEngineEstimate.component");
const SendEstimateEmailComponent = require("./estimateBlock/sendEstimateEmail.component");

class EstimateBlockComponent extends BaseComponent {
  constructor() {
    super("#resultBlock");
    this.computerEngineEstimate = new ComputeEngineEstimateComponent();
    this.sendEstimate = new SendEstimateEmailComponent();
  }
  item(text) {
    return this.rootEl.$(`//div[contains(text())='${text}']`);
  }
  get emailFormButton() {
    return this.rootEl.$(`//button[@id="Email Estimate"]`);
  }
  async getLocation() {
    const location = await this.computerEngineEstimate.item("location");
    await location.waitForDisplayed();
    const locationTextContent = await location.getText();
    return locationTextContent.split(" ")[1];
  }
  async getCUD(){
    const cud = await this.computerEngineEstimate.item("cud");
    await cud.waitForDisplayed();
    const cudTextContent = await cud.getText();
    return cudTextContent.split(" ")[2]
  }
  async getVMClass(){
    const vmclass = await this.computerEngineEstimate.item("class");
    await vmclass.waitForDisplayed();
    const vmclassTextContent = await vmclass.getText();
    return vmclassTextContent.split(" ")[2]
  }
  async getInstance(){
    const instance = await this.computerEngineEstimate.item("instance");
    await instance.waitForDisplayed();
    const instanceTextContent = await instance.getText();
    return instanceTextContent.toString()
  }
  async getSSD(){
    const ssd = await this.computerEngineEstimate.item("ssd");
    await ssd.waitForDisplayed();
    const ssdTextContent = await ssd.getText();
    return ssdTextContent.split(" ")[2]
  }
  async getPrice(){
    const cost = await this.computerEngineEstimate.item("estimatedCost");
    await cost.waitForDisplayed();
    const costTextContent = await cost.getText();
    return costTextContent.split(" ")[4]
  }
  // Placeholder, not used yet
  async getReferenceObject(){
    const referenceObject = {}
    referenceObject["price"] = await this.getPrice()
    referenceObject["location"] = await this.getLocation()
    referenceObject["ssd"] = await this.getSSD()
    referenceObject["cud"] = await this.getCUD()
    referenceObject["instance"] = await this.getInstance()
    referenceObject["vmclass"] = await this.getVMClass()
    return referenceObject
  }
  async sendEstimateMessage(){
    const tempEmail = await this.sendEstimate.item("email");
    await tempEmail.waitForDisplayed({ timeout: 150000, interval: 75000 });
    await tempEmail.click();
    await browser.keys(["Control", "v"]);
    await this.sendEstimate.sendEstimateButton.click();
  }
}

module.exports = EstimateBlockComponent;
