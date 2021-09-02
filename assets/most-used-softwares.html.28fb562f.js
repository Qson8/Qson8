import{r as e,o as a,c as n,a as s,F as l,d as t,b as i}from"./app.ea66aa66.js";const o={},r=t('<h2 id="teamviewer" tabindex="-1"><a class="header-anchor" href="#teamviewer" aria-hidden="true">#</a> TeamViewer</h2><h3 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h3><p>远程桌面访问解决方案，远程支持，在线协作。</p><h3 id="_2-使用中存在的问题" tabindex="-1"><a class="header-anchor" href="#_2-使用中存在的问题" aria-hidden="true">#</a> 2. 使用中存在的问题</h3><p>使用 TeamViewer 提示：未就绪，请检查您的连接。</p><h3 id="_3-解决方案" tabindex="-1"><a class="header-anchor" href="#_3-解决方案" aria-hidden="true">#</a> 3. 解决方案</h3><div class="custom-container tip"><p class="custom-container-title">一行解决</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> teamviewer --daemon <span class="token builtin class-name">enable</span>\n</code></pre></div></div><h2 id="rdesktop" tabindex="-1"><a class="header-anchor" href="#rdesktop" aria-hidden="true">#</a> rdesktop</h2><h3 id="_1-介绍-1" tabindex="-1"><a class="header-anchor" href="#_1-介绍-1" aria-hidden="true">#</a> 1. 介绍</h3><p>一个开源 <code>UNIX</code> 客户端，用于连接到 <code>Windows</code> 远程桌面服务，能够本地使用远程桌面协议（RDP）来呈现用户的 <code>Windows</code> 桌面。</p><h3 id="_2-使用方式" tabindex="-1"><a class="header-anchor" href="#_2-使用方式" aria-hidden="true">#</a> 2. 使用方式</h3><div class="custom-container tip"><p class="custom-container-title">步骤</p><ol><li>首先需要安装 <code>rdesktop</code></li><li>接着直接使用 <code>rdesktop ip:port -u username</code></li></ol></div><div class="custom-container danger"><p class="custom-container-title">注：</p><ol><li>添加 -f 参数可以以全屏模式进入</li><li>在全屏模式下按 <code>ctrl+alt+enter</code> 可以退出全屏（这个才是想记录的……）</li><li>其余参数见谷歌</li></ol></div><h2 id="filezilla-client" tabindex="-1"><a class="header-anchor" href="#filezilla-client" aria-hidden="true">#</a> FileZilla Client</h2><h3 id="_1-介绍-2" tabindex="-1"><a class="header-anchor" href="#_1-介绍-2" aria-hidden="true">#</a> 1. 介绍</h3><p>一个免费的软件跨平台FTP应用程序，由 <code>FileZilla Client</code> 和 <code>FileZilla Server</code> 组成。</p><h3 id="_2-使用中存在的问题-1" tabindex="-1"><a class="header-anchor" href="#_2-使用中存在的问题-1" aria-hidden="true">#</a> 2. 使用中存在的问题</h3><p>连接的文件夹及文件存在中文乱码问题。</p><h3 id="_3-解决方案-1" tabindex="-1"><a class="header-anchor" href="#_3-解决方案-1" aria-hidden="true">#</a> 3. 解决方案</h3><div class="custom-container tip"><p class="custom-container-title">步骤</p><ol><li><p>点击左上角 <code>文件</code></p></li><li><p>点击站点管理器</p></li><li><p>点击字符集</p></li><li><p>选择 <code>强制 UTF-8</code></p></li><li><p>确定</p></li></ol></div><h2 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh" aria-hidden="true">#</a> Zsh</h2><h3 id="_1-介绍-3" tabindex="-1"><a class="header-anchor" href="#_1-介绍-3" aria-hidden="true">#</a> 1. 介绍</h3><p>一个更为酷炫的 shell，当然在服务器你还是老老实实的使用 bash，一切求稳。</p><h3 id="_2-使用中存在的问题-2" tabindex="-1"><a class="header-anchor" href="#_2-使用中存在的问题-2" aria-hidden="true">#</a> 2. 使用中存在的问题</h3><p>从 zsh 切换到 bash 需要重启电脑，要重新执行的时 <code>.zshrec</code> 而不是 <code>.bashrc</code></p><h3 id="_3-解决方案-2" tabindex="-1"><a class="header-anchor" href="#_3-解决方案-2" aria-hidden="true">#</a> 3. 解决方案</h3><div class="custom-container tip"><p class="custom-container-title">操作</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 从 bash 切换到 zsh</span>\n<span class="token builtin class-name">exec</span> <span class="token function">zsh</span>\n<span class="token builtin class-name">source</span> .zshrc\n<span class="token comment"># 从 zsh 切换到 bash</span>\n<span class="token builtin class-name">exec</span> <span class="token function">bash</span>\n<span class="token builtin class-name">source</span> .bashrc\n<span class="token comment"># 设置开机启动的默认</span>\nchsh -s /bin/bash\nchsh -s /bin/zsh\n<span class="token comment"># 可以在 shells 中查看有哪些可以切换</span>\n<span class="token function">cat</span> /etc/shells\n</code></pre></div></div><div class="custom-container danger"><p class="custom-container-title">注：</p><p>zsh 在使用时会存在一些问题:</p><ol><li><p>当使用 <code>source ~/.zshrc</code> 切换主题时，<code>command not found: fortune</code></p><p>安装 <code>fortune-mod</code> 即可</p></li></ol></div><h2 id="virtualbox" tabindex="-1"><a class="header-anchor" href="#virtualbox" aria-hidden="true">#</a> VirtualBox</h2><h3 id="_1-介绍-4" tabindex="-1"><a class="header-anchor" href="#_1-介绍-4" aria-hidden="true">#</a> 1. 介绍</h3><p>一款虚拟机软件。</p><h3 id="_2-使用方式-1" tabindex="-1"><a class="header-anchor" href="#_2-使用方式-1" aria-hidden="true">#</a> 2. 使用方式</h3><div class="custom-container tip"><p class="custom-container-title">步骤</p><ol><li><p>首先需要安装 <code>virtualbox</code> 。</p></li><li><p>然后准备好对应系统的 <code>IOS</code> 文件启动即可。</p></li></ol></div>',33),c={class:"custom-container danger"},d=s("p",{class:"custom-container-title"},"注：",-1),h=s("p",null,"virtualbox 在启动时直接失败:",-1),p=t('<li><p>部分错误提示信息：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Kernel driver not installed</span>\n<span class="token comment"># The VirtualBox Linux kernel driver (vboxdrv) is either not loaded or there is a permission problem with /dev/vboxdrv. Please reinstall the kernel module by executing</span>\n<span class="token comment"># &#39;/sbin/vboxconfig&#39;</span>\n<span class="token comment"># as root.</span>\n<span class="token comment"># ......</span>\n</code></pre></div></li>',1),u=i("解决步骤来源于："),m={href:"https://dev.to/nabbisen/virtualbox-how-to-solve-a-problem-about-failure-in-starting-vm-on-manjaro-linux-49fg",target:"_blank",rel:"noopener noreferrer"},v=i("VirtualBox: How To Fix Failure In Starting VM (On Manjaro Linux)"),b=s("li",null,[s("p",null,"获取操作系统版本细节"),s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"uname"),i(" -r\n"),s("span",{class:"token comment"},"# 4.19.56-1-MANJARO"),i("\n")])])])],-1),x=s("p",null,"安装软件",-1),g=s("li",null,"virtualbox",-1),f=s("li",null,"virtualbox-host-dkms",-1),_=i("linux419-virtualbox-host-modules "),k=s("li",null,[s("p",null,"重新执行"),s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),i(" vboxreload \n")])])])],-1),w=t('<h2 id="vmware-workstation" tabindex="-1"><a class="header-anchor" href="#vmware-workstation" aria-hidden="true">#</a> VMware Workstation</h2><h3 id="_1-介绍-5" tabindex="-1"><a class="header-anchor" href="#_1-介绍-5" aria-hidden="true">#</a> 1. 介绍</h3><p>一款虚拟机软件，基本使用方式与 VirtualBox 一致。</p><h3 id="_2-使用中存在的问题-3" tabindex="-1"><a class="header-anchor" href="#_2-使用中存在的问题-3" aria-hidden="true">#</a> 2. 使用中存在的问题</h3>',4),z=s("p",null,"启动虚拟机失败：",-1),V=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,"Could not open dev/vmmon | Unable to open kernel device | Failed to initialize monitor device\n")])],-1),F=s("p",null,"解决方案为：",-1),T={class:"custom-container danger"},M=t('<p class="custom-container-title">注</p><p>这是由于安装 <code>linux-headers</code> 时版本选择错误所致。</p><p>首先获取内核版本号：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">uname</span> -r <span class="token comment"># 4.19.66-1-MANJARO</span>\n</code></pre></div><p>在 Octopi 中重新安装：</p>',5),O=s("li",null,"安装 linux419-headers；",-1),y=i("移除 linux316-headers "),A=i("。"),B=s("p",null,"接着重启电脑即可。",-1),N=s("p",null,"创建虚拟机后无法联网：",-1),C=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,"Could not connect 'Ethernet0' to virtual network '/dev/vmnet8'. More information can be found in the vmware.log file. Failed to connect virtual device 'Ethernet0'.\n")])],-1),E=s("p",null,"解决方案为：",-1),Z={class:"custom-container danger"},j=s("p",{class:"custom-container-title"},"注",-1),H=s("p",null,"这是由于未启动 vmware 的网络服务。",-1),I=i("解决方案来源于："),L={href:"https://www.reddit.com/r/archlinux/comments/9povuy/vmware_could_not_connect_ethernet0_to_virtual/",target:"_blank",rel:"noopener noreferrer"},P=i("vmware_could_not_connect_ethernet0_to_virtual"),R=s("p",null,"启用 vmware 的网络服务即可：",-1),S=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),i(" systemctl start vmware-networks.service "),s("span",{class:"token comment"},"# 临时"),i("\n")])])],-1),U=t("<li><p>修改网卡配置：</p><p>在执行完上一步的启用 vmware 网络服务后，输入 <code>ip addr</code> 可以查看当前的网卡状态。</p><p>可以看到输出结果相对于之前多了 <code>vmnet1</code>、<code>vmnet8</code> 两块网卡的配置，这是 VMware 由于默认开启了 Host-Only 模式和 NAT 模式（NAT 可能是我开启的，暂不纠正），如果启动了 Briged（桥接网卡）还会出现 <code>vmnet0</code>。</p><p>回到 VMware，点击 <code>Edit &gt; Virtual Network Editor</code> 进一步配置，此时你就可以修改 Host-Only 模式、NAT 模式、Briged 模式的配置了。</p></li>",1);o.render=function(t,i){const o=e("OutboundLink"),W=e("Badge");return a(),n(l,null,[r,s("div",c,[d,h,s("ol",null,[p,s("li",null,[s("p",null,[u,s("a",m,[v,s(o)])])]),b,s("li",null,[x,s("ul",null,[g,f,s("li",null,[_,s(W,{text:"对应的版本 419",type:"warn"})])])]),k])]),w,s("ol",null,[s("li",null,[z,V,F,s("div",T,[M,s("ol",null,[O,s("li",null,[y,s(W,{text:"误选为 316，需对应各自的错误",type:"warn"}),A])]),B])]),s("li",null,[N,C,E,s("div",Z,[j,H,s("p",null,[I,s("a",L,[P,s(o)])]),R,S])]),U])],64)};export default o;
