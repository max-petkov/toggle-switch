import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssTwelveCss = ".btn{position:relative;padding:16px 24px;border:none;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:0.3s;cursor:pointer}.btn::before{content:'';position:absolute;top:-2px;left:-1%;height:100%;width:50%;background-color:rgba(255, 99, 71, 0.8);transform:skewX(30deg);z-index:-1;transition:0.3s}.btn:hover:before{transform:skewX(0deg);left:50%;top:0}.btn::after{content:'';position:absolute;top:2px;left:50%;height:100%;width:50%;background-color:rgba(64, 224, 208, 0.8);transform:skewX(30deg);z-index:-1;transition:0.3s}.btn:hover:after{transform:skewX(0deg);left:0;top:0}";

const ButtonCssTwelve = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    position: relative;
    padding: 16px 24px;
    border: none;
    border-radius: 40px;
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
    top: -2px;
    left: -1%;
    height: 100%;
    width: 50%;
    background-color: rgba(255, 99, 71, 0.8);
    transform: skewX(30deg);
    z-index: -1;
    transition: 0.3s;
  }
  
  .btn:hover:before {
    transform: skewX(0deg);
    left: 50%;
    top: 0;
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    height: 100%;
    width: 50%;
    background-color: rgba(64, 224, 208, 0.8);
    transform: skewX(30deg);
    z-index: -1;
    transition: 0.3s;
  }
  
  .btn:hover:after {
    transform: skewX(0deg);
    left: 0;
    top: 0;
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
ButtonCssTwelve.style = buttonCssTwelveCss;

export { ButtonCssTwelve as button_css_twelve };
