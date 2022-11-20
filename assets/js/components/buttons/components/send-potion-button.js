import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { g as gsapWithCSS } from './index2.js';

const sendPotionButtonCss = ".send-potion-btn{display:flex;align-items:center;justify-content:center;width:max-content;height:max-content;align-self:center;position:relative;background-color:#8330c2;border-radius:40px;overflow:hidden;border:none;cursor:pointer}.send-potion-btn__content-wrapper{position:relative;font-size:20px;padding:16px 32px;color:#fff;display:flex;align-items:center;width:100%;height:100%;pointer-events:none;z-index:5;font-family:inherit}.send-potion-btn__content-wrapper svg{width:16px;height:16px;margin-left:16px}.send-potion-btn__ripples-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:40px;pointer-events:none}.send-potion-btn__ripple{position:absolute;border-radius:40px;top:0;left:0;width:100%;height:100%}.send-potion-btn__ripple--1{background-color:#9d4cdb;transform:translateX(-100%);z-index:1}.send-potion-btn__ripple--2{background-color:#b06ae5;transform:translateX(-100%);z-index:2}";

const SendPotionButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
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
      const timeline = gsapWithCSS
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
      const timeline = gsapWithCSS
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
    return (h("button", { class: "send-potion-btn" }, h("span", { class: "send-potion-btn__content-wrapper" }, "Book an appointment", h("svg", { width: "257", height: "448", viewBox: "0 0 257 448", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M32 448C23.812 448 15.62 444.875 9.38 438.625C-3.12 426.125 -3.12 405.875 9.38 393.375L178.8 224L9.38 54.63C-3.12 42.13 -3.12 21.88 9.38 9.38C21.88 -3.12 42.13 -3.12 54.63 9.38L246.63 201.38C259.13 213.88 259.13 234.13 246.63 246.63L54.63 438.63C48.4 444.9 40.2 448 32 448Z", fill: "white" }))), h("div", { class: "send-potion-btn__ripples-wrapper" }, h("div", { class: "send-potion-btn__ripple send-potion-btn__ripple--1" }), h("div", { class: "send-potion-btn__ripple send-potion-btn__ripple--2" }))));
  }
  get el() { return this; }
  static get style() { return sendPotionButtonCss; }
}, [1, "send-potion-button", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["send-potion-button"];
  components.forEach(tagName => { switch (tagName) {
    case "send-potion-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SendPotionButton$1);
      }
      break;
  } });
}

const SendPotionButton = SendPotionButton$1;
const defineCustomElement = defineCustomElement$1;

export { SendPotionButton, defineCustomElement };
