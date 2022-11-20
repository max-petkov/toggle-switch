import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssFifteen {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn">
    Hover me
    &lt;span class="btn__side-border">&lt;/span>
  &lt;/button>
</code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    padding: 16px 24px;
    border: none;
    border-radius: 0;
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
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover:before {
    left: 0;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover:after {
    right: 0;
  }
  
  .btn__side-border::before {
    content: '';
    position: absolute;
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover .btn__side-border::before {
    top: 0;
  }
  
  .btn__side-border::after {
    content: '';
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover .btn__side-border::after {
    bottom: 0;
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
    return (h("button", { class: "btn" },
      "Hover me",
      h("span", { class: "btn__side-border" })));
  }
  static get is() { return "button-css-fifteen"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-fifteen.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-fifteen.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;button class=\"btn\">\r\n    Hover me\r\n    &lt;span class=\"btn__side-border\">&lt;/span>\r\n  &lt;/button>\r\n</code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    overflow: hidden;\r\n    position: relative;\r\n    padding: 16px 24px;\r\n    border: none;\r\n    border-radius: 0;\r\n    width: max-content;\r\n    height: max-content;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    background-color: transparent;\r\n    color: #121212;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: rgb(34, 34, 34);\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  .btn:hover:before {\r\n    left: 0;\r\n  }\r\n  \r\n  .btn::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: rgb(34, 34, 34);\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  .btn:hover:after {\r\n    right: 0;\r\n  }\r\n  \r\n  .btn__side-border::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -100%;\r\n    right: 0;\r\n    width: 2px;\r\n    height: 100%;\r\n    background-color: rgb(34, 34, 34);\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  .btn:hover .btn__side-border::before {\r\n    top: 0;\r\n  }\r\n  \r\n  .btn__side-border::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -100%;\r\n    left: 0;\r\n    width: 2px;\r\n    height: 100%;\r\n    background-color: rgb(34, 34, 34);\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  .btn:hover .btn__side-border::after {\r\n    bottom: 0;\r\n  }  \r\n  </code>`"
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
