import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const buttonCssElevenCss = ".btn{position:relative;padding:16px 24px;border:1px solid #3037c2;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#3037c2;cursor:pointer}.btn::before{content:'Hover me...';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#3037c2;color:white;border-radius:40px;border:1px solid #3037c2;display:flex;align-items:center;justify-content:center;transition:all 0.5s}.btn:hover:before{left:100%;transform:scale(0) rotateY(360deg);opacity:0}.btn::after{content:'Hover me...';position:absolute;top:0;left:-100%;width:100%;height:100%;background-color:#3037c2;color:white;border-radius:40px;border:1px solid #3037c2;display:flex;align-items:center;justify-content:center;transition:all 0.5s;transform:scale(0) rotateY(0deg);opacity:0}.btn:hover:after{left:0;transform:scale(1) rotateY(360deg);opacity:1}";

const ButtonCssEleven$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
    border: 1px solid #3037c2;
    border-radius: 40px;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #3037c2;
  
    cursor: pointer;
  }
  
  .btn::before {
    content: 'Hover me...';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3037c2;
    color: white;
    border-radius: 40px;
    border: 1px solid #3037c2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }
  
  .btn:hover:before {
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }
  
  .btn::after {
    content: 'Hover me...';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #3037c2;
    color: white;
    border-radius: 40px;
    border: 1px solid #3037c2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    transform: scale(0) rotateY(0deg);
    opacity: 0;
  }
  
  .btn:hover:after {
    left: 0;
    transform: scale(1) rotateY(360deg);
    opacity: 1;
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
  static get style() { return buttonCssElevenCss; }
}, [1, "button-css-eleven", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-css-eleven"];
  components.forEach(tagName => { switch (tagName) {
    case "button-css-eleven":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonCssEleven$1);
      }
      break;
  } });
}

const ButtonCssEleven = ButtonCssEleven$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonCssEleven, defineCustomElement };
