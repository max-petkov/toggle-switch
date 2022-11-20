import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class LinkCssNine {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">
    &lt;span class="link__text">Discover&lt;/span>
  &lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
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
  
  .link:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #121212;
    opacity: 0;
  }
  
  .link:hover .link__text {
    animation: glitch-text 0.4s linear;
  }
  
  .link:hover:before {
    opacity: 1;
    animation: glitch-line 0.4s steps(2, start) forwards;
  }
  
  @keyframes glitch-text {
    0% {
      opacity: 1;
      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
  
    10% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
  
    20% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
  
    35% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
  
    50% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
  
    60% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
  
    70% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
  
    80% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
  
    90% {
      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    }
  
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
  
  @keyframes glitch-line {
    0% {
      transform: scale3d(1, 1, 1);
    }
  
    10% {
      transform: translate3d(10px, 0, 0);
    }
  
    20% {
      transform: translate3d(0, 4px, 0);
    }
  
    30% {
      transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);
      transform-origin: 100% 0%;
    }
  
    40% {
      transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0);
    }
  
    50% {
      transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0);
    }
  
    60% {
      transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0);
    }
  
    70% {
      transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0);
    }
  
    80% {
      transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);
      transform-origin: 100% 0%;
    }
  
    90% {
      transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0);
      transform-origin: 0% 50%;
    }
  
    100% {
      opacity: 1;
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
    return (h("a", { href: "#", class: "link" },
      h("span", { class: "link__text" }, "Discover")));
  }
  static get is() { return "link-css-nine"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./link-css-nine.css"]
  }; }
  static get styleUrls() { return {
    "$": ["link-css-nine.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;a href=\"#\" class=\"link\">\r\n    &lt;span class=\"link__text\">Discover&lt;/span>\r\n  &lt;/a>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .link {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 200%;\r\n    color: #121212;\r\n    pointer-events: all;\r\n  }\r\n  \r\n  .link:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    height: 2px;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .link:hover .link__text {\r\n    animation: glitch-text 0.4s linear;\r\n  }\r\n  \r\n  .link:hover:before {\r\n    opacity: 1;\r\n    animation: glitch-line 0.4s steps(2, start) forwards;\r\n  }\r\n  \r\n  @keyframes glitch-text {\r\n    0% {\r\n      opacity: 1;\r\n      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);\r\n      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);\r\n      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);\r\n    }\r\n  \r\n    10% {\r\n      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);\r\n      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);\r\n    }\r\n  \r\n    20% {\r\n      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);\r\n      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);\r\n    }\r\n  \r\n    35% {\r\n      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);\r\n      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);\r\n    }\r\n  \r\n    50% {\r\n      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);\r\n      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);\r\n    }\r\n  \r\n    60% {\r\n      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);\r\n      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);\r\n    }\r\n  \r\n    70% {\r\n      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);\r\n      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);\r\n    }\r\n  \r\n    80% {\r\n      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);\r\n      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);\r\n    }\r\n  \r\n    90% {\r\n      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\r\n      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\r\n    }\r\n  }\r\n  \r\n  @keyframes glitch-line {\r\n    0% {\r\n      transform: scale3d(1, 1, 1);\r\n    }\r\n  \r\n    10% {\r\n      transform: translate3d(10px, 0, 0);\r\n    }\r\n  \r\n    20% {\r\n      transform: translate3d(0, 4px, 0);\r\n    }\r\n  \r\n    30% {\r\n      transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);\r\n      transform-origin: 100% 0%;\r\n    }\r\n  \r\n    40% {\r\n      transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0);\r\n    }\r\n  \r\n    50% {\r\n      transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0);\r\n    }\r\n  \r\n    60% {\r\n      transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0);\r\n    }\r\n  \r\n    70% {\r\n      transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0);\r\n    }\r\n  \r\n    80% {\r\n      transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);\r\n      transform-origin: 100% 0%;\r\n    }\r\n  \r\n    90% {\r\n      transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0);\r\n      transform-origin: 0% 50%;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }  \r\n  </code>`"
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
