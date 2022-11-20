import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class LinkCssFour {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link" data-text="Our Philosophy">
    &lt;span class="link__text">Our Philosophy&lt;/span>
  &lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: #121212;
    pointer-events: all;
  }
  
  .link .link__text {
    display: inline-block;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s;
  }
  
  .link:hover .link__text {
    transform: translate3d(-150%, 0, 0);
  }
  
  .link:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: translate3d(150%, 0, 0);
    transition: transform 0.3s;
  }
  
  .link:hover::after {
    transform: translate3d(0, 0, 0);
  }
  
  .link:before {
    content: "";
    position: absolute;
    top: 93%;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link:hover:before {
    transform-origin: 0 50%;
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
    return (h("a", { href: "#", class: "link", "data-text": "Our Philosophy" },
      h("span", { class: "link__text" }, "Our Philosophy")));
  }
  static get is() { return "link-css-four"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link-css-four.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link-css-four.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;a href=\"#\" class=\"link\" data-text=\"Our Philosophy\">\r\n    &lt;span class=\"link__text\">Our Philosophy&lt;/span>\r\n  &lt;/a>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .link {\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 200%;\r\n    color: #121212;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  .link .link__text {\r\n    display: inline-block;\r\n    pointer-events: none;\r\n    transform-origin: 100% 50%;\r\n    transform: translate3d(0, 0, 0);\r\n    transition: transform 0.3s;\r\n  }\r\n  \r\n  .link:hover .link__text {\r\n    transform: translate3d(-150%, 0, 0);\r\n  }\r\n  \r\n  .link:after {\r\n    content: attr(data-text);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    transform-origin: 100% 50%;\r\n    transform: translate3d(150%, 0, 0);\r\n    transition: transform 0.3s;\r\n  }\r\n  \r\n  .link:hover::after {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  \r\n  .link:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 93%;\r\n    left: 0;\r\n    height: 3px;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    pointer-events: none;\r\n    transform-origin: 100% 50%;\r\n    transform: scale3d(0, 1, 1);\r\n    transition: transform 0.3s;\r\n  }\r\n  \r\n  .link:hover:before {\r\n    transform-origin: 0 50%;\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n  </code>`"
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
