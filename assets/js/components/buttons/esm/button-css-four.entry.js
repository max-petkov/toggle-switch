import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssFourCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:0;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:color 0.1s ease 0.1s}.btn:hover{color:#fff}.btn::before{content:'';position:absolute;top:0;left:0;background-color:#3037c2;width:100%;height:100%;transform:translateY(-100%);z-index:-1}.btn::after{content:'';position:absolute;top:0;left:0;background-color:#3037c2;width:101%;height:101%;transform:translateY(100%);z-index:-1;transition:0.4s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::after{transform:translateY(0);transition:transform 0.01s 0.4s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::before{transform:translateY(0);transition:0.4s cubic-bezier(0.7, 0, 0.2, 1)}";

const ButtonCssFour = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    padding: 16px 24px;
    border: 1px solid #121212;
    border-radius: 0;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
    cursor: pointer;
    transition: color 0.1s ease 0.1s;
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
    transform: translateY(-100%);
    z-index: -1;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3037c2;
    width: 101%;
    height: 101%;
    transform: translateY(100%);
    z-index: -1;
    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .btn:hover::after {
    transform: translateY(0);
    transition: transform 0.01s 0.4s cubic-bezier(0.7, 0, 0.2, 1);
  }
  
  .btn:hover::before {
    transform: translateY(0);
    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);
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
  get el() { return getElement(this); }
};
ButtonCssFour.style = buttonCssFourCss;

export { ButtonCssFour as button_css_four };
