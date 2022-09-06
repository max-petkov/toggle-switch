import { Component, h, Prop, Element, Event } from '@stencil/core';
export class SwitchMaterial {
  constructor() {
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
    return (h("label", { class: "switch switch--state" },
      h("input", { type: "checkbox", onChange: this.onSwitchHandler.bind(this), ref: el => (this.checkbox = el), disabled: this.disabled }),
      h("span", { class: "slider" })));
  }
  static get is() { return "switch-material"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./switch-material.css"]
  }; }
  static get styleUrls() { return {
    "$": ["switch-material.css"]
  }; }
  static get properties() { return {
    "switch": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "switch",
      "reflect": true,
      "defaultValue": "'off'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "theme": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "onSwitch",
      "name": "switch",
      "bubbles": false,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "object",
        "resolved": "object",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
