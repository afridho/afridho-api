"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Gratitude List"},s=void 0,i={unversionedId:"productivity/gratitude-list",id:"productivity/gratitude-list",title:"Gratitude List",description:"This api is Bear, Shortcut, and Cron connected. Every week, all the gratitude list i have created will send to my device (pushover)",source:"@site/docs/productivity/gratitude-list.md",sourceDirName:"productivity",slug:"/productivity/gratitude-list",permalink:"/productivity/gratitude-list",draft:!1,editUrl:"https://github.com/afridho/afridho-api/blob/master/client/docs/productivity/gratitude-list.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Gratitude List"},sidebar:"tutorialSidebar",previous:{title:"Productivity",permalink:"/category/productivity"},next:{title:"Tools",permalink:"/category/tools"}},l={},d=[{value:"Environment",id:"environment",level:2},{value:"MongoDB Database",id:"mongodb-database",level:3},{value:"<code>GET</code> Endpoint",id:"get-endpoint",level:2},{value:"<code>POST</code> Endpoint",id:"post-endpoint",level:2},{value:"How to using",id:"how-to-using",level:2},{value:"Result",id:"result",level:3},{value:"Source Code",id:"source-code",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This api is Bear, Shortcut, and Cron connected. Every week, all the gratitude list i have created will send to my device (pushover)"),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ENV"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"PUSHOVER_KEY")),(0,a.kt)("td",{parentName:"tr",align:null},"user key to access device in pushover")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"PUSHOVER_TOKEN_GRATITUDE_LIST")),(0,a.kt)("td",{parentName:"tr",align:null},"pushover app token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"GRATITUDE_LIST_PASSWORD")),(0,a.kt)("td",{parentName:"tr",align:null},"password to submit message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"GRATITUDE_LIST_NICKNAME")),(0,a.kt)("td",{parentName:"tr",align:null},"nickname to message (optional)")))),(0,a.kt)("h3",{id:"mongodb-database"},"MongoDB Database"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"ENV"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Database")),(0,a.kt)("td",{parentName:"tr",align:null},"productivity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Collection")),(0,a.kt)("td",{parentName:"tr",align:null},"gratitude_list")))),(0,a.kt)("h2",{id:"get-endpoint"},(0,a.kt)("inlineCode",{parentName:"h2"},"GET")," Endpoint"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," To Retrieve 1 week Gratitude List")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/api/gratitude-list\n")),(0,a.kt)("h2",{id:"post-endpoint"},(0,a.kt)("inlineCode",{parentName:"h2"},"POST")," Endpoint"),(0,a.kt)("admonition",{title:"store data",type:"tip"},(0,a.kt)("p",{parentName:"admonition"}," To store data gratitude list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'headers = { password : "password for authorization"}\n\n/api/gratitude-list\n')),(0,a.kt)("h2",{id:"how-to-using"},"How to using"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," : content message"),(0,a.kt)("li",{parentName:"ul"},"set ",(0,a.kt)("inlineCode",{parentName:"li"},"password")," in header")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response Example: /api/gratitude-list"',title:'"Response',"Example:":!0,'/api/gratitude-list"':!0},'{\n  "code":200,\n  "status":"Sent",\n}\n')),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="gratitude-list.js"',title:'"gratitude-list.js"'},"const axios = require('axios');\nconst express = require(\"express\");\nconst router = express.Router();\nconst FormData = require('form-data');\nrequire('dotenv').config()\nconst MONGODB_USER = process.env.MONGODB_PASS\nconst MONGODB_PASS = process.env.MONGODB_PASS\nconst USER_KEY = process.env.PUSHOVER_KEY\nconst TOKEN = process.env.PUSHOVER_TOKEN_GRATITUDE_LIST\nconst GET_NICKNAME = process.env.GRATITUDE_LIST_NICKNAME ? (' '+ process.env.GRATITUDE_LIST_NICKNAME) : ''\nconst GET_PASSWORD = process.env.GRATITUDE_LIST_PASSWORD \nconst { MongoClient, ServerApiVersion } = require('mongodb');\nconst { format } = require('date-fns')\n\n\n// Connect to MongoDB\nconst uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;\nconst client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });\nconst database = client.db('productivity');\nconst collection = database.collection('gratitude_list');\n\nconst total_days = 7 // 1 week retrieved data\nconst days_before = (new Date(new Date().setDate(new Date().getDate() - total_days)))\n\nrouter.post(\"/\", async (req, res) =>{\n    if (!req.headers['password']) {\n        res.status(401)\n        res.json({ message : \"You need password for authorization\"})   \n        res.end()\n    }else{\n    if(req.headers['password'] !== GET_PASSWORD) {\n        res.json({message : 'Password wrong. Unauthorized!'})\n        res.status(403)\n        res.end()\n    }else{\n        _data = {message : req.body.message, date : new Date() }\n        await mongo_insert(_data)\n        res.json({message : req.body.message})\n        res.status(200)\n        res.end()\n    }}\n})\n\nrouter.get(\"/\", async (req, res) =>{\n    const data = await get_data_one_week()\n    var str = ''\n    data.map(val => {\n        str = str.concat(`\u25c9 ${val.message} <small>(${format(val.date, 'eeee, HH:mm')})</small>\\n\\n`);\n    })\n    const total = data?.length\n    const content = await parse_messages_pushover(str, total)\n    await send_pushover(content)\n    \n    res.status(200)\n    res.json({message: 'Sent', code: 200})\n    res.end()\n})\n\nasync function get_data_one_week(){\n    return await collection.find({\n            date: {\n                $lt: new Date(),\n                $gte: days_before,\n            },\n        }).toArray()\n}\n\nasync function parse_messages_pushover(message, total){\n    if(total === 0) return `<h3>Very sad${GET_NICKNAME}, no gratitude this week\ud83d\ude22</h3>`\n    return `<h3>This is what are you thankful${GET_NICKNAME}\ud83d\ude0d</h3>`+message+\"<h5>Total = \"+total+\"</h5>\"\n}\n\nasync function mongo_insert(data){\n    return await collection.insertOne(data);\n}\n\nasync function get_week_number(){\n    currentDate = new Date();\n    startDate = new Date(currentDate.getFullYear(), 0, 1);\n    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));\n    return Math.ceil(days / 7);\n}\n\n\nasync function send_pushover(message){\n    const week_number = await get_week_number()\n    const range_start = format(days_before, 'dd MMM')\n    const range_end = format(new Date(), 'dd MMM')\n\n    let fd = new FormData();\n    fd.append(\"token\", TOKEN);\n    fd.append(\"user\", USER_KEY);\n    fd.append(\"title\", `${range_start} - ${range_end}\u3018Week ${week_number}\u3019`)\n    fd.append(\"message\", message)\n    fd.append(\"html\", 1)\n\n    try{\n        return await axios({\n            method: \"POST\",\n            url: \"https://api.pushover.net/1/messages.json\",\n            data: fd,\n            headers: { \"Content-Type\": \"multipart/form-data\" },\n        }).then(content => {});\n    }catch (error) {\n        return ({request: null, status: 0})\n    }\n}\n\n\nmodule.exports = router;\n")))}u.isMDXComponent=!0}}]);