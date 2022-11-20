import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { g as gsapWithCSS } from './index2.js';

const zoryButtonCss = ".btn-zory{display:flex;align-items:center;justify-content:center;width:max-content;height:max-content;align-self:center;position:relative;background-color:#3037c2;border-radius:40px;overflow:hidden;border:none;cursor:pointer}.btn-zory span{position:relative;font-size:20px;padding:16px 32px;color:#fff;display:flex;align-items:center;width:100%;height:100%;pointer-events:none;z-index:5}.btn-zory__circles-wrapper{pointer-events:none;position:absolute;top:0;left:0}.btn-zory .circle{position:absolute;top:-16px;left:-16px;width:16px;height:16px;border-radius:50%}.btn-zory .circle--1{background-color:rgba(255, 255, 255, 0.1)}.btn-zory .circle--2{background-color:rgba(255, 255, 255, 0.1)}";

const ZoryButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
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
      const timeline = gsapWithCSS
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
      const timeline = gsapWithCSS
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
    return (h("button", { class: "btn-zory" }, h("span", null, "Hover me"), h("div", { class: "btn-zory__circles-wrapper" }, h("div", { class: "circle circle--1" }), h("div", { class: "circle circle--2" }))));
  }
  get el() { return this; }
  static get style() { return zoryButtonCss; }
}, [1, "zory-button", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["zory-button"];
  components.forEach(tagName => { switch (tagName) {
    case "zory-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ZoryButton$1);
      }
      break;
  } });
}

const ZoryButton = ZoryButton$1;
const defineCustomElement = defineCustomElement$1;

export { ZoryButton, defineCustomElement };
