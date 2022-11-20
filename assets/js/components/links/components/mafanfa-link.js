import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const mafanfaLinkCss = ".mafanfa-link{position:relative;display:flex;padding:16px 64px;border:none;border-radius:48px;text-decoration:none;color:#121212;font-size:32px;overflow:hidden}.mafanfa-link.in{--anim-name:move}.mafanfa-link .mafanfa-letter{z-index:3;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0);-webkit-animation:var(--anim-name, none) 0.7s linear forwards 0.18s;animation:var(--anim-name, none) 0.7s linear forwards 0.18s}@-webkit-keyframes move{30%,36%{transform:translateY(calc(-6px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-13deg * var(--rot) * var(--rot-dir)))}50%{transform:translateY(calc(3px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(6deg * var(--rot) * var(--rot-dir)))}70%{transform:translateY(calc(-2px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-3deg * var(--rot) * var(--rot-dir)))}}@keyframes move{30%,36%{transform:translateY(calc(-6px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-13deg * var(--rot) * var(--rot-dir)))}50%{transform:translateY(calc(3px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(6deg * var(--rot) * var(--rot-dir)))}70%{transform:translateY(calc(-2px * var(--trans-y))) translateZ(0)\r\n      rotate(calc(-3deg * var(--rot) * var(--rot-dir)))}}";

const MafanfaLink$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.highlightCode = createEvent(this, "highlightCode", 7);
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
    return (h("a", { class: "mafanfa-link", href: "#", ref: el => (this.el = el) }, "Look\u00A0Book"));
  }
  static get style() { return mafanfaLinkCss; }
}, [1, "mafanfa-link", {
    "htmlSource": [1, "html-source"],
    "cssSource": [1, "css-source"],
    "jsSource": [1, "js-source"]
  }, [[16, "getSource", "getSourceHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mafanfa-link"];
  components.forEach(tagName => { switch (tagName) {
    case "mafanfa-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MafanfaLink$1);
      }
      break;
  } });
}

const MafanfaLink = MafanfaLink$1;
const defineCustomElement = defineCustomElement$1;

export { MafanfaLink, defineCustomElement };
