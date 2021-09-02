import{r as e,o as a,c as t,a as n,F as r,d as l,b as c}from"./app.ea66aa66.js";const p={},h=l('<h4 id="逻辑" tabindex="-1"><a class="header-anchor" href="#逻辑" aria-hidden="true">#</a> 逻辑</h4><p>最近在写的应用需要实现打开微信的功能，对应原生来说这个很容易实现。 思路就是： * iOS需要找到对应App的URL Scheme，配置在项目中 * 检测是否能打开这个App * 打开App</p><h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4><h5 id="配置url-scheme" tabindex="-1"><a class="header-anchor" href="#配置url-scheme" aria-hidden="true">#</a> | 配置URL Scheme</h5>',4),i=c("iOS需要在项目中配置指定的URL Scheme，可以在"),s={href:"http://blog.520lee.com/2019/12/07/iOS%EF%BC%9A%20URL%20Scheme%20%E4%B8%80%E8%A7%88/",target:"_blank",rel:"noopener noreferrer"},u=c("点击这里"),d=c("查看你需要打开应用的URL Scheme，"),o=n("p",null,"提前设置好打开APP的列表，也就是白名单，并配置到工程的 info.plist中去。 LSApplicationQueriesSchemes ，加入对应的 URL Scheme，如图",-1),g=l('<div class="language-text ext-text"><pre class="language-text"><code>&lt;key&gt;LSApplicationQueriesSchemes&lt;/key&gt;\n\t&lt;array&gt;\n\t\t&lt;string&gt;wechat&lt;/string&gt;\n\t&lt;/array&gt;\n</code></pre></div><h5 id="编码实现" tabindex="-1"><a class="header-anchor" href="#编码实现" aria-hidden="true">#</a> | 编码实现</h5><p>检测是否能打开这个App，并打开app业务实现，我们可以使用url_launcher这个插件，可以到这里搜索https://pub.dartlang.org/</p><ul><li><p>在项目.yaml文件依赖内添加库依赖，vscode保存会自动获得packages,或终端命令：<code>flutter packages get</code>.</p></li><li><p>实现调转的逻辑，也可以写在你封装好的公共类里，提供接口出来。可以拷贝下面的代码，在需要调用的地方调用这个方法即可。</p></li></ul><div class="language-text ext-text"><pre class="language-text"><code>/*\n  * 检测是否安装了微信\n  * \n  * 1. 配置url Scheme\n  * 2. 用Application 的canopenUrl 的方法判断 (YES代表已安装)\n  */\n  _launchURL() async {\n    // 1.url Scheme\n    const url = &#39;wechat://&#39;;\n    \n    // 2. 判断当前手机是否安装某app. 能否正常跳转\n    if (await canLaunch(url)) {\n      // 2.1 正常跳转\n      await launch(url);\n    } else {\n      // 2.2 不能跳转\n      throw &#39;Could not launch $url&#39;;\n    }\n  }\n</code></pre></div><p>相关源码可以到github下载：https://github.com/Qson8/check_app_install</p>',6);p.render=function(l,c){const p=e("OutboundLink");return a(),t(r,null,[h,n("p",null,[i,n("a",s,[u,n(p)]),d]),o,n("img",{src:l.$withBase("/flutter/jump_app.jpg"),alt:"https://img01.jituwang.com/171030/256786-1G030214S965.jpg"},null,8,["src"]),g],64)};export default p;
