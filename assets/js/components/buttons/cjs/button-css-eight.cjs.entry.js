'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3c8d65af.js');

const buttonCssEightCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:0;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:1s;cursor:pointer}.btn::before{content:'Hover me...';position:absolute;top:0;left:0;height:100%;width:100%;color:#fff;background-color:#161a68;display:flex;align-items:center;justify-content:center;transform:translate(-100%, 100%);transition:1s}.btn:hover::before{transform:translate(0, 0)}";

const ButtonCssEight = class {
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
    border-radius: 0;
    width: max-content;
    height: max-content;
  
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
  
    background-color: transparent;
    color: #121212;
  
    transition: 1s;
    cursor: pointer;
  }
  
  .btn::before {
    content: 'Hover me...';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #fff;
    background-color: #161a68;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-100%, 100%);
    transition: 1s;
  }
  
  .btn:hover::before {
    transform: translate(0, 0);
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
    return index.h("button", { class: "btn" }, "Hover me");
  }
  get el() { return index.getElement(this); }
};
ButtonCssEight.style = buttonCssEightCss;

exports.button_css_eight = ButtonCssEight;
