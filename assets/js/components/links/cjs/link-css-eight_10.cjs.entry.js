'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3d7575e9.js');

const linkCssEightCss = ".link{overflow:hidden;display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;color:#121212;pointer-events:all}.link::before{content:\"\";position:absolute;top:calc(100% - 2px);left:0;width:100%;height:1px;background-color:#121212;transform-origin:0 50%;transform:translate3d(0, 0, 0);transition:transform 0.3s;pointer-events:none}.link::after{content:\"\";position:absolute;top:calc(100% - 6px);left:0;width:100%;height:1px;background-color:#121212;transform-origin:0 50%;transform:translate3d(-100%, 0, 0);transition:transform 0.3s;pointer-events:none}.link:hover:before{transform:translate3d(100%, 0, 0)}.link:hover:after{transform:translate3d(0, 0, 0)}";

const LinkCssEight = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return index.h("a", { href: "#", class: "link" }, "BLOG");
  }
  get el() { return index.getElement(this); }
};
LinkCssEight.style = linkCssEightCss;

const linkCssFiveCss = ".link{display:inline-block;overflow:hidden;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;letter-spacing:4px;color:#121212;pointer-events:all}.link .link__text{display:inline-block;font-size:24px;font-weight:400;transition:transform 0.3s ease}.link:before{content:\"\";position:absolute;top:90%;left:0;width:100%;height:1px;background-color:#121212;transform:scaleY(2) translateX(calc(-100% - 2px));transition:transform 0.5s ease}.link:after{content:\"\";position:absolute;top:90%;left:0;width:100%;height:1px;background-color:#121212;transform:scaleY(2) translateX(calc(100% + 2px));transition:transform 0.5s ease}.link:hover .link__text{transform:translateY(-2px)}.link:hover:before,.link:hover:after{transform:scaleY(2) translateX(0)}";

const LinkCssFive = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return (index.h("a", { href: "#", class: "link" }, index.h("span", { class: "link__text" }, "Studio")));
  }
  get el() { return index.getElement(this); }
};
LinkCssFive.style = linkCssFiveCss;

const linkCssFourCss = ".link{display:inline-block;overflow:hidden;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;color:#121212;pointer-events:all}.link .link__text{display:inline-block;pointer-events:none;transform-origin:100% 50%;transform:translate3d(0, 0, 0);transition:transform 0.3s}.link:hover .link__text{transform:translate3d(-150%, 0, 0)}.link:after{content:attr(data-text);position:absolute;top:0;left:0;height:100%;width:100%;pointer-events:none;transform-origin:100% 50%;transform:translate3d(150%, 0, 0);transition:transform 0.3s}.link:hover::after{transform:translate3d(0, 0, 0)}.link:before{content:\"\";position:absolute;top:93%;left:0;height:3px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:hover:before{transform-origin:0 50%;transform:scale3d(1, 1, 1)}";

const LinkCssFour = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return (index.h("a", { href: "#", class: "link", "data-text": "Our Philosophy" }, index.h("span", { class: "link__text" }, "Our Philosophy")));
  }
  get el() { return index.getElement(this); }
};
LinkCssFour.style = linkCssFourCss;

const linkCssNineCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;line-height:200%;color:#121212;pointer-events:all}.link:before{content:'';position:absolute;top:100%;left:0;height:2px;width:100%;background-color:#121212;opacity:0}.link:hover .link__text{animation:glitch-text 0.4s linear}.link:hover:before{opacity:1;animation:glitch-line 0.4s steps(2, start) forwards}@keyframes glitch-text{0%{opacity:1;transform:translate3d(-10px, 0, 0) scale3d(-1, -1, 1);-webkit-clip-path:polygon(0 20%, 100% 20%, 100% 21%, 0 21%);clip-path:polygon(0 20%, 100% 20%, 100% 21%, 0 21%)}10%{-webkit-clip-path:polygon(0 33%, 100% 33%, 100% 33%, 0 33%);clip-path:polygon(0 33%, 100% 33%, 100% 33%, 0 33%)}20%{-webkit-clip-path:polygon(0 44%, 100% 44%, 100% 44%, 0 44%);clip-path:polygon(0 44%, 100% 44%, 100% 44%, 0 44%)}35%{-webkit-clip-path:polygon(0 50%, 100% 50%, 100% 20%, 0 20%);clip-path:polygon(0 50%, 100% 50%, 100% 20%, 0 20%)}50%{-webkit-clip-path:polygon(0 70%, 100% 70%, 100% 70%, 0 70%);clip-path:polygon(0 70%, 100% 70%, 100% 70%, 0 70%)}60%{-webkit-clip-path:polygon(0 80%, 100% 80%, 100% 80%, 0 80%);clip-path:polygon(0 80%, 100% 80%, 100% 80%, 0 80%)}70%{-webkit-clip-path:polygon(0 50%, 100% 50%, 100% 55%, 0 55%);clip-path:polygon(0 50%, 100% 50%, 100% 55%, 0 55%)}80%{-webkit-clip-path:polygon(0 70%, 100% 70%, 100% 80%, 0 80%);clip-path:polygon(0 70%, 100% 70%, 100% 80%, 0 80%)}90%{transform:translate3d(-10px, 0, 0) scale3d(-1, -1, 1)}100%{opacity:1;transform:translate3d(0, 0, 0) scale3d(1, 1, 1);-webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%);clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%)}}@keyframes glitch-line{0%{transform:scale3d(1, 1, 1)}10%{transform:translate3d(10px, 0, 0)}20%{transform:translate3d(0, 4px, 0)}30%{transform:scale3d(0.1, 1.4, 1) translate3d(0, -25px, 0);transform-origin:100% 0%}40%{transform:scale3d(1, 0.3, 1) translate3d(0, 25px, 0)}50%{transform:scale3d(0.5, 0.3, 1) translate3d(-100px, -80px, 0)}60%{transform:scale3d(1, 1.25, 1) translate3d(10px, -5px, 0)}70%{transform:scale3d(0.5, 0.5, 1) translate3d(0, 20px, 0)}80%{transform:translate3d(-30, 10px, 0) scale3d(1, 0.4, 1);transform-origin:100% 0%}90%{transform:scale3d(1, 0.5, 1) translate3d(0, -15px, 0);transform-origin:0% 50%}100%{opacity:1}}";

const LinkCssNine = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return (index.h("a", { href: "#", class: "link" }, index.h("span", { class: "link__text" }, "Discover")));
  }
  get el() { return index.getElement(this); }
};
LinkCssNine.style = linkCssNineCss;

const linkCssOneCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:500;text-transform:lowercase;font-size:18px;color:#121212;pointer-events:all}.link:before{content:'';position:absolute;top:104%;left:0;height:1px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:hover:before{transform-origin:0% 50%;transform:scale3d(1, 1, 1)}";

const LinkCssOne = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return index.h("a", { href: "#", class: "link" }, "about us");
  }
  get el() { return index.getElement(this); }
};
LinkCssOne.style = linkCssOneCss;

const linkCssSevenCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;color:#121212;pointer-events:all}.link::before{content:\"\";display:inline-block;position:absolute;top:100%;left:0;height:10px;width:100%;background-color:#121212;opacity:0;pointer-events:none}.link:hover:before{opacity:1;animation:line-up 0.3s ease forwards}@keyframes line-up{0%{transform-origin:50% 100%;transform:scale3d(1, 0.045, 1)}50%{transform-origin:50% 100%;transform:scale3d(1, 1, 1)}51%{transform-origin:50% 0%;transform:scale3d(1, 1, 1)}100%{transform-origin:50% 0%;transform:scale3d(1, 0.045, 1)}}";

const LinkCssSeven = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return index.h("a", { href: "#", class: "link" }, "explore more");
  }
  get el() { return index.getElement(this); }
};
LinkCssSeven.style = linkCssSevenCss;

const linkCssSixCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:24px;color:#121212;pointer-events:all}.link:before{content:\"\";position:absolute;display:inline-block;top:100%;left:0;height:1px;width:100%;background-color:#121212;opacity:0;transform-origin:50% 0%;transform:translate3d(0, 3px, 0);transition-property:transform, opacity;transition-duration:0.3s;transition-timing-function:cubic-bezier(0.2, 1, 0.8, 1)}.link:after{content:\"\";position:absolute;display:inline-block;top:calc(100% + 6px);left:50%;height:1px;width:50%;background-color:#121212;opacity:0;transform-origin:50% 0%;transform:translate3d(-50%, 3px, 0);transition-property:transform, opacity;transition-duration:0.3s;transition-timing-function:cubic-bezier(0.2, 1, 0.8, 1)}.link:hover:after{transition-delay:0.1s;opacity:1;transform:translate3d(-50%, 0, 0);transition-timing-function:cubic-bezier(0.2, 0, 0.3, 1)}.link:hover:before{opacity:1;transform:translate3d(0, 0, 0);transition-timing-function:cubic-bezier(0.2, 0, 0.3, 1)}";

const LinkCssSix = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
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
    return index.h("a", { href: "#", class: "link" }, "Portfolio");
  }
  get el() { return index.getElement(this); }
};
LinkCssSix.style = linkCssSixCss;

const linkCssThreeCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;color:#121212;pointer-events:all}.link:before{content:\"\";position:absolute;top:104%;left:0;height:3px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:after{content:\"\";position:absolute;top:calc(104% + 6px);left:0;height:1px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s;transition-delay:0.08s}.link:hover:before{transform-origin:0% 50%;transform:scale3d(1, 1, 1)}.link:hover:after{transform-origin:0% 50%;transform:scale3d(1, 1, 1)}";

const LinkCssThree = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;a href="#" class="link">TRACK PACKAGE&lt;/a></code>`;
    this.cssSource = `<code class="language-css">
  .link {
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    color: #121212;
    pointer-events: all;
  }
  
  .link:before {
    content: "";
    position: absolute;
    top: 104%;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link:after {
    content: "";
    position: absolute;
    top: calc(104% + 6px);
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
    transition-delay: 0.08s;
  }
  
  .link:hover:before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  
  .link:hover:after {
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
    return index.h("a", { href: "#", class: "link" }, "TRACK PACKAGE");
  }
  get el() { return index.getElement(this); }
};
LinkCssThree.style = linkCssThreeCss;

const linkCssTwoCss = ".link{display:inline-block;position:relative;text-decoration:none;font-family:inherit;font-weight:400;font-size:18px;color:#121212;pointer-events:all}.link:before{content:\"\";position:absolute;top:104%;left:0;height:1px;width:100%;background-color:#121212;pointer-events:none;transform-origin:100% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:after{content:\"\";position:absolute;top:calc(104% + 4px);left:0;height:1px;width:100%;background-color:#121212;pointer-events:none;transform-origin:0% 50%;transform:scale3d(0, 1, 1);transition:transform 0.3s}.link:hover::before{transform-origin:0% 50%;transform:scale3d(1, 1, 1)}.link:hover::after{transform-origin:100% 50%;transform:scale3d(1, 1, 1)}";

const LinkCssTwo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">&lt;a href="#" class="link">Shop the look&lt;/a></code>`;
    this.cssSource = `<code class="language-css">
  .link {
    position: relative;
    text-decoration: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 18px;
    color: #121212;
    pointer-events: all;
  }
  
  .link:before {
    content: "";
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
  
  .link:after {
    content: "";
    position: absolute;
    top: calc(104% + 4px);
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #121212;
    pointer-events: none;
    transform-origin: 0% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s;
  }
  
  .link:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
  
  .link:hover::after {
    transform-origin: 100% 50%;
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
    return index.h("a", { href: "#", class: "link" }, "Shop the look");
  }
  get el() { return index.getElement(this); }
};
LinkCssTwo.style = linkCssTwoCss;

const mafanfaLinkCss = ".mafanfa-link{position:relative;display:flex;padding:16px 64px;border:none;border-radius:48px;text-decoration:none;color:#121212;font-size:32px;overflow:hidden}.mafanfa-link.in{--anim-name:move}.mafanfa-link .mafanfa-letter{z-index:3;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0);-webkit-animation:var(--anim-name, none) 0.7s linear forwards 0.18s;animation:var(--anim-name, none) 0.7s linear forwards 0.18s}@-webkit-keyframes move{30%,36%{transform:translateY(calc(-6px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-13deg * var(--rot) * var(--rot-dir)))}50%{transform:translateY(calc(3px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(6deg * var(--rot) * var(--rot-dir)))}70%{transform:translateY(calc(-2px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-3deg * var(--rot) * var(--rot-dir)))}}@keyframes move{30%,36%{transform:translateY(calc(-6px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-13deg * var(--rot) * var(--rot-dir)))}50%{transform:translateY(calc(3px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(6deg * var(--rot) * var(--rot-dir)))}70%{transform:translateY(calc(-2px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-3deg * var(--rot) * var(--rot-dir)))}}";

const MafanfaLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;a href="#" class="mafanfa-link">Look&nbsp;Book&lt;/a>
  </code>`;
    this.cssSource = `<code class="language-css">
  .mafanfa-link {
    position: relative;
    display: flex;
    padding: 16px 64px;
    border: none;
    border-radius: 48px;
    text-decoration: none;
    color: #121212;
    font-size: 32px;
    overflow: hidden;
  }
  
  .mafanfa-link.in {
    --anim-name: move;
  }
  
  .mafanfa-link .letter {
    z-index: 3;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-animation: var(--anim-name, none) 0.7s linear forwards 0.18s;
    animation: var(--anim-name, none) 0.7s linear forwards 0.18s;
  }
  
  @-webkit-keyframes move {
    30%,
    36% {
      transform: translateY(calc(-6px * var(--trans-y))) translateZ(0)
        rotate(calc(-13deg * var(--rot) * var(--rot-dir)));
    }
  
    50% {
      transform: translateY(calc(3px * var(--trans-y))) translateZ(0)
        rotate(calc(6deg * var(--rot) * var(--rot-dir)));
    }
  
    70% {
      transform: translateY(calc(-2px * var(--trans-y))) translateZ(0)
        rotate(calc(-3deg * var(--rot) * var(--rot-dir)));
    }
  }
  
  @keyframes move {
    30%,
    36% {
      transform: translateY(calc(-6px * var(--trans-y))) translateZ(0)
        rotate(calc(-13deg * var(--rot) * var(--rot-dir)));
    }
  
    50% {
      transform: translateY(calc(3px * var(--trans-y))) translateZ(0)
        rotate(calc(6deg * var(--rot) * var(--rot-dir)));
    }
  
    70% {
      transform: translateY(calc(-2px * var(--trans-y))) translateZ(0)
        rotate(calc(-3deg * var(--rot) * var(--rot-dir)));
    }
  }
  </code>`;
    this.jsSource = `<code class="language-js">
function mafanfaButton(props) {
  const links = document.querySelectorAll(props.element);
  const even = num => num % 2 === 0;

  function splitText(link) {
      const text = link.textContent;
      link.textContent = '';

      const splittedText = text.split('');
      splittedText.forEach((letter) => {
          link.insertAdjacentHTML('beforeend',
              "<div class='letter'>" + letter + "</div>");
      });
  }

  function animateEvenLetters(link, charsLength) {
      let translate = 0;
      let rotate = 1;
      let num = 1 / (charsLength / 2);

      for (let i = 0; i < link.childElementCount; i++) {
          const char = link.children[i];
          const firsLetter = !i;
          const lastLetter = i + 1 === charsLength;
          const firstHalfLetters = i + 1 <= charsLength / 2 && !firsLetter; // Without First Letter
          const lastHalfLetters = i + 1 > charsLength / 2 && !lastLetter; // Without Last Letter

          if (firsLetter || lastLetter) {
              let direction;
              if (firsLetter) direction = 1;
              if (lastLetter) direction = -1;
              char.style = "--trans-y:0; --rot:1; --rot-dir:" + direction + "; position: relative;";
          }
          if (firstHalfLetters) {
              translate += num;
              rotate -= num;
              char.style = "--trans-y:" + translate + "; --rot:" + rotate + "; --rot-dir:1; position: relative;";
          }
          // Second half without last letter
          if (lastHalfLetters) {
              translate -= num;
              rotate += num;
              char.style = "--trans-y:" + (translate + num) + "; --rot:" + (rotate - num) + "; --rot-dir: -1; position: relative; ";
          }
      }
  }

  function animateOddLetters(link, charsLength) {
      let translate = 0;
      let rotate = 1;
      let num = 1 / (charsLength / 2);

      for (let i = 0; i < link.childElementCount; i++) {
          const char = link.children[i];
          const firsLetter = !i;
          const lastLetter = i + 1 === charsLength;
          const middleLetter = i + 1 === charsLength / 2 + 0.5;
          const firstHalfLetters = i + 1 <= charsLength / 2 && !firsLetter; // Without First Letter
          const lastHalfLetters = i + 1 > charsLength / 2 && !lastLetter; // Without Last Letter

          if (firsLetter || lastLetter) {
              let direction;
              if (firsLetter) direction = 1;
              if (lastLetter) direction = -1;
              char.style = "--trans-y:0; --rot:1; --rot-dir:" + direction + "; position: relative;";
          }
          if (middleLetter) {
              translate += num;
              rotate -= num;
              char.style = "--trans-y:" + (translate + num) + "; --rot:" + (rotate - num) + "; --rot-dir:1; position: relative;";
          }
          if (firstHalfLetters) {
              translate += num;
              rotate -= num;
              char.style = "--trans-y:" + translate + "; --rot:" + rotate + "; --rot-dir:1; position: relative;";
          }
          if (lastHalfLetters) {
              translate -= num;
              rotate += num;
              char.style = "--trans-y:" + (translate + num) + "; --rot:" + (rotate - num) + "; --rot-dir:-1";
          }
      }
  }

  links.forEach((link) => {
      splitText(link, 'letter');

      const charsLength = link.childElementCount;

      if (even(charsLength)) animateEvenLetters(link, charsLength);
      else animateOddLetters(link, charsLength);

      link.addEventListener('mouseenter', function () {
          link.classList.add('in');
      });
      link.addEventListener('mouseleave', function () {
          link.classList.remove('in');
      })
  })
}

mafanfaButton({
    element: ".mafanfa-link"
})
</code>`;
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
  splitText(props) {
    const text = props.element.textContent;
    props.element.textContent = '';
    const splittedText = text.split('');
    splittedText.forEach((letter) => {
      props.element.insertAdjacentHTML('beforeend', `
          <div class="${props.css}">${letter}</div>
        `);
    });
  }
  componentDidLoad() {
    const link = this.el;
    const even = num => num % 2 === 0;
    this.splitText({
      element: link,
      css: 'mafanfa-letter',
    });
    function animateEvenLetters(link, charsLength) {
      let translate = 0;
      let rotate = 1;
      let num = 1 / (charsLength / 2);
      for (let i = 0; i < link.children.length; i++) {
        const char = link.children[i];
        const firsLetter = !i;
        const lastLetter = i + 1 === charsLength;
        const firstHalfLetters = i + 1 <= charsLength / 2 && !firsLetter; // Without First Letter
        const lastHalfLetters = i + 1 > charsLength / 2 && !lastLetter; // Without Last Letter
        if (firsLetter || lastLetter) {
          let direction;
          if (firsLetter)
            direction = 1;
          if (lastLetter)
            direction = -1;
          char.style = `--trans-y:0; --rot:1; --rot-dir:${direction}; position: relative;`;
        }
        if (firstHalfLetters) {
          translate += num;
          rotate -= num;
          char.style = `--trans-y:${translate}; --rot:${rotate}; --rot-dir:1; position: relative;`;
        }
        // Second half without last letter
        if (lastHalfLetters) {
          translate -= num;
          rotate += num;
          char.style = `--trans-y:${translate + num}; --rot:${rotate - num}; --rot-dir:-1; position: relative;`;
        }
      }
    }
    function animateOddLetters(link, charsLength) {
      let translate = 0;
      let rotate = 1;
      let num = 1 / (charsLength / 2);
      for (let i = 0; i < link.children.length; i++) {
        const char = link.children[i];
        const firsLetter = !i;
        const lastLetter = i + 1 === charsLength;
        const middleLetter = i + 1 === charsLength / 2 + 0.5;
        const firstHalfLetters = i + 1 <= charsLength / 2 && !firsLetter; // Without First Letter
        const lastHalfLetters = i + 1 > charsLength / 2 && !lastLetter; // Without Last Letter
        if (firsLetter || lastLetter) {
          let direction;
          if (firsLetter)
            direction = 1;
          if (lastLetter)
            direction = -1;
          char.style = `--trans-y:0; --rot:1; --rot-dir:${direction}; position: relative;`;
        }
        if (middleLetter) {
          translate += num;
          rotate -= num;
          char.style = `--trans-y:${translate + num}; --rot:${rotate - num}; --rot-dir:1; position: relative;`;
        }
        if (firstHalfLetters) {
          translate += num;
          rotate -= num;
          char.style = `--trans-y:${translate}; --rot:${rotate}; --rot-dir:1; position: relative;`;
        }
        if (lastHalfLetters) {
          translate -= num;
          rotate += num;
          char.style = `--trans-y:${translate + num}; --rot:${rotate - num}; --rot-dir:-1`;
        }
      }
    }
    const charsLength = link.childElementCount;
    if (even(charsLength))
      animateEvenLetters(link, charsLength);
    else
      animateOddLetters(link, charsLength);
    link.addEventListener('mouseenter', function () {
      link.classList.add('in');
    });
    link.addEventListener('mouseleave', function () {
      link.classList.remove('in');
    });
  }
  render() {
    return (index.h("a", { class: "mafanfa-link", href: "#", ref: el => (this.el = el) }, "Look\u00A0Book"));
  }
};
MafanfaLink.style = mafanfaLinkCss;

exports.link_css_eight = LinkCssEight;
exports.link_css_five = LinkCssFive;
exports.link_css_four = LinkCssFour;
exports.link_css_nine = LinkCssNine;
exports.link_css_one = LinkCssOne;
exports.link_css_seven = LinkCssSeven;
exports.link_css_six = LinkCssSix;
exports.link_css_three = LinkCssThree;
exports.link_css_two = LinkCssTwo;
exports.mafanfa_link = MafanfaLink;
