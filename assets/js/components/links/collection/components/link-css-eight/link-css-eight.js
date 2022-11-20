import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class LinkCssEight {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">BLOG&lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
    overflow: hidden;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: #121212;
    pointer-events: all;
  }
  
  .link::before {
    content: "";
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #121212;
    transform-origin: 0 50%;
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s;
    pointer-events: none;
  }
  
  .link::after {
    content: "";
    position: absolute;
    top: calc(100% - 6px);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #121212;
    transform-origin: 0 50%;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.3s;
    pointer-events: none;
  }
  
  .link:hover:before {
    transform: translate3d(100%, 0, 0);
  }
  
  .link:hover:after {
    transform: translate3d(0, 0, 0);
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
    return h("a", { href: "#", class: "link" }, "BLOG");
  }
  static get is() { return "link-css-eight"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link-css-eight.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link-css-eight.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;a href=\"#\" class=\"link\">BLOG&lt;/a>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .link {\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 200%;\r\n    color: #121212;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  .link::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: calc(100% - 2px);\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #121212;\r\n    transform-origin: 0 50%;\r\n    transform: translate3d(0, 0, 0);\r\n    transition: transform 0.3s;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .link::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: calc(100% - 6px);\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1px;\r\n    background-color: #121212;\r\n    transform-origin: 0 50%;\r\n    transform: translate3d(-100%, 0, 0);\r\n    transition: transform 0.3s;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .link:hover:before {\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n  \r\n  .link:hover:after {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  </code>`"
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
