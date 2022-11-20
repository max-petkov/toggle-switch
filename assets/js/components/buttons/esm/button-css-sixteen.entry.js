import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';

const buttonCssSixteenCss = ".btn{display:flex;cursor:pointer;position:relative;padding:0;outline:none;border:none;background-color:transparent}.btn__bg{position:absolute;top:0;left:0;height:110px;width:140px;background-color:#121212;border-radius:64px;transition:0.8s ease}.btn:hover .btn__bg{width:100%}.btn__text{font-size:16px;letter-spacing:1px;font-weight:500;background-color:#121212;color:#fff;text-transform:uppercase;display:flex;align-items:center;justify-content:center;height:110px;pointer-events:none}.btn__text span{display:inline-block}.btn__text--1{width:140px;border-radius:64px;transform:translateX(0);transition:0.5s ease-in-out}.btn:hover .btn__text--1{transform:translateX(50px)}.btn__text--2{width:80px;border-radius:64px;transform:translateX(0.1px);transition:0.5s ease-in-out;z-index:1}.btn:hover .btn__text--2{background-color:transparent;transform:translateX(-21px)}.btn__text--3{width:50px;border-radius:64px;transform:translateX(0.1px) rotate(0);transition:0.5s ease-in-out}.btn__text--3 span{transform:rotate(-90deg)}.btn:hover .btn__text--3{width:110px;transform:translateX(-67px) rotate(90deg)}";

const ButtonCssSixteen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn">
    &lt;div class="btn__bg">&lt;/div>
    &lt;div class="btn__text btn__text--1">
      &lt;span>keep&lt;/span>
    &lt;/div>
    &lt;div class="btn__text btn__text--2">
      &lt;span>in&lt;/span>
    &lt;/div>
    &lt;div class="btn__text btn__text--3">
      &lt;span>touch&lt;/span>
    &lt;/div>
  &lt;/button>
</code>`;
    this.cssSource = `<code class="language-css">
  .btn {
    display: flex;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  
  .btn__bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 110px;
    width: 140px;
    background-color: #121212;
    border-radius: 64px;
    transition: 0.8s ease;
  }
  
  .btn:hover .btn__bg {
    width: 100%;
  }
  
  .btn__text {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
    background-color: #121212;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 110px;
    pointer-events: none;
  }
  
  .btn__text span {
    display: inline-block;
  }
  
  .btn__text--1 {
    width: 140px;
    border-radius: 64px;
    transform: translateX(0);
    transition: 0.5s ease-in-out;
  }
  
  .btn:hover .btn__text--1 {
    transform: translateX(50px);
  }
  
  .btn__text--2 {
    width: 80px;
    border-radius: 64px;
    transform: translateX(0.1px);
    transition: 0.5s ease-in-out;
    z-index: 1;
  }
  
  .btn:hover .btn__text--2 {
    background-color: transparent;
    transform: translateX(-21px);
  }
  
  .btn__text--3 {
    width: 50px;
    border-radius: 64px;
    transform: translateX(0.1px) rotate(0);
    transition: 0.5s ease-in-out;
  }
  
  .btn__text--3 span {
    transform: rotate(-90deg);
  }
  
  .btn:hover .btn__text--3 {
    width: 110px;
    transform: translateX(-67px) rotate(90deg);
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
    return (h("button", { class: "btn" }, h("div", { class: "btn__bg" }), h("div", { class: "btn__text btn__text--1" }, h("span", null, "keep")), h("div", { class: "btn__text btn__text--2" }, h("span", null, "in")), h("div", { class: "btn__text btn__text--3" }, h("span", null, "touch"))));
  }
  get el() { return getElement(this); }
};
ButtonCssSixteen.style = buttonCssSixteenCss;

export { ButtonCssSixteen as button_css_sixteen };
