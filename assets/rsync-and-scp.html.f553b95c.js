import{r as t,o as n,c as s,a as e,F as a,b as l,d as c}from"./app.ea66aa66.js";const o={},p=e("h2",{id:"rsync",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rsync","aria-hidden":"true"},"#"),l(" Rsync")],-1),d={href:"https://zh.wikipedia.org/wiki/Rsync",target:"_blank",rel:"noopener noreferrer"},i=l("Rsync"),r=l("（Remote Sync），使用其 “Quick Check” 算法实现增量复制数据。可以使用 rsync 在不同目录（本地），不同服务器（远程）之前实现数据备份。在 3.x 版本可以做到一边对比差异一边复制。"),u=c('<h3 id="_1-选项-特性" tabindex="-1"><a class="header-anchor" href="#_1-选项-特性" aria-hidden="true">#</a> 1. 选项（特性）</h3><p>Rsync 具有很多优异的特性，例如保持文件属性、权限；使用 rsh、ssh 等隧道加密传输文件（rsync 本身不会对数据加密）等。</p><p>具体的特性可以根据其命令参数得知：</p><table><thead><tr><th style="text-align:center;">短参数</th><th style="text-align:center;">长参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">-v</td><td style="text-align:center;">--verbose</td><td style="text-align:left;">显示输出过程</td></tr><tr><td style="text-align:center;">-q</td><td style="text-align:center;">--quiet</td><td style="text-align:left;">静默模式</td></tr><tr><td style="text-align:center;">-P</td><td style="text-align:center;">--progress</td><td style="text-align:left;">显示同步的过程及传输时的进度信息</td></tr><tr><td style="text-align:center;">-e</td><td style="text-align:center;">--rsh</td><td style="text-align:left;">指定隧道</td></tr><tr><td style="text-align:center;">-a</td><td style="text-align:center;">--archive</td><td style="text-align:left;">多参数集合（-rtopgDl）</td></tr><tr><td style="text-align:center;">-r</td><td style="text-align:center;">--recursive</td><td style="text-align:left;">递归</td></tr><tr><td style="text-align:center;">-t</td><td style="text-align:center;">--times</td><td style="text-align:left;">保持修改时间属性</td></tr><tr><td style="text-align:center;">-o</td><td style="text-align:center;">--owner</td><td style="text-align:left;">保持属主</td></tr><tr><td style="text-align:center;">-p</td><td style="text-align:center;">--perms</td><td style="text-align:left;">保持权限</td></tr><tr><td style="text-align:center;">-g</td><td style="text-align:center;">--group</td><td style="text-align:left;">保持用户组</td></tr><tr><td style="text-align:center;">-D</td><td style="text-align:center;">--devices</td><td style="text-align:left;">保持设备文件信息</td></tr><tr><td style="text-align:center;">-l</td><td style="text-align:center;">--links</td><td style="text-align:left;">保持软链接</td></tr><tr><td style="text-align:center;">-z</td><td style="text-align:center;">--compress</td><td style="text-align:left;">压缩</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--bwlimit=KBPS</td><td style="text-align:left;">限速，限制 I/O 带宽</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--delete</td><td style="text-align:left;">删除，即无差异同步数据</td></tr><tr><td style="text-align:center;">-b</td><td style="text-align:center;">--backup</td><td style="text-align:left;">备份，对于已存在同样的文件名时，老文件重命名为 <code>~filename</code>，可以使用 <code>--suffix</code> 指定</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--backup-dir</td><td style="text-align:left;">备份文件指定目录</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--exclude=PATTERN</td><td style="text-align:left;">排除传输的文件模式</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--exclude-from=FILE</td><td style="text-align:left;">排除 FILE 中指定模式的文件</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--include=PATTERN</td><td style="text-align:left;">包含传输的文件模式</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--include-from=FILE</td><td style="text-align:left;">包含 FILE 中指定模式的文件</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">--password-file=FILE</td><td style="text-align:left;">从 FILE 中得到密码</td></tr></tbody></table><p>其中常用参数为 <code>-avz</code>。</p><h3 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2. 语法</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span>    SRC    DEST\n<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span>    SRC    <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>host:DEST\n<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span>    <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST:SRC    DEST\n<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span>\t  <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST::SRC   DEST\n<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span>    SRC    <span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST::DEST\n<span class="token function">rsync</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span>    rsync://<span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST<span class="token punctuation">[</span>:PORT<span class="token punctuation">]</span>/SRC    <span class="token punctuation">[</span>DEST<span class="token punctuation">]</span>\n</code></pre></div><h3 id="_3-常用示例" tabindex="-1"><a class="header-anchor" href="#_3-常用示例" aria-hidden="true">#</a> 3. 常用示例</h3><ul><li><p>目录间推送数据</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rsync</span> /ect/hosts /opt\n<span class="token comment"># 保持属性</span>\n<span class="token function">rsync</span> -vzrtopg --progress /etc/hosts /opt\n</code></pre></div></li><li><p>目录间同步数据</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 同步文件</span>\n<span class="token function">touch</span> /null.txt\n<span class="token function">cat</span> /opt/hosts\n<span class="token function">rsync</span> -r --delete /null.txt /opt/hosts\n<span class="token function">cat</span> /opt/hosts <span class="token comment"># 验证</span>\n<span class="token comment"># 同步目录</span>\n<span class="token function">mkdir</span> /null\n<span class="token function">rsync</span>  -r --delete /null /opt\n<span class="token function">ls</span> /opt <span class="token comment"># 验证</span>\n</code></pre></div></li><li><p>推送数据到对应主机端口</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rsync</span> -avz /etc/hosts root@45.78.12.89:/opt\n<span class="token comment"># 等价于</span>\n<span class="token function">rsync</span> -avz /etc/hosts -e  <span class="token string">&#39;ssh -p 22&#39;</span> root@45.78.12.89:/opt \n<span class="token comment"># 切换到对应服务器上</span>\n<span class="token function">cat</span> /opt/hosts <span class="token comment"># 验证</span>\n</code></pre></div></li><li><p>从服务器拉取数据</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">rsync</span> -avz -e  <span class="token string">&#39;ssh -p 22&#39;</span> root@45.78.12.89:/opt/hosts /opt\n<span class="token function">cat</span> /opt/hosts <span class="token comment"># 验证</span>\n</code></pre></div></li><li><p>配合 <code>sshpass</code> 使用：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>sshpass -p <span class="token string">&#39;your_password&#39;</span> <span class="token function">rsync</span> -avz /srv/app/dist tencent:/app\n</code></pre></div></li></ul><h3 id="_4-可能存在的问题" tabindex="-1"><a class="header-anchor" href="#_4-可能存在的问题" aria-hidden="true">#</a> 4. 可能存在的问题</h3><p>看到部分文章说 rsync 传输大量小文件时会停止僵死（小文件是多小，大量是多大也没有描述清楚），这个问题搜了下，尚未得知具体的原因：</p>',11),h={href:"https://superuser.com/questions/291803/best-way-to-copy-millions-of-files-between-2-servers",target:"_blank",rel:"noopener noreferrer"},g=l("Best way to copy millions of files between 2 servers"),y={href:"https://serverfault.com/questions/365103/how-to-speed-up-rsync-for-small-files",target:"_blank",rel:"noopener noreferrer"},x=l("How to speed up rsync for small files"),k=c('<h2 id="scp" tabindex="-1"><a class="header-anchor" href="#scp" aria-hidden="true">#</a> Scp</h2><p><code>rsync</code> 虽然可以增量下载，速度快一些，还有更多的功能，但是 <code>scp</code> 非常不占资源，<code>rsync</code> 在小文件众多时会导致磁盘 <code>I/O</code> 非常高。</p><h3 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h3><p>相对于 <code>rsync</code>，<code>scp</code> 的语法则简单很多：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">scp</span> <span class="token punctuation">(</span>选项<span class="token punctuation">)</span> <span class="token punctuation">(</span>源文件<span class="token punctuation">)</span> <span class="token punctuation">(</span>目标文件<span class="token punctuation">)</span>\n\n<span class="token comment"># 选项</span>\n-1：使用 <span class="token function">ssh</span> 协议版本1；\n-2：使用 <span class="token function">ssh</span> 协议版本2；\n-4：使用 ipv4；\n-6：使用 ipv6；\n-B：以批处理模式运行；\n-C：使用压缩；\n-F：指定 <span class="token function">ssh</span> 配置文件；\n-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如私钥），此参数直接传递给 ssh；\n-l：指定宽带限制；\n-o：指定使用的 <span class="token function">ssh</span> 选项；\n-P：指定远程主机的端口号；\n-p：保留文件的最后修改时间，最后访问时间和权限模式；\n-q：不显示复制进度；\n-r：以递归方式复制。\n\n<span class="token comment"># 源文件：指定要复制的源文件。</span>\n<span class="token comment"># 目标文件：目标文件。格式为 `user@host:filename` （文件名为目标文件的名称）。</span>\n</code></pre></div><h3 id="_2-常用示例" tabindex="-1"><a class="header-anchor" href="#_2-常用示例" aria-hidden="true">#</a> 2. 常用示例</h3><ul><li><p>密码形式上传文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">scp</span> -r /home/shanyuhai/Download/test shanyuhai@47.111.23.259:/home/shanyuhai/downloads\n</code></pre></div><p>接着输入密码即可</p></li><li><p>秘钥形式上传文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">scp</span> -i ~/.ssh/id_rsa_xxx hi.png shanyuhai@47.111.23.259:/home/shanyuhai/downloads\n</code></pre></div></li><li><p>秘钥形式下载文件：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">scp</span> -i ~/.ssh/id_rsa_xxx shanyuhai@47.111.23.259:/home/shanyuhai/downloads/hi.png pictures\n</code></pre></div></li></ul><blockquote><p>还可以使用 <code>lrzsz</code> 来进行本地和远程的文件交互，不过需要双端都安装 <code>lrzsz</code>：</p><ul><li><p>下载（sz）</p><div class="language-bash ext-sh"><pre class="language-bash"><code>sz filename\n<span class="token comment"># 等待选择保存的本地路径</span>\n</code></pre></div></li><li><p>上传（rz）</p><div class="language-bash ext-sh"><pre class="language-bash"><code>rz\n<span class="token comment"># 等待选择文件</span>\n<span class="token comment"># （还可以拖拽文件）</span>\n</code></pre></div></li></ul></blockquote>',8);o.render=function(l,c){const o=t("OutboundLink");return n(),s(a,null,[p,e("p",null,[e("a",d,[i,e(o)]),r]),u,e("ol",null,[e("li",null,[e("a",h,[g,e(o)])]),e("li",null,[e("a",y,[x,e(o)])])]),k],64)};export default o;
