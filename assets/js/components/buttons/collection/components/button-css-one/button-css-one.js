import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssOne {
  constructor() {
    this.htmlSource = `<code class="language-markup">&lt;button class="btn-skew">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn-skew {
    position: relative;
    width: max-content;
    padding: 24px 80px;
    border: none;
    display: flex;
    align-items: center;
    text-align: center;
  
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
  
    background-color: transparent;
  
    cursor: pointer;
  }
  
  .btn-skew:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #78daf9;
    height: 100%;
    padding: 0 64px;
    z-index: -1;
    transform: skewX(-45deg) translateX(-50%);
    transition: 0.6s cubic-bezier(1, 0.03, 0.86, 1.44);
  }
  
  .btn-skew:hover:before {
    transform: skewX(0) translateX(-50%);
    padding: 0 122px;
  }  
  </code>`;
    this.jsSource = ``;
  }
  getSourceHandler(event) {
    if (event.detail !== this.el) {
      console.log("NOT this element!");
      return;
    }
    ;
    console.log("Element is READY!");
    const ctaElement = document.querySelector('source-wrapper [slot="cta-element"]');
    const clonedElement = event.detail.cloneNode(true);
    ctaElement.append(clonedElement);
    const html = document.querySelector('source-tabs [slot="html-code"]');
    html.innerHTML = this.htmlSource;
    const css = document.querySelector('source-tabs [slot="css-code"]');
    css.innerHTML = this.cssSource;
    const js = document.querySelector('source-tabs [slot="js-code"]');
    js.innerHTML = this.jsSource;
    this.highlightCode.emit();
  }
  render() {
    return h("button", { class: "btn-skew" }, "Hover me");
  }
  static get is() { return "button-css-one"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-one.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-one.css"]
  }; }
  static get properties() { return {
    "htmlSource": {
      "type": "string",
      "mutable": false,
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
      "attribute": "html-source",
      "reflect": false,
      "defaultValue": "`<code class=\"language-markup\">&lt;button class=\"btn-skew\">Hover me&lt;/button></code>`"
    },
    "cssSource": {
      "type": "string",
      "mutable": false,
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
      "attribute": "css-source",
      "reflect": false,
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn-skew {\r\n    position: relative;\r\n    width: max-content;\r\n    padding: 24px 80px;\r\n    border: none;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n  \r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    font-family: inherit;\r\n  \r\n    background-color: transparent;\r\n  \r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn-skew:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    background-color: #78daf9;\r\n    height: 100%;\r\n    padding: 0 64px;\r\n    z-index: -1;\r\n    transform: skewX(-45deg) translateX(-50%);\r\n    transition: 0.6s cubic-bezier(1, 0.03, 0.86, 1.44);\r\n  }\r\n  \r\n  .btn-skew:hover:before {\r\n    transform: skewX(0) translateX(-50%);\r\n    padding: 0 122px;\r\n  }  \r\n  </code>`"
    },
    "jsSource": {
      "type": "string",
      "mutable": false,
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
      "attribute": "js-source",
      "reflect": false,
      "defaultValue": "``"
    }
  }; }
  static get events() { return [{
      "method": "highlightCode",
      "name": "highlightCode",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "getSource",
      "method": "getSourceHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
