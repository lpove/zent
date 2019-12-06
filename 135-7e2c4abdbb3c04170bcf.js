(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{663:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return j});var t=s(23),p=s.n(t),e=s(24),o=s.n(e),c=s(25),l=s.n(c),u=s(26),k=s.n(u),i=s(32),r=s.n(i),d=s(27),g=s.n(d),m=s(28),h=s.n(m),b=s(586),f=s.n(b),y=s(0),v=s.n(y),E=s(111),T=s(82),C=function(){return v.a.createElement("div",null,v.a.createElement(T.Ab,null,"标签内容"),v.a.createElement(T.Ab,null,v.a.createElement("a",{href:"#"},"链接")))},w=function(){return v.a.createElement("div",null,v.a.createElement(T.Ab,{theme:"grey"},"灰色"),v.a.createElement(T.Ab,{theme:"red"},"红色"),v.a.createElement(T.Ab,{theme:"green"},"绿色"),v.a.createElement(T.Ab,{theme:"yellow"},"黄色"),v.a.createElement(T.Ab,{theme:"blue"},"蓝色"),v.a.createElement(T.Ab,{theme:"grey",outline:!0},"灰色"),v.a.createElement(T.Ab,{theme:"red",outline:!0},"红色"),v.a.createElement(T.Ab,{theme:"green",outline:!0},"绿色"),v.a.createElement(T.Ab,{theme:"yellow",outline:!0},"黄色"),v.a.createElement(T.Ab,{theme:"blue",outline:!0},"蓝色"))},A=function(){return v.a.createElement("div",null,v.a.createElement(T.Ab,{style:{borderColor:"#9370db",backgroundColor:"#9370db"}},"#9370db"),v.a.createElement(T.Ab,{style:{borderColor:"#9370db",color:"#9370db"},outline:!0},"#9370db"),v.a.createElement(T.Ab,{style:{borderColor:"#87d068",backgroundColor:"#cfefdf",color:"#00a854"}},"自定义色彩"),v.a.createElement(T.Ab,{style:{borderColor:"#778899",backgroundColor:"#778899"},rounded:!1},"非圆角"),v.a.createElement(T.Ab,{style:{borderColor:"#48d1cc",backgroundColor:"#48d1cc",fontSize:14}},"大标签"))},z=function(){return v.a.createElement("div",null,v.a.createElement(T.Ab,{closable:!0,onClose:function(n){T.db.success("Close tag")},outline:!0},"自定义色彩"),v.a.createElement(T.Ab,{closable:!0,onClose:function(n){T.db.success("Close tag2")}},"非圆角"),v.a.createElement(T.Ab,{theme:"grey",closable:!0,closeButtonStyle:{color:"#969799"}},"自定义关闭按钮颜色"))};function N(n){return v.a.createElement(n.tag,f()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function _(n){return v.a.createElement(N,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function S(n){return v.a.createElement(N,{tag:"style",html:n.style})}var D=function(n){function a(){var n,s;p()(this,a);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s=l()(this,(n=k()(a)).call.apply(n,[this].concat(e))),h()(r()(s),"state",{showCode:!1}),h()(r()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return g()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return v.a.createElement("div",{className:"zandoc-react-demo"},v.a.createElement("div",{className:"zandoc-react-demo__preview"},p),v.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},v.a.createElement("div",{className:"zandoc-react-demo__title"},v.a.createElement("p",null,s||"")),v.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&v.a.createElement("pre",{className:"zandoc-react-demo__code"},v.a.createElement(N,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),j=function(n){function a(){return p()(this,a),l()(this,k()(a).apply(this,arguments))}return g()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return v.a.createElement("div",{className:"zandoc-react-container",key:null},v.a.createElement(S,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),v.a.createElement(_,{html:'<h2 class="anchor-heading"><a href="#tag-biao-qian">¶</a><a href="javascript:void(0)" id="tag-biao-qian" class="anchor-point"></a>Tag 标签</h2>\n<p>标签用于进行标记和分类。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>用于添加特殊标记或者分类记号。</li>\n<li>可添加多个标签。</li>\n<li>标签内字数建议不超过四个字。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),v.a.createElement(D,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span>标签内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>链接<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(C)),v.a.createElement(D,{title:"两种风格和五种预定样式：`red`，`green`，`yellow`，`blue`，`grey`",id:"Demostyle",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>灰色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>绿色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      灰色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      红色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      绿色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      黄色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      蓝色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(w)),v.a.createElement(D,{title:"支持自定义色彩，非圆角，标签大小",id:"Democustom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      #9370db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      outline\n    <span class="token operator">></span>\n      #9370db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#87d068\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#cfefdf\'</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#00a854\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      自定义色彩\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      rounded<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      非圆角\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag\n      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token punctuation">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        fontSize<span class="token punctuation">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token operator">></span>\n      大标签\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(A)),v.a.createElement(D,{title:"关闭标签，支持添加关闭事件",id:"Demoonclose",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n  Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      自定义色彩\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>closeCallback2<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      非圆角\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Tag theme<span class="token operator">=</span><span class="token string">"grey"</span> closable closeButtonStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#969799\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n      自定义关闭按钮颜色\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},v.a.createElement(z)),v.a.createElement(_,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>theme</td>\n<td>标签的预置颜色</td>\n<td>string</td>\n<td><code>'red'</code></td>\n<td><code>'red'</code>\n \n|\n \n<code>'green'</code>\n \n|\n \n<code>'yellow'</code>\n \n|\n \n<code>'blue'</code>\n \n|\n \n<code>'grey'</code></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>边框有颜色，无底色</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>是否有圆角</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否显示</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭时的回调</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>closeButtonStyle</td>\n<td>关闭按钮样式</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>所有参数都是可选，搭配 <code>visible</code> 和 <code>onClose</code> 可以实现关闭效果</p>\n</blockquote>"}))}}]),a}(y.Component)}}]);