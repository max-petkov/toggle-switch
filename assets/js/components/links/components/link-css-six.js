import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssSixCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:24px;color:#121212;pointer-events:all}.link:before{content:\"\";position:absolute;display:inline-block;top:100%;left:0;height:1px;width:100%;background-color:#121212;opacity:0;transform-origin:50% 0%;transform:translate3d(0, 3px, 0);transition-property:transform, opacity;transition-duration:0.3s;transition-timing-function:cubic-bezier(0.2, 1, 0.8, 1)}.link:after{content:\"\";position:absolute;display:inline-block;top:calc(100% + 6px);left:50%;height:1px;width:50%;background-color:#121212;opacity:0;transform-origin:50% 0%;transform:translate3d(-50%, 3px, 0);transition-property:transform, opacity;transition-duration:0.3s;transition-timing-function:cubic-bezier(0.2, 1, 0.8, 1)}.link:hover:after{transition-delay:0.1s;opacity:1;transform:translate3d(-50%, 0, 0);transition-timing-function:cubic-bezier(0.2, 0, 0.3, 1)}.link:hover:before{opacity:1;transform:translate3d(0, 0, 0);transition-timing-function:cubic-bezier(0.2, 0, 0.3, 1)}";

const LinkCssSix$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">Portfolio&lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 24px;
    color: #121212;
    pointer-events: all;
  }
  
  .link:before {
    content: "";
    position: absolute;
    display: inline-block;
    top: 100%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #121212;
    opacity: 0;
    transform-origin: 50% 0%;
    transform: translate3d(0, 3px, 0);
    transition-property: transform, opacity;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
  }
  
  .link:after {
    content: "";
    position: absolute;
    display: inline-block;
    top: calc(100% + 6px);
    left: 50%;
    height: 1px;
    width: 50%;
    background-color: #121212;
    opacity: 0;
    transform-origin: 50% 0%;
    transform: translate3d(-50%, 3px, 0);
    transition-property: transform, opacity;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.8, 1);
  }
  
  .link:hover:after {
    transition-delay: 0.1s;
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
    transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
  }
  
  .link:hover:before {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: cubic-bezier(0.2, 0, 0.3, 1);
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
    return h("a", { href: "#", class: "link" }, "Portfolio");
  }
  get el() { return this; }
  static get style() { return linkCssSixCss; }
}, [1, "link-css-six", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-six"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-six":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssSix$1);
      }
      break;
  } });
}

const LinkCssSix = LinkCssSix$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssSix, defineCustomElement };
