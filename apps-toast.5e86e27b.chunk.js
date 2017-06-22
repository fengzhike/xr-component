webpackJsonp([20],{1523:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var e=t(65),l=a(e),o=t(6),r=a(o),p=t(10),c=a(p),d=t(9),x=a(d),u=t(8),i=a(u),h=t(0),f=a(h),g=t(1530),m=a(g),j=t(1529),E=a(j),F=t(1706),C=a(F),B=t(1594),b=a(B),D=t(1707),T=a(D),y=function(n){function s(){return(0,r.default)(this,s),(0,x.default)(this,(s.__proto__||(0,l.default)(s)).apply(this,arguments))}return(0,i.default)(s,n),(0,c.default)(s,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(m.default,{title:"示例一",content:f.default.createElement(b.default,null),doc:C.default}),(0,E.default)({content:T.default}))}}]),s}(h.Component);s.default=y,n.exports=s.default},1529:function(n,s,t){"use strict";function a(n){return l.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:n.content}})}Object.defineProperty(s,"__esModule",{value:!0}),s.default=a;var e=t(0),l=function(n){return n&&n.__esModule?n:{default:n}}(e);n.exports=s.default},1530:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var e=t(65),l=a(e),o=t(6),r=a(o),p=t(10),c=a(p),d=t(9),x=a(d),u=t(8),i=a(u),h=t(0),f=a(h),g=t(257),m=t(1529),j=a(m),E=g.Collapse.Panel,F=function(n){function s(){return(0,r.default)(this,s),(0,x.default)(this,(s.__proto__||(0,l.default)(s)).apply(this,arguments))}return(0,i.default)(s,n),(0,c.default)(s,[{key:"render",value:function(){return f.default.createElement(g.Card,{title:this.props.title,style:{overflow:"visible"},className:"example-template"},f.default.createElement(g.Collapse,{bordered:!1,defaultActiveKey:["1"],style:{overflow:"visible"}},f.default.createElement(E,{header:f.default.createElement("a",null,"效果"),key:"1",style:{overflow:"visible"}},f.default.createElement("div",{className:"example-content"},f.default.cloneElement(this.props.content,this.props))),f.default.createElement(E,{header:f.default.createElement("a",null,"代码"),key:"2"},(0,j.default)({content:this.props.doc}))))}}]),s}(h.Component);s.default=F,n.exports=s.default},1594:function(n,s,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(s,"__esModule",{value:!0});var e=t(65),l=a(e),o=t(6),r=a(o),p=t(10),c=a(p),d=t(9),x=a(d),u=t(8),i=a(u),h=t(0),f=a(h),g=t(257),m=function(n){function s(){return(0,r.default)(this,s),(0,x.default)(this,(s.__proto__||(0,l.default)(s)).apply(this,arguments))}return(0,i.default)(s,n),(0,c.default)(s,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(g.Button,{onClick:function(){return g.Toast.info("This is a message of info")}},"Info"),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(g.Button,{onClick:function(){return g.Toast.success("This is a message of success")}},"Success"),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(g.Button,{onClick:function(){return g.Toast.error("This is a message of error")}},"Error"),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(g.Button,{onClick:function(){return g.Toast.warning("This is a message of warning")}},"Warning"),f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement(g.Button,{onClick:function(){return g.Toast.loading("This is a message of loading")}},"loading"))}}]),s}(h.Component);s.default=m,n.exports=s.default},1706:function(n,s){n.exports='<pre class="hljs"><span class="hljs-keyword">import</span> React,{Component} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>\n<span class="hljs-keyword">import</span> { Toast, Button  } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;xr-component&apos;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Example1</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n    render() {\n        <span class="hljs-keyword">return</span> (\n            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>Toast.info(&apos;This is a message of info&apos;)}&gt;\n                    Info\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>Toast.success(&apos;This is a message of success&apos;)} &gt;\n                    Success\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>Toast.error(&apos;This is a message of error&apos;)}&gt;\n                    Error\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>Toast.warning(&apos;This is a message of warning&apos;)}&gt;\n                    Warning\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>Toast.loading(&apos;This is a message of loading&apos;)}&gt;\n                    loading\n                <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n        )\n    }\n}\n</pre>\n'},1707:function(n,s){n.exports='<h1 id="toast-">Toast &#x8F7B;&#x63D0;&#x793A;</h1>\n<p>&#x5168;&#x5C40;&#x5C55;&#x793A;&#x64CD;&#x4F5C;&#x53CD;&#x9988;&#x4FE1;&#x606F;&#x3002;</p>\n<h2 id="-">&#x4F55;&#x65F6;&#x4F7F;&#x7528;</h2>\n<ul>\n<li>&#x53EF;&#x63D0;&#x4F9B;&#x6210;&#x529F;&#x3001;&#x8B66;&#x544A;&#x548C;&#x9519;&#x8BEF;&#x7B49;&#x53CD;&#x9988;&#x4FE1;&#x606F;&#x3002;</li>\n<li>&#x9876;&#x90E8;&#x5C45;&#x4E2D;&#x663E;&#x793A;&#x5E76;&#x81EA;&#x52A8;&#x6D88;&#x5931;&#xFF0C;&#x662F;&#x4E00;&#x79CD;&#x4E0D;&#x6253;&#x65AD;&#x7528;&#x6237;&#x64CD;&#x4F5C;&#x7684;&#x8F7B;&#x91CF;&#x7EA7;&#x63D0;&#x793A;&#x65B9;&#x5F0F;&#x3002;</li>\n</ul>\n<h2 id="api">API</h2>\n<p>&#x7EC4;&#x4EF6;&#x63D0;&#x4F9B;&#x4E86;&#x4E00;&#x4E9B;&#x9759;&#x6001;&#x65B9;&#x6CD5;&#xFF0C;&#x4F7F;&#x7528;&#x65B9;&#x5F0F;&#x548C;&#x53C2;&#x6570;&#x5982;&#x4E0B;&#xFF1A;</p>\n<ul>\n<li><code>Toast.success(content, duration, onClose)</code></li>\n<li><code>Toast.error(content, duration, onClose)</code></li>\n<li><code>Toast.info(content, duration, onClose)</code></li>\n<li><code>Toast.warning(content, duration, onClose)</code></li>\n<li><code>Toast.warn(content, duration, onClose)</code> // alias of warning</li>\n<li><code>Toast.loading(content, duration, onClose)</code></li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>&#x63D0;&#x793A;&#x5185;&#x5BB9;</td>\n<td>string\\</td>\n<td>ReactNode</td>\n<td>-</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>&#x81EA;&#x52A8;&#x5173;&#x95ED;&#x7684;&#x5EF6;&#x65F6;&#xFF0C;&#x5355;&#x4F4D;&#x79D2;</td>\n<td>number</td>\n<td>1.5</td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>&#x5173;&#x95ED;&#x65F6;&#x89E6;&#x53D1;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;</td>\n<td>Function</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<p>&#x8FD8;&#x63D0;&#x4F9B;&#x4E86;&#x5168;&#x5C40;&#x914D;&#x7F6E;&#x548C;&#x5168;&#x5C40;&#x9500;&#x6BC1;&#x65B9;&#x6CD5;&#xFF1A;</p>\n<ul>\n<li><code>Toast.config(options)</code></li>\n<li><code>Toast.destroy()</code></li>\n</ul>\n<h3 id="toast-config">Toast.config</h3>\n<pre class="hljs">Toast.config({\n  <span class="hljs-attr">top</span>: <span class="hljs-number">100</span>,\n  <span class="hljs-attr">duration</span>: <span class="hljs-number">2</span>,\n});\n</pre>\n<table>\n<thead>\n<tr>\n<th>&#x53C2;&#x6570;</th>\n<th>&#x8BF4;&#x660E;</th>\n<th>&#x7C7B;&#x578B;</th>\n<th>&#x9ED8;&#x8BA4;&#x503C;</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>top</td>\n<td>&#x6D88;&#x606F;&#x8DDD;&#x79BB;&#x9876;&#x90E8;&#x7684;&#x4F4D;&#x7F6E;</td>\n<td>number</td>\n<td>24px</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>&#x9ED8;&#x8BA4;&#x81EA;&#x52A8;&#x5173;&#x95ED;&#x5EF6;&#x65F6;&#xFF0C;&#x5355;&#x4F4D;&#x79D2;</td>\n<td>number</td>\n<td>1.5</td>\n</tr>\n<tr>\n<td>getContainer</td>\n<td>&#x914D;&#x7F6E;&#x6E32;&#x67D3;&#x8282;&#x70B9;&#x7684;&#x8F93;&#x51FA;&#x4F4D;&#x7F6E;</td>\n<td>() =&gt; HTMLElement</td>\n<td>() =&gt; document.body</td>\n</tr>\n</tbody>\n</table>\n'}});