import{r as t,c as n,h as o,g as e}from"./p-154a94d7.js";const r=class{constructor(o){t(this,o),this.highlightCode=n(this,"highlightCode",7),this.htmlSource='<code class="language-markup">&lt;button class="btn">Hover me&lt;/button></code>',this.cssSource="<code class=\"language-css\">\n  .btn {\n    overflow: hidden;\n    position: relative;\n    padding: 16px 24px;\n    border: 1px solid #121212;\n    border-radius: 40px;\n    width: max-content;\n    height: max-content;\n  \n    font-family: inherit;\n    font-size: 16px;\n    font-weight: 500;\n  \n    background-color: transparent;\n    color: #121212;\n    cursor: pointer;\n    transition: 0.4s;\n  }\n  \n  .btn::before {\n    content: 'YEAH !';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: #121212;\n    color: #fff;\n    transform: translateY(-100%);\n    transition: 0.5s;\n    overflow: hidden;\n  }\n  \n  .btn:hover::before {\n    transform: translateY(0);\n  }  \n  </code>",this.jsSource=""}getSourceHandler(t){if(t.detail!==this.el)return;const n=document.querySelector('source-wrapper [slot="cta-element"]'),o=t.detail.cloneNode(!0);n.append(o),document.querySelector('source-tabs [slot="html-code"]').innerHTML=this.htmlSource,document.querySelector('source-tabs [slot="css-code"]').innerHTML=this.cssSource,document.querySelector('source-tabs [slot="js-code"]').innerHTML=this.jsSource,this.highlightCode.emit()}render(){return o("button",{class:"btn"},"Hover me")}get el(){return e(this)}};r.style=".btn{overflow:hidden;position:relative;padding:16px 24px;border:1px solid #121212;border-radius:40px;width:max-content;height:max-content;font-family:inherit;font-size:16px;font-weight:500;background-color:transparent;color:#121212;cursor:pointer;transition:0.4s}.btn::before{content:'YEAH !';position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;background-color:#121212;color:#fff;transform:translateY(-100%);transition:0.5s;overflow:hidden}.btn:hover::before{transform:translateY(0)}";export{r as button_css_six}