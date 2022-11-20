import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const buttonCssMafanfaCss = ".btn{overflow:hidden;position:relative;display:flex;padding:16px 64px;border:none;border-radius:48px;color:#121212;background-color:transparent;box-shadow:0px 5px 15px rgba(50, 50, 93, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.04);text-decoration:none;font-size:20px;font-family:inherit;-webkit-transition:color 0.7s cubic-bezier(0.73, 0.29, 0, 1);-o-transition:color 0.7s cubic-bezier(0.73, 0.29, 0, 1);transition:color 0.7s cubic-bezier(0.73, 0.29, 0, 1);cursor:pointer}.btn__text{position:relative;display:inline-block;z-index:3}.btn:hover{color:#fff}.btn:before{content:'';position:absolute;top:0;left:0;width:100%;height:200%;background-color:#fca2d5;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);border-radius:100%;-webkit-transition:border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);transition:border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);-o-transition:transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;transition:transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;transition:transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);z-index:1}.btn:after{content:'';position:absolute;top:0;left:0;width:100%;height:200%;background-color:#385efc;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);border-radius:100%;-webkit-transition:border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;transition:border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;-o-transition:transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;transition:transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;transition:transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;z-index:2}.btn:hover:before{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);border-radius:0}.btn:hover:after{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);border-radius:0}";

const ButtonCssMafanfa$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn">
    &lt;span>Hover me&lt;/span>
  &lt;/button>
  </code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    display: flex;
    padding: 16px 64px;
    border: none;
    border-radius: 48px;
    color: #121212;
    background-color: transparent;
    box-shadow: 0px 5px 15px rgba(50, 50, 93, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.04);
    text-decoration: none;
    font-size: 20px;
    font-family: inherit;
    -webkit-transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    -o-transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    transition: color 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    cursor: pointer;
  }
  
  .btn__text {
    position: relative;
    display: inline-block;
    z-index: 3;
  }
  
  .btn:hover {
    color: #fff;
  }
  
  .btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background-color: #fca2d5;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    border-radius: 100%;
    -webkit-transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    -o-transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1), border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1);
    z-index: 1;
  }
  
  .btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background-color: #385efc;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
    border-radius: 100%;
    -webkit-transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;
    transition: border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;
    -o-transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s;
    transition: transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s, border-radius 0.7s ease 0.05s, -webkit-transform 0.7s cubic-bezier(0.73, 0.29, 0, 1) 0.1s;
    z-index: 2;
  }
  
  .btn:hover:before {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    border-radius: 0;
  }
  
  .btn:hover:after {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    border-radius: 0;
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
    return (h("button", { class: "btn" }, h("span", { class: "btn__text" }, "Hover me")));
  }
  get el() { return this; }
  static get style() { return buttonCssMafanfaCss; }
}, [1, "button-css-mafanfa", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["button-css-mafanfa"];
  components.forEach(tagName => { switch (tagName) {
    case "button-css-mafanfa":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ButtonCssMafanfa$1);
      }
      break;
  } });
}

const ButtonCssMafanfa = ButtonCssMafanfa$1;
const defineCustomElement = defineCustomElement$1;

export { ButtonCssMafanfa, defineCustomElement };
