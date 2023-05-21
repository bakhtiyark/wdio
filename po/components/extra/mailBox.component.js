const BaseComponent = require("../common/base.component");

class MailBoxComponent extends BaseComponent {
  constructor() {
    super("#mail_messages");
  }
  get copyEmail() {
    return $(this.rootSelector.$("#copy_address"));
  }
}

module.exports = MailBoxComponent;
