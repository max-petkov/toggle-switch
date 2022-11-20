import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
import { gsap } from 'gsap';
export class ZoryButton {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn-zory">
    &lt;span>Hover me&lt;/span>
    &lt;div class="btn-zory__circles-wrapper">
      &lt;div class="circle circle--1">&lt;/div>
      &lt;div class="circle circle--2">&lt;/div>
    &lt;/div>
  &lt;/button>

  &lt;!-- GSAP CDN -->
  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js">&lt;/script>
  </code>`;
    this.cssSource = `<code class="language-css">
  .btn-zory {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    align-self: center;
    position: relative;
    background-color: #3037c2;
    border-radius: 40px;
    overflow: hidden;
    border: none;
    cursor: pointer;
  }
  
  .btn-zory span {
    position: relative;
    font-size: 20px;
    padding: 16px 32px;
    color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 5;
  }
  
  .btn-zory__circles-wrapper {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .btn-zory .circle {
    position: absolute;
    top: -16px;
    left: -16px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
  
  .btn-zory .circle--1 {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .btn-zory .circle--2 {
    background-color: rgba(255, 255, 255, 0.1);
  }  
  </code>`;
    this.jsSource = `<code class="language-js">
function animateZoryButton(props) {
  const btn = document.querySelector(props.element);
  const circles = btn.querySelectorAll('.circle');

  function animateMouseOver(props) {
    const timeline = gsap
      .timeline()
      .set(circles, {
        top: () => {
          if (props.y > props.height / 2) {
            return props.y;
          } else {
            return props.y - 16;
          }
        },
        left: props.x + 'px',
        scale: 0,
      })
      .set(btn, {
        scale: 1,
      })
      .to(btn, {
        scaleY: 1.03,
        scaleX: 0.98,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        force3D: !0,
      })
      .to(
        circles,
        {
          duration: 2,
          autoAlpha: 1,
          scale: 22,
          ease: 'expo.out',
          stagger: {
            each: 0.2,
            from: 'end',
          },
        },
        0,
      );

    return timeline;
  }

  function animateMouseLeave(props) {
    const timeline = gsap
      .timeline()
      .set(circles, {
        top: () => {
          if (props.y > props.height / 2) {
            return props.y;
          } else {
            return props.y - 16;
          }
        },
        left: props.x,
        scale: 22,
        autoAlpha: 1,
      })
      .set(btn, {
        scaleY: 1.03,
        scaleX: 0.98,
      })
      .to(btn, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        force3D: !0,
      })
      .to(
        circles,
        {
          duration: 1.5,
          scale: 0,
          ease: 'expo.out',
          stagger: {
            each: 0.2,
            from: 'end',
          },
        },
        0,
      );

    return timeline;
  }

  btn.addEventListener('mouseover', function (e) {
    animateMouseOver({
      y: e.offsetY,
      x: e.offsetX,
      height: this.clientHeight,
    });
  });

  btn.addEventListener('mouseleave', function (e) {
    animateMouseLeave({
      y: e.offsetY,
      x: e.offsetX,
      height: this.clientHeight,
    });
  });
}

animateZoryButton({
  element: ".btn-zory",
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
    const btn = this.el.shadowRoot.querySelector('.btn-zory');
    const circles = btn.querySelectorAll('.circle');
    function animateMouseOver(props) {
      const timeline = gsap
        .timeline()
        .set(circles, {
        top: () => {
          if (props.y > props.height / 2) {
            return props.y;
          }
          else {
            return props.y - 16;
          }
        },
        left: props.x + 'px',
        scale: 0,
      })
        .set(btn, {
        scale: 1,
      })
        .to(btn, {
        scaleY: 1.03,
        scaleX: 0.98,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        force3D: !0,
      })
        .to(circles, {
        duration: 2,
        autoAlpha: 1,
        scale: 22,
        ease: 'expo.out',
        stagger: {
          each: 0.2,
          from: 'end',
        },
      }, 0);
      return timeline;
    }
    function animateMouseLeave(props) {
      const timeline = gsap
        .timeline()
        .set(circles, {
        top: () => {
          if (props.y > props.height / 2) {
            return props.y;
          }
          else {
            return props.y - 16;
          }
        },
        left: props.x,
        scale: 22,
        autoAlpha: 1,
      })
        .set(btn, {
        scaleY: 1.03,
        scaleX: 0.98,
      })
        .to(btn, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        force3D: !0,
      })
        .to(circles, {
        duration: 1.5,
        scale: 0,
        ease: 'expo.out',
        stagger: {
          each: 0.2,
          from: 'end',
        },
      }, 0);
      return timeline;
    }
    btn.addEventListener('mouseover', function (e) {
      animateMouseOver({
        y: e.offsetY,
        x: e.offsetX,
        height: this.clientHeight,
      });
    });
    btn.addEventListener('mouseleave', function (e) {
      animateMouseLeave({
        y: e.offsetY,
        x: e.offsetX,
        height: this.clientHeight,
      });
    });
  }
  componentDidLoad() {
    this.animate();
  }
  render() {
    return (h("button", { class: "btn-zory" },
      h("span", null, "Hover me"),
      h("div", { class: "btn-zory__circles-wrapper" },
        h("div", { class: "circle circle--1" }),
        h("div", { class: "circle circle--2" }))));
  }
  static get is() { return "zory-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./zory-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["zory-button.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;button class=\"btn-zory\">\r\n    &lt;span>Hover me&lt;/span>\r\n    &lt;div class=\"btn-zory__circles-wrapper\">\r\n      &lt;div class=\"circle circle--1\">&lt;/div>\r\n      &lt;div class=\"circle circle--2\">&lt;/div>\r\n    &lt;/div>\r\n  &lt;/button>\r\n\r\n  &lt;!-- GSAP CDN -->\r\n  &lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js\">&lt;/script>\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .btn-zory {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: max-content;\r\n    height: max-content;\r\n    align-self: center;\r\n    position: relative;\r\n    background-color: #3037c2;\r\n    border-radius: 40px;\r\n    overflow: hidden;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .btn-zory span {\r\n    position: relative;\r\n    font-size: 20px;\r\n    padding: 16px 32px;\r\n    color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    z-index: 5;\r\n  }\r\n  \r\n  .btn-zory__circles-wrapper {\r\n    pointer-events: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .btn-zory .circle {\r\n    position: absolute;\r\n    top: -16px;\r\n    left: -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .btn-zory .circle--1 {\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n  }\r\n  \r\n  .btn-zory .circle--2 {\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n  }  \r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-js\">\r\nfunction animateZoryButton(props) {\r\n  const btn = document.querySelector(props.element);\r\n  const circles = btn.querySelectorAll('.circle');\r\n\r\n  function animateMouseOver(props) {\r\n    const timeline = gsap\r\n      .timeline()\r\n      .set(circles, {\r\n        top: () => {\r\n          if (props.y > props.height / 2) {\r\n            return props.y;\r\n          } else {\r\n            return props.y - 16;\r\n          }\r\n        },\r\n        left: props.x + 'px',\r\n        scale: 0,\r\n      })\r\n      .set(btn, {\r\n        scale: 1,\r\n      })\r\n      .to(btn, {\r\n        scaleY: 1.03,\r\n        scaleX: 0.98,\r\n        duration: 1,\r\n        ease: 'elastic.out(1, 0.3)',\r\n        force3D: !0,\r\n      })\r\n      .to(\r\n        circles,\r\n        {\r\n          duration: 2,\r\n          autoAlpha: 1,\r\n          scale: 22,\r\n          ease: 'expo.out',\r\n          stagger: {\r\n            each: 0.2,\r\n            from: 'end',\r\n          },\r\n        },\r\n        0,\r\n      );\r\n\r\n    return timeline;\r\n  }\r\n\r\n  function animateMouseLeave(props) {\r\n    const timeline = gsap\r\n      .timeline()\r\n      .set(circles, {\r\n        top: () => {\r\n          if (props.y > props.height / 2) {\r\n            return props.y;\r\n          } else {\r\n            return props.y - 16;\r\n          }\r\n        },\r\n        left: props.x,\r\n        scale: 22,\r\n        autoAlpha: 1,\r\n      })\r\n      .set(btn, {\r\n        scaleY: 1.03,\r\n        scaleX: 0.98,\r\n      })\r\n      .to(btn, {\r\n        scaleX: 1,\r\n        scaleY: 1,\r\n        duration: 1,\r\n        ease: 'elastic.out(1, 0.3)',\r\n        force3D: !0,\r\n      })\r\n      .to(\r\n        circles,\r\n        {\r\n          duration: 1.5,\r\n          scale: 0,\r\n          ease: 'expo.out',\r\n          stagger: {\r\n            each: 0.2,\r\n            from: 'end',\r\n          },\r\n        },\r\n        0,\r\n      );\r\n\r\n    return timeline;\r\n  }\r\n\r\n  btn.addEventListener('mouseover', function (e) {\r\n    animateMouseOver({\r\n      y: e.offsetY,\r\n      x: e.offsetX,\r\n      height: this.clientHeight,\r\n    });\r\n  });\r\n\r\n  btn.addEventListener('mouseleave', function (e) {\r\n    animateMouseLeave({\r\n      y: e.offsetY,\r\n      x: e.offsetX,\r\n      height: this.clientHeight,\r\n    });\r\n  });\r\n}\r\n\r\nanimateZoryButton({\r\n  element: \".btn-zory\",\r\n});\r\n</code>`"
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
