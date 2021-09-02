import{r as a,o as n,c as e,a as s,F as l,b as r,d as o}from"./app.ea66aa66.js";const c={},t=s("h1",{id:"manjaro-的异常处理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#manjaro-的异常处理","aria-hidden":"true"},"#"),r(" Manjaro 的异常处理")],-1),i=s("h2",{id:"解决-manjaro-录屏闪烁",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解决-manjaro-录屏闪烁","aria-hidden":"true"},"#"),r(" 解决 Manjaro 录屏闪烁")],-1),d=s("h3",{id:"_1-问题情况",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-问题情况","aria-hidden":"true"},"#"),r(" 1. 问题情况")],-1),u=s("p",null,"在使用 Manjaro 录屏后，发现录制出来的屏幕经常闪烁，部分画面遗失。",-1),h=s("h3",{id:"_2-解决方案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-解决方案","aria-hidden":"true"},"#"),r(" 2. 解决方案")],-1),p=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"步骤"),s("p",null,[s("code",null,"系统设置"),r(" > "),s("code",null,"硬件"),r(" > "),s("code",null,"显示和监控"),r(" > "),s("code",null,"混成器"),r(" > "),s("code",null,"避免撕裂(垂直同步)"),r(" > "),s("code",null,"从不")])],-1),m=s("p",null,[s("img",{src:"/os/manjaro/screen-flashing-when-recording.png",alt:"录屏闪烁"})],-1),b=s("h2",{id:"禁用笔记本键盘",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#禁用笔记本键盘","aria-hidden":"true"},"#"),r(" 禁用笔记本键盘")],-1),g=s("h3",{id:"_1-问题情况-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-问题情况-1","aria-hidden":"true"},"#"),r(" 1. 问题情况")],-1),x=s("p",null,"之前键盘进过水导致会启用按键失灵，所以需要禁用自带的键盘。",-1),f=s("h3",{id:"_2-解决方案-1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-解决方案-1","aria-hidden":"true"},"#"),r(" 2. 解决方案")],-1),k=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"初级方案"),s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# manjaro 下 xinput 被 xorg-xinput 替代"),r("\n"),s("span",{class:"token function"},"sudo"),r(" pacman -S xorg-xinput\n"),s("span",{class:"token comment"},"# 查看设备列表"),r("\nxinput list\n"),s("span",{class:"token comment"},"# 查看笔记本键盘信息 "),r("\nxinput list-props "),s("span",{class:"token string"},"'AT Translated Set 2 keyboard'"),r("\n"),s("span",{class:"token comment"},"# Device Enabled (147): 1 =》 `1` 表示维禁用"),r("\nxinput set-prop "),s("span",{class:"token number"},"17"),r(),s("span",{class:"token string"},"'Device Enabled'"),r(),s("span",{class:"token number"},"0"),r("\n"),s("span",{class:"token comment"},"# 再次查看设备信息即可"),r("\n")])])])],-1),_=s("div",{class:"custom-container danger"},[s("p",{class:"custom-container-title"},"终极方案"),s("p",null,[s("code",null,"关电源"),r(" > "),s("code",null,"打开后盖"),r(" > "),s("code",null,"拆除笔记本键盘排线")])],-1),v=s("h2",{id:"修复文件夹名为英文",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#修复文件夹名为英文","aria-hidden":"true"},"#"),r(" 修复文件夹名为英文")],-1),j=s("h3",{id:"_1-问题情况-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-问题情况-2","aria-hidden":"true"},"#"),r(" 1. 问题情况")],-1),y=s("p",null,"将系统设置为中文后，用户目录下的文件夹也随之变为中文，在日常使用时就会造成频繁切换输入这就让人很烦了。而直接重命名会导致出现一些问题。",-1),q=s("h3",{id:"_2-解决方案-2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-解决方案-2","aria-hidden":"true"},"#"),r(" 2. 解决方案")],-1),w=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"初级方案"),s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# 1. 找到 `～/.config/user-dirs.dis` 文件"),r("\n"),s("span",{class:"token function"},"vim"),r(" ~/.config/user-dirs.dirs \n"),s("span",{class:"token comment"},"# 2. 接着将中文命名修改为新改的英文，并使其生效"),r("\n"),s("span",{class:"token builtin class-name"},"source"),r(" ~/.config/user-dirs.dirs\n"),s("span",{class:"token comment"},"# 3. 然而这并没有结束，你还需要修改右侧图标的位置"),r("\n右键 "),s("span",{class:"token operator"},">"),r(" 编辑 "),s("span",{class:"token operator"},">"),r(" 位置\n")])])])],-1),S=s("h2",{id:"双显卡解决方案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#双显卡解决方案","aria-hidden":"true"},"#"),r(" 双显卡解决方案")],-1),M=r("参考 "),T={href:"https://blog.kongjune.com/manjaro-prime/",target:"_blank",rel:"noopener noreferrer"},D=r("在 Manjaro 配置 Optimus manager 实现 Nvidia-Prime 双显卡解决方案"),E=r(" 即可。"),L=s("p",null,[r("由于使用的版本为 "),s("code",null,"manjaro Lysia"),r("，所以配置项都无需处理，仅仅是：")],-1),O=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),r(" pacman -S optimus-manager optimus-manager-qt\n\n"),s("span",{class:"token comment"},"# 或需从 yay 安装"),r("\nyay -S optimus-manager-qt\n")])])],-1),R=s("p",null,"接着启用即可。",-1),A=s("blockquote",null,[s("p",null,"2020-12-17 更新")],-1),B=s("p",null,[r("在后续的使用中 "),s("code",null,"bbsswitch"),r(" 似乎被卸载了（不确定是我个人卸载，还是系统升级被移除）导致切换失败。")],-1),C=s("p",null,[r("在上面的页面中还有其他选择，如 "),s("code",null,"acpi_call"),r("，所以：")],-1),F=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# 安装"),r("\n"),s("span",{class:"token function"},"sudo"),r(" pacman -S acpi_call-dkms\n\n"),s("span",{class:"token comment"},"# 启用"),r("\n"),s("span",{class:"token function"},"sudo"),r(" modprobe acpi_call\n")])])],-1),N=r("接着可以使用命令行工具 "),P={href:"https://github.com/dglt1/optimus-switch-sddm",target:"_blank",rel:"noopener noreferrer"},Q=r("optimus-switch-sddm"),z=r("。"),G=s("p",null,[r("在界面 QT 工具中选用 "),s("code",null,"acpi_call"),r(" 导致桌面无法启动，未排查出原因，后续修改配置文件 "),s("code",null,"/etc/optimus-manager/optimus-manager.conf"),r("，改回 "),s("code",null,"switching=bbswitch"),r(" 才使得桌面启动。")],-1),H=s("h2",{id:"屏幕时不时卡死",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#屏幕时不时卡死","aria-hidden":"true"},"#"),r(" 屏幕时不时卡死")],-1),I=s("h3",{id:"_1-问题情况-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-问题情况-3","aria-hidden":"true"},"#"),r(" 1. 问题情况")],-1),J=s("p",null,"在看视频时出现的概率比较大，即屏幕频繁绘制时出问题了。",-1),K=s("h3",{id:"_2-解决方案-3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-解决方案-3","aria-hidden":"true"},"#"),r(" 2. 解决方案")],-1),U=s("p",null,[r("初步猜测是显卡驱动有问题。然后在软件包搜了下 "),s("code",null,"nouveau"),r("，果然存在 "),s("code",null,"xf86-video-nouveau"),r(" 开源驱动，移除后就恢复正常了。")],-1),V=s("p",null,"应该是哪次更新系统顺手给安装上去了。",-1),W=s("h2",{id:"风扇起飞",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#风扇起飞","aria-hidden":"true"},"#"),r(" 风扇起飞")],-1),X=s("h3",{id:"_1-问题情况-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-问题情况-4","aria-hidden":"true"},"#"),r(" 1. 问题情况")],-1),Y=s("p",null,"系统风扇起飞，一般是由于某个程序占用资源过多导致。",-1),Z=s("h3",{id:"_2-解决方案-4",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-解决方案-4","aria-hidden":"true"},"#"),r(" 2. 解决方案")],-1),$=s("blockquote",null,[s("p",null,"解决后可能会导致其他问题。")],-1),aa=s("p",null,"引起该问题有很多情况，之前也总是忘记抓罪犯：",-1),na={href:"https://wiki.archlinux.org/index.php/Baloo",target:"_blank",rel:"noopener noreferrer"},ea=r("baloo"),sa=r(" 建立文件索引"),la=o('<div class="language-bash ext-sh"><pre class="language-bash"><code>balooctl status  <span class="token comment"># 查看状态</span>\nbalooctl <span class="token function">suspend</span>   <span class="token comment"># 停止</span>\nbalooctl disable  <span class="token comment"># 禁用</span>\n</code></pre></div><p>除了命令行还可以在 <code>系统</code> =》 <code>查找</code> 中找到该配置项。</p>',2),ra=s("h2",{id:"旧系统内核无法删除",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#旧系统内核无法删除","aria-hidden":"true"},"#"),r(" 旧系统内核无法删除")],-1),oa=s("h3",{id:"_1-问题情况-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-问题情况-5","aria-hidden":"true"},"#"),r(" 1. 问题情况")],-1),ca=s("p",null,"卸载时出现以下提示：",-1),ta=s("div",{class:"language-text ext-text"},[s("pre",{class:"language-text"},[s("code",null,"checking dependencies...\n:: removing linux510-headers breaks dependency 'linux510-headers' required by linux-latest-headers\n:: removing linux510-r8168 breaks dependency 'linux510-r8168' required by linux-latest-r8168\n")])],-1),ia=s("h3",{id:"_2-解决方案-5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-解决方案-5","aria-hidden":"true"},"#"),r(" 2. 解决方案")],-1),da=r("参考 "),ua={href:"https://forum.manjaro.org/t/cannot-remove-linux57-breaks-dependency-required-by-linux-latest-something/7679",target:"_blank",rel:"noopener noreferrer"},ha=r("Cannot remove linux57 - breaks dependency .. required by linux-latest-[something]"),pa=r("，执行："),ma=s("div",{class:"language-bash ext-sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),r(" pacman -Rcsnu linux510-headers\n"),s("span",{class:"token function"},"sudo"),r(" pacman -Rcsnu linux510-r8168\n")])])],-1),ba=s("p",null,"再次尝试后即可。",-1);c.render=function(r,o){const c=a("OutboundLink");return n(),e(l,null,[t,i,d,u,h,p,m,b,g,x,f,k,_,v,j,y,q,w,S,s("p",null,[M,s("a",T,[D,s(c)]),E]),L,O,R,A,B,C,F,s("p",null,[N,s("a",P,[Q,s(c)]),z]),G,H,I,J,K,U,V,W,X,Y,Z,$,aa,s("ol",null,[s("li",null,[s("p",null,[s("a",na,[ea,s(c)]),sa]),la])]),ra,oa,ca,ta,ia,s("p",null,[da,s("a",ua,[ha,s(c)]),pa]),ma,ba],64)};export default c;