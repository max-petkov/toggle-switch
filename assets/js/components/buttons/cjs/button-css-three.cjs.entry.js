'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3c8d65af.js');

const buttonCssThreeCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:0.5s}.btn:hover{color:#fff}.btn::before{content:'';position:absolute;top:0;left:0;background-color:#3037c2;width:100%;height:100%;z-index:-1;transform:translateX(-100%);border-radius:40px}.btn::after{content:'';position:absolute;top:0;left:0;border-radius:40px;width:100%;height:100%;background-color:#3037c2;transform:translateX(100%);z-index:-1;transition:0.3s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::before{transform:translateX(0);transition:0.3s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::after{transform:translate(0);transition:transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1)}";

const ButtonCssThree = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return index.h("button", { class: "btn" }, "Hover me");
  }
  get el() { return index.getElement(this); }
};
ButtonCssThree.style = buttonCssThreeCss;

exports.button_css_three = ButtonCssThree;
