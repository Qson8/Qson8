import{r as s,o as n,c as a,a as e,F as p,d as o,b as t}from"./app.ea66aa66.js";const r={},c=o('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>触发器是在 INSERT、UPDATE、DELETE 语句前后自动执行的一段。</p><p>每个表每个事件每次只允许一个触发器，因此每个表最多支持 6 个触发器（每条 INSERT、UPDATE、DELETE 的之前和之后）。</p><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> INSERT</h3>',5),k={href:"https://blog.csdn.net/qinzaoxiaozhu/article/details/111037233",target:"_blank",rel:"noopener noreferrer"},d=t("MYSQL5以后，不允许触发器返回任何结果"),l=t("，而且缺乏返回的对比，不如为其新增一列。"),E=o('<div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> orders_after_insert<span class="token punctuation">;</span>\n\n<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>\n\n<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> orders_after_insert\n\t<span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> orders\n  <span class="token keyword">FOR EACH ROW</span>\n<span class="token keyword">BEGIN</span>\n    <span class="token keyword">SELECT</span> NEW<span class="token punctuation">.</span>order_num <span class="token keyword">INTO</span> <span class="token variable">@order</span><span class="token punctuation">;</span>\n<span class="token keyword">END</span><span class="token comment">//</span>\n\n<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>\n</code></pre></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> UPDATE</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> vendors_before_update<span class="token punctuation">;</span>\n\n<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>\n\n<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> vendors_before_update\n\tBEFORE <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> vendors\n    <span class="token keyword">FOR EACH ROW</span>\n<span class="token keyword">BEGIN</span>\n    <span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>vend_state <span class="token operator">=</span> upper<span class="token punctuation">(</span>NEW<span class="token punctuation">.</span>vend_state<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">END</span><span class="token comment">//</span>\n\n<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>\n</code></pre></div>',3);r.render=function(o,t){const r=s("OutboundLink");return n(),a(p,null,[c,e("p",null,[e("a",k,[d,e(r)]),l]),E],64)};export default r;
