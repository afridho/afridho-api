"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[786],{5722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(4848),o=n(8453);const i={sidebar_position:2,title:"Football Update (Automation)"},r=void 0,d={id:"sports/football-update-cron",title:"Football Update (Automation)",description:"Get recently match result of your favorite club automatically with cron and send to your device with Pushover Notification.",source:"@site/docs/sports/football-update-cron.md",sourceDirName:"sports",slug:"/sports/football-update-cron",permalink:"/sports/football-update-cron",draft:!1,unlisted:!1,editUrl:"https://github.com/afridho/afridho-api/blob/master/client/docs/sports/football-update-cron.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Football Update (Automation)"},sidebar:"tutorialSidebar",previous:{title:"Football Update",permalink:"/sports/football-update"},next:{title:"Social Media",permalink:"/category/social-media"}},l={},a=[{value:"<code>GET</code> Endpoint",id:"get-endpoint",level:2},{value:"How to using",id:"how-to-using",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Environment",id:"environment",level:3},{value:"MongoDB Database",id:"mongodb-database",level:3},{value:"Result",id:"result",level:2},{value:"Status",id:"status",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Get recently match result of your favorite club automatically with cron and send to your device with Pushover Notification."}),"\n",(0,s.jsxs)(t.h2,{id:"get-endpoint",children:[(0,s.jsx)(t.code,{children:"GET"})," Endpoint"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/api/fav-football-cron/{param}?alias={alias}&debug={debug}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-using",children:"How to using"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Same with this param api ",(0,s.jsx)(t.a,{href:"/sports/football-update#how-to-using",children:"Football Update"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"debug"})," : ",(0,s.jsx)(t.code,{children:"true or false"})," debug to force send notification"]}),"\n",(0,s.jsxs)(t.li,{children:["Set cron to access this http/api ",(0,s.jsx)(t.a,{href:"#result",children:"Run Api \ud83c\udfc3\ud83c\udffb\u200d\u2642\ufe0f"})]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsx)(t.p,{children:"Pushover will send notification if data has update or new club favorite added."})]}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(t.h3,{id:"environment",children:"Environment"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"ENV"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"MONGODB_USER"})}),(0,s.jsx)(t.td,{children:"mongodb cluster user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"MONGODB_PASS"})}),(0,s.jsx)(t.td,{children:"mongodb cluster pass"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"PUSHOVER_KEY"})}),(0,s.jsx)(t.td,{children:"user key to access device in pushover"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"PUSHOVER_TOKEN_FOOTBALL_UPDATE"})}),(0,s.jsx)(t.td,{children:"token of Pushover specific app"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"mongodb-database",children:"MongoDB Database"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Cluster"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Cluster0"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Database"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"afridho-api"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Collection"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"football_update_cron"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Document Schema"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"club_name, status, date"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"result",children:"Result"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/api/fav-football-cron/arsenal\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="Response : Successful send pushover notification."',children:'{\n  "code" : 200,\n  "status" : "Pushover sent."\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="Response : No Pushover sent"',children:'{\n  "code" : 200,\n  "status" : "no update data."\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="Response : Debug mode"',children:'{\n  "debug" : true,\n  "code" : 200,\n  "status" : "Pushover sent."\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://pk2dbshx.status.cron-job.org",children:"https://pk2dbshx.status.cron-job.org"})}),"\n",(0,s.jsx)("iframe",{loading:"lazy",src:"https://pk2dbshx.status.cron-job.org",name:"iFrame Name",scrolling:"Yes",height:"700",width:"100%"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);