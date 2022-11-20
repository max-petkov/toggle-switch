import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const buttonCssThreeCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:0.5s}.btn:hover{color:#fff}.btn::before{content:'';position:absolute;top:0;left:0;background-color:#3037c2;width:100%;height:100%;z-index:-1;transform:translateX(-100%);border-radius:40px}.btn::after{content:'';position:absolute;top:0;left:0;border-radius:40px;width:100%;height:100%;background-color:#3037c2;transform:translateX(100%);z-index:-1;transition:0.3s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::before{transform:translateX(0);transition:0.3s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::after{transform:translate(0);transition:transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1)}";

const ButtonCssThree$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    padding: 16px 24px;
    border: 1px solid #121212;
    border-radius: 40px;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
    cursor: pointer;
  
    transition: 0.5s;
  }
  
  .btn:hover {
    color: #fff;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3037c2;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translateX(-100%);
    border-radius: 40px;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 40px;
    width: 100%;
    height: 100%;
    background-color: #3037c2;
    transform: translateX(100%);
    z-index: -1;
    transition: 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .btn:hover::before {
    transform: translateX(0);
    transition: 0.3s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .btn:hover::after {
    transform: translate(0);
    transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
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
    return h("button", { class: "btn" }, "Hover me");
  }
  get el() { return this; }
  static get style() { return buttonCssThreeCss; }
}, [1, "button-css-three", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-css-three"];
  components.forEach(tagName => { switch (tagName) {
    case "button-css-three":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonCssThree$1);
      }
      break;
  } });
}

const ButtonCssThree = ButtonCssThree$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonCssThree, defineCustomElement };
