class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }
  get rootEl() {return $(this.rootSelector);}
  submit() {
    browser.performActions([
      {
        type: "key",
        id: "keyboard",
        actions: [{ type: "keyDown", value: "\uE007" }],
      },
    ]);
    browser.releaseActions();
  }
}
module.exports = BaseComponent;
