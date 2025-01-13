(this["webpackJsonpfinancial-data-filtering-app"]=this["webpackJsonpfinancial-data-filtering-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(19)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l);n(13),n(14);const s="https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=j34oIZHQww8ycoR5QhWyRpyYmNXd0XDn";let o;var u=async function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;try{if(o)return console.log("Using cached data."),o;const a=await fetch(s);if(!a.ok){if(429===a.status&&t>0)return console.warn("Rate limit hit. Retrying in ".concat(n/1e3," seconds...")),await new Promise(e=>setTimeout(e,n)),e(t-1,2*n);throw new Error("Failed to fetch data: ".concat(a.status," - ").concat(a.statusText))}const r=await a.json();return o=r,r}catch(a){if(t>0)return console.warn("Error occurred: ".concat(a.message,". Retrying in ").concat(n/1e3," seconds...")),await new Promise(e=>setTimeout(e,n)),e(t-1,2*n);throw console.error("Error fetching income statement data:",a),a}};n(15);var i=function(e){let{startDate:t,setStartDate:n,endDate:a,setEndDate:l}=e;return r.a.createElement("div",{className:"date-range"},r.a.createElement("label",null,"Start Date:",r.a.createElement("input",{type:"date",value:t||"",onChange:e=>n(e.target.value)})),r.a.createElement("label",null,"End Date:",r.a.createElement("input",{type:"date",value:a||"",onChange:e=>l(e.target.value)})))};n(16),n(17);var m=function(e){let{min:t,setMin:n,max:a,setMax:l,minLabel:c,maxLabel:s}=e;return r.a.createElement("div",{className:"num-range"},r.a.createElement("label",null,r.a.createElement("span",null,c,": "),r.a.createElement("input",{type:"number",value:t||"",onChange:e=>n(Number(e.target.value))})),r.a.createElement("label",null,r.a.createElement("span",null,s,": "),r.a.createElement("input",{type:"number",value:a||"",onChange:e=>l(Number(e.target.value))})))};n(18);var d=function(e){let{sortBy:t,setSortBy:n,sortOrder:l,setSortOrder:c,label:s}=e;const[o,u]=Object(a.useState)(" -");return Object(a.useEffect)(()=>{t!==s&&u(" -")},[t,s]),r.a.createElement("th",{onClick:()=>{if(t===s){const e="ascending"===l?"descending":"ascending";c(e),u("ascending"===e?" \ud83d\udd3c":" \ud83d\udd3d")}else n(s),c("ascending"),u(" \ud83d\udd3c")},className:"sort-select"},r.a.createElement("span",null,s),o)};var E=function(){const[e,t]=Object(a.useState)([]),[n,l]=Object(a.useState)([]),[c,s]=Object(a.useState)(""),[o,E]=Object(a.useState)(""),[f,b]=Object(a.useState)(""),[g,p]=Object(a.useState)(""),[v,h]=Object(a.useState)(""),[S,y]=Object(a.useState)(""),[O,w]=Object(a.useState)("none"),[D,j]=Object(a.useState)("ascending");return Object(a.useEffect)(()=>{!async function(){const e=await u();t(e),l(e)}()},[]),Object(a.useEffect)(()=>{if("none"===O)return;const t=[...e].filter(e=>{const t=new Date(e.date),n=c?new Date(c):null,a=o?new Date(o):null;return(!n||t>=n)&&(!a||t<=a)&&(!g||e.revenue>=g)&&(!f||e.revenue<=f)&&(!S||e.netIncome>=S)&&(!v||e.netIncome<=v)});t.sort((e,t)=>{let n,a;return"Date"===O?(n=new Date(e.date),a=new Date(t.date)):"Revenue"===O?(n=e.revenue,a=t.revenue):"Net Income"===O&&(n=e.netIncome,a=t.netIncome),"ascending"===D?n>a?1:-1:n<a?1:-1}),l(t)},[O,D,e,c,o,g,f,S,v]),r.a.createElement("div",null,r.a.createElement("div",{className:"filters"},r.a.createElement(i,{startDate:c,setStartDate:s,endDate:o,setEndDate:E}),r.a.createElement(m,{min:g,setMin:p,max:f,setMax:b,minLabel:"Minimum Revenue",maxLabel:"Maximum Revenue"}),r.a.createElement(m,{min:S,setMin:y,max:v,setMax:h,minLabel:"Minimum Income",maxLabel:"Maximum Income"})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(d,{sortBy:O,setSortBy:w,setSortOrder:j,sortOrder:D,label:"Date"}),r.a.createElement(d,{sortBy:O,setSortBy:w,setSortOrder:j,sortOrder:D,label:"Revenue"}),r.a.createElement(d,{sortBy:O,setSortBy:w,setSortOrder:j,sortOrder:D,label:"Net Income"}),r.a.createElement("th",null,"Gross Profit"),r.a.createElement("th",null,"EPS (Earnings Per Share)"),r.a.createElement("th",null,"Operating Income"))),r.a.createElement("tbody",null,n.map((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.revenue),r.a.createElement("td",null,e.netIncome),r.a.createElement("td",null,e.grossProfit),r.a.createElement("td",null,e.eps),r.a.createElement("td",null,e.operatingIncome))))))};var f=function(){return r.a.createElement(E,null)};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)))}],[[4,1,2]]]);
//# sourceMappingURL=main.9fc20cf3.chunk.js.map