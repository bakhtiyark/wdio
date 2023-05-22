const BaseComponent = require("../common/base.component");

class MailBoxComponent extends BaseComponent {
  constructor() {
    super("#main_content");
  }
  get copyEmailButton() {
    return this.rootEl.$("#copy_address");
  }
  get email() {
    return this.rootEl.$("#mail_address");
  }
}

module.exports = MailBoxComponent;
