"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,slug:"/",title:"Home"},i="afridho-api",o={unversionedId:"intro",id:"intro",title:"Home",description:"1. Instagram Downloader",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/afridho/afridho-api/blob/master/client/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Home"},sidebar:"tutorialSidebar",next:{title:"Sports",permalink:"/category/sports"}},p={},u=[{value:"Install",id:"install",level:2},{value:"Run Dev",id:"run-dev",level:2},{value:"Build (Frontend)",id:"build-frontend",level:2},{value:"Note",id:"note",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"afridho-api"},"afridho-api"),(0,a.kt)("admonition",{title:"Favorites",type:"tip"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{href:"https://afridho-api.vercel.app/api/ig",target:"_self"},"Instagram Downloader")))),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("h2",{id:"run-dev"},"Run Dev"),(0,a.kt)("p",null,"Dev (Backend & Frontend)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev \n")),(0,a.kt)("p",null,"Open url for"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Backend ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000")),(0,a.kt)("li",{parentName:"ul"},"Frontend ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:4000"))),(0,a.kt)("h2",{id:"build-frontend"},"Build (Frontend)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run client:build\n")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Frontend folder in ",(0,a.kt)("inlineCode",{parentName:"li"},"client")),(0,a.kt)("li",{parentName:"ul"},"You must build client because it generates all modified files in ",(0,a.kt)("inlineCode",{parentName:"li"},"client:build"))))}s.isMDXComponent=!0}}]);