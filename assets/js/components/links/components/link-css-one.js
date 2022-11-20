import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssOneCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:500;text-transform:lowercase;font-size:18px;color:#121212;pointer-events:all}.link:before{content:'';position:absolute;top:104%;left:0;height:1px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:hover:before{transform-origin:0% 50%;transform:scale3d(1, 1, 1)}";

const LinkCssOne$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;a href="#" class="link">about us&lt;/a></code>`;
    this.cssSource = `<code class="language-css">
  .link {
    position: relative;
    text-decoration: none;
    color: #121212;
    font-weight: 500;
    text-transform: lowercase;
    font-size: 18px;
    pointer-events: all;
  }
  
  .link:before {
    content: '';
    position: absolute;
    top: 104%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link:hover:before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
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
    return h("a", { href: "#", class: "link" }, "about us");
  }
  get el() { return this; }
  static get style() { return linkCssOneCss; }
}, [1, "link-css-one", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-one"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-one":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssOne$1);
      }
      break;
  } });
}

const LinkCssOne = LinkCssOne$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssOne, defineCustomElement };
