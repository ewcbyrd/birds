!function(t){function e(e){for(var o,i,a=e[0],c=e[1],l=e[2],h=0,p=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);for(d&&d(e);p.length;)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},s={1:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;r.push([1,0]),n()}([,function(t,e,n){t.exports=n(3)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(0);var s=[function(t,e,n){return[".center",e," {text-align: center;}\n.link",e," {border: none;padding: 10px;border-radius: 5px;text-decoration: none;background-color: #ff6000;color: white;margin-left: 33%;margin-right: 33%;display: inline-block;margin-top: 1em;}\n.info",e," {color: black;background-color: #e4f2f8;margin: auto;padding: 15px 10px;text-align: left;width: 300px;border-radius: 5px;}\n.code",e," {font-family: monospace;}\n.container",e," {margin-top: 30px;}\nimg",e," {max-width: 150px;}\n.greeting",e," {height: 75px;}\n"].join("")}];var r=[function(t,e,n){return["table",e," {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}\ntd",e,",th",e," {border: 1px solid #dddddd;text-align: left;padding: 8px;}\ntr:nth-child(even)",e," {background-color: #dddddd;}\n"].join("")}];function i(t,e,n,o){const{t:s,d:r,h:i,k:a,i:c,f:l}=t;return[e.sightings?i("h1",{key:0},[s("Notable Sightings in past "),r(e.daysBack),s(" days")]):null,e.sightings?i("table",{key:14},[i("tbody",{key:13},l([i("tr",{key:6},[i("th",{key:1},[s("Species")]),i("th",{key:2},[s("Location")]),i("th",{key:3},[s("City/County")]),i("th",{key:4},[s("Date")]),i("th",{key:5},[s("Seen By")])]),c(e.sightings,(function(t){return i("tr",{key:a(12,t.obsId)},[i("td",{key:7},[r(t.comName)]),i("td",{key:8},[r(t.locName)]),i("td",{key:9},[r(t.subnational2Name)]),i("td",{key:10},[r(t.obsDt)]),i("td",{key:11},[r(t.userDisplayName)])])}))]))]):null]}var a=Object(o.e)(i);i.stylesheets=[],r&&i.stylesheets.push.apply(i.stylesheets,r),i.stylesheetTokens={hostAttribute:"my-my-sightings_sightings-host",shadowAttribute:"my-my-sightings_sightings"};class c extends o.a{constructor(...t){super(...t),this.sightings=void 0,this.daysBack=void 0}}Object(o.d)(c,{publicProps:{sightings:{config:0},daysBack:{config:0}}});var l=Object(o.c)(c,{tmpl:a});function d(t,e,n,o){const{c:s}=t;return[s("my-sightings",l,{props:{sightings:e.sightings,daysBack:e.daysBack},key:0},[])]}var h=Object(o.e)(d);d.stylesheets=[],s&&d.stylesheets.push.apply(d.stylesheets,s),d.stylesheetTokens={hostAttribute:"my-my-app_app-host",shadowAttribute:"my-my-app_app"};const p="https://ebird.org/ws2.0/",u="cjsr36ksmnsn";class y extends o.a{constructor(...t){super(...t),this.taxonomy=void 0,this.sightings=void 0,this.daysBack=14}connectedCallback(){this.getSpecies(),(({lat:t,long:e,dist:n=25,daysBack:o=7})=>{const s=`${p}data/obs/geo/recent/notable?lat=${t}&lng=${e}&dist=${n}&back=${o}&detail=full`;return new Promise((t,e)=>{fetch(s,{method:"GET",headers:{"X-eBirdApiToken":u}}).then(t=>t.json()).then(e=>{t(e)}).catch(t=>{e(t)})})})({lat:38.31,long:-77.46,daysBack:this.daysBack}).then(t=>{t.forEach(e=>{t.locationUrl="https://ebird.org/hotspot/"+e.locId}),this.sightings=t,console.log(this.sightings)})}getSpecies(){let t=JSON.parse(localStorage.getItem("taxonomy"));t?this.taxonomy=t:new Promise((t,e)=>{fetch("https://ebird.org/ws2.0/ref/taxonomy/ebird?fmt=json",{method:"GET",headers:{"X-eBirdApiToken":u}}).then(t=>t.json()).then(e=>{t(e)}).catch(t=>{e(t)})}).then(t=>{this.taxonomy=t,localStorage.setItem("taxonomy",JSON.stringify(t))})}}Object(o.d)(y,{fields:["taxonomy","sightings","daysBack"]});var g=Object(o.c)(y,{tmpl:h});const f=Object(o.b)("my-app",{is:g});document.querySelector("#main").appendChild(f)}]);