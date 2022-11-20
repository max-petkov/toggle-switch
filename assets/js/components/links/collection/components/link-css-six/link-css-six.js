import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class LinkCssSix {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">Portfolio&lt;/a>
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
  
  .link:before {
    content: "";
    position: absolute;
    display: inline-block;
    top: 100%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #121212;
    opacity: 0;
    transform-origin: 50% 0%;
    transform: translate3d(0, 3px, 0);
    transition-property: transform, opacity;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
  }
  
  .link:after {
    content: "";
    position: absolute;
    display: inline-block;
    top: calc(100% + 6px);
    left: 50%;
    height: 1px;
    width: 50%;
    background-color: #121212;
    opacity: 0;
    transform-origin: 50% 0%;
    transform: translate3d(-50%, 3px, 0);
    transition-property: transform, opacity;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
  }
  
  .link:hover:after {
    transition-delay: 0.1s;
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
    transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
  }
  
  .link:hover:before {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
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
    return h("a", { href: "#", class: "link" }, "Portfolio");
  }
  static get is() { return "link-css-six"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link-css-six.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link-css-six.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;a href=\"#\" class=\"link\">Portfolio&lt;/a>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .link {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: #121212;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  .link:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 100%;\r\n    left: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    opacity: 0;\r\n    transform-origin: 50% 0%;\r\n    transform: translate3d(0, 3px, 0);\r\n    transition-property: transform, opacity;\r\n    transition-duration: 0.3s;\r\n    transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);\r\n  }\r\n  \r\n  .link:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: calc(100% + 6px);\r\n    left: 50%;\r\n    height: 1px;\r\n    width: 50%;\r\n    background-color: #121212;\r\n    opacity: 0;\r\n    transform-origin: 50% 0%;\r\n    transform: translate3d(-50%, 3px, 0);\r\n    transition-property: transform, opacity;\r\n    transition-duration: 0.3s;\r\n    transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);\r\n  }\r\n  \r\n  .link:hover:after {\r\n    transition-delay: 0.1s;\r\n    opacity: 1;\r\n    transform: translate3d(-50%, 0, 0);\r\n    transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);\r\n  }\r\n  \r\n  .link:hover:before {\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0);\r\n    transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);\r\n  }\r\n  </code>`"
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
