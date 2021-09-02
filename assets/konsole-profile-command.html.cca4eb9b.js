import{r as a,o as n,c as s,a as e,F as o,b as r,d as l}from"./app.ea66aa66.js";const t={},p=e("h2",{id:"介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),r(" 介绍")],-1),c=e("p",null,"修改了 Konsole Profile 的 Command 后无法启动。",-1),i=l('<h2 id="排查问题" tabindex="-1"><a class="header-anchor" href="#排查问题" aria-hidden="true">#</a> 排查问题</h2><h3 id="_1-默认操作" tabindex="-1"><a class="header-anchor" href="#_1-默认操作" aria-hidden="true">#</a> 1. 默认操作</h3><p>直接卸载重装 <code>Konsole</code>，失败。</p><h3 id="_2-删除配置文件" tabindex="-1"><a class="header-anchor" href="#_2-删除配置文件" aria-hidden="true">#</a> 2. 删除配置文件</h3><p>不要模仿，其余软件可能导致问题。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">whereis</span> konsole\n<span class="token comment"># /usr/bin/konsole /usr/share/konsole</span>\n<span class="token comment"># 删除以上文件夹内容，重装依旧失败</span>\n</code></pre></div><h3 id="_3-找到-konsole-profile-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-找到-konsole-profile-配置文件" aria-hidden="true">#</a> 3. 找到 konsole profile 配置文件</h3><p>所以最后的问题就是找到 konsole profile 的配置文件。</p>',8),d=r("多番查找下找到了参考"),h={href:"https://forum.manjaro.org/t/konsole-settings-are-not-persistent/2471/6",target:"_blank",rel:"noopener noreferrer"},u=r("内容"),k=r("，其中指出了配置文件所在位置为 "),f=e("code",null,"~/.local/share/konsole/xxx.profile",-1),m=r("。"),b=l('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.local/share/konsole/Shell.profile\n\n<span class="token comment"># 找到以下内容</span>\n<span class="token punctuation">[</span>General<span class="token punctuation">]</span>\n<span class="token assign-left variable">Command</span><span class="token operator">=</span>error <span class="token function">bash</span>\n<span class="token assign-left variable">Name</span><span class="token operator">=</span>Shell\n<span class="token assign-left variable">Parent</span><span class="token operator">=</span>FALLBACK/\n<span class="token assign-left variable">StartInCurrentSessionDir</span><span class="token operator">=</span>true\n\n<span class="token comment"># 将 Command 恢复</span>\n</code></pre></div><p>重启启动 <code>Konsole</code>，启用成功。</p>',2);t.render=function(r,l){const t=a("OutboundLink");return n(),s(o,null,[p,c,e("img",{src:r.$withBase("/os/manjaro/konsole-profile-command.png"),alt:"Konsole 无法启动"},null,8,["src"]),i,e("p",null,[d,e("a",h,[u,e(t)]),k,f,m]),b],64)};export default t;
