import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class LinkCssSeven {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">explore more&lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 24px;
    color: #121212;
    pointer-events: all;
  }
  
  .link::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 0;
    height: 10px;
    width: 100%;
    background-color: #121212;
    opacity: 0;
    pointer-events: none;
  }
  
  .link:hover:before {
    opacity: 1;
    animation: line-up 0.3s ease forwards;
  }
  
  @keyframes line-up {
    0% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 0.045, 1);
    }
  
    50% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 1, 1);
    }
  
    51% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 1, 1);
    }
  
    100% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 0.045, 1);
    }
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
    return h("a", { href: "#", class: "link" }, "explore more");
  }
  static get is() { return "link-css-seven"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link-css-seven.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link-css-seven.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;a href=\"#\" class=\"link\">explore more&lt;/a>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .link {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: #121212;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  .link::before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    height: 10px;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .link:hover:before {\r\n    opacity: 1;\r\n    animation: line-up 0.3s ease forwards;\r\n  }\r\n  \r\n  @keyframes line-up {\r\n    0% {\r\n      transform-origin: 50% 100%;\r\n      transform: scale3d(1, 0.045, 1);\r\n    }\r\n  \r\n    50% {\r\n      transform-origin: 50% 100%;\r\n      transform: scale3d(1, 1, 1);\r\n    }\r\n  \r\n    51% {\r\n      transform-origin: 50% 0%;\r\n      transform: scale3d(1, 1, 1);\r\n    }\r\n  \r\n    100% {\r\n      transform-origin: 50% 0%;\r\n      transform: scale3d(1, 0.045, 1);\r\n    }\r\n  }\r\n  </code>`"
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
