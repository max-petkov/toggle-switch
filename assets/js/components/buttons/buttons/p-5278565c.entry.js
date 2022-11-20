import{r as t,c as n,h as o,g as e}from"./p-154a94d7.js";const r=class{constructor(o){t(this,o),this.highlightCode=n(this,"highlightCode",7),this.htmlSource='<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>',this.cssSource="<code class=\"language-css\">\n  .btn {\n    position: relative;\n    padding: 16px 24px;\n    border: none;\n    border-radius: 40px;\n    width: max-content;\n    height: max-content;\n  \n    font-family: inherit;\n    font-size: 16px;\n    font-weight: 500;\n  \n    background-color: transparent;\n    color: #121212;\n  \n    transition: 0.3s;\n    cursor: pointer;\n  }\n  \n  .btn::before {\n    content: '';\n    position: absolute;\n    top: -14px;\n    left: 0;\n    width: 100%;\n    height: calc(100% + 32px);\n    border-left: 2px solid tomato;\n    border-right: 2px solid turquoise;\n    transition: all 1s;\n    transition-delay: 0.2s;\n  }\n  \n  .btn:hover:before {\n    transform: rotateY(180deg);\n  }\n  \n  .btn:hover:after {\n    transform: rotateX(180deg);\n  }\n  \n  .btn::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -15px;\n    width: calc(100% + 32px);\n    height: 100%;\n    border-top: 2px solid tomato;\n    border-bottom: 2px solid turquoise;\n    transition: all 1s;\n  }  \n  </code>",this.jsSource=""}getSourceHandler(t){if(t.detail!==this.el)return;const n=document.querySelector('source-wrapper [slot="cta-element"]'),o=t.detail.cloneNode(!0);n.append(o),document.querySelector('source-tabs [slot="html-code"]').innerHTML=this.htmlSource,document.querySelector('source-tabs [slot="css-code"]').innerHTML=this.cssSource,document.querySelector('source-tabs [slot="js-code"]').innerHTML=this.jsSource,this.highlightCode.emit()}render(){return o("button",{class:"btn"},"Hover me")}get el(){return e(this)}};r.style=".btn{position:relative;padding:16px 24px;border:none;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;transition:0.3s;cursor:pointer}.btn::before{content:'';position:absolute;top:-14px;left:0;width:100%;height:calc(100% + 32px);border-left:2px solid tomato;border-right:2px solid turquoise;transition:all 1s;transition-delay:0.2s}.btn:hover:before{transform:rotateY(180deg)}.btn:hover:after{transform:rotateX(180deg)}.btn::after{content:'';position:absolute;top:0;left:-15px;width:calc(100% + 32px);height:100%;border-top:2px solid tomato;border-bottom:2px solid turquoise;transition:all 1s}";export{r as button_css_fourteen}