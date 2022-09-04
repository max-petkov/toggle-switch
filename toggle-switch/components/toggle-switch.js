import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const toggleSwitchCss = ":host{--bg-color-slider-off:#ffffff;--bg-color-slider-on:#6200ee;--bg-color-switch-off:rgba(33, 33, 33, 0.08);--bg-color-switch-on:rgba(98, 0, 238, 0.38);--bg-color-state:transparent;--bg-color-state-hover-off:rgba(0, 0, 0, 0.04);--bg-color-state-hover-on:rgba(98, 0, 238, 0.04);--bg-color-state-active-off:rgba(0, 0, 0, 0.12);--bg-color-state-active-on:rgba(98, 0, 238, 0.12);--opacity-switch-disabled:0.38;--opacity-slider-disabled:0.6;--bg-color-slider-disabled-off:#2f2f2f;--box-shadow-slider:0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);--ease:ease;--ease-duration:0.2s}.switch{position:relative;display:inline-block;padding:16px 20px;pointer-events:all;cursor:pointer}:host([disabled]) .switch{cursor:not-allowed}.switch--state:before{content:'';display:inline-block;position:absolute;top:50%;left:calc(-50% + 10px);transform:translate(0, -50%);padding:20px;border-radius:50%;background-color:var(--bg-color-state);transition:transform var(--ease-duration) var(--ease), background-color var(--ease-duration) var(--ease)}:host([switch='on']) .switch--state:before{transform:translate(50%, -50%)}.switch--state:hover:before{background-color:var(--bg-color-state-hover-off)}.switch--state:active:before{background-color:var(--bg-color-state-active-off)}:host([switch='on']) .switch--state:hover:before{background-color:var(--bg-color-state-hover-on)}:host([switch='on']) .switch--state:active:before{background-color:var(--bg-color-state-active-on)}:host([disabled]) .switch--state:hover:before{background-color:transparent}:host([disabled]) .switch--state:active:before{background-color:transparent}[type='checkbox']{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none}.slider::after{content:'';display:inline-block;position:absolute;top:50%;left:0;padding:10px;border-radius:50%;background-color:var(--bg-color-slider-off);box-shadow:var(--box-shadow-slider);transform:translate(0, -50%);transition:transform var(--ease-duration) var(--ease), background-color var(--ease-duration) var(--ease);pointer-events:none}.slider::before{content:'';display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:7px calc(36px / 2);background-color:var(--bg-color-switch-off);border-radius:7px;transition:background-color var(--ease-duration) var(--ease)}:host([switch='on']) .slider::before{background-color:var(--bg-color-switch-on)}:host([switch='on']) .slider::after{background-color:var(--bg-color-slider-on);transform:translate(100%, -50%)}:host([disabled]) .slider::before{opacity:var(--opacity-switch-disabled)}:host([disabled]) .slider::after{opacity:var(--opacity-slider-disabled)}:host([disabled]:not([switch='on'])) .slider::after{background-color:var(--bg-color-slider-disabled-off)}";

const ToggleSwitch$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.onSwitch = createEvent(this, "switch", 3);
    this.switch = 'off';
    this.disabled = false;
  }
  onSwitchHandler() {
    if (this.checkbox.checked)
      this.switch = 'on';
    else
      this.switch = 'off';
    this.onSwitch.emit({ isActive: this.switch === 'on' ? true : false });
  }
  componentDidLoad() {
    if (this.el.getAttribute('switch') === 'on')
      this.checkbox.checked = true;
    else
      this.checkbox.checked = false;
  }
  render() {
    return (h("label", { class: "switch switch--state" }, h("input", { type: "checkbox", onChange: this.onSwitchHandler.bind(this), ref: el => (this.checkbox = el), disabled: this.disabled }), h("span", { class: "slider" })));
  }
  get el() { return this; }
  static get style() { return toggleSwitchCss; }
}, [1, "toggle-switch", {
    "switch": [1537],
    "disabled": [1540]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["toggle-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "toggle-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ToggleSwitch$1);
      }
      break;
  } });
}

const ToggleSwitch = ToggleSwitch$1;
const defineCustomElement = defineCustomElement$1;

export { ToggleSwitch, defineCustomElement };
