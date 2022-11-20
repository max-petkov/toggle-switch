'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3c8d65af.js');

const magnetButtonCss = ":root{--ease-magnet:0.3s}.magnet-wrapper{display:inline-block}.btn-magnet{display:inline-block;padding:10px 24px;border:1px solid #121212;border-radius:50px;width:max-content;font-family:inherit;font-size:16px;transition:transform var(--ease-magnet) cubic-bezier(0.165, 0.84, 0.44, 1);background-color:transparent;cursor:pointer}";

const MagnetButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.highlightCode = index.createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;div class="magnet-wrapper">
    &lt;button class="btn-magnet">Get in touch&lt;/button>
  &lt;/div>
  </code>`;
    this.cssSource = `<code class="language-css">
  :root {
    --ease-magnet: 0.3s;
  }
  
  .magnet-wrapper {
    display: inline-block;
  }
  
  .btn-magnet {
    display: inline-block;
    padding: 10px 24px;
    border: 1px solid #121212;
    border-radius: 50px;
    width: max-content;
    font-family: inherit;
    font-size: 16px;
    transition: transform var(--ease-magnet) cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: transparent;
    cursor: pointer;
  }
  </code>`;
    this.jsSource = `<code class="language-js">
  function magnetEffect(props) {
    const areas = document.querySelectorAll(props.area);
    const movement = !props.movement ? 0.6 : props.movement;
    document.documentElement.style.setProperty("--ease-magnet", props.ease + "s");
  
    function animate(e, area, el) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const areaRect = area.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const halfDiff = Math.abs(areaRect.width - areaRect.height) / 2;
      const relX = e.pageX - areaRect.left - halfDiff;
      const relY = e.pageY - areaRect.top;
      const x = (relX - areaRect.width / 2 + elRect.width / 3) * movement;
      const y = (relY - areaRect.height / 2 - scrollTop) * movement;
  
      el.style.transform = "translate(" + x + "px, " + y + "px)";
    }
  
    areas.forEach((area) => {
      const el = area.querySelector(props.element);
  
      if (props.areaSize > 0) area.style.padding = props.areaSize + "px";
  
      area.addEventListener("mousemove", function (e) {
        animate(e, area, el);
      });
  
      area.addEventListener("mouseleave", function (e) {
        el.style.transform = "translate(0px, 0px)";
      });
    });
  }
  
  magnetEffect({
    element: ".btn-magnet",
    area: ".magnet-wrapper",
    areaSize: 24,
    movement: 0.6,
    ease: 0.4,
  });
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
  animate() {
    const area = this.el.shadowRoot.querySelector('.magnet-wrapper');
    const el = area.querySelector('.btn-magnet');
    const movement = 0.6;
    const ease = 0.4;
    const areaSize = 24;
    document.documentElement.style.setProperty('--ease-magnet', ease + 's');
    function animate(e, area, el) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const areaRect = area.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const halfDiff = Math.abs(areaRect.width - areaRect.height) / 2;
      const relX = e.pageX - areaRect.left - halfDiff;
      const relY = e.pageY - areaRect.top;
      const x = (relX - areaRect.width / 2 + elRect.width / 3) * movement;
      const y = (relY - areaRect.height / 2 - scrollTop) * movement;
      el.style.transform = `translate(${x}px, ${y}px)`;
    }
    area.style.padding = areaSize + 'px';
    area.addEventListener('mousemove', function (e) {
      el.style.willChange = "transform";
      animate(e, area, el);
    });
    area.addEventListener('mouseleave', function () {
      el.style.willChange = "auto";
      el.style.transform = `translate(0px, 0px)`;
    });
  }
  componentDidLoad() {
    this.animate();
  }
  render() {
    return (index.h("div", { class: "magnet-wrapper" }, index.h("button", { class: "btn-magnet" }, "Get in touch")));
  }
  get el() { return index.getElement(this); }
};
MagnetButton.style = magnetButtonCss;

exports.magnet_button = MagnetButton;
