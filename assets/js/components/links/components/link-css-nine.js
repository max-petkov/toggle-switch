import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const linkCssNineCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;color:#121212;pointer-events:all}.link:before{content:'';position:absolute;top:100%;left:0;height:2px;width:100%;background-color:#121212;opacity:0}.link:hover .link__text{animation:glitch-text 0.4s linear}.link:hover:before{opacity:1;animation:glitch-line 0.4s steps(2, start) forwards}@keyframes glitch-text{0%{opacity:1;transform:translate3d(-10px, 0, 0) scale3d(-1, -1, 1);-webkit-clip-path:polygon(0 20%, 100% 20%, 100% 21%, 0 21%);clip-path:polygon(0 20%, 100% 20%, 100% 21%, 0 21%)}10%{-webkit-clip-path:polygon(0 33%, 100% 33%, 100% 33%, 0 33%);clip-path:polygon(0 33%, 100% 33%, 100% 33%, 0 33%)}20%{-webkit-clip-path:polygon(0 44%, 100% 44%, 100% 44%, 0 44%);clip-path:polygon(0 44%, 100% 44%, 100% 44%, 0 44%)}35%{-webkit-clip-path:polygon(0 50%, 100% 50%, 100% 20%, 0 20%);clip-path:polygon(0 50%, 100% 50%, 100% 20%, 0 20%)}50%{-webkit-clip-path:polygon(0 70%, 100% 70%, 100% 70%, 0 70%);clip-path:polygon(0 70%, 100% 70%, 100% 70%, 0 70%)}60%{-webkit-clip-path:polygon(0 80%, 100% 80%, 100% 80%, 0 80%);clip-path:polygon(0 80%, 100% 80%, 100% 80%, 0 80%)}70%{-webkit-clip-path:polygon(0 50%, 100% 50%, 100% 55%, 0 55%);clip-path:polygon(0 50%, 100% 50%, 100% 55%, 0 55%)}80%{-webkit-clip-path:polygon(0 70%, 100% 70%, 100% 80%, 0 80%);clip-path:polygon(0 70%, 100% 70%, 100% 80%, 0 80%)}90%{transform:translate3d(-10px, 0, 0) scale3d(-1, -1, 1)}100%{opacity:1;transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%);clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%)}}@keyframes glitch-line{0%{transform:scale3d(1, 1, 1)}10%{transform:translate3d(10px, 0, 0)}20%{transform:translate3d(0, 4px, 0)}30%{transform:scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);transform-origin:100% 0%}40%{transform:scale3d(1, 0.3, 1) translate3d(0, 25px, 0)}50%{transform:scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0)}60%{transform:scale3d(1, 1.25, 1) translate3d(10px, -5px, 0)}70%{transform:scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0)}80%{transform:translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);transform-origin:100% 0%}90%{transform:scale3d(1, 0.5, 1) translate3d(0, -15px, 0);transform-origin:0% 50%}100%{opacity:1}}";

const LinkCssNine$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="link">
    &lt;span class="link__text">Discover&lt;/span>
  &lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .link {
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
  
  .link:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #121212;
    opacity: 0;
  }
  
  .link:hover .link__text {
    animation: glitch-text 0.4s linear;
  }
  
  .link:hover:before {
    opacity: 1;
    animation: glitch-line 0.4s steps(2, start) forwards;
  }
  
  @keyframes glitch-text {
    0% {
      opacity: 1;
      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    }
  
    10% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    }
  
    20% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    }
  
    35% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    }
  
    50% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    }
  
    60% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    }
  
    70% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    }
  
    80% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    }
  
    90% {
      transform: translate3d(-10px, 0, 0) scale3d(-1, -1, 1);
    }
  
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
  
  @keyframes glitch-line {
    0% {
      transform: scale3d(1, 1, 1);
    }
  
    10% {
      transform: translate3d(10px, 0, 0);
    }
  
    20% {
      transform: translate3d(0, 4px, 0);
    }
  
    30% {
      transform: scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);
      transform-origin: 100% 0%;
    }
  
    40% {
      transform: scale3d(1, 0.3, 1) translate3d(0, 25px, 0);
    }
  
    50% {
      transform: scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0);
    }
  
    60% {
      transform: scale3d(1, 1.25, 1) translate3d(10px, -5px, 0);
    }
  
    70% {
      transform: scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0);
    }
  
    80% {
      transform: translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);
      transform-origin: 100% 0%;
    }
  
    90% {
      transform: scale3d(1, 0.5, 1) translate3d(0, -15px, 0);
      transform-origin: 0% 50%;
    }
  
    100% {
      opacity: 1;
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
    return (h("a", { href: "#", class: "link" }, h("span", { class: "link__text" }, "Discover")));
  }
  get el() { return this; }
  static get style() { return linkCssNineCss; }
}, [1, "link-css-nine", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["link-css-nine"];
  components.forEach(tagName => { switch (tagName) {
    case "link-css-nine":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LinkCssNine$1);
      }
      break;
  } });
}

const LinkCssNine = LinkCssNine$1;
const defineCustomElement = defineCustomElement$1;

export { LinkCssNine, defineCustomElement };
