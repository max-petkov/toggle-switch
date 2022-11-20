import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssFiveCss = ".link{display:inline-block;overflow:hidden;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;letter-spacing:4px;color:#121212;pointer-events:all}.link .link__text{display:inline-block;font-size:24px;font-weight:400;transition:transform 0.3s ease}.link:before{content:\"\";position:absolute;top:90%;left:0;width:100%;height:1px;background-color:#121212;transform:scaleY(2) translateX(calc(-100% - 2px));transition:transform 0.5s ease}.link:after{content:\"\";position:absolute;top:90%;left:0;width:100%;height:1px;background-color:#121212;transform:scaleY(2) translateX(calc(100% + 2px));transition:transform 0.5s ease}.link:hover .link__text{transform:translateY(-2px)}.link:hover:before,.link:hover:after{transform:scaleY(2) translateX(0)}";

const LinkCssFive$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">
    &lt;span class="link__text">Studio&lt;/span>
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
    letter-spacing: 4px;
    color: #121212;
    pointer-events: all;
  }
  
  .link .link__text {
    display: inline-block;
    font-size: 24px;
    font-weight: 400;
    transition: transform 0.3s ease;
  }
  
  .link:before {
    content: "";
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #121212;
    transform: scaleY(2) translateX(calc(-100% - 2px));
    transition: transform 0.5s ease;
  }
  
  .link:after {
    content: "";
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #121212;
    transform: scaleY(2) translateX(calc(100% + 2px));
    transition: transform 0.5s ease;
  }
  
  .link:hover .link__text {
    transform: translateY(-2px);
  }
  
  .link:hover:before,
  .link:hover:after {
    transform: scaleY(2) translateX(0);
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
    return (h("a", { href: "#", class: "link" }, h("span", { class: "link__text" }, "Studio")));
  }
  get el() { return this; }
  static get style() { return linkCssFiveCss; }
}, [1, "link-css-five", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-five"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-five":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssFive$1);
      }
      break;
  } });
}

const LinkCssFive = LinkCssFive$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssFive, defineCustomElement };
