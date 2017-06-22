webpackJsonp([15],{1482:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),l=s(a),o=n(6),r=s(o),d=n(10),u=s(d),x=n(9),c=s(x),i=n(8),p=s(i),f=n(0),h=s(f),E=n(1530),m=s(E),g=n(1529),y=s(g),A=n(1606),w=s(A),F=n(1532),b=s(F),C=n(1607),q=s(C),_=n(1533),j=s(_),B=n(1608),v=s(B),k=function(t){function e(){return(0,r.default)(this,e),(0,c.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,u.default)(e,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(m.default,{title:"示例一",content:h.default.createElement(b.default,null),doc:w.default}),h.default.createElement(m.default,{title:"示例二",content:h.default.createElement(j.default,null),doc:q.default}),(0,y.default)({content:v.default}))}}]),e}(f.Component);e.default=k,t.exports=e.default},1529:function(t,e,n){"use strict";function s(t){return l.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.content}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var a=n(0),l=function(t){return t&&t.__esModule?t:{default:t}}(a);t.exports=e.default},1530:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),l=s(a),o=n(6),r=s(o),d=n(10),u=s(d),x=n(9),c=s(x),i=n(8),p=s(i),f=n(0),h=s(f),E=n(257),m=n(1529),g=s(m),y=E.Collapse.Panel,A=function(t){function e(){return(0,r.default)(this,e),(0,c.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,u.default)(e,[{key:"render",value:function(){return h.default.createElement(E.Card,{title:this.props.title,style:{overflow:"visible"},className:"example-template"},h.default.createElement(E.Collapse,{bordered:!1,defaultActiveKey:["1"],style:{overflow:"visible"}},h.default.createElement(y,{header:h.default.createElement("a",null,"效果"),key:"1",style:{overflow:"visible"}},h.default.createElement("div",{className:"example-content"},h.default.cloneElement(this.props.content,this.props))),h.default.createElement(y,{header:h.default.createElement("a",null,"代码"),key:"2"},(0,g.default)({content:this.props.doc}))))}}]),e}(f.Component);e.default=A,t.exports=e.default},1532:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),l=s(a),o=n(6),r=s(o),d=n(10),u=s(d),x=n(9),c=s(x),i=n(8),p=s(i),f=n(0),h=s(f),E=n(257),m=function(t){function e(){return(0,r.default)(this,e),(0,c.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,u.default)(e,[{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(E.Alert,{message:"Success Text",type:"success"}),h.default.createElement("br",null),h.default.createElement(E.Alert,{message:"Info Text",type:"info"}),h.default.createElement("br",null),h.default.createElement(E.Alert,{message:"Warning Text",type:"warning"}),h.default.createElement("br",null),h.default.createElement(E.Alert,{message:"Error Text",type:"error"}))}}]),e}(f.Component);e.default=m,t.exports=e.default},1533:function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),l=s(a),o=n(6),r=s(o),d=n(10),u=s(d),x=n(9),c=s(x),i=n(8),p=s(i),f=n(0),h=s(f),E=n(257),m=function(t){function e(){return(0,r.default)(this,e),(0,c.default)(this,(e.__proto__||(0,l.default)(e)).apply(this,arguments))}return(0,p.default)(e,t),(0,u.default)(e,[{key:"handleClose",value:function(t){console.log(t,"I was closed.")}},{key:"render",value:function(){return h.default.createElement("div",null,h.default.createElement(E.Alert,{message:"success tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0,closable:!0,onClose:this.handleClose}),h.default.createElement("br",null),h.default.createElement(E.Alert,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),h.default.createElement("br",null),h.default.createElement(E.Alert,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),h.default.createElement("br",null),h.default.createElement(E.Alert,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0}))}}]),e}(f.Component);e.default=m,t.exports=e.default},1606:function(t,e){t.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React,{Component} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { Alert  } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;xr-component&apos;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example1</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n    render() {\n        <span class="hljs-keyword">return</span> (\n            &lt;div&gt;\n                   &lt;Alert message=&quot;Success Text&quot; type=&quot;success&quot; /&gt;\n                   &lt;br/&gt;\n                  &lt;Alert message=&quot;Info Text&quot; type=&quot;info&quot; /&gt;\n                  &lt;br/&gt;\n                  &lt;Alert message=&quot;Warning Text&quot; type=&quot;warning&quot; /&gt;\n                  &lt;br/&gt;\n                  &lt;Alert message=&quot;Error Text&quot; type=&quot;error&quot; /&gt;\n              &lt;/div&gt;\n        )\n    }\n}\n</pre>\n'},1607:function(t,e){t.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React,{Component} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { Alert  } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;xr-component&apos;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example1</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n    handleClose (e) {\n      <span class="hljs-built_in">console</span>.log(e, <span class="hljs-string">&apos;I was closed.&apos;</span>);\n    }\n\n    render() {\n        <span class="hljs-keyword">return</span> (\n            &lt;div&gt;\n                &lt;Alert\n                    message=&quot;success tips&quot;\n                    description=&quot;Detailed description and advices about successful copywriting.&quot;\n                    type=&quot;success&quot;\n                    showIcon\n                    closable\n                    onClose={this.handleClose}\n                /&gt;\n                &lt;br/&gt;\n                &lt;Alert\n                    message=&quot;Informational Notes&quot;\n                    description=&quot;Additional description and informations about copywriting.&quot;\n                    type=&quot;info&quot;\n                    showIcon\n                /&gt;\n                &lt;br/&gt;\n                &lt;Alert\n                    message=&quot;Warning&quot;\n                    description=&quot;This is a warning notice about copywriting.&quot;\n                    type=&quot;warning&quot;\n                    showIcon\n                /&gt;\n                &lt;br/&gt;\n                &lt;Alert\n                    message=&quot;Error&quot;\n                    description=&quot;This is an error message about copywriting.&quot;\n                    type=&quot;error&quot;\n                    showIcon\n                /&gt;\n              &lt;/div&gt;\n        )\n    }\n}\n</pre>\n'},1608:function(t,e){t.exports='<h1 id="alert-">Alert &#x8B66;&#x544A;&#x63D0;&#x793A;</h1>\n<p>&#x8B66;&#x544A;&#x63D0;&#x793A;&#xFF0C;&#x5C55;&#x73B0;&#x9700;&#x8981;&#x5173;&#x6CE8;&#x7684;&#x4FE1;&#x606F;&#x3002;</p>\n<h2 id="-">&#x4F55;&#x65F6;&#x4F7F;&#x7528;</h2>\n<ul>\n<li>&#x5F53;&#x67D0;&#x4E2A;&#x9875;&#x9762;&#x9700;&#x8981;&#x5411;&#x7528;&#x6237;&#x663E;&#x793A;&#x8B66;&#x544A;&#x7684;&#x4FE1;&#x606F;&#x65F6;&#x3002;</li>\n<li>&#x975E;&#x6D6E;&#x5C42;&#x7684;&#x9759;&#x6001;&#x5C55;&#x73B0;&#x5F62;&#x5F0F;&#xFF0C;&#x59CB;&#x7EC8;&#x5C55;&#x73B0;&#xFF0C;&#x4E0D;&#x4F1A;&#x81EA;&#x52A8;&#x6D88;&#x5931;&#xFF0C;&#x7528;&#x6237;&#x53EF;&#x4EE5;&#x70B9;&#x51FB;&#x5173;&#x95ED;&#x3002;</li>\n</ul>\n<h2 id="antd-alert-api">antd Alert API</h2>\n<p><a href="https://ant.design/components/alert-cn/">&#x8BE6;&#x60C5;&#x8BF7;&#x70B9;&#x51FB;&#x67E5;&#x770B;&#x5B98;&#x65B9;</a></p>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>&#x6307;&#x5B9A;&#x8B66;&#x544A;&#x63D0;&#x793A;&#x7684;&#x6837;&#x5F0F;&#xFF0C;&#x6709;&#x56DB;&#x79CD;&#x9009;&#x62E9; <code>success</code>&#x3001;<code>info</code>&#x3001;<code>warning</code>&#x3001;<code>error</code></td>\n<td>string</td>\n<td><code>info</code>&#xFF0C;<code>banner</code> &#x6A21;&#x5F0F;&#x4E0B;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A; <code>warning</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>&#x9ED8;&#x8BA4;&#x4E0D;&#x663E;&#x793A;&#x5173;&#x95ED;&#x6309;&#x94AE;</td>\n<td>boolean</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>closeText</td>\n<td>&#x81EA;&#x5B9A;&#x4E49;&#x5173;&#x95ED;&#x6309;&#x94AE;</td>\n<td>string or ReactNode</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>message</td>\n<td>&#x8B66;&#x544A;&#x63D0;&#x793A;&#x5185;&#x5BB9;</td>\n<td>string or ReactNode</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>description</td>\n<td>&#x8B66;&#x544A;&#x63D0;&#x793A;&#x7684;&#x8F85;&#x52A9;&#x6027;&#x6587;&#x5B57;&#x4ECB;&#x7ECD;</td>\n<td>string or ReactNode</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>&#x5173;&#x95ED;&#x65F6;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;</td>\n<td>Function</td>\n<td>&#x65E0;</td>\n</tr>\n<tr>\n<td>showIcon</td>\n<td>&#x662F;&#x5426;&#x663E;&#x793A;&#x8F85;&#x52A9;&#x56FE;&#x6807;</td>\n<td>boolean</td>\n<td>false&#xFF0C;<code>banner</code> &#x6A21;&#x5F0F;&#x4E0B;&#x9ED8;&#x8BA4;&#x503C;&#x4E3A; true</td>\n</tr>\n<tr>\n<td>banner</td>\n<td>&#x662F;&#x5426;&#x7528;&#x4F5C;&#x9876;&#x90E8;&#x516C;&#x544A;</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody>\n</table>\n'}});