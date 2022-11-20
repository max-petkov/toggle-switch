import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const buttonCssThirteenCss = ".btn{position:relative;padding:16px 24px;border:none;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:0.3s;cursor:pointer}.btn::before{content:'';position:absolute;top:-2px;left:-2px;width:100%;height:100%;background-color:turquoise;z-index:-1;mix-blend-mode:multiply;transform-origin:top;transition:all 0.3s}.btn:hover:before{top:-6px;left:0;transform:perspective(500px) rotateX(75deg)}.btn::after{content:'';position:absolute;top:2px;left:2px;width:100%;height:100%;background-color:tomato;z-index:-1;mix-blend-mode:multiply;transform-origin:bottom;transition:all 0.3s}.btn:hover:after{top:6px;left:0;transform:perspective(500px) rotateX(-75deg)}";

const ButtonCssThirteen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    position: relative;
    padding: 16px 24px;
    border: none;
    border-radius: 40px;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
  
    transition: 0.3s;
    cursor: pointer;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    background-color: turquoise;
    z-index: -1;
    mix-blend-mode: multiply;
    transform-origin: top;
    transition: all 0.3s;
  }
  
  .btn:hover:before {
    top: -6px;
    left: 0;
    transform: perspective(500px) rotateX(75deg);
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 100%;
    height: 100%;
    background-color: tomato;
    z-index: -1;
    mix-blend-mode: multiply;
    transform-origin: bottom;
    transition: all 0.3s;
  }
  
  .btn:hover:after {
    top: 6px;
    left: 0;
    transform: perspective(500px) rotateX(-75deg);
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
    return h("button", { class: "btn" }, "Hover me");
  }
  get el() { return this; }
  static get style() { return buttonCssThirteenCss; }
}, [1, "button-css-thirteen", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-css-thirteen"];
  components.forEach(tagName => { switch (tagName) {
    case "button-css-thirteen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonCssThirteen$1);
      }
      break;
  } });
}

const ButtonCssThirteen = ButtonCssThirteen$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonCssThirteen, defineCustomElement };
