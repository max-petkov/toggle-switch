import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class ButtonCssSixteen {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn">
    &lt;div class="btn__bg">&lt;/div>
    &lt;div class="btn__text btn__text--1">
      &lt;span>keep&lt;/span>
    &lt;/div>
    &lt;div class="btn__text btn__text--2">
      &lt;span>in&lt;/span>
    &lt;/div>
    &lt;div class="btn__text btn__text--3">
      &lt;span>touch&lt;/span>
    &lt;/div>
  &lt;/button>
</code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    display: flex;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  
  .btn__bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 110px;
    width: 140px;
    background-color: #121212;
    border-radius: 64px;
    transition: 0.8s ease;
  }
  
  .btn:hover .btn__bg {
    width: 100%;
  }
  
  .btn__text {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    background-color: #121212;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
    pointer-events: none;
  }
  
  .btn__text span {
    display: inline-block;
  }
  
  .btn__text--1 {
    width: 140px;
    border-radius: 64px;
    transform: translateX(0);
    transition: 0.5s ease-in-out;
  }
  
  .btn:hover .btn__text--1 {
    transform: translateX(50px);
  }
  
  .btn__text--2 {
    width: 80px;
    border-radius: 64px;
    transform: translateX(0.1px);
    transition: 0.5s ease-in-out;
    z-index: 1;
  }
  
  .btn:hover .btn__text--2 {
    background-color: transparent;
    transform: translateX(-21px);
  }
  
  .btn__text--3 {
    width: 50px;
    border-radius: 64px;
    transform: translateX(0.1px) rotate(0);
    transition: 0.5s ease-in-out;
  }
  
  .btn__text--3 span {
    transform: rotate(-90deg);
  }
  
  .btn:hover .btn__text--3 {
    width: 110px;
    transform: translateX(-67px) rotate(90deg);
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
      h("div", { class: "btn__bg" }),
      h("div", { class: "btn__text btn__text--1" },
        h("span", null, "keep")),
      h("div", { class: "btn__text btn__text--2" },
        h("span", null, "in")),
      h("div", { class: "btn__text btn__text--3" },
        h("span", null, "touch"))));
  }
  static get is() { return "button-css-sixteen"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./button-css-sixteen.css"]
  }; }
  static get styleUrls() { return {
    "$": ["button-css-sixteen.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;button class=\"btn\">\r\n    &lt;div class=\"btn__bg\">&lt;/div>\r\n    &lt;div class=\"btn__text btn__text--1\">\r\n      &lt;span>keep&lt;/span>\r\n    &lt;/div>\r\n    &lt;div class=\"btn__text btn__text--2\">\r\n      &lt;span>in&lt;/span>\r\n    &lt;/div>\r\n    &lt;div class=\"btn__text btn__text--3\">\r\n      &lt;span>touch&lt;/span>\r\n    &lt;/div>\r\n  &lt;/button>\r\n</code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn {\r\n    display: flex;\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 0;\r\n    outline: none;\r\n    border: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn__bg {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 110px;\r\n    width: 140px;\r\n    background-color: #121212;\r\n    border-radius: 64px;\r\n    transition: 0.8s ease;\r\n  }\r\n  \r\n  .btn:hover .btn__bg {\r\n    width: 100%;\r\n  }\r\n  \r\n  .btn__text {\r\n    font-size: 16px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n    background-color: #121212;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 110px;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn__text span {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .btn__text--1 {\r\n    width: 140px;\r\n    border-radius: 64px;\r\n    transform: translateX(0);\r\n    transition: 0.5s ease-in-out;\r\n  }\r\n  \r\n  .btn:hover .btn__text--1 {\r\n    transform: translateX(50px);\r\n  }\r\n  \r\n  .btn__text--2 {\r\n    width: 80px;\r\n    border-radius: 64px;\r\n    transform: translateX(0.1px);\r\n    transition: 0.5s ease-in-out;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn:hover .btn__text--2 {\r\n    background-color: transparent;\r\n    transform: translateX(-21px);\r\n  }\r\n  \r\n  .btn__text--3 {\r\n    width: 50px;\r\n    border-radius: 64px;\r\n    transform: translateX(0.1px) rotate(0);\r\n    transition: 0.5s ease-in-out;\r\n  }\r\n  \r\n  .btn__text--3 span {\r\n    transform: rotate(-90deg);\r\n  }\r\n  \r\n  .btn:hover .btn__text--3 {\r\n    width: 110px;\r\n    transform: translateX(-67px) rotate(90deg);\r\n  }\r\n  \r\n  \r\n  </code>`"
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
