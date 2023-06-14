const BaseComponent = require("../common/base.component");

class TempBoxComponent extends BaseComponent {
  constructor() {
    super(".temp-emailbox");
  }
  get copyEmailButton() {
    return this.rootEl.$(`//button[@class="btn-rds icon-btn bg-theme click-to-copy copyIconGreenBtn"]`);
  }
  get email() {
    return this.rootEl.$("#mail");
  }
}

module.exports = TempBoxComponent;
