import { Component, h, Listen, Event, Prop, Element } from '@stencil/core';
import { gsap } from 'gsap';
export class SendPotionButton {
  constructor() {
    this.htmlSource = `<code class="language-markup">
  &lt;button class="send-potion-btn">
    &lt;span class="send-potion-btn__content-wrapper">
      Book an appointment
      &lt;svg width="257" height="448" viewBox="0 0 257 448" fill="none" xmlns="http://www.w3.org/2000/svg">
        &lt;path
          d="M32 448C23.812 448 15.62 444.875 9.38 438.625C-3.12 426.125 -3.12 405.875 9.38 393.375L178.8 224L9.38 54.63C-3.12 42.13 -3.12 21.88 9.38 9.38C21.88 -3.12 42.13 -3.12 54.63 9.38L246.63 201.38C259.13 213.88 259.13 234.13 246.63 246.63L54.63 438.63C48.4 444.9 40.2 448 32 448Z"
          fill="white"
        />
      &lt;/svg>
    &lt;/span>
    &lt;div class="send-potion-btn__ripples-wrapper">
      &lt;div class="send-potion-btn__ripple send-potion-btn__ripple--1">&lt;/div>
      &lt;div class="send-potion-btn__ripple send-potion-btn__ripple--2">&lt;/div>
    &lt;/div>
  &lt;/button>

  &lt;!-- GSAP CDN -->
  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js">&lt;/script>
</code>`;
    this.cssSource = `<code class="language-css">
  .send-potion-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    align-self: center;
    position: relative;
    background-color: #8330c2;
    border-radius: 40px;
    overflow: hidden;
    border: none;
    cursor: pointer;
  }
  
  .send-potion-btn__content-wrapper {
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
    font-family: inherit;
  }
  
  .send-potion-btn__content-wrapper svg {
    width: 16px;
    height: 16px;
    margin-left: 16px;
  }
  
  .send-potion-btn__ripples-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    pointer-events: none;
  }
  
  .send-potion-btn__ripple {
    position: absolute;
    border-radius: 40px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .send-potion-btn__ripple--1 {
    background-color: #9d4cdb;
    transform: translateX(-100%);
    z-index: 1;
  }
  
  .send-potion-btn__ripple--2 {
    background-color: #b06ae5;
    transform: translateX(-100%);
    z-index: 2;
  }
  </code>`;
    this.jsSource = `<code class="language-js">
  function animateSendPotionButton(props) {
    const btn = document.querySelector(props.element);
    const ripples = btn.querySelectorAll('.send-potion-btn__ripple');

    function animateMouseOver() {
      const timeline = gsap
        .timeline()
        .set(btn, {
          scale: 1,
        })
        .to(btn, {
          scaleX: 1.03,
          scaleY: 0.98,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
          force3D: !0,
        })
        .fromTo(
          ripples,
          { x: '-100%' },
          {
            x: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'expo.out',
            force3D: !0,
          },
          0,
        );

      return timeline;
    }
    function animateMouseLeave() {
      const timeline = gsap
        .timeline()
        .set(btn, {
          scaleX: 1.03,
          scaleY: 0.98,
        })
        .set(ripples, {
          x: 0,
        })
        .to(btn, {
          scaleX: 1,
          scaleY: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
          force3D: !0,
        })
        .to(
          ripples,
          {
            x: '100%',
            stagger: {
              each: 0.2,
              from: 'end',
            },
            duration: 1,
            ease: 'expo.out',
            force3D: !0,
          },
          0,
        );

        return timeline;
    }

    btn.addEventListener('mouseover', function () {
      animateMouseOver();      
    });
    
    btn.addEventListener('mouseleave', function () {
      animateMouseLeave();
    });
  }

  animateSendPotionButton({
    element: ".send-potion-btn",
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
    const btn = this.el.shadowRoot.querySelector('.send-potion-btn');
    const ripples = btn.querySelectorAll('.send-potion-btn__ripple');
    function animateMouseOver() {
      const timeline = gsap
        .timeline()
        .set(btn, {
        scale: 1,
      })
        .to(btn, {
        scaleX: 1.03,
        scaleY: 0.98,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        force3D: !0,
      })
        .fromTo(ripples, { x: '-100%' }, {
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'expo.out',
        force3D: !0,
      }, 0);
      return timeline;
    }
    function animateMouseLeave() {
      const timeline = gsap
        .timeline()
        .set(btn, {
        scaleX: 1.03,
        scaleY: 0.98,
      })
        .set(ripples, {
        x: 0,
      })
        .to(btn, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        force3D: !0,
      })
        .to(ripples, {
        x: '100%',
        stagger: {
          each: 0.2,
          from: 'end',
        },
        duration: 1,
        ease: 'expo.out',
        force3D: !0,
      }, 0);
      return timeline;
    }
    btn.addEventListener('mouseover', function () {
      animateMouseOver();
    });
    btn.addEventListener('mouseleave', function () {
      animateMouseLeave();
    });
  }
  componentDidLoad() {
    this.animate();
  }
  render() {
    return (h("button", { class: "send-potion-btn" },
      h("span", { class: "send-potion-btn__content-wrapper" },
        "Book an appointment",
        h("svg", { width: "257", height: "448", viewBox: "0 0 257 448", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          h("path", { d: "M32 448C23.812 448 15.62 444.875 9.38 438.625C-3.12 426.125 -3.12 405.875 9.38 393.375L178.8 224L9.38 54.63C-3.12 42.13 -3.12 21.88 9.38 9.38C21.88 -3.12 42.13 -3.12 54.63 9.38L246.63 201.38C259.13 213.88 259.13 234.13 246.63 246.63L54.63 438.63C48.4 444.9 40.2 448 32 448Z", fill: "white" }))),
      h("div", { class: "send-potion-btn__ripples-wrapper" },
        h("div", { class: "send-potion-btn__ripple send-potion-btn__ripple--1" }),
        h("div", { class: "send-potion-btn__ripple send-potion-btn__ripple--2" }))));
  }
  static get is() { return "send-potion-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./send-potion-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["send-potion-button.css"]
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
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;button class=\"send-potion-btn\">\r\n    &lt;span class=\"send-potion-btn__content-wrapper\">\r\n      Book an appointment\r\n      &lt;svg width=\"257\" height=\"448\" viewBox=\"0 0 257 448\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        &lt;path\r\n          d=\"M32 448C23.812 448 15.62 444.875 9.38 438.625C-3.12 426.125 -3.12 405.875 9.38 393.375L178.8 224L9.38 54.63C-3.12 42.13 -3.12 21.88 9.38 9.38C21.88 -3.12 42.13 -3.12 54.63 9.38L246.63 201.38C259.13 213.88 259.13 234.13 246.63 246.63L54.63 438.63C48.4 444.9 40.2 448 32 448Z\"\r\n          fill=\"white\"\r\n        />\r\n      &lt;/svg>\r\n    &lt;/span>\r\n    &lt;div class=\"send-potion-btn__ripples-wrapper\">\r\n      &lt;div class=\"send-potion-btn__ripple send-potion-btn__ripple--1\">&lt;/div>\r\n      &lt;div class=\"send-potion-btn__ripple send-potion-btn__ripple--2\">&lt;/div>\r\n    &lt;/div>\r\n  &lt;/button>\r\n\r\n  &lt;!-- GSAP CDN -->\r\n  &lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js\">&lt;/script>\r\n</code>`"
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
      "defaultValue": "`<code class=\"language-css\">\r\n  .send-potion-btn {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: max-content;\r\n    height: max-content;\r\n    align-self: center;\r\n    position: relative;\r\n    background-color: #8330c2;\r\n    border-radius: 40px;\r\n    overflow: hidden;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .send-potion-btn__content-wrapper {\r\n    position: relative;\r\n    font-size: 20px;\r\n    padding: 16px 32px;\r\n    color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    z-index: 5;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  .send-potion-btn__content-wrapper svg {\r\n    width: 16px;\r\n    height: 16px;\r\n    margin-left: 16px;\r\n  }\r\n  \r\n  .send-potion-btn__ripples-wrapper {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 40px;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .send-potion-btn__ripple {\r\n    position: absolute;\r\n    border-radius: 40px;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .send-potion-btn__ripple--1 {\r\n    background-color: #9d4cdb;\r\n    transform: translateX(-100%);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .send-potion-btn__ripple--2 {\r\n    background-color: #b06ae5;\r\n    transform: translateX(-100%);\r\n    z-index: 2;\r\n  }\r\n  </code>`"
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
      "defaultValue": "`<code class=\"language-js\">\r\n  function animateSendPotionButton(props) {\r\n    const btn = document.querySelector(props.element);\r\n    const ripples = btn.querySelectorAll('.send-potion-btn__ripple');\r\n\r\n    function animateMouseOver() {\r\n      const timeline = gsap\r\n        .timeline()\r\n        .set(btn, {\r\n          scale: 1,\r\n        })\r\n        .to(btn, {\r\n          scaleX: 1.03,\r\n          scaleY: 0.98,\r\n          duration: 1,\r\n          ease: 'elastic.out(1, 0.3)',\r\n          force3D: !0,\r\n        })\r\n        .fromTo(\r\n          ripples,\r\n          { x: '-100%' },\r\n          {\r\n            x: 0,\r\n            stagger: 0.2,\r\n            duration: 1,\r\n            ease: 'expo.out',\r\n            force3D: !0,\r\n          },\r\n          0,\r\n        );\r\n\r\n      return timeline;\r\n    }\r\n    function animateMouseLeave() {\r\n      const timeline = gsap\r\n        .timeline()\r\n        .set(btn, {\r\n          scaleX: 1.03,\r\n          scaleY: 0.98,\r\n        })\r\n        .set(ripples, {\r\n          x: 0,\r\n        })\r\n        .to(btn, {\r\n          scaleX: 1,\r\n          scaleY: 1,\r\n          duration: 1,\r\n          ease: 'elastic.out(1, 0.3)',\r\n          force3D: !0,\r\n        })\r\n        .to(\r\n          ripples,\r\n          {\r\n            x: '100%',\r\n            stagger: {\r\n              each: 0.2,\r\n              from: 'end',\r\n            },\r\n            duration: 1,\r\n            ease: 'expo.out',\r\n            force3D: !0,\r\n          },\r\n          0,\r\n        );\r\n\r\n        return timeline;\r\n    }\r\n\r\n    btn.addEventListener('mouseover', function () {\r\n      animateMouseOver();      \r\n    });\r\n    \r\n    btn.addEventListener('mouseleave', function () {\r\n      animateMouseLeave();\r\n    });\r\n  }\r\n\r\n  animateSendPotionButton({\r\n    element: \".send-potion-btn\",\r\n  });\r\n\r\n  </code>`"
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
