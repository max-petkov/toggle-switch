import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class LinkCssThree {
  constructor() {
    this.htmlSource = `<code class="language-markup">&lt;a href="#" class="link">TRACK PACKAGE&lt;/a></code>`;
    this.cssSource = `<code class="language-css">
  .link {
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    color: #121212;
    pointer-events: all;
  }
  
  .link:before {
    content: "";
    position: absolute;
    top: 104%;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link:after {
    content: "";
    position: absolute;
    top: calc(104% + 6px);
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
    transition-delay: 0.08s;
  }
  
  .link:hover:before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  
  .link:hover:after {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
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
    return h("a", { href: "#", class: "link" }, "TRACK PACKAGE");
  }
  static get is() { return "link-css-three"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link-css-three.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link-css-three.css"]
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
      "defaultValue": "`<code class=\"language-markup\">&lt;a href=\"#\" class=\"link\">TRACK PACKAGE&lt;/a></code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .link {\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    color: #121212;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  .link:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 104%;\r\n    left: 0;\r\n    height: 3px;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    pointer-events: none;\r\n    transform-origin: 100% 50%;\r\n    transform: scale3d(0, 1, 1);\r\n    transition: transform 0.3s;\r\n  }\r\n  \r\n  .link:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: calc(104% + 6px);\r\n    left: 0;\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    pointer-events: none;\r\n    transform-origin: 100% 50%;\r\n    transform: scale3d(0, 1, 1);\r\n    transition: transform 0.3s;\r\n    transition-delay: 0.08s;\r\n  }\r\n  \r\n  .link:hover:before {\r\n    transform-origin: 0% 50%;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n  \r\n  .link:hover:after {\r\n    transform-origin: 0% 50%;\r\n    transform: scale3d(1, 1, 1);\r\n  }    \r\n  </code>`"
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
