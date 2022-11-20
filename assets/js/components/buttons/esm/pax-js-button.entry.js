import { r as registerInstance, c as createEvent, h, g as getElement } from './index-8311e275.js';
import { g as gsapWithCSS } from './index-1c8064fb.js';

const paxJsButtonCss = ".btn-pax-js{align-items:center;background-color:#000;border-radius:50%;color:#fff;display:flex;font-weight:500;height:112px;justify-content:center;position:relative;text-decoration:none;transition:0.3s ease;width:112px}.btn-pax-js svg{overflow:visible;position:absolute}.btn-pax-js svg path{transform-origin:center}.btn-pax-js svg{overflow:visible;position:absolute}";

const PaxJsButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.highlightCode = createEvent(this, "highlightCode", 7);
    this.htmlSource = `<code class="language-markup">
  &lt;button class="btn-pax-js">
    Join
    &lt;svg width="145.25" height="145.25" version="1.1" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
      &lt;path d="m259.37 142.88-24.262-2.298c0.053-0.538 0.102-1.076 0.147-1.616l24.294 1.944c-0.055 0.658-0.114 1.315-0.179 1.97z" />
      &lt;path d="m257.66 154.66-23.953-4.431c0.102-0.53 0.2-1.062 0.294-1.596l24.018 4.077c-0.115 0.651-0.234 1.302-0.359 1.95z" />
      &lt;path d="m254.88 166.24-23.445-6.543c0.15-0.519 0.297-1.04 0.44-1.563l23.544 6.193c-0.175 0.64-0.354 1.277-0.539 1.913z" />
      &lt;path d="m251.04 177.52-22.742-8.609c0.198-0.504 0.392-1.009 0.583-1.517l22.873 8.268c-0.234 0.622-0.472 1.241-0.714 1.858z" />
      &lt;path d="m246.17 188.42-21.849-10.606c0.244-0.484 0.485-0.97 0.721-1.459l22.011 10.278c-0.29 0.598-0.584 1.194-0.883 1.787z" />
      &lt;path d="m240.3 198.83-20.774-12.515c0.287-0.46 0.572-0.923 0.853-1.388l20.966 12.203c-0.344 0.57-0.693 1.136-1.045 1.7z" />
      &lt;path d="m233.5 208.68-19.525-14.32c0.329-0.432 0.655-0.867 0.977-1.305l19.746 14.027c-0.395 0.536-0.795 1.069-1.198 1.598z" />
      &lt;path d="m225.81 217.87-18.112-16.011c0.368-0.401 0.733-0.804 1.094-1.211l18.359 15.738c-0.444 0.498-0.891 0.993-1.341 1.484z" />
      &lt;path d="m217.29 226.34-16.539-17.574c0.403-0.365 0.804-0.734 1.201-1.105l16.812 17.322c-0.488 0.456-0.979 0.909-1.474 1.357z" />
      &lt;path d="m208.01 234-14.816-18.997c0.435-0.327 0.868-0.658 1.298-0.991l15.113 18.77c-0.528 0.41-1.06 0.816-1.595 1.218z" />
      &lt;path d="m198.05 240.79-12.952-20.267c0.464-0.286 0.925-0.575 1.384-0.867l13.272 20.066c-0.565 0.36-1.133 0.716-1.704 1.068z" />
      &lt;path d="m187.49 246.63-10.957-21.371c0.488-0.241 0.974-0.485 1.458-0.734l11.298 21.199c-0.597 0.306-1.197 0.608-1.799 0.906z" />
      &lt;path d="m176.42 251.47-8.849-22.291c0.508-0.195 1.014-0.393 1.519-0.595l9.207 22.151c-0.623 0.25-1.249 0.495-1.877 0.735z" />
      &lt;path d="m164.93 255.25-6.649-23.017c0.524-0.146 1.047-0.295 1.568-0.449l7.02 22.91c-0.644 0.19-1.29 0.375-1.939 0.556z" />
      &lt;path d="m153.12 257.95-4.386-23.533c0.536-0.096 1.071-0.196 1.603-0.3l4.766 23.462c-0.659 0.128-1.32 0.252-1.983 0.371z" />
      &lt;path d="m141.11 259.53-2.094-23.835c0.543-0.046 1.085-0.096 1.625-0.15l2.475 23.8c-0.667 0.066-1.336 0.128-2.006 0.185z" />
      &lt;path d="m128.98 260 0.191-23.923c0.274 2e-3 0.55 3e-3 0.825 3e-3s0.551-1e-3 0.825-3e-3l0.19 23.923c-0.338 3e-3 -0.676 4e-3 -1.015 4e-3s-0.677-1e-3 -1.016-4e-3z" />
      &lt;path d="m116.88 259.35 2.475-23.8c0.54 0.054 1.082 0.104 1.625 0.15l-2.094 23.835c-0.67-0.057-1.339-0.119-2.006-0.185z" />
      &lt;path d="m104.89 257.58 4.766-23.462c0.532 0.104 1.067 0.204 1.603 0.3l-4.386 23.533c-0.663-0.119-1.324-0.243-1.983-0.371z" />
      &lt;path d="m93.131 254.7 7.0205-22.91c0.521 0.154 1.044 0.303 1.568 0.449l-6.649 23.017c-0.6485-0.181-1.2951-0.366-1.9395-0.556z" />
      &lt;path d="m81.702 250.73 9.2073-22.151c0.5046 0.202 1.011 0.4 1.5193 0.595l-8.8489 22.291c-0.6283-0.24-1.2542-0.485-1.8777-0.735z" />
      &lt;path d="m70.708 245.72 11.298-21.199c0.4839 0.249 0.9699 0.493 1.4579 0.734l-10.957 21.371c-0.6023-0.298-1.2019-0.6-1.7989-0.906z" />
      &lt;path d="m60.242 239.72 13.272-20.066c0.459 0.292 0.9204 0.581 1.384 0.867l-12.952 20.267c-0.571-0.352-1.1391-0.708-1.7043-1.068z" />
      &lt;path d="m50.393 232.78 15.113-18.77c0.4301 0.333 0.8629 0.664 1.2982 0.991l-14.816 18.997c-0.5351-0.402-1.0669-0.808-1.5955-1.218z" />
      &lt;path d="m41.239 224.98 16.812-17.322c0.3976 0.371 0.798 0.74 1.2012 1.105l-16.539 17.574c-0.4947-0.448-0.986-0.901-1.4738-1.357z" />
      &lt;path d="m32.855 216.39 18.358-15.738c0.3616 0.407 0.7263 0.81 1.094 1.211l-18.111 16.011c-0.4507-0.491-0.8977-0.986-1.3409-1.484z" />
      &lt;path d="m25.305 207.08 19.746-14.027c0.3227 0.438 0.6486 0.873 0.9777 1.305l-19.526 14.32c-0.4032-0.529-0.8024-1.062-1.1976-1.598z" />
      &lt;path d="m18.653 197.13 20.966-12.203c0.281 0.465 0.5654 0.928 0.8532 1.388l-20.774 12.515c-0.3525-0.564-0.7008-1.13-1.0448-1.7z" />
      &lt;path d="m12.951 186.63 22.011-10.278c0.2369 0.489 0.4773 0.975 0.7213 1.459l-21.849 10.606c-0.2988-0.593-0.5932-1.189-0.8832-1.787z" />
      &lt;path d="m8.2477 175.67 22.873-8.268c0.1906 0.508 0.3848 1.013 0.5829 1.517l-22.742 8.609c-0.24246-0.617-0.48034-1.236-0.71359-1.858z" />
      &lt;path d="m4.5807 164.33 23.544-6.193c0.1427 0.523 0.2893 1.044 0.4398 1.563l-23.446 6.543c-0.18413-0.636-0.36354-1.273-0.53819-1.913z" />
      &lt;path d="m1.977 152.71 24.019-4.077c0.0939 0.534 0.1919 1.066 0.2937 1.596l-23.953 4.431c-0.12451-0.648-0.24421-1.299-0.35904-1.95z" />
      &lt;path d="m0.45129 140.91 24.294-1.944c0.0449 0.54 0.0937 1.078 0.1466 1.616l-24.262 2.298c-0.0644-0.656-0.124-1.312-0.17867-1.97z" />
      &lt;path d="m4e-3 129c-2e-3 0.332-4e-3 0.664-4e-3 0.997s1e-3 0.665 4e-3 0.997l24.374-0.177c-2e-3 -0.273-3e-3 -0.546-3e-3 -0.82s1e-3 -0.547 3e-3 -0.82z" />
      &lt;path d="m0.62996 117.12 24.262 2.298c-0.0529 0.538-0.1017 1.076-0.1466 1.616l-24.294-1.944c0.0547-0.658 0.11424-1.314 0.17867-1.97z" />
      &lt;path d="m2.3361 105.34 23.953 4.431c-0.1018 0.53-0.1998 1.062-0.2937 1.596l-24.019-4.077c0.11484-0.651 0.23453-1.302 0.35904-1.95z" />
      &lt;path d="m5.1189 93.759 23.446 6.543c-0.1505 0.519-0.2971 1.04-0.4398 1.563l-23.544-6.1932c0.17464-0.6396 0.35405-1.2772 0.53818-1.9128z" />
      &lt;path d="m8.9613 82.475 22.742 8.6086c-0.198 0.504-0.3923 1.0098-0.5829 1.5176l-22.873-8.2683c0.23325-0.6216 0.47113-1.2409 0.71359-1.8579z" />
      &lt;path d="m13.834 71.581 21.849 10.605c-0.244 0.4844-0.4844 0.9708-0.7212 1.4593l-22.011-10.278c0.29-0.5982 0.5844-1.1938 0.8832-1.7869z" />
      &lt;path d="m19.697 61.168 20.774 12.514c-0.2878 0.4603-0.5722 0.923-0.8532 1.388l-20.966-12.203c0.344-0.5694 0.6923-1.1359 1.0448-1.6996z" />
      &lt;path d="m26.503 51.323 19.526 14.32c-0.3291 0.4323-0.655 0.8672-0.9777 1.3047l-19.745-14.027c0.3951-0.5359 0.7943-1.0686 1.1975-1.5981z" />
      &lt;path d="m34.196 42.127 18.111 16.011c-0.3677 0.4006-0.7324 0.8042-1.094 1.2106l-18.358-15.738c0.4432-0.498 0.8902-0.9926 1.3409-1.4837z" />
      &lt;path d="m42.713 33.661 16.539 17.574c-0.4032 0.3655-0.8036 0.7342-1.2012 1.1059l-16.812-17.323c0.4878-0.456 0.9791-0.9084 1.4739-1.3569z" />
      &lt;path d="m51.988 25.999 14.816 18.997c-0.4353 0.327-0.868 0.6574-1.2982 0.9911l-15.113-18.77c0.5286-0.41 1.0605-0.816 1.5955-1.218z" />
      &lt;path d="m61.946 19.214 12.952 20.267c-0.4636 0.2854-0.925 0.5743-1.384 0.8668l-13.272-20.066c0.5651-0.36 1.1332-0.7158 1.7042-1.0674z" />
      &lt;path d="m72.506 13.372 10.957 21.37c-0.488 0.2411-0.974 0.4858-1.4579 0.7343l-11.298-21.199c0.597-0.3065 1.1966-0.6085 1.7989-0.9059z" />
      &lt;path d="m83.58 8.5329 8.8489 22.291c-0.5083 0.1943-1.0147 0.3926-1.5193 0.5946l-9.2073-22.151c0.6235-0.24967 1.2495-0.49465 1.8777-0.7349z" />
      &lt;path d="m95.07 4.7463 6.649 23.016c-0.524 0.1459-1.047 0.2957-1.568 0.4495l-7.0205-22.91c0.6445-0.19025 1.291-0.37563 1.9395-0.55611z" />
      &lt;path d="m106.88 2.0506 4.386 23.533c-0.536 0.0962-1.071 0.1964-1.603 0.3007l-4.766-23.462c0.659-0.12896 1.32-0.25295 1.983-0.37191z" />
      &lt;path d="m118.89 0.46811 2.094 23.835c-0.543 0.0459-1.085 0.096-1.625 0.1501l-2.475-23.8c0.667-0.066845 1.336-0.12864 2.006-0.18536z" />
      &lt;path d="m131.02 0.0038802-0.191 23.923c-0.274-0.0021-0.55-0.0032-0.825-0.0032s-0.551 0.0011-0.825 0.0032l-0.19-23.923c0.338-0.00259 0.676-0.00388 1.015-0.00388s0.677 0.0013 1.016 0.0038802z" />
      &lt;path d="m143.12 0.65347-2.475 23.8c-0.54-0.0541-1.082-0.1042-1.625-0.1501l2.094-23.835c0.67 0.056716 1.339 0.11852 2.006 0.18536z" />
      &lt;path d="m155.11 2.4225-4.766 23.462c-0.532-0.1043-1.067-0.2045-1.603-0.3007l4.386-23.533c0.663 0.11897 1.324 0.24295 1.983 0.37192z" />
      &lt;path d="m166.87 5.3024-7.02 22.91c-0.521-0.1538-1.044-0.3036-1.568-0.4495l6.649-23.016c0.649 0.18048 1.295 0.36586 1.939 0.5561z" />
      &lt;path d="m178.3 9.2678-9.207 22.151c-0.505-0.202-1.011-0.4002-1.519-0.5946l8.849-22.291c0.628 0.24024 1.254 0.48523 1.877 0.7349z" />
      &lt;path d="m189.29 14.278-11.298 21.199c-0.484-0.2485-0.97-0.4932-1.458-0.7343l10.957-21.37c0.602 0.2975 1.202 0.5994 1.799 0.9059z" />
      &lt;path d="m199.76 20.282-13.272 20.066c-0.459-0.2925-0.92-0.5814-1.384-0.8668l12.952-20.267c0.571 0.3516 1.139 0.7074 1.704 1.0674z" />
      &lt;path d="m209.61 27.217-15.113 18.77c-0.43-0.3337-0.863-0.6641-1.298-0.9911l14.816-18.997c0.535 0.402 1.067 0.808 1.595 1.218z" />
      &lt;path d="m218.76 35.018c-0.488-0.456-0.979-0.9083-1.474-1.3569l-16.539 17.574c0.403 0.3655 0.804 0.7342 1.201 1.1059z" />
      &lt;path d="m227.15 43.611-18.359 15.738c-0.361-0.4064-0.726-0.81-1.094-1.2106l18.112-16.011c0.45 0.4911 0.897 0.9857 1.341 1.4837z" />
      &lt;path d="m234.7 52.921-19.746 14.027c-0.322-0.4376-0.648-0.8725-0.977-1.3048l19.525-14.32c0.403 0.5295 0.803 1.0622 1.198 1.5981z" />
      &lt;path d="m241.35 62.868-20.966 12.203c-0.281-0.465-0.565-0.9276-0.853-1.3879l20.774-12.514c0.352 0.5637 0.701 1.1302 1.045 1.6996z" />
      &lt;path d="m247.05 73.368-22.011 10.278c-0.236-0.4886-0.477-0.975-0.721-1.4594l21.849-10.605c0.299 0.5931 0.593 1.1887 0.883 1.7869z" />
      &lt;path d="m251.75 84.333-22.873 8.2683c-0.191-0.5077-0.385-1.0136-0.583-1.5176l22.742-8.6086c0.242 0.617 0.48 1.2363 0.714 1.8579z" />
      &lt;path d="m255.42 95.672-23.544 6.1932c-0.143-0.523-0.29-1.044-0.44-1.563l23.445-6.543c0.185 0.6356 0.364 1.2732 0.539 1.9128z" />
      &lt;path d="m258.02 107.29-24.018 4.077c-0.094-0.534-0.192-1.066-0.294-1.596l23.953-4.431c0.125 0.648 0.244 1.299 0.359 1.95z" />
      &lt;path d="m259.55 119.09-24.294 1.944c-0.045-0.54-0.094-1.078-0.147-1.616l24.262-2.298c0.065 0.656 0.124 1.312 0.179 1.97z" />
      &lt;path d="m260 131-24.374-0.177c2e-3 -0.273 3e-3 -0.546 3e-3 -0.82 0-0.171 0-0.342-1e-3 -0.513-1e-3 -0.102-1e-3 -0.205-2e-3 -0.307l24.374-0.177c3e-3 0.332 4e-3 0.664 4e-3 0.997s-1e-3 0.665-4e-3 0.997z" />
    &lt;/svg>
  &lt;/button>

  &lt;!-- GSAP CDN -->
  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js">&lt;/script>
</code>`;
    this.cssSource = `<code class="language-css">
  .btn-pax-js {
    align-items: center;
    background-color: #000;
    border-radius: 50%;
    color: #fff;
    display: flex;
    font-weight: 500;
    height: 112px;
    justify-content: center;
    position: relative;
    text-decoration: none;
    transition: 0.3s ease;
    width: 112px;
  }
  .btn-pax-js svg {
    overflow: visible;
    position: absolute;
  }
  .btn-pax-js svg path {
    transform-origin: center;
  }
  .btn-pax-js svg {
    overflow: visible;
    position: absolute;
  }
  
  </code>`;
    this.jsSource = `<code class="language-js">
  function animatePaxButton(props) {
    const btn = document.querySelector(props.element);
    const svg = btn.querySelector("svg");
    const paths = btn.querySelectorAll("path");

    gsap.to(svg, {
      rotate: 360,
      transformOrigin: 'center',
      repeat: -1,
      ease: 'linear',
      duration: 30,
    });

    btn.addEventListener("mouseenter", function() {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: 'Bounce.easeOut',
        },
      });

      tl.to(svg, {
        scale: 1.3,
        duration: 1,
      }).to(
        paths,
        {
          scale: 1.5,
          stagger: 0.01,
          duration: 0.02,
          transformOrigin: 'center',
        },
        '-=1',
      );
    })

    btn.addEventListener("mouseleave", function() {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: 'Bounce.easeOut',
        },
      });

      tl.to(svg, {
        scale: 1,
        duration: 1,
      }).to(
        paths,
        {
          scale: 1,
          stagger: 0.01,
          duration: 0.02,
          transformOrigin: 'center',
        },
        '-=1',
      );
    })
  }

  animatePaxButton({
    element: ".btn-pax-js",
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
    const svg = this.el.shadowRoot.querySelector('svg');
    gsapWithCSS.to(svg, {
      rotate: 360,
      transformOrigin: 'center',
      repeat: -1,
      ease: 'linear',
      duration: 30,
    });
  }
  enterAnimation() {
    const svg = this.el.shadowRoot.querySelector('svg');
    const paths = this.el.shadowRoot.querySelectorAll('path');
    const tl = gsapWithCSS.timeline({
      defaults: {
        duration: 1.5,
        ease: 'Bounce.easeOut',
      },
    });
    tl.to(svg, {
      scale: 1.3,
      duration: 1,
    }).to(paths, {
      scale: 1.5,
      stagger: 0.01,
      duration: 0.02,
      transformOrigin: 'center',
    }, '-=1');
  }
  leaveAnimation() {
    const svg = this.el.shadowRoot.querySelector('svg');
    const paths = this.el.shadowRoot.querySelectorAll('path');
    const tl = gsapWithCSS.timeline({
      defaults: {
        duration: 1.5,
        ease: 'Bounce.easeOut',
      },
    });
    tl.to(svg, {
      scale: 1,
      duration: 1,
    }).to(paths, {
      scale: 1,
      stagger: 0.01,
      duration: 0.02,
      transformOrigin: 'center',
    }, '-=1');
  }
  componentDidLoad() {
    this.animate();
  }
  render() {
    return (h("button", { class: "btn-pax-js", onMouseEnter: this.enterAnimation.bind(this), onMouseLeave: this.leaveAnimation.bind(this) }, "Join", h("svg", { width: "145.25", height: "145.25", version: "1.1", viewBox: "0 0 260 260", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m259.37 142.88-24.262-2.298c0.053-0.538 0.102-1.076 0.147-1.616l24.294 1.944c-0.055 0.658-0.114 1.315-0.179 1.97z" }), h("path", { d: "m257.66 154.66-23.953-4.431c0.102-0.53 0.2-1.062 0.294-1.596l24.018 4.077c-0.115 0.651-0.234 1.302-0.359 1.95z" }), h("path", { d: "m254.88 166.24-23.445-6.543c0.15-0.519 0.297-1.04 0.44-1.563l23.544 6.193c-0.175 0.64-0.354 1.277-0.539 1.913z" }), h("path", { d: "m251.04 177.52-22.742-8.609c0.198-0.504 0.392-1.009 0.583-1.517l22.873 8.268c-0.234 0.622-0.472 1.241-0.714 1.858z" }), h("path", { d: "m246.17 188.42-21.849-10.606c0.244-0.484 0.485-0.97 0.721-1.459l22.011 10.278c-0.29 0.598-0.584 1.194-0.883 1.787z" }), h("path", { d: "m240.3 198.83-20.774-12.515c0.287-0.46 0.572-0.923 0.853-1.388l20.966 12.203c-0.344 0.57-0.693 1.136-1.045 1.7z" }), h("path", { d: "m233.5 208.68-19.525-14.32c0.329-0.432 0.655-0.867 0.977-1.305l19.746 14.027c-0.395 0.536-0.795 1.069-1.198 1.598z" }), h("path", { d: "m225.81 217.87-18.112-16.011c0.368-0.401 0.733-0.804 1.094-1.211l18.359 15.738c-0.444 0.498-0.891 0.993-1.341 1.484z" }), h("path", { d: "m217.29 226.34-16.539-17.574c0.403-0.365 0.804-0.734 1.201-1.105l16.812 17.322c-0.488 0.456-0.979 0.909-1.474 1.357z" }), h("path", { d: "m208.01 234-14.816-18.997c0.435-0.327 0.868-0.658 1.298-0.991l15.113 18.77c-0.528 0.41-1.06 0.816-1.595 1.218z" }), h("path", { d: "m198.05 240.79-12.952-20.267c0.464-0.286 0.925-0.575 1.384-0.867l13.272 20.066c-0.565 0.36-1.133 0.716-1.704 1.068z" }), h("path", { d: "m187.49 246.63-10.957-21.371c0.488-0.241 0.974-0.485 1.458-0.734l11.298 21.199c-0.597 0.306-1.197 0.608-1.799 0.906z" }), h("path", { d: "m176.42 251.47-8.849-22.291c0.508-0.195 1.014-0.393 1.519-0.595l9.207 22.151c-0.623 0.25-1.249 0.495-1.877 0.735z" }), h("path", { d: "m164.93 255.25-6.649-23.017c0.524-0.146 1.047-0.295 1.568-0.449l7.02 22.91c-0.644 0.19-1.29 0.375-1.939 0.556z" }), h("path", { d: "m153.12 257.95-4.386-23.533c0.536-0.096 1.071-0.196 1.603-0.3l4.766 23.462c-0.659 0.128-1.32 0.252-1.983 0.371z" }), h("path", { d: "m141.11 259.53-2.094-23.835c0.543-0.046 1.085-0.096 1.625-0.15l2.475 23.8c-0.667 0.066-1.336 0.128-2.006 0.185z" }), h("path", { d: "m128.98 260 0.191-23.923c0.274 2e-3 0.55 3e-3 0.825 3e-3s0.551-1e-3 0.825-3e-3l0.19 23.923c-0.338 3e-3 -0.676 4e-3 -1.015 4e-3s-0.677-1e-3 -1.016-4e-3z" }), h("path", { d: "m116.88 259.35 2.475-23.8c0.54 0.054 1.082 0.104 1.625 0.15l-2.094 23.835c-0.67-0.057-1.339-0.119-2.006-0.185z" }), h("path", { d: "m104.89 257.58 4.766-23.462c0.532 0.104 1.067 0.204 1.603 0.3l-4.386 23.533c-0.663-0.119-1.324-0.243-1.983-0.371z" }), h("path", { d: "m93.131 254.7 7.0205-22.91c0.521 0.154 1.044 0.303 1.568 0.449l-6.649 23.017c-0.6485-0.181-1.2951-0.366-1.9395-0.556z" }), h("path", { d: "m81.702 250.73 9.2073-22.151c0.5046 0.202 1.011 0.4 1.5193 0.595l-8.8489 22.291c-0.6283-0.24-1.2542-0.485-1.8777-0.735z" }), h("path", { d: "m70.708 245.72 11.298-21.199c0.4839 0.249 0.9699 0.493 1.4579 0.734l-10.957 21.371c-0.6023-0.298-1.2019-0.6-1.7989-0.906z" }), h("path", { d: "m60.242 239.72 13.272-20.066c0.459 0.292 0.9204 0.581 1.384 0.867l-12.952 20.267c-0.571-0.352-1.1391-0.708-1.7043-1.068z" }), h("path", { d: "m50.393 232.78 15.113-18.77c0.4301 0.333 0.8629 0.664 1.2982 0.991l-14.816 18.997c-0.5351-0.402-1.0669-0.808-1.5955-1.218z" }), h("path", { d: "m41.239 224.98 16.812-17.322c0.3976 0.371 0.798 0.74 1.2012 1.105l-16.539 17.574c-0.4947-0.448-0.986-0.901-1.4738-1.357z" }), h("path", { d: "m32.855 216.39 18.358-15.738c0.3616 0.407 0.7263 0.81 1.094 1.211l-18.111 16.011c-0.4507-0.491-0.8977-0.986-1.3409-1.484z" }), h("path", { d: "m25.305 207.08 19.746-14.027c0.3227 0.438 0.6486 0.873 0.9777 1.305l-19.526 14.32c-0.4032-0.529-0.8024-1.062-1.1976-1.598z" }), h("path", { d: "m18.653 197.13 20.966-12.203c0.281 0.465 0.5654 0.928 0.8532 1.388l-20.774 12.515c-0.3525-0.564-0.7008-1.13-1.0448-1.7z" }), h("path", { d: "m12.951 186.63 22.011-10.278c0.2369 0.489 0.4773 0.975 0.7213 1.459l-21.849 10.606c-0.2988-0.593-0.5932-1.189-0.8832-1.787z" }), h("path", { d: "m8.2477 175.67 22.873-8.268c0.1906 0.508 0.3848 1.013 0.5829 1.517l-22.742 8.609c-0.24246-0.617-0.48034-1.236-0.71359-1.858z" }), h("path", { d: "m4.5807 164.33 23.544-6.193c0.1427 0.523 0.2893 1.044 0.4398 1.563l-23.446 6.543c-0.18413-0.636-0.36354-1.273-0.53819-1.913z" }), h("path", { d: "m1.977 152.71 24.019-4.077c0.0939 0.534 0.1919 1.066 0.2937 1.596l-23.953 4.431c-0.12451-0.648-0.24421-1.299-0.35904-1.95z" }), h("path", { d: "m0.45129 140.91 24.294-1.944c0.0449 0.54 0.0937 1.078 0.1466 1.616l-24.262 2.298c-0.0644-0.656-0.124-1.312-0.17867-1.97z" }), h("path", { d: "m4e-3 129c-2e-3 0.332-4e-3 0.664-4e-3 0.997s1e-3 0.665 4e-3 0.997l24.374-0.177c-2e-3 -0.273-3e-3 -0.546-3e-3 -0.82s1e-3 -0.547 3e-3 -0.82z" }), h("path", { d: "m0.62996 117.12 24.262 2.298c-0.0529 0.538-0.1017 1.076-0.1466 1.616l-24.294-1.944c0.0547-0.658 0.11424-1.314 0.17867-1.97z" }), h("path", { d: "m2.3361 105.34 23.953 4.431c-0.1018 0.53-0.1998 1.062-0.2937 1.596l-24.019-4.077c0.11484-0.651 0.23453-1.302 0.35904-1.95z" }), h("path", { d: "m5.1189 93.759 23.446 6.543c-0.1505 0.519-0.2971 1.04-0.4398 1.563l-23.544-6.1932c0.17464-0.6396 0.35405-1.2772 0.53818-1.9128z" }), h("path", { d: "m8.9613 82.475 22.742 8.6086c-0.198 0.504-0.3923 1.0098-0.5829 1.5176l-22.873-8.2683c0.23325-0.6216 0.47113-1.2409 0.71359-1.8579z" }), h("path", { d: "m13.834 71.581 21.849 10.605c-0.244 0.4844-0.4844 0.9708-0.7212 1.4593l-22.011-10.278c0.29-0.5982 0.5844-1.1938 0.8832-1.7869z" }), h("path", { d: "m19.697 61.168 20.774 12.514c-0.2878 0.4603-0.5722 0.923-0.8532 1.388l-20.966-12.203c0.344-0.5694 0.6923-1.1359 1.0448-1.6996z" }), h("path", { d: "m26.503 51.323 19.526 14.32c-0.3291 0.4323-0.655 0.8672-0.9777 1.3047l-19.745-14.027c0.3951-0.5359 0.7943-1.0686 1.1975-1.5981z" }), h("path", { d: "m34.196 42.127 18.111 16.011c-0.3677 0.4006-0.7324 0.8042-1.094 1.2106l-18.358-15.738c0.4432-0.498 0.8902-0.9926 1.3409-1.4837z" }), h("path", { d: "m42.713 33.661 16.539 17.574c-0.4032 0.3655-0.8036 0.7342-1.2012 1.1059l-16.812-17.323c0.4878-0.456 0.9791-0.9084 1.4739-1.3569z" }), h("path", { d: "m51.988 25.999 14.816 18.997c-0.4353 0.327-0.868 0.6574-1.2982 0.9911l-15.113-18.77c0.5286-0.41 1.0605-0.816 1.5955-1.218z" }), h("path", { d: "m61.946 19.214 12.952 20.267c-0.4636 0.2854-0.925 0.5743-1.384 0.8668l-13.272-20.066c0.5651-0.36 1.1332-0.7158 1.7042-1.0674z" }), h("path", { d: "m72.506 13.372 10.957 21.37c-0.488 0.2411-0.974 0.4858-1.4579 0.7343l-11.298-21.199c0.597-0.3065 1.1966-0.6085 1.7989-0.9059z" }), h("path", { d: "m83.58 8.5329 8.8489 22.291c-0.5083 0.1943-1.0147 0.3926-1.5193 0.5946l-9.2073-22.151c0.6235-0.24967 1.2495-0.49465 1.8777-0.7349z" }), h("path", { d: "m95.07 4.7463 6.649 23.016c-0.524 0.1459-1.047 0.2957-1.568 0.4495l-7.0205-22.91c0.6445-0.19025 1.291-0.37563 1.9395-0.55611z" }), h("path", { d: "m106.88 2.0506 4.386 23.533c-0.536 0.0962-1.071 0.1964-1.603 0.3007l-4.766-23.462c0.659-0.12896 1.32-0.25295 1.983-0.37191z" }), h("path", { d: "m118.89 0.46811 2.094 23.835c-0.543 0.0459-1.085 0.096-1.625 0.1501l-2.475-23.8c0.667-0.066845 1.336-0.12864 2.006-0.18536z" }), h("path", { d: "m131.02 0.0038802-0.191 23.923c-0.274-0.0021-0.55-0.0032-0.825-0.0032s-0.551 0.0011-0.825 0.0032l-0.19-23.923c0.338-0.00259 0.676-0.00388 1.015-0.00388s0.677 0.0013 1.016 0.0038802z" }), h("path", { d: "m143.12 0.65347-2.475 23.8c-0.54-0.0541-1.082-0.1042-1.625-0.1501l2.094-23.835c0.67 0.056716 1.339 0.11852 2.006 0.18536z" }), h("path", { d: "m155.11 2.4225-4.766 23.462c-0.532-0.1043-1.067-0.2045-1.603-0.3007l4.386-23.533c0.663 0.11897 1.324 0.24295 1.983 0.37192z" }), h("path", { d: "m166.87 5.3024-7.02 22.91c-0.521-0.1538-1.044-0.3036-1.568-0.4495l6.649-23.016c0.649 0.18048 1.295 0.36586 1.939 0.5561z" }), h("path", { d: "m178.3 9.2678-9.207 22.151c-0.505-0.202-1.011-0.4002-1.519-0.5946l8.849-22.291c0.628 0.24024 1.254 0.48523 1.877 0.7349z" }), h("path", { d: "m189.29 14.278-11.298 21.199c-0.484-0.2485-0.97-0.4932-1.458-0.7343l10.957-21.37c0.602 0.2975 1.202 0.5994 1.799 0.9059z" }), h("path", { d: "m199.76 20.282-13.272 20.066c-0.459-0.2925-0.92-0.5814-1.384-0.8668l12.952-20.267c0.571 0.3516 1.139 0.7074 1.704 1.0674z" }), h("path", { d: "m209.61 27.217-15.113 18.77c-0.43-0.3337-0.863-0.6641-1.298-0.9911l14.816-18.997c0.535 0.402 1.067 0.808 1.595 1.218z" }), h("path", { d: "m218.76 35.018c-0.488-0.456-0.979-0.9083-1.474-1.3569l-16.539 17.574c0.403 0.3655 0.804 0.7342 1.201 1.1059z" }), h("path", { d: "m227.15 43.611-18.359 15.738c-0.361-0.4064-0.726-0.81-1.094-1.2106l18.112-16.011c0.45 0.4911 0.897 0.9857 1.341 1.4837z" }), h("path", { d: "m234.7 52.921-19.746 14.027c-0.322-0.4376-0.648-0.8725-0.977-1.3048l19.525-14.32c0.403 0.5295 0.803 1.0622 1.198 1.5981z" }), h("path", { d: "m241.35 62.868-20.966 12.203c-0.281-0.465-0.565-0.9276-0.853-1.3879l20.774-12.514c0.352 0.5637 0.701 1.1302 1.045 1.6996z" }), h("path", { d: "m247.05 73.368-22.011 10.278c-0.236-0.4886-0.477-0.975-0.721-1.4594l21.849-10.605c0.299 0.5931 0.593 1.1887 0.883 1.7869z" }), h("path", { d: "m251.75 84.333-22.873 8.2683c-0.191-0.5077-0.385-1.0136-0.583-1.5176l22.742-8.6086c0.242 0.617 0.48 1.2363 0.714 1.8579z" }), h("path", { d: "m255.42 95.672-23.544 6.1932c-0.143-0.523-0.29-1.044-0.44-1.563l23.445-6.543c0.185 0.6356 0.364 1.2732 0.539 1.9128z" }), h("path", { d: "m258.02 107.29-24.018 4.077c-0.094-0.534-0.192-1.066-0.294-1.596l23.953-4.431c0.125 0.648 0.244 1.299 0.359 1.95z" }), h("path", { d: "m259.55 119.09-24.294 1.944c-0.045-0.54-0.094-1.078-0.147-1.616l24.262-2.298c0.065 0.656 0.124 1.312 0.179 1.97z" }), h("path", { d: "m260 131-24.374-0.177c2e-3 -0.273 3e-3 -0.546 3e-3 -0.82 0-0.171 0-0.342-1e-3 -0.513-1e-3 -0.102-1e-3 -0.205-2e-3 -0.307l24.374-0.177c3e-3 0.332 4e-3 0.664 4e-3 0.997s-1e-3 0.665-4e-3 0.997z" }))));
  }
  get el() { return getElement(this); }
};
PaxJsButton.style = paxJsButtonCss;

export { PaxJsButton as pax_js_button };
