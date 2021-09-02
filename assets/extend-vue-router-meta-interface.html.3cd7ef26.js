import{r as n,o as a,c as s,a as e,F as t,d as p,b as o}from"./app.ea66aa66.js";const c={},r=p('<h1 id="扩展-vue-router-meta-信息" tabindex="-1"><a class="header-anchor" href="#扩展-vue-router-meta-信息" aria-hidden="true">#</a> 扩展 Vue Router Meta 信息</h1><p>在实际应用中会在 <code>meta</code> 添加一些字段，方便做路由上的功能扩展。而 TypeScript 中要添加对应的类型提示首先想到对 <code>RouteRecordRaw</code> 做扩展：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MenuMeta</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 标题</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span>\n  <span class="token comment">// 图标</span>\n  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  <span class="token comment">// 在侧边栏中隐藏</span>\n  hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MenuRecordRaw</span> <span class="token operator">=</span> RouteRecordRaw <span class="token operator">&amp;</span> <span class="token punctuation">{</span>\n  meta<span class="token operator">?</span><span class="token operator">:</span> MenuMeta <span class="token operator">&amp;</span> RouteMeta\n  children<span class="token operator">?</span><span class="token operator">:</span> MenuRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',3),l=o("对于部分原生方法需要重新指定类型，不够友好，后续在文档中看到"),k={href:"https://next.router.vuejs.org/zh/guide/advanced/meta.html",target:"_blank",rel:"noopener noreferrer"},u=o("路由元信息"),i=o("："),d=p('<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&#39;vue-router&#39;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 路由名称</span>\n    title<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token comment">// 路由图标</span>\n    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token comment">// 从侧边栏隐藏</span>\n    hideInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',1);c.render=function(p,o){const c=n("OutboundLink");return a(),s(t,null,[r,e("p",null,[l,e("a",k,[u,e(c)]),i]),d],64)};export default c;