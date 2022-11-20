import{r as n,c as t,h as o,g as e}from"./p-154a94d7.js";const r=class{constructor(o){n(this,o),this.highlightCode=t(this,"highlightCode",7),this.htmlSource='<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>',this.cssSource="<code class=\"language-css\">\n  .btn {\n    overflow: hidden;\n    position: relative;\n    padding: 16px 24px;\n    border: 1px solid #121212;\n    border-radius: 0;\n    width: max-content;\n    height: max-content;\n  \n    font-family: inherit;\n    font-size: 16px;\n    font-weight: 500;\n  \n    background-color: transparent;\n    color: #121212;\n    cursor: pointer;\n    transition: color 0.1s ease 0.1s;\n  }\n  \n  .btn:hover {\n    color: #fff;\n  }\n  \n  .btn::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #3037c2;\n    width: 100%;\n    height: 100%;\n    transform: translateY(-100%);\n    z-index: -1;\n  }\n  \n  .btn::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #3037c2;\n    width: 101%;\n    height: 101%;\n    transform: translateY(100%);\n    z-index: -1;\n    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);\n  }\n  \n  .btn:hover::after {\n    transform: translateY(0);\n    transition: transform 0.01s 0.4s cubic-bezier(0.7, 0, 0.2, 1);\n  }\n  \n  .btn:hover::before {\n    transform: translateY(0);\n    transition: 0.4s cubic-bezier(0.7, 0, 0.2, 1);\n  }  \n  </code>",this.jsSource=""}getSourceHandler(n){if(n.detail!==this.el)return;const t=document.querySelector('source-wrapper [slot="cta-element"]'),o=n.detail.cloneNode(!0);t.append(o),document.querySelector('source-tabs [slot="html-code"]').innerHTML=this.htmlSource,document.querySelector('source-tabs [slot="css-code"]').innerHTML=this.cssSource,document.querySelector('source-tabs [slot="js-code"]').innerHTML=this.jsSource,this.highlightCode.emit()}render(){return o("button",{class:"btn"},"Hover me")}get el(){return e(this)}};r.style=".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:0;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:color 0.1s ease 0.1s}.btn:hover{color:#fff}.btn::before{content:'';position:absolute;top:0;left:0;background-color:#3037c2;width:100%;height:100%;transform:translateY(-100%);z-index:-1}.btn::after{content:'';position:absolute;top:0;left:0;background-color:#3037c2;width:101%;height:101%;transform:translateY(100%);z-index:-1;transition:0.4s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::after{transform:translateY(0);transition:transform 0.01s 0.4s cubic-bezier(0.7, 0, 0.2, 1)}.btn:hover::before{transform:translateY(0);transition:0.4s cubic-bezier(0.7, 0, 0.2, 1)}";export{r as button_css_four}