(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{50:function(e,s,t){"use strict";t.r(s);var n=t(0);function i(e,s,t,i){const{h:r,t:a,k:o,d:c,i:d,b:l}=e,{_m0:h}=i;return[s.news?r("article",{classMap:{"slds-card":!0},key:0},[r("div",{classMap:{"slds-card__header":!0,"slds-grid":!0},key:1},[r("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:2},[r("div",{classMap:{"slds-media__figure":!0},key:3},[r("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-news":!0},attrs:{title:"news"},key:4},[r("svg",{classMap:{"slds-icon":!0,"slds-icon_medium":!0},attrs:{"aria-hidden":"true"},key:5},[r("use",{attrs:{"xlink:href":Object(n.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#news")},key:6},[])])])]),r("div",{classMap:{"slds-media__body":!0},key:7},[r("h2",{classMap:{"slds-card__header-title":!0},key:8},[a("Birding News")])])])]),r("div",{classMap:{"slds-card__body":!0,"slds-card__body_inner":!0},key:9},d(s.birdNews,(function(e){return r("div",{classMap:{"slds-p-bottom_small":!0},key:o(10,e._id)},[e.isLink?r("a",{attrs:{href:e.link,target:"_blank"},key:11},[r("div",{classMap:{"slds-text-heading_medium":!0},key:12},[c(e.headline)])]):null,e.isLink?r("div",{key:13},[c(e.text)]):null])}))),s.showFooter?r("footer",{classMap:{"slds-card__footer":!0},key:14},[r("a",{classMap:{"slds-card__footer-action":!0},attrs:{href:"javascript:void(0);"},key:15,on:{click:h||(i._m0=l(s.handleViewAllClick))}},[a("View All News")])]):null]):null]}var r=Object(n.registerTemplate)(i);i.stylesheets=[],i.stylesheetTokens={hostAttribute:"my-my-news_news-host",shadowAttribute:"my-my-news_news"};var a=t(9);class o extends n.LightningElement{constructor(...e){super(...e),this.home=!1,this.numRows=3,this.loading=!1,this.news=[]}connectedCallback(){this.fetchNews()}fetchNews(){const e=sessionStorage.getItem("news");this.loading=!0,e?(this.news=this.home?JSON.parse(e).splice(0,this.numRows):this.news=JSON.parse(e),this.loading=!1):Object(a.e)().then(e=>{this.loading=!1;let s=e.length<this.numRows?e.length:this.numRows;sessionStorage.setItem("news",JSON.stringify(e)),this.news=this.home||1===e.length?e.splice(0,s):e}).catch(e=>{console.log(e)})}get birdNews(){return this.news.forEach(e=>{e.isLink="link"===e.type}),this.news}get showFooter(){return"true"===this.home}handleViewAllClick(){this.dispatchEvent(new CustomEvent("viewall",{detail:"news",bubbles:!0,composed:!0}))}}Object(n.registerDecorators)(o,{publicProps:{home:{config:0},numRows:{config:0}},fields:["loading","news"]});s.default=Object(n.registerComponent)(o,{tmpl:r})},9:function(e,s,t){"use strict";t.d(s,"b",(function(){return r})),t.d(s,"d",(function(){return a})),t.d(s,"e",(function(){return o})),t.d(s,"g",(function(){return c})),t.d(s,"a",(function(){return d})),t.d(s,"c",(function(){return l})),t.d(s,"f",(function(){return h}));const n="https://fredbirds-api.herokuapp.com/",i=function(e){return new Promise((s,t)=>{fetch(e,{method:"GET",headers:{"cache-control":"no-cache"}}).then(e=>e.json()).then(e=>{s(e)}).catch(e=>{t(e)})})},r=e=>i(`${n}events/${e}`),a=(e,s=3)=>i(`${n}events/future/${s}`),o=()=>i("https://fredbirds-api.herokuapp.com/news"),c=e=>fetch("https://fredbirds-api.herokuapp.com/sendgrid",{method:"POST",headers:{"cache-control":"no-cache","content-type":"application/json"},body:e,json:!0}),d=()=>i("https://fredbirds-api.herokuapp.com/announcements"),l=()=>fetch("https://fredbirds-api.herokuapp.com/faqs",{method:"GET"}),h=()=>fetch("https://fredbirds-api.herokuapp.com/newsletters",{method:"GET"})}}]);