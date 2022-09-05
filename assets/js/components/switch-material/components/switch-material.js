import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const switchMaterialCss = ":host{--bg-color-slider-off:#ffffff;--bg-color-slider-on:#6200ee;--bg-color-switch-body-off:rgba(33, 33, 33, 0.08);--bg-color-switch-body-on:rgba(98, 0, 238, 0.38);--bg-color-state:transparent;--bg-color-state-hover-off:rgba(0, 0, 0, 0.04);--bg-color-state-hover-on:rgba(98, 0, 238, 0.04);--bg-color-state-active-off:rgba(0, 0, 0, 0.12);--bg-color-state-active-on:rgba(98, 0, 238, 0.12);--opacity-switch-body-disabled:0.38;--opacity-slider-disabled:0.6;--bg-color-slider-disabled-off:#2f2f2f;--box-shadow-slider:0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);--border-switch-body:0px solid transparent;--border-radius-switch-body:7px;--size-switch-body:7px calc(36px / 2);--size-label:16px 20px;--size-slider:10px;--translate-slider:translate(0, -50%);--translate-switch-state:translate(0, -50%);--ease:ease;--ease-duration:0.2s}:host([theme='material-3']){--bg-color-slider-off:#79747E;--bg-color-slider-on:#FFFFFF;--bg-color-switch-body-off:#E7E0EC;--bg-color-switch-body-on:#6750A4;--bg-color-state-hover-off:rgba(28, 27, 31, 0.08);--bg-color-state-hover-on:rgba(103, 80, 164, 0.08);--bg-color-state-active-off:rgba(28, 27, 31, 0.12);--bg-color-state-active-on:rgba(103, 80, 164, 0.12);--box-shadow-slider:none;--border-switch-body:2px solid var(--bg-color-slider-off);--border-radius-switch-body:35px;--size-switch-body:14px 24px;--size-label:16px 26px;--size-slider:8px;--translate-slider:translate(7px, -50%);--translate-switch-state:translate(11px, -50%)}.switch{position:relative;display:inline-block;padding:var(--size-label);pointer-events:all;cursor:pointer}:host([disabled]) .switch{cursor:not-allowed}.switch--state:before{content:'';display:inline-block;position:absolute;top:50%;left:calc(-50% + 10px);transform:var(--translate-switch-state);padding:20px;border-radius:50%;background-color:var(--bg-color-state);transition:transform var(--ease-duration) var(--ease), background-color var(--ease-duration) var(--ease);z-index:3;pointer-events:none}:host([switch='on']) .switch--state:before{transform:translate(50%, -50%)}:host([switch='on'][theme=\"material-3\"]) .switch--state:before{transform:translate(calc(50% + 12px), -50%)}.switch--state:hover:before{background-color:var(--bg-color-state-hover-off)}.switch--state:active:before{background-color:var(--bg-color-state-active-off)}:host([switch='on']) .switch--state:hover:before{background-color:var(--bg-color-state-hover-on)}:host([switch='on']) .switch--state:active:before{background-color:var(--bg-color-state-active-on)}:host([disabled]) .switch--state:hover:before{background-color:transparent}:host([disabled]) .switch--state:active:before{background-color:transparent}[type='checkbox']{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none}.slider::after{content:'';display:inline-block;position:absolute;top:50%;left:0;padding:var(--size-slider);border-radius:50%;background-color:var(--bg-color-slider-off);box-shadow:var(--box-shadow-slider);transform:var(--translate-slider);transition:transform var(--ease-duration) var(--ease), background-color var(--ease-duration) var(--ease);pointer-events:none}.slider::before{content:'';display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:var(--size-switch-body);background-color:var(--bg-color-switch-body-off);border-radius:var(--border-radius-switch-body);border:var(--border-switch-body);transition:background-color var(--ease-duration) var(--ease)}:host([switch='on']) .slider::before{background-color:var(--bg-color-switch-body-on)}:host([switch='on'][theme=\"material-3\"]) .slider::before{border-color:var(--bg-color-switch-body-on)}:host([switch='on']) .slider::after{background-color:var(--bg-color-slider-on);transform:translate(100%, -50%)}:host([switch='on'][theme=\"material-3\"]) .slider::after{transform:translate(calc(100% + 12px), -50%) scale(1.5)}:host([theme=\"material-3\"]) .switch--state:active .slider:active:after{transform:translate(7px,-50%) scale(1.8)}:host([theme=\"material-3\"][disabled]) .switch--state:active .slider:active:after{transform:translate(7px,-50%) scale(1)}:host([switch=\"on\"][theme=\"material-3\"]) .switch--state:active .slider:active:after{transform:translate(calc(100% + 12px),-50%) scale(1.8)}:host([switch=\"on\"][theme=\"material-3\"][disabled]) .switch--state:active .slider:active:after{transform:translate(calc(100% + 12px),-50%) scale(1.5)}:host([disabled]) .slider::before{opacity:var(--opacity-switch-body-disabled)}:host([disabled]) .slider::after{opacity:var(--opacity-slider-disabled)}:host([disabled]:not([switch='on'])) .slider::after{background-color:var(--bg-color-slider-disabled-off)}";

const SwitchMaterial$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
  static get style() { return switchMaterialCss; }
}, [1, "switch-material", {
    "switch": [1537],
    "disabled": [1540],
    "theme": [1537]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["switch-material"];
  components.forEach(tagName => { switch (tagName) {
    case "switch-material":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SwitchMaterial$1);
      }
      break;
  } });
}

const SwitchMaterial = SwitchMaterial$1;
const defineCustomElement = defineCustomElement$1;

export { SwitchMaterial, defineCustomElement };
