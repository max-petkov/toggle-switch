'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3c8d65af.js');

const buttonCssFifteenCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:none;border-radius:0;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:0.3s;cursor:pointer}.btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:2px;background-color:rgb(34, 34, 34);transition:all 0.5s}.btn:hover:before{left:0}.btn::after{content:'';position:absolute;bottom:0;right:-100%;width:100%;height:2px;background-color:rgb(34, 34, 34);transition:all 0.5s}.btn:hover:after{right:0}.btn__side-border::before{content:'';position:absolute;top:-100%;right:0;width:2px;height:100%;background-color:rgb(34, 34, 34);transition:all 0.5s}.btn:hover .btn__side-border::before{top:0}.btn__side-border::after{content:'';position:absolute;bottom:-100%;left:0;width:2px;height:100%;background-color:rgb(34, 34, 34);transition:all 0.5s}.btn:hover .btn__side-border::after{bottom:0}";

const ButtonCssFifteen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn">
    Hover me
    &lt;span class="btn__side-border">&lt;/span>
  &lt;/button>
</code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
    position: relative;
    padding: 16px 24px;
    border: none;
    border-radius: 0;
    width: max-content;
    height: max-content;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    color: #121212;
    transition: 0.3s;
    cursor: pointer;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover:before {
    left: 0;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover:after {
    right: 0;
  }
  
  .btn__side-border::before {
    content: '';
    position: absolute;
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover .btn__side-border::before {
    top: 0;
  }
  
  .btn__side-border::after {
    content: '';
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: rgb(34, 34, 34);
    transition: all 0.5s;
  }
  
  .btn:hover .btn__side-border::after {
    bottom: 0;
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
    return (index.h("button", { class: "btn" }, "Hover me", index.h("span", { class: "btn__side-border" })));
  }
  get el() { return index.getElement(this); }
};
ButtonCssFifteen.style = buttonCssFifteenCss;

exports.button_css_fifteen = ButtonCssFifteen;
