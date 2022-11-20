import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssEleven {
  constructor() {
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    position: relative;
    padding: 16px 24px;
    border: 1px solid #3037c2;
    border-radius: 40px;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #3037c2;
  
    cursor: pointer;
  }
  
  .btn::before {
    content: 'Hover me...';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3037c2;
    color: white;
    border-radius: 40px;
    border: 1px solid #3037c2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }
  
  .btn:hover:before {
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }
  
  .btn::after {
    content: 'Hover me...';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #3037c2;
    color: white;
    border-radius: 40px;
    border: 1px solid #3037c2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    transform: scale(0) rotateY(0deg);
    opacity: 0;
  }
  
  .btn:hover:after {
    left: 0;
    transform: scale(1) rotateY(360deg);
    opacity: 1;
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
  static get is() { return "button-css-eleven"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-eleven.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-eleven.css"]
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    position: relative;\r\n    padding: 16px 24px;\r\n    border: 1px solid #3037c2;\r\n    border-radius: 40px;\r\n    width: max-content;\r\n    height: max-content;\r\n  \r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n  \r\n    background-color: transparent;\r\n    color: #3037c2;\r\n  \r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn::before {\r\n    content: 'Hover me...';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #3037c2;\r\n    color: white;\r\n    border-radius: 40px;\r\n    border: 1px solid #3037c2;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  .btn:hover:before {\r\n    left: 100%;\r\n    transform: scale(0) rotateY(360deg);\r\n    opacity: 0;\r\n  }\r\n  \r\n  .btn::after {\r\n    content: 'Hover me...';\r\n    position: absolute;\r\n    top: 0;\r\n    left: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #3037c2;\r\n    color: white;\r\n    border-radius: 40px;\r\n    border: 1px solid #3037c2;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 0.5s;\r\n    transform: scale(0) rotateY(0deg);\r\n    opacity: 0;\r\n  }\r\n  \r\n  .btn:hover:after {\r\n    left: 0;\r\n    transform: scale(1) rotateY(360deg);\r\n    opacity: 1;\r\n  }  \r\n  </code>`"
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
