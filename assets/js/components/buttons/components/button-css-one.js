import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const buttonCssOneCss = ".btn-skew{position:relative;width:max-content;padding:24px 80px;border:none;display:flex;align-items:center;text-align:center;font-size:16px;font-weight:400;font-family:inherit;background-color:transparent;cursor:pointer}.btn-skew:before{content:'';position:absolute;top:0;left:50%;background-color:#78daf9;height:100%;padding:0 64px;z-index:-1;transform:skewX(-45deg) translateX(-50%);transition:0.6s cubic-bezier(1, 0.03, 0.86, 1.44)}.btn-skew:hover:before{transform:skewX(0) translateX(-50%);padding:0 122px}";

const ButtonCssOne$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn-skew">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn-skew {
    position: relative;
    width: max-content;
    padding: 24px 80px;
    border: none;
    display: flex;
    align-items: center;
    text-align: center;
  
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
  
    background-color: transparent;
  
    cursor: pointer;
  }
  
  .btn-skew:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #78daf9;
    height: 100%;
    padding: 0 64px;
    z-index: -1;
    transform: skewX(-45deg) translateX(-50%);
    transition: 0.6s cubic-bezier(1, 0.03, 0.86, 1.44);
  }
  
  .btn-skew:hover:before {
    transform: skewX(0) translateX(-50%);
    padding: 0 122px;
  }  
  </code>`;
    this.jsSource = ``;
  }
  getSourceHandler(event) {
    if (event.detail !== this.el) {
      console.log("NOT this element!");
      return;
    }
    console.log("Element is READY!");
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
    return h("button", { class: "btn-skew" }, "Hover me");
  }
  get el() { return this; }
  static get style() { return buttonCssOneCss; }
}, [1, "button-css-one", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-css-one"];
  components.forEach(tagName => { switch (tagName) {
    case "button-css-one":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonCssOne$1);
      }
      break;
  } });
}

const ButtonCssOne = ButtonCssOne$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonCssOne, defineCustomElement };
