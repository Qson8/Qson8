import{r as n,o as s,c as a,a as t,F as o,d as p,b as c}from"./app.ea66aa66.js";const e={},l=p('<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><h3 id="_1-宏任务-macro-task" tabindex="-1"><a class="header-anchor" href="#_1-宏任务-macro-task" aria-hidden="true">#</a> 1. 宏任务（macro task）</h3><ul><li>script</li><li>I/O</li><li>xhr</li><li>setTimeout</li><li>setInterval</li><li>setImmediate(Node)</li><li>requestAnimationFrame(Browser)</li></ul><h3 id="_2-微任务-micro-task" tabindex="-1"><a class="header-anchor" href="#_2-微任务-micro-task" aria-hidden="true">#</a> 2. 微任务（micro task）</h3><ul><li>Promise</li><li>MutationObserve(Browser)</li><li>process.nextTick(Node)</li></ul><h3 id="_3-其他" tabindex="-1"><a class="header-anchor" href="#_3-其他" aria-hidden="true">#</a> 3. 其他</h3><ul><li>UI rendering(Browser)，其会在 <code>microtask queue</code> 之后，<code>macrotask queue</code> 之前</li></ul><h2 id="browser-event-loop" tabindex="-1"><a class="header-anchor" href="#browser-event-loop" aria-hidden="true">#</a> Browser Event Loop</h2><p>基本操作为，先执行<strong>一个</strong> <code>macro task</code>，过程中遇到 <code>micro task</code> 时，将其放到 <code>micro task</code> 的事件队列中，当前 <code>macro task</code> 执行完成后，查看 <code>micro task</code> 的事件队列，依次执行 <code>micro task</code>。如果还有 <code>macro task</code>，再执行<strong>下一个</strong> <code>macro task</code>。</p><ol><li>同步代码</li><li>执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行</li><li>执行 <code>microtask</code>，如果在执行 <code>microtask</code> 的过程中又产生了 <code>microtask</code>，那么那么会加入到队列的队尾，也会在这个周期被调用执行</li><li>执行完所有微任务后，如有必要会渲染页面 <ol><li>判断 <code>document</code> 是否需要更新，浏览器是 60Hz 的刷新率，每 16.6ms 才会更新一次</li><li>判断是否有 <code>resize</code> 或 <code>scroll</code> 事件，有的话会去触发事件，所以它们也至少 16.6ms 才会触发一次，自带节流</li><li>判断是否触发了 media query</li><li>更新动画并且发送事件</li><li>判断是否有全屏操作事件</li><li>执行 <code>requestAnimationFrame</code> 回调</li><li>执行 <code>intersectionObserve</code> 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好</li><li>更新界面</li></ol></li><li>然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 <code>setTimeout</code> 中的回调函数</li></ol><h2 id="node-event-loop" tabindex="-1"><a class="header-anchor" href="#node-event-loop" aria-hidden="true">#</a> Node Event Loop</h2><p>简化概览：</p><div class="language-text ext-text"><pre class="language-text"><code>   ┌───────────────────────────┐\n┌─&gt;│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle, prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming:   │\n│  │           poll            │&lt;─────┤  connections, │\n│  └─────────────┬─────────────┘      │   data, etc.  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n</code></pre></div><p>阶段概述：</p><ul><li>timers：本阶段执行已经被 <code>setTimeout</code> 和 <code>setInterval</code> 调度的回调函数</li><li>I/O callbacks：执行延迟到下一个循环迭代的 I/O 回调</li><li>idle、prepare：仅系统内部使用</li><li>poll：检索新的 I/O 事件；执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 <code>setImmediate</code> 调度之外的），其余情况 node 将在适当的时候在此阻塞</li><li>check：<code>setImmdiate</code> 回调函数在此执行</li><li>close callbacks：一次关闭的回调函数，如 <code>socket.on(&#39;close&#39;, () =&gt; {})</code></li></ul><h3 id="_1-settimeout-和-setimmdiate" tabindex="-1"><a class="header-anchor" href="#_1-settimeout-和-setimmdiate" aria-hidden="true">#</a> 1. setTimeout 和 setImmdiate</h3><p>执行计时器的顺序将根据调用它们的上下文而异。如果二者都从主模块内调用，则计时器将受进程性能的约束（这可能会受到计算机上其他正在运行应用程序的影响）。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;immediate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// timeout immediate</span>\n<span class="token comment">// or (上下两种均可能)</span>\n<span class="token comment">// immediate timeout</span>\n</code></pre></div><p>但，如果这两个函数放入一个 I/O 循环内调用，那么 <code>setImmdiate</code> 总是优先被调用：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>__filename<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;immediate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// immediate</span>\n<span class="token comment">// timeout</span>\n</code></pre></div><h2 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析" aria-hidden="true">#</a> 案例分析</h2><h3 id="demo-1" tabindex="-1"><a class="header-anchor" href="#demo-1" aria-hidden="true">#</a> demo-1</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nprocess<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;h&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;j&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;k&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;l&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>逐步分析：</p><ol><li>第一轮事件循环 <ol><li>第一个 <code>macro task(script)</code> 进入主线程，<code>console.log(&#39;a&#39;)</code>，输出 <code>a</code></li><li>遇到 <code>setTimeout</code>，将其回调加入 <code>macro task</code></li><li>遇到 <code>process.nextTick</code>，将其回调加入 <code>micro task</code></li><li>遇到 <code>new Promise</code>，执行输出 <code>g</code>，并将 <code>then</code> 加入 <code>micro task</code></li><li>遇到 <code>setTimeout</code>，将其回调加入 <code>macro task</code></li><li><code>macro task</code> 执行完毕，检查 <code>micro task</code> 并依次执行</li><li>执行 <code>process.nextTick</code> 回调，输出 <code>f</code></li><li>执行 <code>promise then</code>，输出 <code>h</code></li><li>检查 <code>macro task</code>，存在队列，进入第二轮</li></ol></li><li>第二轮事件循环 <ol><li>执行 <code>console.log(&#39;b&#39;)</code>，输出 <code>b</code></li><li>遇到 <code>process.nextTick</code>，将其回调加入 <code>micro task</code></li><li>遇到 <code>new Promise</code>，执行输出 <code>d</code>，并将 <code>then</code> 加入 <code>micro task</code></li><li>当前 <code>macro task</code> 执行完毕，开始 <code>micro task</code></li><li>执行 <code>process.nextTick</code>，输出 <code>c</code></li><li>执行 <code>promise then</code>，输出 <code>e</code></li><li>检查 <code>macro task</code>，存在队列，进入第三轮</li></ol></li><li>第三轮事件循环 <ol><li>执行 <code>console.log(&#39;i&#39;)</code>，输出 <code>i</code></li><li>遇到 <code>process.nextTick</code>，将其回调加入 <code>micro task</code></li><li>遇到 <code>new Promise</code>，执行输出 <code>k</code>，并将 <code>then</code> 加入 <code>micro task</code></li><li>当前 <code>macro task</code> 执行完毕，开始 <code>micro task</code></li><li>执行 <code>process.nextTick</code>，输出 <code>j</code></li><li>执行 <code>promise then</code>，输出 <code>l</code></li><li>检查 <code>macro task</code>，结束</li></ol></li></ol><h3 id="demo-2" tabindex="-1"><a class="header-anchor" href="#demo-2" aria-hidden="true">#</a> demo-2</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> $inner <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#inner&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> $outer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#outer&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 直接输出</span>\n\n  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 注册微任务</span>\n\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 注册宏任务</span>\n\n  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;animationFrame&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 注册宏任务</span>\n\n  $outer<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-random&#39;</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// DOM属性修改，触发微任务</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;observer&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>$outer<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  attributes<span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n$inner<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>\n$outer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>\n</code></pre></div><p>点击<code>#inner</code>，其执行顺序是：<code>click</code> -&gt; <code>promise</code> -&gt; <code>observer</code> -&gt; <code>click</code> -&gt; <code>promise</code> -&gt; <code>observer</code> -&gt; <code>animationFrame</code> -&gt; <code>animationFrame</code> -&gt; <code>timeout</code> -&gt; <code>timeout</code>。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',29),i={href:"https://zhuanlan.zhihu.com/p/72507900",target:"_blank",rel:"noopener noreferrer"},u=c("如何解释Event Loop面试官才满意？"),k={href:"https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/",target:"_blank",rel:"noopener noreferrer"},r=c("Node.js 事件循环，定时器和 process.nextTick()"),d={href:"https://juejin.cn/post/6844903657264136200",target:"_blank",rel:"noopener noreferrer"},m=c("微任务、宏任务与Event-Loop");e.render=function(p,c){const e=n("OutboundLink");return s(),a(o,null,[l,t("ul",null,[t("li",null,[t("a",i,[u,t(e)])]),t("li",null,[t("a",k,[r,t(e)])]),t("li",null,[t("a",d,[m,t(e)])])])],64)};export default e;
