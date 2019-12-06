(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{667:function(n,a,s){"use strict";s.r(a),s.d(a,"default",function(){return B});var t=s(586),o=s.n(t),p=s(23),e=s.n(p),c=s(24),l=s.n(c),u=s(25),i=s.n(u),k=s(26),r=s.n(k),d=s(32),g=s.n(d),h=s(27),m=s.n(h),f=s(28),v=s.n(f),y=s(0),D=s.n(y),b=s(111),C=s(82),E=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(o))),v()(g()(s),"state",{visible:!1}),v()(g()(s),"triggerDialog",function(n){s.setState({visible:n})}),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this;return D.a.createElement("div",null,D.a.createElement(C.i,{type:"primary",onClick:function(){return n.triggerDialog(!0)}},"显示"),D.a.createElement(C.u,{visible:this.state.visible,onClose:function(){return n.triggerDialog(!1)},title:"对话框"},D.a.createElement("p",null,"对话框内容"),D.a.createElement("p",null,"对话框其他内容")))}}]),a}(D.a.Component);return D.a.createElement(n,null)},w=function(){var n=C.u.openDialog,a=C.u.closeDialog,s="my_dialog";return D.a.createElement(C.i,{type:"primary",onClick:function(){n({dialogId:s,title:"使用 openDialog 直接打开对话框",children:D.a.createElement("div",null,"Hello World"),footer:D.a.createElement(C.i,{onClick:function(){return a(s)}},"关闭"),onClose:function(){console.log("outer dialog closed")}})}},"打开")},x=function(){var n=C.u.openDialog,a=D.a.createContext({shared:"This is from context"}),s=function(s){function t(){var s,o;e()(this,t);for(var p=arguments.length,c=new Array(p),l=0;l<p;l++)c[l]=arguments[l];return o=i()(this,(s=r()(t)).call.apply(s,[this].concat(c))),v()(g()(o),"open",function(){n({parentComponent:g()(o),title:"openDialog 支持 context",children:D.a.createElement(a.Consumer,null,function(n){var a=n.shared;return D.a.createElement("span",null,a)})})}),o}return m()(t,s),l()(t,[{key:"render",value:function(){return D.a.createElement(C.i,{type:"primary",onClick:this.open},"显示")}}]),t}(D.a.Component);return D.a.createElement(a.Provider,null,D.a.createElement(s,null))};function z(n){return D.a.createElement(n.tag,o()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return D.a.createElement(z,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return D.a.createElement(z,{tag:"style",html:n.style})}var N=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,o=new Array(t),p=0;p<t;p++)o[p]=arguments[p];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(o))),v()(g()(s),"state",{showCode:!1}),v()(g()(s),"toggle",function(){s.setState({showCode:!s.state.showCode})}),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,o=a.children;return D.a.createElement("div",{className:"zandoc-react-demo"},D.a.createElement("div",{className:"zandoc-react-demo__preview"},o),D.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},D.a.createElement("div",{className:"zandoc-react-demo__title"},D.a.createElement("p",null,s||"")),D.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&D.a.createElement("pre",{className:"zandoc-react-demo__code"},D.a.createElement(z,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),B=function(n){function a(){return e()(this,a),i()(this,r()(a).apply(this,arguments))}return m()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return D.a.createElement("div",{className:"zandoc-react-container",key:null},D.a.createElement(_,{style:""}),D.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#dialog-dui-hua-kuang">¶</a><a href="javascript:void(0)" id="dialog-dui-hua-kuang" class="anchor-point"></a>Dialog 对话框</h2>\n<p>对话框，通过打开一个浮层的方式，避免打扰用户的操作流程。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>\n<p>命令式, 直接调用 <code>openDialog</code> 函数。</p>\n</li>\n<li>\n<p>组件式, 通过控制 <code>visible</code> 来显示／隐藏对话框。</p>\n</li>\n<li>\n<p>推荐使用命令式, 不需要在外部维护一个 <code>visible</code> 属性, 更加方便。</p>\n</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),D.a.createElement(N,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> visible<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">triggerDialog</span> <span class="token operator">=</span> visible <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> visible <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          显示\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerDialog</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>对话框<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>对话框其他内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(E)),D.a.createElement(N,{title:"使用 openDialog 打开对话框",id:"Demoopen",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog<span class="token punctuation">,</span> closeDialog <span class="token punctuation">}</span> <span class="token operator">=</span> Dialog<span class="token punctuation">;</span>\n<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token string">\'my_dialog\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    dialogId<span class="token punctuation">:</span> id<span class="token punctuation">,</span> <span class="token comment">// id is used to close the dialog</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'使用 openDialog 直接打开对话框\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    footer<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">closeDialog</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'outer dialog closed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(w)),D.a.createElement(N,{title:"openDialog 支持 context",id:"Democontext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> openDialog <span class="token punctuation">}</span> <span class="token operator">=</span> Dialog<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> DemoContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  shared<span class="token punctuation">:</span> <span class="token string">\'This is from context\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'openDialog 支持 context\'</span><span class="token punctuation">,</span>\n      children<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DemoContext.Consumer</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> shared <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>shared<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DemoContext.Consumer</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>open<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        显示\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DemoContext.Provider</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DemoContext.Provider</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},D.a.createElement(x)),D.a.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>自定义弹框标题</td>\n<td>node</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>弹框内容: \n<code>&#x3C;Dialog>xxxx&#x3C;/Dialog></code></td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>底部内容</td>\n<td>node</td>\n<td><code>null</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>是否打开对话框</td>\n<td>bool</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>关闭操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>是否显示遮罩</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>自定义前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n<tr>\n<td>style</td>\n<td>自定义样式</td>\n<td>object</td>\n<td><code>{}</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#opendialog">¶</a><a href="javascript:void(0)" id="opendialog" class="anchor-point"></a>openDialog</h4>\n<p><code>openDialog(options: object): function</code></p>\n<p><strong><code>options</code> 参数支持组件除 <code>visible</code> 以外的所有属性，外加以下参数：</strong></p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dialogId</td>\n<td>可选，对话框的 ID，可以通过 \n<code>closeDialog(dialogId)</code>\n 来关闭对话框</td>\n<td>string</td>\n<td>随机生成的唯一ID</td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>可选，父组件的引用, 用于关联 context</td>\n<td>ReactInstance</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>如果需要组件实例的引用, 可以传一个函数形式的 <code>ref</code> 给 <code>openDialog</code>, <strong>不支持字符串形式的 <code>ref</code>.</strong></p>\n<blockquote>\n<p><code>openDialog</code> 的返回值是一个手动关闭 Dialog 的函数, <code>close(false)</code> 将不会触发Dialog的 <code>onClose</code> 方法。<strong>推荐使用 <code>closeDialog</code> 来关闭对话框。</strong></p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#closedialog">¶</a><a href="javascript:void(0)" id="closedialog" class="anchor-point"></a>closeDialog</h4>\n<p><code>closeDialog(dialogId: string, options: object): void</code></p>\n<p><code>dialogId</code> 对应调用 <code>openDialog</code> 时传的参数。</p>\n<p><code>options.triggerOnClose</code> 如果是 <code>true</code>，关闭时会触发 <code>onClose</code> 回调，<code>false</code> 时不会触发。</p>\n<h4 class="anchor-heading"><a href="#zhi-ding-dialog-kuan-du">¶</a><a href="javascript:void(0)" id="zhi-ding-dialog-kuan-du" class="anchor-point"></a>指定Dialog宽度</h4>\n<p>在 <code>style</code> 中可以指定弹出窗口的宽度, e.g. <code>style={{ width: \'600px\' }}</code>.</p>\n<p>默认情况下弹出窗口会自适应内容的宽度, 同时有最小宽度和最大宽度.</p>'}))}}]),a}(y.Component)}}]);