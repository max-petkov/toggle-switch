import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const buttonCssSevenCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:background-color 1s ease, color 0.3s ease}.btn:hover{background-color:rgb(71, 77, 193);color:#fff}.btn::before{content:'';position:absolute;background-color:rgba(255, 255, 255, 0.1);top:0;left:0;width:100%;height:20px;transform:translate(-100%, 50%) rotate(45deg);transition:1s}.btn:hover::before{transform:translate(100%, 50%) rotate(45deg)}";

const ButtonCssSeven$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    transition: background-color 1s ease, color 0.3s ease;
  }
  
  .btn:hover {
    background-color: rgb(71, 77, 193);
    color: #fff;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    transform: translate(-100%, 50%) rotate(45deg);
    transition: 1s;
  }
  
  .btn:hover::before {
    transform: translate(100%, 50%) rotate(45deg);
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
  static get style() { return buttonCssSevenCss; }
}, [1, "button-css-seven", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-css-seven"];
  components.forEach(tagName => { switch (tagName) {
    case "button-css-seven":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonCssSeven$1);
      }
      break;
  } });
}

const ButtonCssSeven = ButtonCssSeven$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonCssSeven, defineCustomElement };
