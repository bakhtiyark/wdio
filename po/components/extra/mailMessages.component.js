const BaseComponent = require("../common/base.component");

class MailMessagesComponent extends BaseComponent {
  constructor() {
    super("#main_content");
  }
  get copyEmail() {
    return $(this.rootSelector.$("#copy_address"));
  }
}

module.exports = MailMessagesComponent;
