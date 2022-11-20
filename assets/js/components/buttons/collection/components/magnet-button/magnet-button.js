import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
export class MagnetButton {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;div class="magnet-wrapper">
    &lt;button class="btn-magnet">Get in touch&lt;/button>
  &lt;/div>
  </code>`;
    this.cssSource = `<code class="language-css">
  :root {
    --ease-magnet: 0.3s;
  }
  
  .magnet-wrapper {
    display: inline-block;
  }
  
  .btn-magnet {
    display: inline-block;
    padding: 10px 24px;
    border: 1px solid #121212;
    border-radius: 50px;
    width: max-content;
    font-family: inherit;
    font-size: 16px;
    transition: transform var(--ease-magnet) cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: transparent;
    cursor: pointer;
  }
  </code>`;
    this.jsSource = `<code class="language-js">
  function magnetEffect(props) {
    const areas = document.querySelectorAll(props.area);
    const movement = !props.movement ? 0.6 : props.movement;
    document.documentElement.style.setProperty("--ease-magnet", props.ease + "s");
  
    function animate(e, area, el) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const areaRect = area.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const halfDiff = Math.abs(areaRect.width - areaRect.height) / 2;
      const relX = e.pageX - areaRect.left - halfDiff;
      const relY = e.pageY - areaRect.top;
      const x = (relX - areaRect.width / 2 + elRect.width / 3) * movement;
      const y = (relY - areaRect.height / 2 - scrollTop) * movement;
  
      el.style.transform = "translate(" + x + "px, " + y + "px)";
    }
  
    areas.forEach((area) => {
      const el = area.querySelector(props.element);
  
      if (props.areaSize > 0) area.style.padding = props.areaSize + "px";
  
      area.addEventListener("mousemove", function (e) {
        animate(e, area, el);
      });
  
      area.addEventListener("mouseleave", function (e) {
        el.style.transform = "translate(0px, 0px)";
      });
    });
  }
  
  magnetEffect({
    element: ".btn-magnet",
    area: ".magnet-wrapper",
    areaSize: 24,
    movement: 0.6,
    ease: 0.4,
  });
</code>`;
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
  animate() {
    const area = this.el.shadowRoot.querySelector('.magnet-wrapper');
    const el = area.querySelector('.btn-magnet');
    const movement = 0.6;
    const ease = 0.4;
    const areaSize = 24;
    document.documentElement.style.setProperty('--ease-magnet', ease + 's');
    function animate(e, area, el) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const areaRect = area.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const halfDiff = Math.abs(areaRect.width - areaRect.height) / 2;
      const relX = e.pageX - areaRect.left - halfDiff;
      const relY = e.pageY - areaRect.top;
      const x = (relX - areaRect.width / 2 + elRect.width / 3) * movement;
      const y = (relY - areaRect.height / 2 - scrollTop) * movement;
      el.style.transform = `translate(${x}px, ${y}px)`;
    }
    if (areaSize > 0)
      area.style.padding = areaSize + 'px';
    area.addEventListener('mousemove', function (e) {
      el.style.willChange = "transform";
      animate(e, area, el);
    });
    area.addEventListener('mouseleave', function () {
      el.style.willChange = "auto";
      el.style.transform = `translate(0px, 0px)`;
    });
  }
  componentDidLoad() {
    this.animate();
  }
  render() {
    return (h("div", { class: "magnet-wrapper" },
      h("button", { class: "btn-magnet" }, "Get in touch")));
  }
  static get is() { return "magnet-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./magnet-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["magnet-button.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;div class=\"magnet-wrapper\">\r\n    &lt;button class=\"btn-magnet\">Get in touch&lt;/button>\r\n  &lt;/div>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  :root {\r\n    --ease-magnet: 0.3s;\r\n  }\r\n  \r\n  .magnet-wrapper {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .btn-magnet {\r\n    display: inline-block;\r\n    padding: 10px 24px;\r\n    border: 1px solid #121212;\r\n    border-radius: 50px;\r\n    width: max-content;\r\n    font-family: inherit;\r\n    font-size: 16px;\r\n    transition: transform var(--ease-magnet) cubic-bezier(0.165, 0.84, 0.44, 1);\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n  }\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-js\">\r\n  function magnetEffect(props) {\r\n    const areas = document.querySelectorAll(props.area);\r\n    const movement = !props.movement ? 0.6 : props.movement;\r\n    document.documentElement.style.setProperty(\"--ease-magnet\", props.ease + \"s\");\r\n  \r\n    function animate(e, area, el) {\r\n      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\r\n      const areaRect = area.getBoundingClientRect();\r\n      const elRect = el.getBoundingClientRect();\r\n      const halfDiff = Math.abs(areaRect.width - areaRect.height) / 2;\r\n      const relX = e.pageX - areaRect.left - halfDiff;\r\n      const relY = e.pageY - areaRect.top;\r\n      const x = (relX - areaRect.width / 2 + elRect.width / 3) * movement;\r\n      const y = (relY - areaRect.height / 2 - scrollTop) * movement;\r\n  \r\n      el.style.transform = \"translate(\" + x + \"px, \" + y + \"px)\";\r\n    }\r\n  \r\n    areas.forEach((area) => {\r\n      const el = area.querySelector(props.element);\r\n  \r\n      if (props.areaSize > 0) area.style.padding = props.areaSize + \"px\";\r\n  \r\n      area.addEventListener(\"mousemove\", function (e) {\r\n        animate(e, area, el);\r\n      });\r\n  \r\n      area.addEventListener(\"mouseleave\", function (e) {\r\n        el.style.transform = \"translate(0px, 0px)\";\r\n      });\r\n    });\r\n  }\r\n  \r\n  magnetEffect({\r\n    element: \".btn-magnet\",\r\n    area: \".magnet-wrapper\",\r\n    areaSize: 24,\r\n    movement: 0.6,\r\n    ease: 0.4,\r\n  });\r\n</code>`"
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
