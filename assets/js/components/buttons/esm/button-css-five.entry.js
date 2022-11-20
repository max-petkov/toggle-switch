import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssFiveCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:0.4s}.btn:hover{color:#fff}.btn::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#121212;transition:0.5s;transform:rotateX(90deg);z-index:-1}.btn::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#121212;transition:0.5s;transform:rotateY(90deg);z-index:-1}.btn:hover::before{transform:rotateX(0)}.btn:hover::after{transform:rotateY(0)}";

const ButtonCssFive = class {
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
    border-radius: 40px;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
    cursor: pointer;
    transition: 0.4s;
  }
  
  .btn:hover {
    color: #fff;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #121212;
    transition: 0.5s;
    transform: rotateX(90deg);
    z-index: -1;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #121212;
    transition: 0.5s;
    transform: rotateY(90deg);
    z-index: -1;
  }
  
  .btn:hover::before {
    transform: rotateX(0);
  }
  
  .btn:hover::after {
    transform: rotateY(0);
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
ButtonCssFive.style = buttonCssFiveCss;

export { ButtonCssFive as button_css_five };
