import{d as n}from"./app.ea66aa66.js";const a={},s=n('<h2 id="关于-exec" tabindex="-1"><a class="header-anchor" href="#关于-exec" aria-hidden="true">#</a> 关于 exec</h2><p><code>exec</code> 方法在一个指定字符串中执行一个搜索匹配，返回一个结果数据或 <code>null</code>。</p><p>在设置了 <code>global</code> 或 <code>sticky</code> 标志位的情况下（如 <code>/foo/g</code> 或 <code>/foo/y</code>），<code>Regex</code> 对象是有状态的。他们会将上次成功匹配后的位置记录在 <code>lastIndex</code> 属性中。使用此特性，<code>exec</code> 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下，<code>String.prototype.match</code> 只会返回匹配到的结果。</p><blockquote><p>稍微测试下大概会保留 10s+。</p></blockquote><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="_1-示例" tabindex="-1"><a class="header-anchor" href="#_1-示例" aria-hidden="true">#</a> 1. 示例</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&quot;table football, foosball&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> arr<span class="token punctuation">;</span>\n\n<span class="token keyword">while</span> <span class="token punctuation">(</span>arr <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Found </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Next starts at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>reg<span class="token punctuation">.</span>lastIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// &quot;Found foo. Next starts at 9.&quot;</span>\n<span class="token comment">// &quot;Found foo. Next starts at 19.&quot;</span>\n</code></pre></div><h3 id="_2-返回值" tabindex="-1"><a class="header-anchor" href="#_2-返回值" aria-hidden="true">#</a> 2. 返回值</h3><p>如果匹配成功，则返回一个数组，并更新正则对象的 <code>lastIndex</code> 属性。</p><p>如果匹配失败，<code>exec</code> 方法返回 <code>null</code>，并将 <code>lastIndex</code> 重置为 0。</p><blockquote><p>被提到这么多次的 <code>lastIndex</code> 是什么？它是下一次匹配开始的位置。这就是匹配到 <code>null</code> 的原因。</p></blockquote>',11);a.render=function(n,a){return s};export default a;