import{o as t,c as a,a as n}from"./app.540724a0.js";const s='{"title":"Textarea 多行文本框","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"不显示字数","slug":"不显示字数"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"事件","slug":"事件"}],"relativePath":"docs/textarea.md","lastUpdated":1619356091184}',e={},p=n('<h1 id="textarea-多行文本框"><a class="header-anchor" href="#textarea-多行文本框" aria-hidden="true">#</a> Textarea 多行文本框</h1><hr><p>多行文本输入框，可控制是否显示当前字数，可自定义高度。</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtTextarea <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/textarea.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><p>说明：</p><ul><li><p>该组件为受控组件，开发者可通过 <code>onChange</code> 事件或 <code>v-model:value</code> 来更新 value 值变化。不使用 v-model 时，<code>value</code> 与 <code>onChange</code> 函数必填</p></li><li><p>由于小程序组件化的限制，AtTextarea 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取</p></li><li><p>由于此组件是基于小程序的 Textarea 进行封装，该组件是原生组件，使用前请阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html" target="_blank" rel="noopener noreferrer">使用限制</a></p></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>example-item<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTextarea</span>\n      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:maxLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>使用 onChange 更新 value 值<span class="token punctuation">&#39;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTextarea</span>\n      <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:maxLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>使用 v-model:value 更新 value 值<span class="token punctuation">&#39;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;AtTextareaDemo&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value1<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>value1 <span class="token operator">=</span> value\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="不显示字数"><a class="header-anchor" href="#不显示字数" aria-hidden="true">#</a> 不显示字数</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtTextarea</span>\n  <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:maxLength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>你的问题是...<span class="token punctuation">&#39;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n\n</code></pre></div><h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>微信小程序</th><th>h5</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>√</td><td>√</td><td>输入框当前值，支持 v-model，用户可通过 <code>onChange</code> 事件 或 <code>v-model:value</code> 来更新 <code>value</code> 值，必填</td><td>String</td><td>-</td><td>-</td></tr><tr><td>maxLength</td><td>√</td><td>√</td><td>最大长度</td><td>Number</td><td>-</td><td>200</td></tr><tr><td>placeholder</td><td>√</td><td>√</td><td>占位符</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholderStyle</td><td>√</td><td>x</td><td>指定 placeholder 的样式，只在小程序有效</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholderClass</td><td>√</td><td>x</td><td>指定 placeholder 的样式类，只在小程序有效</td><td>String</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>√</td><td>√</td><td>是否禁用</td><td>String</td><td>-</td><td>false</td></tr><tr><td>autoFocus</td><td>√</td><td>√</td><td>是否自动聚焦</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>focus</td><td>√</td><td>x</td><td>获取焦点</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>showConfirmBar</td><td>√</td><td>x</td><td>是否显示键盘上方带有” 完成 “按钮那一栏</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>selectionStart</td><td>√</td><td>x</td><td>光标起始位置，自动聚集时有效，需与 selection-end 搭配使用</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>selectionEnd</td><td>√</td><td>x</td><td>光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用</td><td>Number</td><td>-</td><td>-1</td></tr><tr><td>count</td><td>√</td><td>√</td><td>是否显示字数</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>fixed</td><td>√</td><td>√</td><td>如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>textOverflowForbidden</td><td>√</td><td>√</td><td>文字超出最大长度时是否禁止输入，若否，则还可以在 maxLength 的基础上输入500字符，并右下角红字提示</td><td>Boolean</td><td>-</td><td>true</td></tr><tr><td>height</td><td>√</td><td>√</td><td>输入框高度</td><td>Number</td><td>-</td><td>100</td></tr><tr><td>cursorSpacing</td><td>√</td><td>x</td><td>指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离，只在小程序端有效，目前安卓端微信官方有 bug，该特性失效</td><td>Number</td><td>-</td><td>100</td></tr></tbody></table><h2 id="事件"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名称</th><th>微信小程序</th><th>h5</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onChange</td><td>√</td><td>√</td><td>输入框值改变时触发的事件，开发者可通过 onChange 事件来更新 value 值变化，不使用 v-model 时，onChange 函数必填</td><td>(value, event) =&gt; void</td></tr><tr><td>onUpdate:value</td><td>√</td><td>√</td><td>使用 <code>v-model:value</code> 时自动触发</td><td>(value, event) =&gt; void</td></tr><tr><td>onFocus</td><td>√</td><td>√</td><td>输入框获得焦点时触发，event.detail = {&#39;{value, height}&#39;} ，height 为键盘高度</td><td>event</td></tr><tr><td>onBlur</td><td>√</td><td>√</td><td>输入框失去焦点时触发，event.detail = {&#39;{ value, cursor }&#39;}</td><td>event</td></tr><tr><td>onConfirm</td><td>√</td><td>x</td><td>点击完成时，触发 confirm 事件，event.detail = {&#39;{ value: value }&#39;}</td><td>event</td></tr><tr><td>onLinechange</td><td>√</td><td>x</td><td>输入框行数变化时调用，event.detail = {&#39;{ height: 0, heightRpx: 0, lineCount: 0 }&#39;}</td><td>event</td></tr></tbody></table>',18);e.render=function(n,s,e,d,o,l){return t(),a("div",null,[p])};export default e;export{s as __pageData};