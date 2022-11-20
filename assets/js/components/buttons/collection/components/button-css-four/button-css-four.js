import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssFour {
  constructor() {
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    padding: 16px 24px;
    border: 1px solid #121212;
    border-radius: 0;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
    cursor: pointer;
    transition: color 0.1s ease 0.1s;
  }
  
  .btn:hover {
    color: #fff;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3037c2;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    z-index: -1;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3037c2;
    width: 101%;
    height: 101%;
    transform: translateY(100%);
    z-index: -1;
    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .btn:hover::after {
    transform: translateY(0);
    transition: transform 0.01s 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .btn:hover::before {
    transform: translateY(0);
    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);
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
  static get is() { return "button-css-four"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-four.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-four.css"]
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding: 16px 24px;\r\n    border: 1px solid #121212;\r\n    border-radius: 0;\r\n    width: max-content;\r\n    height: max-content;\r\n  \r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n  \r\n    background-color: transparent;\r\n    color: #121212;\r\n    cursor: pointer;\r\n    transition: color 0.1s ease 0.1s;\r\n  }\r\n  \r\n  .btn:hover {\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #3037c2;\r\n    width: 100%;\r\n    height: 100%;\r\n    transform: translateY(-100%);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .btn::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #3037c2;\r\n    width: 101%;\r\n    height: 101%;\r\n    transform: translateY(100%);\r\n    z-index: -1;\r\n    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);\r\n  }\r\n  \r\n  .btn:hover::after {\r\n    transform: translateY(0);\r\n    transition: transform 0.01s 0.4s cubic-bezier(0.7, 0, 0.2, 1);\r\n  }\r\n  \r\n  .btn:hover::before {\r\n    transform: translateY(0);\r\n    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);\r\n  }  \r\n  </code>`"
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
