import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssFourCss = ".link{display:inline-block;overflow:hidden;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;color:#121212;pointer-events:all}.link .link__text{display:inline-block;pointer-events:none;transform-origin:100% 50%;transform:translate3d(0, 0, 0);transition:transform 0.3s}.link:hover .link__text{transform:translate3d(-150%, 0, 0)}.link:after{content:attr(data-text);position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none;transform-origin:100% 50%;transform:translate3d(150%, 0, 0);transition:transform 0.3s}.link:hover::after{transform:translate3d(0, 0, 0)}.link:before{content:\"\";position:absolute;top:93%;left:0;height:3px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:hover:before{transform-origin:0 50%;transform:scale3d(1, 1, 1)}";

const LinkCssFour$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link" data-text="Our Philosophy">
    &lt;span class="link__text">Our Philosophy&lt;/span>
  &lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    color: #121212;
    pointer-events: all;
  }
  
  .link .link__text {
    display: inline-block;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: translate3d(0, 0, 0);
    transition: transform 0.3s;
  }
  
  .link:hover .link__text {
    transform: translate3d(-150%, 0, 0);
  }
  
  .link:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: translate3d(150%, 0, 0);
    transition: transform 0.3s;
  }
  
  .link:hover::after {
    transform: translate3d(0, 0, 0);
  }
  
  .link:before {
    content: "";
    position: absolute;
    top: 93%;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link:hover:before {
    transform-origin: 0 50%;
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
    return (h("a", { href: "#", class: "link", "data-text": "Our Philosophy" }, h("span", { class: "link__text" }, "Our Philosophy")));
  }
  get el() { return this; }
  static get style() { return linkCssFourCss; }
}, [1, "link-css-four", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-four"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-four":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssFour$1);
      }
      break;
  } });
}

const LinkCssFour = LinkCssFour$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssFour, defineCustomElement };
