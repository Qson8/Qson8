import{r as n,o as s,c as a,a as e,F as o,b as p,d as t}from"./app.ea66aa66.js";const l={},r=e("h2",{id:"概念",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),p(" 概念")],-1),c=e("p",null,"存储过程三大作用：",-1),u=e("ul",null,[e("li",null,"存储和管理 SQL 代码"),e("li",null,"性能优化"),e("li",null,"数据安全")],-1),k=e("p",null,"糟糕的是我似乎很少见到它们的应用，到底要不要使用存储过程也有一些探讨：",-1),d={href:"https://www.zhihu.com/question/54408187",target:"_blank",rel:"noopener noreferrer"},i=p("存储过程在实际项目中用的多吗？（知乎）"),w={href:"https://segmentfault.com/q/1010000007981279",target:"_blank",rel:"noopener noreferrer"},h=p("存储过程在实际项目中用的多吗？（SF）"),y={href:"https://www.zhihu.com/question/57545650/answer/325422160",target:"_blank",rel:"noopener noreferrer"},E=p("为什么阿里巴巴Java开发手册里要求禁止使用存储过程？"),m=t('<p>但基础的还是要了解的。</p><h2 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> get_customer_by_id<span class="token punctuation">;</span>\n\n<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>\n\n<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> get_customer_by_id <span class="token punctuation">(</span>\n    id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n<span class="token keyword">BEGIN</span>\n    <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span>  customers c\n    <span class="token keyword">WHERE</span> c<span class="token punctuation">.</span>cust_id <span class="token operator">=</span> id<span class="token punctuation">;</span>\n<span class="token keyword">END</span><span class="token comment">//</span>\n\n<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>\n</code></pre></div><p>再调用：</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">CALL</span> get_customer_by_id<span class="token punctuation">(</span><span class="token number">10003</span><span class="token punctuation">)</span>\n</code></pre></div>',5);l.render=function(p,t){const l=n("OutboundLink");return s(),a(o,null,[r,c,u,k,e("ul",null,[e("li",null,[e("a",d,[i,e(l)])]),e("li",null,[e("a",w,[h,e(l)])]),e("li",null,[e("a",y,[E,e(l)])])]),m],64)};export default l;
