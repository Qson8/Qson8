import{r as e,o as a,c as o,a as d,F as n,d as c,b as s}from"./app.ea66aa66.js";const r={},t=c('<h1 id="编辑器-vscode" tabindex="-1"><a class="header-anchor" href="#编辑器-vscode" aria-hidden="true">#</a> 编辑器 VSCode</h1><p>插件安装位置为 <code>~/.vscode/extensions/</code> 下。</p><h2 id="喜欢的配置" tabindex="-1"><a class="header-anchor" href="#喜欢的配置" aria-hidden="true">#</a> 喜欢的配置</h2><h3 id="_1-隐藏菜单栏" tabindex="-1"><a class="header-anchor" href="#_1-隐藏菜单栏" aria-hidden="true">#</a> 1. 隐藏菜单栏</h3><blockquote><p>在稍微熟练 <code>VSCode</code> 后菜单栏的存在就显得有些多余，占位也偏多。</p></blockquote><p>打开 <code>Settings</code>，输入 <code>菜单栏(中文)</code> 或 <code>Menu Bar Visibility(英文)</code> 可找到该配置项，选择 <code>toggle</code> 即当按下 <code>ALT</code> 时会进行显隐切换。</p><h3 id="_2-侧边栏" tabindex="-1"><a class="header-anchor" href="#_2-侧边栏" aria-hidden="true">#</a> 2. 侧边栏</h3><blockquote><p>虽然侧边栏默认是在左边，但编写代码时基本无需关注菜单栏的状态，放在右边更为恰当。</p></blockquote><p>打开 <code>Settings</code>，输入 <code>侧边栏(中文)</code> 或 <code>Side Bar(英文)</code> 可找到该配置项，选择 <code>right</code> 即可。</p><p><code>CTRL + B</code> 可快速切换侧边栏显隐。</p><h3 id="_3-禅模式" tabindex="-1"><a class="header-anchor" href="#_3-禅模式" aria-hidden="true">#</a> 3. 禅模式</h3><blockquote><p>更为专注的模式，不过我也仅在编写<s>文档</s>笔记时使用。</p></blockquote><p>在 <code>VSCode</code> 界面中按下 <code>CTRL + K</code> 然后再按下 <code>Z</code> 即可进入禅模式。</p><h3 id="_4-文件跳转" tabindex="-1"><a class="header-anchor" href="#_4-文件跳转" aria-hidden="true">#</a> 4. 文件跳转</h3><p>在 <code>VSCode</code> 界面中按下 <code>CTRL + P</code> 即可进入搜索，找到对应的文件即可。</p><p>如果知道在当前文件夹且知道位置那么可以按下 <code>CTRL + SHIFT + E</code> 打开资源管理器，再使用上下键即可。</p><h3 id="_5-创建文件-文件夹" tabindex="-1"><a class="header-anchor" href="#_5-创建文件-文件夹" aria-hidden="true">#</a> 5. 创建文件/文件夹</h3><blockquote><p>可根据 <code>侧边栏</code> 或 <code>文件跳转</code> 中的步骤进入对应位置。</p></blockquote><p>先按下 <code>CTRL + K</code>，再按下 <code>CTRL + S</code> 即可进入快捷键设置。输入 <code>newFile</code> 绑定按键 <code>CTRL + N</code>，在搜索 <code>newFolder</code> 绑定按键 <code>CTRL + SHIFT + N</code>，当然也可以选择你喜欢的。</p><h3 id="_6-命令行" tabindex="-1"><a class="header-anchor" href="#_6-命令行" aria-hidden="true">#</a> 6. 命令行</h3><p>按下 <code>CTRL + ~</code> 即可。</p><h2 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h2><p>作为视觉动物，一个良好的配色可以帮助你更快的识别问题。</p><h3 id="_1-区分项目" tabindex="-1"><a class="header-anchor" href="#_1-区分项目" aria-hidden="true">#</a> 1. 区分项目</h3>',24),i=s("可利用 "),p=d("code",null,"Title Bar Colors",-1),h=s(" 的 "),l=d("code",null,"激活、未激活",-1),u=s(" 颜色来区分开启的多个 "),b=d("code",null,"VSCode",-1),g=s(" 窗口，可在"),k={href:"http://zhongguose.com/",target:"_blank",rel:"noopener noreferrer"},f=s("中国色"),x=s("选取喜欢的颜色。"),_=d("h2",{id:"版本提升",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#版本提升","aria-hidden":"true"},"#"),s(" 版本提升")],-1),C={id:"_1-快速启动-scripts-脚本",tabindex:"-1"},S=d("a",{class:"header-anchor",href:"#_1-快速启动-scripts-脚本","aria-hidden":"true"},"#",-1),q=s(" 1. 快速启动 scripts 脚本 "),T=d("p",null,[s("打开项目后在侧边栏会根据 "),d("code",null,"package.json"),s(" 脚本生成 "),d("code",null,"NPM SCRIPTS"),s(" ，点击即可快速启动。")],-1),v={id:"_2-对比差异",tabindex:"-1"},L=d("a",{class:"header-anchor",href:"#_2-对比差异","aria-hidden":"true"},"#",-1),R=s(" 2. 对比差异 "),j=d("p",null,[s("利用 "),d("code",null,"CTRL"),s(" 选中 2 个文件，然后右键 "),d("code",null,"Select for Compare"),s(" 即可查看两个文件之间的差异。")],-1),w={id:"_3-时间线",tabindex:"-1"},V=d("a",{class:"header-anchor",href:"#_3-时间线","aria-hidden":"true"},"#",-1),m=s(" 3. 时间线 "),B=c('<p>查看一个文件被 <code>git</code> 跟踪的记录。</p><p>打开 <code>Settings</code>，切换到 <code>JSON</code> 格式：</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;timeline.showView&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',3),F={id:"_4-建议预览",tabindex:"-1"},N=d("a",{class:"header-anchor",href:"#_4-建议预览","aria-hidden":"true"},"#",-1),y=s(" 4. 建议预览 "),I=c('<p>对提示的代码进行预览，当提示的内容较多时比较实用。</p><p>打开 <code>Settings</code>，切换到 <code>JSON</code> 格式：</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;editor.suggest.preview&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;editor.suggest.previewMode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subwordDiff&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',4),M={href:"https://code.visualstudio.com/docs",target:"_blank",rel:"noopener noreferrer"},O=s("VSCode");r.render=function(c,s){const r=e("OutboundLink"),P=e("Badge");return a(),o(n,null,[t,d("p",null,[i,p,h,l,u,b,g,d("a",k,[f,d(r)]),x]),_,d("h3",C,[S,q,d(P,{text:"v1.37"})]),T,d("h3",v,[L,R,d(P,{text:"v1.41"})]),j,d("h3",w,[V,m,d(P,{text:"unknown"})]),B,d("h3",F,[N,y,d(P,{text:"v1.57"})]),I,d("ol",null,[d("li",null,[d("a",M,[O,d(r)])])])],64)};export default r;
