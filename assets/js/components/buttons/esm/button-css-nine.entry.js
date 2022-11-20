import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssNineCss = ".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #3037c2;border-radius:0;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#3037c2;cursor:pointer}.btn::before{content:'Hover me...';position:absolute;top:0;left:0;height:100%;width:100%;background-color:#3037c2;color:#fff;display:flex;justify-content:center;align-items:center;transform:scale(5);opacity:0;transition:all 0.5s}.btn:hover::before{transform:scale(1);opacity:1}";

const ButtonCssNine = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    overflow: hidden;
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
    height: 100%;
    width: 100%;
    background-color: #3037c2;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(5);
    opacity: 0;
    transition: all 0.5s;
  }
  
  .btn:hover::before {
    transform: scale(1);
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
  get el() { return getElement(this); }
};
ButtonCssNine.style = buttonCssNineCss;

export { ButtonCssNine as button_css_nine };
