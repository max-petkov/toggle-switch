import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssSevenCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;color:#121212;pointer-events:all}.link::before{content:\"\";display:inline-block;position:absolute;top:100%;left:0;height:10px;width:100%;background-color:#121212;opacity:0;pointer-events:none}.link:hover:before{opacity:1;animation:line-up 0.3s ease forwards}@keyframes line-up{0%{transform-origin:50% 100%;transform:scale3d(1, 0.045, 1)}50%{transform-origin:50% 100%;transform:scale3d(1, 1, 1)}51%{transform-origin:50% 0%;transform:scale3d(1, 1, 1)}100%{transform-origin:50% 0%;transform:scale3d(1, 0.045, 1)}}";

const LinkCssSeven$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">explore more&lt;/a>
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
  
  .link::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 0;
    height: 10px;
    width: 100%;
    background-color: #121212;
    opacity: 0;
    pointer-events: none;
  }
  
  .link:hover:before {
    opacity: 1;
    animation: line-up 0.3s ease forwards;
  }
  
  @keyframes line-up {
    0% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 0.045, 1);
    }
  
    50% {
      transform-origin: 50% 100%;
      transform: scale3d(1, 1, 1);
    }
  
    51% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 1, 1);
    }
  
    100% {
      transform-origin: 50% 0%;
      transform: scale3d(1, 0.045, 1);
    }
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
    return h("a", { href: "#", class: "link" }, "explore more");
  }
  get el() { return this; }
  static get style() { return linkCssSevenCss; }
}, [1, "link-css-seven", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-seven"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-seven":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssSeven$1);
      }
      break;
  } });
}

const LinkCssSeven = LinkCssSeven$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssSeven, defineCustomElement };
