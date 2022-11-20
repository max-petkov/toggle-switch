import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssEightCss = ".link{overflow:hidden;display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;color:#121212;pointer-events:all}.link::before{content:\"\";position:absolute;top:calc(100% - 2px);left:0;width:100%;height:1px;background-color:#121212;transform-origin:0 50%;transform:translate3d(0, 0, 0);transition:transform 0.3s;pointer-events:none}.link::after{content:\"\";position:absolute;top:calc(100% - 6px);left:0;width:100%;height:1px;background-color:#121212;transform-origin:0 50%;transform:translate3d(-100%, 0, 0);transition:transform 0.3s;pointer-events:none}.link:hover:before{transform:translate3d(100%, 0, 0)}.link:hover:after{transform:translate3d(0, 0, 0)}";

const LinkCssEight$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">BLOG&lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
    overflow: hidden;
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: #121212;
    pointer-events: all;
  }
  
  .link::before {
    content: "";
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #121212;
    transform-origin: 0 50%;
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s;
    pointer-events: none;
  }
  
  .link::after {
    content: "";
    position: absolute;
    top: calc(100% - 6px);
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #121212;
    transform-origin: 0 50%;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.3s;
    pointer-events: none;
  }
  
  .link:hover:before {
    transform: translate3d(100%, 0, 0);
  }
  
  .link:hover:after {
    transform: translate3d(0, 0, 0);
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
    return h("a", { href: "#", class: "link" }, "BLOG");
  }
  get el() { return this; }
  static get style() { return linkCssEightCss; }
}, [1, "link-css-eight", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-eight"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-eight":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssEight$1);
      }
      break;
  } });
}

const LinkCssEight = LinkCssEight$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssEight, defineCustomElement };
