import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssMafanfa {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn">
    &lt;span>Hover me&lt;/span>
  &lt;/button>
  </code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    display: flex;
    padding: 16px 64px;
    border: none;
    border-radius: 48px;
    color: #121212;
    background-color: transparent;
    box-shadow: 0px 5px 15px rgba(50, 50, 93, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.04);
    text-decoration: none;
    font-size: 20px;
    font-family: inherit;
    -webkit-transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    -o-transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    cursor: pointer;
  }
  
  .btn__text {
    position: relative;
    display: inline-block;
    z-index: 3;
  }
  
  .btn:hover {
    color: #fff;
  }
  
  .btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background-color: #fca2d5;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    border-radius: 100%;
    -webkit-transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    -o-transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    z-index: 1;
  }
  
  .btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background-color: #385efc;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    border-radius: 100%;
    -webkit-transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;
    transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;
    -o-transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;
    z-index: 2;
  }
  
  .btn:hover:before {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    border-radius: 0;
  }
  
  .btn:hover:after {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    border-radius: 0;
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
      h("span", { class: "btn__text" }, "Hover me")));
  }
  static get is() { return "button-css-mafanfa"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-mafanfa.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-mafanfa.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;button class=\"btn\">\r\n    &lt;span>Hover me&lt;/span>\r\n  &lt;/button>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    overflow: hidden;\r\n    position: relative;\r\n    display: flex;\r\n    padding: 16px 64px;\r\n    border: none;\r\n    border-radius: 48px;\r\n    color: #121212;\r\n    background-color: transparent;\r\n    box-shadow: 0px 5px 15px rgba(50, 50, 93, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.04);\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    font-family: inherit;\r\n    -webkit-transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);\r\n    -o-transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);\r\n    transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn__text {\r\n    position: relative;\r\n    display: inline-block;\r\n    z-index: 3;\r\n  }\r\n  \r\n  .btn:hover {\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 200%;\r\n    background-color: #fca2d5;\r\n    -webkit-transform: translateY(50%);\r\n    -ms-transform: translateY(50%);\r\n    transform: translateY(50%);\r\n    border-radius: 100%;\r\n    -webkit-transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);\r\n    transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);\r\n    -o-transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;\r\n    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;\r\n    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 200%;\r\n    background-color: #385efc;\r\n    -webkit-transform: translateY(50%);\r\n    -ms-transform: translateY(50%);\r\n    transform: translateY(50%);\r\n    border-radius: 100%;\r\n    -webkit-transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;\r\n    transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;\r\n    -o-transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;\r\n    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;\r\n    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;\r\n    z-index: 2;\r\n  }\r\n  \r\n  .btn:hover:before {\r\n    -webkit-transform: translateY(0);\r\n    -ms-transform: translateY(0);\r\n    transform: translateY(0);\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .btn:hover:after {\r\n    -webkit-transform: translateY(0);\r\n    -ms-transform: translateY(0);\r\n    transform: translateY(0);\r\n    border-radius: 0;\r\n  }    \r\n  </code>`"
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
