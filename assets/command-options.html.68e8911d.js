import{r as a,o as e,c as i,a as l,F as h,d as r,b as d}from"./app.ea66aa66.js";const n={},s=r('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Linux 中命令繁多，记住所有的命令实在是太过困难，使用 <code>man</code> 命令或 <code>--help</code> 查看详细的使用说明来得更为快捷。以 <code>ls</code> 示例：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">man</span> <span class="token function">ls</span> <span class="token comment"># ls - list directory contents</span>\n<span class="token function">ls</span> --help\n</code></pre></div><p>命令大部分有各自的含义，而命令选项基本上都是互相参考，具有类似的含义。</p>',4),u=d("关于命令行参数 「-」和「--」有一个"),t={href:"https://www.zhihu.com/question/267095526/answers/updated",target:"_blank",rel:"noopener noreferrer"},c=d("讨论"),o=d("。"),_=r('<h2 id="命令选项" tabindex="-1"><a class="header-anchor" href="#命令选项" aria-hidden="true">#</a> 命令选项</h2><h3 id="_1-a" tabindex="-1"><a class="header-anchor" href="#_1-a" aria-hidden="true">#</a> 1. -a</h3><ul><li>all：全部，所有</li><li>archive：存档</li><li>append：附加</li></ul><h3 id="_2-b" tabindex="-1"><a class="header-anchor" href="#_2-b" aria-hidden="true">#</a> 2. -b</h3><ul><li>blocksize：块大小</li><li>batch：批处理模式</li></ul><h3 id="_3-c" tabindex="-1"><a class="header-anchor" href="#_3-c" aria-hidden="true">#</a> 3. -c</h3><ul><li>commands：执行命令</li><li>create：创建</li></ul><h3 id="_4-d" tabindex="-1"><a class="header-anchor" href="#_4-d" aria-hidden="true">#</a> 4. -d</h3><ul><li>debug：调试</li><li>delete：删除</li><li>directory：目录</li></ul><h3 id="_5-e" tabindex="-1"><a class="header-anchor" href="#_5-e" aria-hidden="true">#</a> 5. -e</h3><ul><li>execute：执行</li><li>edit：编辑</li><li>exclude：排除</li></ul><h3 id="_6-f" tabindex="-1"><a class="header-anchor" href="#_6-f" aria-hidden="true">#</a> 6. -f</h3><ul><li>force：强制</li><li>file：文件</li><li>configuration file：指定配置文件</li></ul><h3 id="_7-g" tabindex="-1"><a class="header-anchor" href="#_7-g" aria-hidden="true">#</a> 7. -g</h3><ul><li>global：全局</li></ul><h3 id="_8-h" tabindex="-1"><a class="header-anchor" href="#_8-h" aria-hidden="true">#</a> 8. -h</h3><ul><li>--help：帮助</li><li>human readable： 人性化显示</li><li>headers：头部</li></ul><h3 id="_9-i" tabindex="-1"><a class="header-anchor" href="#_9-i" aria-hidden="true">#</a> 9. -i</h3><ul><li>interactive：交互模式</li><li>include：包含</li></ul><h3 id="_11-k" tabindex="-1"><a class="header-anchor" href="#_11-k" aria-hidden="true">#</a> 11. -k</h3><ul><li>keep：保留</li><li>kill：杀掉</li></ul><h3 id="_12-l" tabindex="-1"><a class="header-anchor" href="#_12-l" aria-hidden="true">#</a> 12. -l</h3><ul><li>long listing format：长格式</li><li>list：列表</li><li>load：读取</li></ul><h3 id="_13-m" tabindex="-1"><a class="header-anchor" href="#_13-m" aria-hidden="true">#</a> 13. -m</h3><ul><li>message：消息</li><li>manual：手册</li><li>create home：创建 home 目录</li></ul><h3 id="_14-n" tabindex="-1"><a class="header-anchor" href="#_14-n" aria-hidden="true">#</a> 14. -n</h3><ul><li>number：行号，编号</li><li>no：拒绝</li></ul><h3 id="_15-o" tabindex="-1"><a class="header-anchor" href="#_15-o" aria-hidden="true">#</a> 15. -o</h3><ul><li>output：输出</li><li>options：选项</li></ul><h3 id="_16-p" tabindex="-1"><a class="header-anchor" href="#_16-p" aria-hidden="true">#</a> 16. -p</h3><ul><li>port：端口</li><li>protocol：协议</li><li>password：密码</li></ul><h3 id="_17-q" tabindex="-1"><a class="header-anchor" href="#_17-q" aria-hidden="true">#</a> 17. -q</h3><ul><li>quiet：静默</li></ul><h3 id="_18-r" tabindex="-1"><a class="header-anchor" href="#_18-r" aria-hidden="true">#</a> 18. -r</h3><ul><li>reverse：反转</li><li>recursive：递归</li></ul><h3 id="_19-s" tabindex="-1"><a class="header-anchor" href="#_19-s" aria-hidden="true">#</a> 19. -s</h3><ul><li><p>slient：安静</p></li><li><p>size：大小</p></li></ul><h3 id="_20-t" tabindex="-1"><a class="header-anchor" href="#_20-t" aria-hidden="true">#</a> 20. -t</h3><ul><li>tag：标签</li><li>type：类型</li></ul><h3 id="_21-u" tabindex="-1"><a class="header-anchor" href="#_21-u" aria-hidden="true">#</a> 21. -u</h3><ul><li>user：用户名</li></ul><h3 id="_22-v" tabindex="-1"><a class="header-anchor" href="#_22-v" aria-hidden="true">#</a> 22. -v</h3><ul><li>verbose：冗长</li><li>version：版本</li></ul><h3 id="_23-w" tabindex="-1"><a class="header-anchor" href="#_23-w" aria-hidden="true">#</a> 23. -w</h3><ul><li>width：宽度</li><li>warning：警告</li></ul><h3 id="_24-x" tabindex="-1"><a class="header-anchor" href="#_24-x" aria-hidden="true">#</a> 24. -x</h3><ul><li>exclude：排除</li></ul><h3 id="_25-y" tabindex="-1"><a class="header-anchor" href="#_25-y" aria-hidden="true">#</a> 25. -y</h3><ul><li>yes：同意</li></ul><h3 id="_26-z" tabindex="-1"><a class="header-anchor" href="#_26-z" aria-hidden="true">#</a> 26. -z</h3><ul><li>zip：压缩</li></ul>',51);n.render=function(r,d){const n=a("OutboundLink");return e(),i(h,null,[s,l("p",null,[u,l("a",t,[c,l(n)]),o]),_],64)};export default n;
