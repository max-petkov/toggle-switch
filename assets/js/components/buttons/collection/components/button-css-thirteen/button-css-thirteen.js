import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssThirteen {
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
    left: -2px;
    width: 100%;
    height: 100%;
    background-color: turquoise;
    z-index: -1;
    mix-blend-mode: multiply;
    transform-origin: top;
    transition: all 0.3s;
  }
  
  .btn:hover:before {
    top: -6px;
    left: 0;
    transform: perspective(500px) rotateX(75deg);
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 100%;
    height: 100%;
    background-color: tomato;
    z-index: -1;
    mix-blend-mode: multiply;
    transform-origin: bottom;
    transition: all 0.3s;
  }
  
  .btn:hover:after {
    top: 6px;
    left: 0;
    transform: perspective(500px) rotateX(-75deg);
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
  static get is() { return "button-css-thirteen"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-thirteen.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-thirteen.css"]
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    position: relative;\r\n    padding: 16px 24px;\r\n    border: none;\r\n    border-radius: 40px;\r\n    width: max-content;\r\n    height: max-content;\r\n  \r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n  \r\n    background-color: transparent;\r\n    color: #121212;\r\n  \r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -2px;\r\n    left: -2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: turquoise;\r\n    z-index: -1;\r\n    mix-blend-mode: multiply;\r\n    transform-origin: top;\r\n    transition: all 0.3s;\r\n  }\r\n  \r\n  .btn:hover:before {\r\n    top: -6px;\r\n    left: 0;\r\n    transform: perspective(500px) rotateX(75deg);\r\n  }\r\n  \r\n  .btn::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: tomato;\r\n    z-index: -1;\r\n    mix-blend-mode: multiply;\r\n    transform-origin: bottom;\r\n    transition: all 0.3s;\r\n  }\r\n  \r\n  .btn:hover:after {\r\n    top: 6px;\r\n    left: 0;\r\n    transform: perspective(500px) rotateX(-75deg);\r\n  }   \r\n  \r\n  </code>`"
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
