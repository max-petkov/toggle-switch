import{r as e,c as n,h as t,g as a}from"./p-154a94d7.js";const o=class{constructor(t){e(this,t),this.highlightCode=n(this,"highlightCode",7),this.htmlSource='<code class="language-markup">\n  &lt;div class="magnet-wrapper">\n    &lt;button class="btn-magnet">Get in touch&lt;/button>\n  &lt;/div>\n  </code>',this.cssSource='<code class="language-css">\n  :root {\n    --ease-magnet: 0.3s;\n  }\n  \n  .magnet-wrapper {\n    display: inline-block;\n  }\n  \n  .btn-magnet {\n    display: inline-block;\n    padding: 10px 24px;\n    border: 1px solid #121212;\n    border-radius: 50px;\n    width: max-content;\n    font-family: inherit;\n    font-size: 16px;\n    transition: transform var(--ease-magnet) cubic-bezier(0.165, 0.84, 0.44, 1);\n    background-color: transparent;\n    cursor: pointer;\n  }\n  </code>',this.jsSource='<code class="language-js">\n  function magnetEffect(props) {\n    const areas = document.querySelectorAll(props.area);\n    const movement = !props.movement ? 0.6 : props.movement;\n    document.documentElement.style.setProperty("--ease-magnet", props.ease + "s");\n  \n    function animate(e, area, el) {\n      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n      const areaRect = area.getBoundingClientRect();\n      const elRect = el.getBoundingClientRect();\n      const halfDiff = Math.abs(areaRect.width - areaRect.height) / 2;\n      const relX = e.pageX - areaRect.left - halfDiff;\n      const relY = e.pageY - areaRect.top;\n      const x = (relX - areaRect.width / 2 + elRect.width / 3) * movement;\n      const y = (relY - areaRect.height / 2 - scrollTop) * movement;\n  \n      el.style.transform = "translate(" + x + "px, " + y + "px)";\n    }\n  \n    areas.forEach((area) => {\n      const el = area.querySelector(props.element);\n  \n      if (props.areaSize > 0) area.style.padding = props.areaSize + "px";\n  \n      area.addEventListener("mousemove", function (e) {\n        animate(e, area, el);\n      });\n  \n      area.addEventListener("mouseleave", function (e) {\n        el.style.transform = "translate(0px, 0px)";\n      });\n    });\n  }\n  \n  magnetEffect({\n    element: ".btn-magnet",\n    area: ".magnet-wrapper",\n    areaSize: 24,\n    movement: 0.6,\n    ease: 0.4,\n  });\n</code>'}getSourceHandler(e){if(e.detail!==this.el)return;const n=document.querySelector('source-wrapper [slot="cta-element"]'),t=e.detail.cloneNode(!0);n.append(t),document.querySelector('source-tabs [slot="html-code"]').innerHTML=this.htmlSource,document.querySelector('source-tabs [slot="css-code"]').innerHTML=this.cssSource,document.querySelector('source-tabs [slot="js-code"]').innerHTML=this.jsSource,this.highlightCode.emit()}animate(){const e=this.el.shadowRoot.querySelector(".magnet-wrapper"),n=e.querySelector(".btn-magnet");document.documentElement.style.setProperty("--ease-magnet","0.4s"),e.style.padding="24px",e.addEventListener("mousemove",(function(t){n.style.willChange="transform",function(e,n,t){const a=window.pageYOffset||document.documentElement.scrollTop,o=n.getBoundingClientRect(),s=t.getBoundingClientRect(),r=Math.abs(o.width-o.height)/2;t.style.transform=`translate(${.6*(e.pageX-o.left-r-o.width/2+s.width/3)}px, ${.6*(e.pageY-o.top-o.height/2-a)}px)`}(t,e,n)})),e.addEventListener("mouseleave",(function(){n.style.willChange="auto",n.style.transform="translate(0px, 0px)"}))}componentDidLoad(){this.animate()}render(){return t("div",{class:"magnet-wrapper"},t("button",{class:"btn-magnet"},"Get in touch"))}get el(){return a(this)}};o.style=":root{--ease-magnet:0.3s}.magnet-wrapper{display:inline-block}.btn-magnet{display:inline-block;padding:10px 24px;border:1px solid #121212;border-radius:50px;width:max-content;font-family:inherit;font-size:16px;transition:transform var(--ease-magnet) cubic-bezier(0.165, 0.84, 0.44, 1);background-color:transparent;cursor:pointer}";export{o as magnet_button}