import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssTwelve {
  constructor() {
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    position: relative;
    padding: 16px 24px;
    border: none;
    border-radius: 40px;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
  
    transition: 0.3s;
    cursor: pointer;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -1%;
    height: 100%;
    width: 50%;
    background-color: rgba(255, 99, 71, 0.8);
    transform: skewX(30deg);
    z-index: -1;
    transition: 0.3s;
  }
  
  .btn:hover:before {
    transform: skewX(0deg);
    left: 50%;
    top: 0;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    height: 100%;
    width: 50%;
    background-color: rgba(64, 224, 208, 0.8);
    transform: skewX(30deg);
    z-index: -1;
    transition: 0.3s;
  }
  
  .btn:hover:after {
    transform: skewX(0deg);
    left: 0;
    top: 0;
  }  
  
  </code>`;
    this.jsSource = ``;
  }
  getSourceHandler(event) {
    if (event.detail !== this.el)
      return;
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
    return h("button", { class: "btn" }, "Hover me");
  }
  static get is() { return "button-css-twelve"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-twelve.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-twelve.css"]
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
      "defaultValue": "`<code class=\"language-markup\">&lt;button class=\"btn\">Hover me&lt;/button></code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    position: relative;\r\n    padding: 16px 24px;\r\n    border: none;\r\n    border-radius: 40px;\r\n    width: max-content;\r\n    height: max-content;\r\n  \r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n  \r\n    background-color: transparent;\r\n    color: #121212;\r\n  \r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -2px;\r\n    left: -1%;\r\n    height: 100%;\r\n    width: 50%;\r\n    background-color: rgba(255, 99, 71, 0.8);\r\n    transform: skewX(30deg);\r\n    z-index: -1;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .btn:hover:before {\r\n    transform: skewX(0deg);\r\n    left: 50%;\r\n    top: 0;\r\n  }\r\n  \r\n  .btn::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 50%;\r\n    height: 100%;\r\n    width: 50%;\r\n    background-color: rgba(64, 224, 208, 0.8);\r\n    transform: skewX(30deg);\r\n    z-index: -1;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .btn:hover:after {\r\n    transform: skewX(0deg);\r\n    left: 0;\r\n    top: 0;\r\n  }  \r\n  \r\n  </code>`"
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
