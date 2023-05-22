const BaseComponent = require("../common/base.component");

class MailBoxComponent extends BaseComponent {
  constructor() {
    super("#mail_messages");
  }
  get copyEmailButton() {
    return $(this.rootEl.$("#copy_address"));
  }
}

module.exports = MailBoxComponent;
