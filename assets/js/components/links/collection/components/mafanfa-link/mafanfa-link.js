import { Component, h, Listen, Event, Prop } from '@stencil/core';
export class MafanfaLink {
  constructor() {
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
  static get is() { return "mafanfa-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./mafanfa-link.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mafanfa-link.css"]
  }; }
  static get properties() { return {
    "htmlSource": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "html-source",
      "reflect": false,
      "defaultValue": "`<code class=\"language-markup\">\r\n  &lt;a href=\"#\" class=\"mafanfa-link\">Look&nbsp;Book&lt;/a>\r\n  </code>`"
    },
    "cssSource": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "css-source",
      "reflect": false,
      "defaultValue": "`<code class=\"language-css\">\r\n  .mafanfa-link {\r\n    position: relative;\r\n    display: flex;\r\n    padding: 16px 64px;\r\n    border: none;\r\n    border-radius: 48px;\r\n    text-decoration: none;\r\n    color: #121212;\r\n    font-size: 32px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .mafanfa-link.in {\r\n    --anim-name: move;\r\n  }\r\n  \r\n  .mafanfa-link .letter {\r\n    z-index: 3;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transform: translateZ(0);\r\n    -webkit-animation: var(--anim-name, none) 0.7s linear forwards 0.18s;\r\n    animation: var(--anim-name, none) 0.7s linear forwards 0.18s;\r\n  }\r\n  \r\n  @-webkit-keyframes move {\r\n    30%,\r\n    36% {\r\n      transform: translateY(calc(-6px * var(--trans-y))) translateZ(0)\r\n        rotate(calc(-13deg * var(--rot) * var(--rot-dir)));\r\n    }\r\n  \r\n    50% {\r\n      transform: translateY(calc(3px * var(--trans-y))) translateZ(0)\r\n        rotate(calc(6deg * var(--rot) * var(--rot-dir)));\r\n    }\r\n  \r\n    70% {\r\n      transform: translateY(calc(-2px * var(--trans-y))) translateZ(0)\r\n        rotate(calc(-3deg * var(--rot) * var(--rot-dir)));\r\n    }\r\n  }\r\n  \r\n  @keyframes move {\r\n    30%,\r\n    36% {\r\n      transform: translateY(calc(-6px * var(--trans-y))) translateZ(0)\r\n        rotate(calc(-13deg * var(--rot) * var(--rot-dir)));\r\n    }\r\n  \r\n    50% {\r\n      transform: translateY(calc(3px * var(--trans-y))) translateZ(0)\r\n        rotate(calc(6deg * var(--rot) * var(--rot-dir)));\r\n    }\r\n  \r\n    70% {\r\n      transform: translateY(calc(-2px * var(--trans-y))) translateZ(0)\r\n        rotate(calc(-3deg * var(--rot) * var(--rot-dir)));\r\n    }\r\n  }\r\n  </code>`"
    },
    "jsSource": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "js-source",
      "reflect": false,
      "defaultValue": "`<code class=\"language-js\">\r\nfunction mafanfaButton(props) {\r\n  const links = document.querySelectorAll(props.element);\r\n  const even = num => num % 2 === 0;\r\n\r\n  function splitText(link) {\r\n      const text = link.textContent;\r\n      link.textContent = '';\r\n\r\n      const splittedText = text.split('');\r\n      splittedText.forEach((letter) => {\r\n          link.insertAdjacentHTML('beforeend',\r\n              \"<div class='letter'>\" + letter + \"</div>\");\r\n      });\r\n  }\r\n\r\n  function animateEvenLetters(link, charsLength) {\r\n      let translate = 0;\r\n      let rotate = 1;\r\n      let num = 1 / (charsLength / 2);\r\n\r\n      for (let i = 0; i < link.childElementCount; i++) {\r\n          const char = link.children[i];\r\n          const firsLetter = !i;\r\n          const lastLetter = i + 1 === charsLength;\r\n          const firstHalfLetters = i + 1 <= charsLength / 2 && !firsLetter; // Without First Letter\r\n          const lastHalfLetters = i + 1 > charsLength / 2 && !lastLetter; // Without Last Letter\r\n\r\n          if (firsLetter || lastLetter) {\r\n              let direction;\r\n              if (firsLetter) direction = 1;\r\n              if (lastLetter) direction = -1;\r\n              char.style = \"--trans-y:0; --rot:1; --rot-dir:\" + direction + \"; position: relative;\";\r\n          }\r\n          if (firstHalfLetters) {\r\n              translate += num;\r\n              rotate -= num;\r\n              char.style = \"--trans-y:\" + translate + \"; --rot:\" + rotate + \"; --rot-dir:1; position: relative;\";\r\n          }\r\n          // Second half without last letter\r\n          if (lastHalfLetters) {\r\n              translate -= num;\r\n              rotate += num;\r\n              char.style = \"--trans-y:\" + (translate + num) + \"; --rot:\" + (rotate - num) + \"; --rot-dir: -1; position: relative; \";\r\n          }\r\n      }\r\n  }\r\n\r\n  function animateOddLetters(link, charsLength) {\r\n      let translate = 0;\r\n      let rotate = 1;\r\n      let num = 1 / (charsLength / 2);\r\n\r\n      for (let i = 0; i < link.childElementCount; i++) {\r\n          const char = link.children[i];\r\n          const firsLetter = !i;\r\n          const lastLetter = i + 1 === charsLength;\r\n          const middleLetter = i + 1 === charsLength / 2 + 0.5;\r\n          const firstHalfLetters = i + 1 <= charsLength / 2 && !firsLetter; // Without First Letter\r\n          const lastHalfLetters = i + 1 > charsLength / 2 && !lastLetter; // Without Last Letter\r\n\r\n          if (firsLetter || lastLetter) {\r\n              let direction;\r\n              if (firsLetter) direction = 1;\r\n              if (lastLetter) direction = -1;\r\n              char.style = \"--trans-y:0; --rot:1; --rot-dir:\" + direction + \"; position: relative;\";\r\n          }\r\n          if (middleLetter) {\r\n              translate += num;\r\n              rotate -= num;\r\n              char.style = \"--trans-y:\" + (translate + num) + \"; --rot:\" + (rotate - num) + \"; --rot-dir:1; position: relative;\";\r\n          }\r\n          if (firstHalfLetters) {\r\n              translate += num;\r\n              rotate -= num;\r\n              char.style = \"--trans-y:\" + translate + \"; --rot:\" + rotate + \"; --rot-dir:1; position: relative;\";\r\n          }\r\n          if (lastHalfLetters) {\r\n              translate -= num;\r\n              rotate += num;\r\n              char.style = \"--trans-y:\" + (translate + num) + \"; --rot:\" + (rotate - num) + \"; --rot-dir:-1\";\r\n          }\r\n      }\r\n  }\r\n\r\n  links.forEach((link) => {\r\n      splitText(link, 'letter');\r\n\r\n      const charsLength = link.childElementCount;\r\n\r\n      if (even(charsLength)) animateEvenLetters(link, charsLength);\r\n      else animateOddLetters(link, charsLength);\r\n\r\n      link.addEventListener('mouseenter', function () {\r\n          link.classList.add('in');\r\n      });\r\n      link.addEventListener('mouseleave', function () {\r\n          link.classList.remove('in');\r\n      })\r\n  })\r\n}\r\n\r\nmafanfaButton({\r\n    element: \".mafanfa-link\"\r\n})\r\n</code>`"
    }
  }; }
  static get events() { return [{
      "method": "highlightCode",
      "name": "highlightCode",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "getSource",
      "method": "getSourceHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
