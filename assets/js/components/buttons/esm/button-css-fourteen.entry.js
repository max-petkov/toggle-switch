import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssFourteenCss = ".btn{position:relative;padding:16px 24px;border:none;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:0.3s;cursor:pointer}.btn::before{content:'';position:absolute;top:-14px;left:0;width:100%;height:calc(100% + 32px);border-left:2px solid tomato;border-right:2px solid turquoise;transition:all 1s;transition-delay:0.2s}.btn:hover:before{transform:rotateY(180deg)}.btn:hover:after{transform:rotateX(180deg)}.btn::after{content:'';position:absolute;top:0;left:-15px;width:calc(100% + 32px);height:100%;border-top:2px solid tomato;border-bottom:2px solid turquoise;transition:all 1s}";

const ButtonCssFourteen = class {
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
    top: -14px;
    left: 0;
    width: 100%;
    height: calc(100% + 32px);
    border-left: 2px solid tomato;
    border-right: 2px solid turquoise;
    transition: all 1s;
    transition-delay: 0.2s;
  }
  
  .btn:hover:before {
    transform: rotateY(180deg);
  }
  
  .btn:hover:after {
    transform: rotateX(180deg);
  }
  
  .btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: -15px;
    width: calc(100% + 32px);
    height: 100%;
    border-top: 2px solid tomato;
    border-bottom: 2px solid turquoise;
    transition: all 1s;
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
ButtonCssFourteen.style = buttonCssFourteenCss;

export { ButtonCssFourteen as button_css_fourteen };
