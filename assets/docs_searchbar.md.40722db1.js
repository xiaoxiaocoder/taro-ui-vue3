import{o as n,c as a,a as s}from"./app.540724a0.js";const t='{"title":"SearchBar 搜索栏","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"自定义按钮文字和点击事件","slug":"自定义按钮文字和点击事件"},{"level":2,"title":"一直显示按钮","slug":"一直显示按钮"},{"level":2,"title":"自定义输入框类型","slug":"自定义输入框类型"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"docs/searchbar.md","lastUpdated":1619356090940}',p={},o=s('<h1 id="searchbar-搜索栏"><a class="header-anchor" href="#searchbar-搜索栏" aria-hidden="true">#</a> SearchBar 搜索栏</h1><hr><p>可用于用户输入搜索信息</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtSearchBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/search-bar.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><p>说明：</p><ul><li><p>由于微信开发者工具的问题，Input 的 <code>placeholder</code> 在 value 存在的情况下，会出现重叠，在真机上不会出现此问题，可以忽略</p></li><li><p>该组件为受控组件，开发者需要通过 <code>onChange</code> 事件或 <code>v-model:value</code> 来更新 <code>value</code> 值变化。不使用 v-model 时，<code>value</code> 与 <code>onChange</code> 函数必填</p></li><li><p>由于此组件是基于小程序的 Input 进行封装，该组件是原生组件，使用前请阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html" target="_blank" rel="noopener noreferrer">使用限制</a></p></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token comment">&lt;!-- 使用 onChange 事件更新 value 值 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange.bind(this, <span class="token punctuation">&#39;</span>value1<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onActionClick<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n\n  <span class="token comment">&lt;!-- 使用 v-model:value 事件更新 value 值 --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onActionClick<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtSearchBarDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">stateName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">[</span>stateName<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onActionClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了搜索按钮&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="自定义按钮文字和点击事件"><a class="header-anchor" href="#自定义按钮文字和点击事件" aria-hidden="true">#</a> 自定义按钮文字和点击事件</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>\n    <span class="token attr-name">actionName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>搜一下<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange.bind(this, <span class="token punctuation">&#39;</span>value2<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onActionClick<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtSearchBarDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value2<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">stateName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">[</span>stateName<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onActionClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了搜索按钮&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="一直显示按钮"><a class="header-anchor" href="#一直显示按钮" aria-hidden="true">#</a> 一直显示按钮</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>请输入ISBN号<span class="token punctuation">&#39;</span></span>\n      <span class="token attr-name">showActionButton</span>\n      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value3<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange.bind(this, <span class="token punctuation">&#39;</span>value3<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onActionClick<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtSearchBarDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value3<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">stateName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">[</span>stateName<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onActionClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了搜索按钮&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="自定义输入框类型"><a class="header-anchor" href="#自定义输入框类型" aria-hidden="true">#</a> 自定义输入框类型</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtSearchBar</span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>请输入数字<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">inputType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>number<span class="token punctuation">&#39;</span></span>\n    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value4<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onChange.bind(this, <span class="token punctuation">&#39;</span>value4<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@action-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onActionClick<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtSearchBarDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value4<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter">stateName<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">[</span>stateName<span class="token punctuation">]</span> <span class="token operator">=</span> value\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onActionClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;点击了搜索按钮&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>微信小程序</th><th>h5</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>√</td><td>√</td><td>必填，输入框当前值，支持 v-model，开发者可通过 <code>onChange</code> 事件或 <code>v-model:value</code> 来更新 value 值</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholder</td><td>√</td><td>√</td><td>占位符</td><td>String</td><td>-</td><td>-</td></tr><tr><td>maxLength</td><td>√</td><td>√</td><td>最大长度</td><td>Number</td><td>-</td><td>140</td></tr><tr><td>fixed</td><td>√</td><td>√</td><td>是否固定顶部</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>focus</td><td>√</td><td>√</td><td>是否聚焦</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>disabled</td><td>√</td><td>√</td><td>是否禁止输入</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>showActionButton</td><td>√</td><td>√</td><td>是否一直显示右侧按钮</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>actionName</td><td>√</td><td>√</td><td>右侧按钮文案</td><td>String</td><td>-</td><td>&#39;搜索&#39;</td></tr><tr><td>inputType</td><td>√</td><td>√</td><td>输入框输入类型</td><td>String</td><td>&#39;text&#39;, &#39;number&#39;, &#39;idcard&#39;, &#39;digit&#39;</td><td>&#39;text&#39;</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名称</th><th>微信小程序</th><th>h5</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onChange</td><td>√</td><td>√</td><td>输入框值改变时触发的事件，开发者可通过 onChange 事件来更新 value 值变化，不使用 v-model 时，onChange 函数必填</td><td>(value:string, event:Object) =&gt; void</td></tr><tr><td>onUpdate:value</td><td>√</td><td>√</td><td>使用 <code>v-model:value</code> 时自动触发</td><td>(value:string, event:Object) =&gt; void</td></tr><tr><td>onFocus</td><td>√</td><td>√</td><td>输入框聚焦时触发，height 参数在基础库 1.9.90 起支持</td><td>(event:Object) =&gt; void</td></tr><tr><td>onClear</td><td>√</td><td>√</td><td>点击清除按钮时触发事件，若不传，则默认传空字符串调用 onChange 函数</td><td>() =&gt; void</td></tr><tr><td>onBlur</td><td>√</td><td>√</td><td>输入框值失去焦点时触发的事件</td><td>() =&gt; void</td></tr><tr><td>onConfirm</td><td>√</td><td>x</td><td>点击完成按钮时触发。H5 版中目前需借用 Form 组件的onSubmit事件来替代</td><td>() =&gt; void</td></tr><tr><td>onActionClick</td><td>√</td><td>√</td><td>右侧按钮点击触发事件</td><td>() =&gt; void</td></tr></tbody></table>',21);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};