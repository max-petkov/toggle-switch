import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssThirteenCss = ".btn{position:relative;padding:16px 24px;border:none;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:0.3s;cursor:pointer}.btn::before{content:'';position:absolute;top:-2px;left:-2px;width:100%;height:100%;background-color:turquoise;z-index:-1;mix-blend-mode:multiply;transform-origin:top;transition:all 0.3s}.btn:hover:before{top:-6px;left:0;transform:perspective(500px) rotateX(75deg)}.btn::after{content:'';position:absolute;top:2px;left:2px;width:100%;height:100%;background-color:tomato;z-index:-1;mix-blend-mode:multiply;transform-origin:bottom;transition:all 0.3s}.btn:hover:after{top:6px;left:0;transform:perspective(500px) rotateX(-75deg)}";

const ButtonCssThirteen = class {
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
    left: -2px;
    width: 100%;
    height: 100%;
    background-color: turquoise;
    z-index: -1;
    mix-blend-mode: multiply;
    transform-origin: top;
    transition: all 0.3s;
  }
  
  .btn:hover:before {
    top: -6px;
    left: 0;
    transform: perspective(500px) rotateX(75deg);
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 100%;
    height: 100%;
    background-color: tomato;
    z-index: -1;
    mix-blend-mode: multiply;
    transform-origin: bottom;
    transition: all 0.3s;
  }
  
  .btn:hover:after {
    top: 6px;
    left: 0;
    transform: perspective(500px) rotateX(-75deg);
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
ButtonCssThirteen.style = buttonCssThirteenCss;

export { ButtonCssThirteen as button_css_thirteen };
