const BaseComponent = require("./base.component");

class SideMenu extends BaseComponent {
  constructor() {
    super("lalala");
  }
  get name() {
    return this.rootEl.$("lalal");
  }
  item(name) {
    const selectors = {
      dash: "aa",
      dice: "kk",
    };
    return this.rootEl.$(selectors[name.toLowerCase()])
  }
}
