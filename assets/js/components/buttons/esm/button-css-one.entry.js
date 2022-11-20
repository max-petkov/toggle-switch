import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssOneCss = ".btn-skew{position:relative;width:max-content;padding:24px 80px;border:none;display:flex;align-items:center;text-align:center;font-size:16px;font-weight:400;font-family:inherit;background-color:transparent;cursor:pointer}.btn-skew:before{content:'';position:absolute;top:0;left:50%;background-color:#78daf9;height:100%;padding:0 64px;z-index:-1;transform:skewX(-45deg) translateX(-50%);transition:0.6s cubic-bezier(1, 0.03, 0.86, 1.44)}.btn-skew:hover:before{transform:skewX(0) translateX(-50%);padding:0 122px}";

const ButtonCssOne = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn-skew">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn-skew {
    position: relative;
    width: max-content;
    padding: 24px 80px;
    border: none;
    display: flex;
    align-items: center;
    text-align: center;
  
    font-size: 16px;
    font-weight: 400;
    font-family: inherit;
  
    background-color: transparent;
  
    cursor: pointer;
  }
  
  .btn-skew:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #78daf9;
    height: 100%;
    padding: 0 64px;
    z-index: -1;
    transform: skewX(-45deg) translateX(-50%);
    transition: 0.6s cubic-bezier(1, 0.03, 0.86, 1.44);
  }
  
  .btn-skew:hover:before {
    transform: skewX(0) translateX(-50%);
    padding: 0 122px;
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
    return h("button", { class: "btn-skew" }, "Hover me");
  }
  get el() { return getElement(this); }
};
ButtonCssOne.style = buttonCssOneCss;

export { ButtonCssOne as button_css_one };
