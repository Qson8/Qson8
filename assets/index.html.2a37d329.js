import{r as e,o as t,c as a,a as r,F as n,b as l}from"./app.ea66aa66.js";const s={},i=r("h2",{id:"介绍",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),l(" 介绍")],-1),o=r("p",null,"一些可以快捷使用的脚本，更复杂的推荐油猴。",-1),u=r("h2",{id:"如何使用",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#如何使用","aria-hidden":"true"},"#"),l(" 如何使用")],-1),c=r("p",null,"将下方的脚本拖拽至标签栏即可全局使用。",-1),d=r("h2",{id:"脚本",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#脚本","aria-hidden":"true"},"#"),l(" 脚本")],-1),p={href:"javascript: document.querySelectorAll('*').forEach(q => q.style.outline = q.style.outline ? '' : '1px solid red')"},h=r("details",{class:"custom-container details"},[r("summary",null,"说明"),r("p",null,[l("可以给页面中所有的元素添加外边框，便于查看 "),r("code",null,"DOM"),l(" 结构。")])],-1),m={href:"javascript: document.querySelectorAll('a').forEach(a=>{if(!a.style.pointerEvents){a.setAttribute('markPointerEvents',true);a.style.pointerEvents='none';return;}if(a.getAttribute('markPointerEvents')&&a.style.pointerEvents==='none'){a.removeAttribute('markPointerEvents');a.style.pointerEvents='';return;}})"},f=r("details",{class:"custom-container details"},[r("summary",null,"说明"),r("p",null,"阻止 a 链接跳转，便于复制文字。"),r("p",null,"拖到书签栏位置后，点击一次禁止跳转，再点击恢复跳转。")],-1);s.render=function(l,s){const v=e("Badge");return t(),a(n,null,[i,o,u,c,r("img",{src:l.$withBase("/bookmark/bookmark-scripts.gif"),alt:"bookmark scripts"},null,8,["src"]),d,r("p",null,[r("a",p,[r(v,{text:"外边框",type:"error",vertical:"middle"})])]),h,r("p",null,[r("a",m,[r(v,{text:"阻止链接跳转",type:"error",vertical:"middle"})])]),f],64)};export default s;