import{r as n,o as s,c as a,a as t,F as e,b as o,d as p}from"./app.ea66aa66.js";const l={},c=t("h2",{id:"cocoapods-podfile配置",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cocoapods-podfile配置","aria-hidden":"true"},"#"),o(" CocoaPods Podfile配置")],-1),i=o("官方推荐混合开发使用 CocoaPods 依赖管理和已安装的 Flutter SDK，则在 Xcode 中编译应用，就可以自动运行脚本来集成 dart 代码和 plugin。当然在此之前在原生iOS工程中集成Flutter需要先配置好CocoaPods，"),u={href:"https://guides.cocoapods.org/using/using-cocoapods.html",target:"_blank",rel:"noopener noreferrer"},r=o("CocoaPods"),k=o("是iOS的类库管理工具，用来管理第三方开源库。在原生iOS工程中执行pod init命令创建一个Podfile文件，然后在Podfile文件中添加Flutter模块依赖。"),d=p('<h2 id="podfile解析" tabindex="-1"><a class="header-anchor" href="#podfile解析" aria-hidden="true">#</a> Podfile解析</h2><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h3><p>Podfile是采用Ruby语法，编写的脚本文件，flutter_boost官方demo中内容如下</p><div class="language-ruby ext-rb"><pre class="language-ruby"><code><span class="token comment"># Uncomment this line to define a global platform for your project</span>\n<span class="token comment"># platform :ios, &#39;9.0&#39;</span>\n\n<span class="token comment"># CocoaPods analytics sends network stats synchronously affecting flutter build latency.</span>\n<span class="token constant">ENV</span><span class="token punctuation">[</span><span class="token string">&#39;COCOAPODS_DISABLE_STATS&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span>\n\nproject <span class="token string">&#39;Runner&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token string">&#39;Debug&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token symbol">:debug</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;Profile&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token symbol">:release</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;Release&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token symbol">:release</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">flutter_root</span></span>\n  generated_xcode_build_settings_path cd<span class="token operator">=</span> <span class="token builtin">File</span><span class="token punctuation">.</span>expand_path<span class="token punctuation">(</span><span class="token builtin">File</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Flutter&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Generated.xcconfig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> __FILE__<span class="token punctuation">)</span>\n  <span class="token keyword">unless</span> <span class="token builtin">File</span><span class="token punctuation">.</span>exist<span class="token operator">?</span><span class="token punctuation">(</span>generated_xcode_build_settings_path<span class="token punctuation">)</span>\n    <span class="token keyword">raise</span> <span class="token string">&quot;<span class="token interpolation"><span class="token delimiter tag">#{</span>generated_xcode_build_settings_path<span class="token delimiter tag">}</span></span> must exist. If you&#39;re running pod install manually, make sure flutter pub get is executed first&quot;</span>\n  <span class="token keyword">end</span>\n\n  <span class="token builtin">File</span><span class="token punctuation">.</span>foreach<span class="token punctuation">(</span>generated_xcode_build_settings_path<span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>line<span class="token operator">|</span>\n    matches <span class="token operator">=</span> line<span class="token punctuation">.</span>match<span class="token punctuation">(</span><span class="token regex">/FLUTTER_ROOT\\=(.*)/</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> matches<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip <span class="token keyword">if</span> matches\n  <span class="token keyword">end</span>\n  <span class="token keyword">raise</span> <span class="token string">&quot;FLUTTER_ROOT not found in <span class="token interpolation"><span class="token delimiter tag">#{</span>generated_xcode_build_settings_path<span class="token delimiter tag">}</span></span>. Try deleting Generated.xcconfig, then run flutter pub get&quot;</span>\n<span class="token keyword">end</span>\n\n<span class="token keyword">require</span> <span class="token builtin">File</span><span class="token punctuation">.</span>expand_path<span class="token punctuation">(</span><span class="token builtin">File</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;packages&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;flutter_tools&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;podhelper&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> flutter_root<span class="token punctuation">)</span>\n\nflutter_ios_podfile_setup\n\ntarget <span class="token string">&#39;Runner&#39;</span> <span class="token keyword">do</span>\n  flutter_install_all_ios_pods <span class="token builtin">File</span><span class="token punctuation">.</span>dirname<span class="token punctuation">(</span><span class="token builtin">File</span><span class="token punctuation">.</span>realpath<span class="token punctuation">(</span>__FILE__<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  \n  pod <span class="token string">&#39;AFNetworking&#39;</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token keyword">end</span>\n\npost_install <span class="token keyword">do</span> <span class="token operator">|</span>installer<span class="token operator">|</span>\n  installer<span class="token punctuation">.</span>pods_project<span class="token punctuation">.</span>targets<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>target<span class="token operator">|</span>\n    flutter_additional_ios_build_settings<span class="token punctuation">(</span>target<span class="token punctuation">)</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span>\n\n</code></pre></div><h3 id="名词解析" tabindex="-1"><a class="header-anchor" href="#名词解析" aria-hidden="true">#</a> 名词解析：</h3><ul><li><code>File.expand_path</code> :当前目录的父路径</li><li><code>File.joi</code> :拼接，并使用/分割 如 ../Flutter/Generated.xcconfig</li><li><code>File.exist</code> :路径是否存在，返回值为bool类型</li><li><code>unless</code> :unless式和 if式作用相反,后面语句为假则执行</li><li><code>raise</code> :抛异常</li><li><code>File.foreach do |line|</code> :遍历目录文件并逐行读取文件</li><li><code>line.match</code> :正则匹配</li><li><code>require</code> :引入文件</li><li><code>def</code> :定义方法</li></ul>',6);l.render=function(o,p){const l=n("OutboundLink");return s(),a(e,null,[c,t("blockquote",null,[t("p",null,[i,t("a",u,[r,t(l)]),k])]),d],64)};export default l;
