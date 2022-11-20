import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssTenCss = ".btn{position:relative;padding:16px 24px;border:1px solid #3037c2;border-radius:0;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#3037c2;cursor:pointer}.btn::before{content:'Hover me...';position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:magenta;color:white;transform:rotateX(270deg);transform-origin:top;transition:all 1s}.btn:hover:before{transform:rotateX(0)}.btn::after{content:'Hover me...';position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:cyan;color:black;transform:rotateX(270deg);transform-origin:top;transition:all 1s;transition-delay:0.25s}.btn:hover:after{transform:rotateX(0)}";

const ButtonCssTen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    position: relative;
    padding: 16px 24px;
    border: 1px solid #3037c2;
    border-radius: 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: magenta;
    color: white;
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 1s;
  }
  
  .btn:hover:before {
    transform: rotateX(0);
  }
  
  .btn::after {
    content: 'Hover me...';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cyan;
    color: black;
    transform: rotateX(270deg);
    transform-origin: top;
    transition: all 1s;
    transition-delay: 0.25s;
  }
  
  .btn:hover:after {
    transform: rotateX(0);
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
ButtonCssTen.style = buttonCssTenCss;

export { ButtonCssTen as button_css_ten };
