!function(e){function s(s){for(var a,n,r=s[0],o=s[1],d=s[2],p=0,h=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&h.push(l[n][0]),l[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(c&&c(s);h.length;)h.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var e,s=0;s<i.length;s++){for(var t=i[s],a=!0,r=1;r<t.length;r++){var o=t[r];0!==l[o]&&(a=!1)}a&&(i.splice(s--,1),e=n(n.s=t[0]))}return e}var a={},l={1:0},i=[];function n(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,s,t){n.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,s){if(1&s&&(e=n(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)n.d(t,a,function(s){return e[s]}.bind(null,a));return t},n.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(s,"a",s),s},n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},n.p="./";var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var d=0;d<r.length;d++)s(r[d]);var c=o;i.push([1,0,2]),t()}([,function(e,s,t){e.exports=t(4)},,,function(e,s,t){"use strict";t.r(s);t(2);var a=t(0);var l=[function(e,s,t){return[".main",s," {background-color: white;}\n.center",s," {text-align: center;}\n.header",s," {background-color: #1589ee;font-family: 'Lucida Grande', Verdana, Arial, Sans-Serif;color: white;}\n.header1",s," {font-size: 40px;font-weight: 700;}\n.header2",s," {font-size: 1.2em;}\n"].join("")}];var i=[function(e,s,t){return[".main",s," {background-color: white;}\n"].join("")}];var n=[function(e,s,t){return["pre",s," {white-space: pre-wrap;font-size: 0.8125rem;font-family: Arial, Helvetica, sans-serif;}\ntable",s," {table-layout:fixed;width:100%;}\n"].join("")}];function r(e,s,t,l){const{h:i,t:n,b:r,d:o,k:d,i:c,f:p,gid:h}=e,{_m0:g,_m1:y,_m2:u}=l;return[s.yearEvents?i("div",{classMap:{"slds-p-top_small":!0},key:27},[i("div",{classMap:{"slds-card":!0},key:26},[i("div",{classMap:{"slds-card__header":!0},key:12},[i("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:11},[i("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-event":!0},attrs:{title:"Description of icon when needed"},key:3},[i("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:1},[i("use",{attrs:{"xlink:href":Object(a.f)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#event")},key:0},[])]),i("span",{classMap:{"slds-assistive-text":!0},key:2},[n("Description of icon when needed")])]),i("div",{classMap:{"slds-media__body":!0},key:10},[i("h2",{classMap:{"slds-p-left_small":!0,"slds-text-heading--small":!0,"slds-truncate":!0},key:9},[i("select",{key:7,on:{change:g||(l._m0=r(s.handleYearChange))}},[i("option",{attrs:{value:"2021"},key:4},[n("2021")]),i("option",{attrs:{value:"2020"},key:5},[n("2020")]),i("option",{attrs:{value:"2019"},key:6},[n("2019")])]),n(" Calendar of Events"),i("div",{styleMap:{float:"right"},key:8},[])])])])]),i("div",{classMap:{"slds-card__body":!0},key:25},[i("div",{classMap:{"slds-scrollable--x":!0},key:24},[i("table",{classMap:{"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:23},[i("thead",{key:18},[i("tr",{classMap:{"slds-text-heading--label":!0},key:17},[i("th",{attrs:{scope:"col"},key:14},[i("span",{classMap:{"slds-truncate":!0},key:13},[n("Date(s)")])]),i("th",{attrs:{scope:"col"},key:16},[i("span",{classMap:{"slds-truncate":!0},key:15},[n("Event")])])])]),i("tbody",{key:22},c(s.yearEvents,(function(e){return i("tr",{classMap:{"slds-hint-parent":!0},attrs:{"data-item":e.id},key:d(21,e.id),on:{click:y||(l._m1=r(s.handleEventClick))}},[i("td",{classMap:{"slds-cell-wrap":!0},key:19},[o(e.date)]),i("td",{classMap:{"slds-cell-wrap":!0},key:20},[o(e.event)])])})))])])])])]):null,s.yearEvents&&s.showModal?i("section",{classMap:{"slds-modal":!0,"slds-fade-in-open":!0},attrs:{role:"dialog",tabindex:"-1","aria-labelledby":""+h("modal-heading-01"),"aria-modal":"true","aria-describedby":""+h("modal-content-id-1")},key:44},[i("div",{classMap:{"slds-modal__container":!0},key:43},[i("header",{classMap:{"slds-modal__header":!0},key:30},[s.selectedEvent.event?i("div",{classMap:{"slds-text-heading_medium":!0,"slds-hyphenate":!0,"header-string":!0},key:28},[o(s.selectedEvent.event)]):null,s.selectedEvent.event?i("div",{classMap:{"slds-text-heading_small":!0},key:29},[o(s.selectedEvent.date)]):null]),i("div",{classMap:{"slds-modal__content":!0,"slds-p-around_medium":!0},attrs:{id:h("modal-content-id-1")},key:40},[s.selectedEvent.tripReport?null:s.selectedEvent.details?i("pre",{classMap:{"slds-text-body_small":!0},key:31},[o(s.selectedEvent.details)]):null,s.selectedEvent.tripReport?i("div",{classMap:{"slds-text-body_small":!0},key:33},[i("pre",{key:32},[o(s.selectedEvent.tripReport)])]):null,s.selectedEvent.tripReport&&s.participants?i("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-p-left_small":!0,"slds-p-right_small":!0},key:36},[i("div",{classMap:{"slds-size_1-of-1":!0,"slds-p-top_small":!0,"slds-text-align_center":!0,"slds-text-heading_small":!0},key:34},[n("Participants")]),i("div",{classMap:{"slds-size_1-of-1":!0,"slds-cell-wrap":!0,"slds-p-left_x-small":!0,"slds-p-right_x-small":!0},key:35},[o(s.participantString)])]):null,s.selectedEvent.tripReport&&s.sightings?i("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-p-left_small":!0,"slds-p-right_small":!0},styleMap:{width:"90%",margin:"0 auto"},key:39},p([i("div",{classMap:{"slds-size_1-of-1":!0,"slds-p-top_large":!0,"slds-text-align_center":!0,"slds-text-heading_small":!0},key:37},[n("Species Sighted")]),c(s.selectedEvent.sightings,(function(e){return i("div",{classMap:{"slds-size_1-of-2":!0,"slds-cell-wrap":!0,"slds-p-left_x-small":!0,"slds-p-right_x-small":!0},key:d(38,e._id)},[o(e.common)])}))])):null]),i("footer",{classMap:{"slds-modal__footer":!0,"modal-hidden":!0},key:42},[i("button",{classMap:{"slds-button":!0,"slds-button_outline-brand":!0},key:41,on:{click:u||(l._m2=r(s.handleCloseClick))}},[n("Close")])])])]):null,s.yearEvents&&s.showModal?i("div",{classMap:{"slds-backdrop":!0,"slds-backdrop_open":!0},key:45},[]):null]}var o=Object(a.e)(r);r.stylesheets=[],n&&r.stylesheets.push.apply(r.stylesheets,n),r.stylesheetTokens={hostAttribute:"my-my-events_events-host",shadowAttribute:"my-my-events_events"};class d extends a.a{constructor(...e){super(...e),this.year=void 0,this.yearEvents=void 0,this.showModal=!1,this.events={},this.selectedEvent=void 0}connectedCallback(){const e=sessionStorage.getItem("events");e?this.createEvents(JSON.parse(e)):fetch("https://fredbirds-098f.restdb.io/rest/events",{method:"GET",headers:{"cache-control":"no-cache","x-apikey":"5ff9ea16823229477922c93f"}}).then(e=>e.json()).then(e=>{sessionStorage.setItem("events",JSON.stringify(e)),this.createEvents(e)}).catch(e=>{console.log(e)})}setEvents(e){this.year=e,this.yearEvents=void 0===this.events[e]?[{id:"0",event:"No Events Scheduled",details:`There are no events scheduled for ${e}. Please check back for updates.`}]:this.events[e]}get options(){return Object.keys(this.events)}handleEventClick(e){const s=e.currentTarget.dataset.item;this.selectedEvent=this.yearEvents.find(e=>e.id===s),this.showModal=!0}handleCloseClick(){this.showModal=!1}handleYearChange(e){const s=e.currentTarget.value;this.setEvents(s)}get sightings(){return void 0!==this.selectedEvent.sightings&&this.selectedEvent.sightings.length>0}get participants(){return void 0!==this.selectedEvent.participants&&this.selectedEvent.participants.length>0}get participantString(){if(void 0===this.selectedEvent.participants)return"";let e="";for(let s=0;s<this.selectedEvent.participants.length;s++)e+=this.selectedEvent.participants[s].name,s<this.selectedEvent.participants.length-1&&(e+=", ");return e}createEvents(e){e.sort((e,s)=>e.start>s.start?1:-1),e.forEach(e=>{void 0===this.events[e.year]&&(this.events[e.year]=[]),e.species_sighted&&e.species_sighted.sort((e,s)=>e.common>s.common?1:-1),e.participants&&e.participants.sort((e,s)=>e.name>s.name?1:-1),this.events[e.year].push({id:e._id,date:e.date,event:e.event,sightings:e.species_sighted,details:e.details,tripReport:e.tripreport,participants:e.participants,photos:e.photos})}),console.log(this.events),this.setEvents((new Date).getFullYear())}}Object(a.d)(d,{fields:["year","yearEvents","showModal","events","selectedEvent"]});var c=Object(a.c)(d,{tmpl:o});function p(e,s,t,a){const{t:l,h:i,c:n}=e;return[i("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-p-left_medium":!0,"slds-p-right_medium":!0,main:!0,"slds-p-bottom_xx-large":!0,"slds-p-top_medium":!0},key:6},[i("div",{classMap:{"slds-large-size_2-of-3":!0,"slds-small-size_1-of-1":!0},key:3},[i("div",{classMap:{"slds-text-heading_medium":!0,"slds-p-top_small":!0},key:1},[i("strong",{key:0},[l("Welcome!")])]),i("div",{classMap:{"slds-text-body_regular":!0},key:2},[l("Welcome to the webpage for the Fredericksburg Birding Club (FBC). Our members are bird enthusiasts of all skill levels – from beginning to advanced birders – who reside in the greater Fredericksburg, Virginia area. We have been brought together because of our interest in birds and our love of birding. We welcome anyone to join us on one of our upcoming trips – even if you have never birded before – and hope you will consider becoming a member.")])]),i("div",{classMap:{"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0},key:5},[n("my-events",c,{key:4},[])])])]}var h=Object(a.e)(p);p.stylesheets=[],i&&p.stylesheets.push.apply(p.stylesheets,i),p.stylesheetTokens={hostAttribute:"my-my-home_home-host",shadowAttribute:"my-my-home_home"};class g extends a.a{}var y=Object(a.c)(g,{tmpl:h});var u=[function(e,s,t){return[".main",s," {background-color: white;}\n"].join("")}];var m=[function(e,s,t){return["table",s," {table-layout:fixed;width:100%;}\n"].join("")}];function v(e,s,t,l){const{h:i,t:n,d:r,k:o,i:d}=e;return[s.sightings?i("div",{classMap:{"slds-p-top_small":!0,"slds-size_1-of-1":!0},key:22},[i("div",{classMap:{"slds-card":!0},key:21},[i("div",{classMap:{"slds-card__header":!0},key:7},[i("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:6},[i("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-forecasts":!0},attrs:{title:"Description of icon when needed"},key:3},[i("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:1},[i("use",{attrs:{"xlink:href":Object(a.f)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#forecasts")},key:0},[])]),i("span",{classMap:{"slds-assistive-text":!0},key:2},[n("Description of icon when needed")])]),i("div",{classMap:{"slds-media__body":!0},key:5},[i("h2",{classMap:{"slds-p-left_small":!0,"slds-text-heading--small":!0,"slds-wrap":!0},key:4},[r(s.header)])])])]),i("div",{classMap:{"slds-card__body":!0},key:20},[i("div",{classMap:{"slds-scrollable--x":!0},key:19},[i("table",{classMap:{"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:18},[i("thead",{key:13},[i("tr",{classMap:{"slds-text-heading--label":!0},key:12},[i("th",{attrs:{scope:"col"},key:9},[i("span",{classMap:{"slds-truncate":!0},key:8},[n("Species")])]),i("th",{attrs:{scope:"col"},key:11},[i("span",{classMap:{"slds-truncate":!0},key:10},[n("Location")])])])]),i("tbody",{key:17},d(s.sightingList,(function(e){return i("tr",{classMap:{"slds-hint-parent":!0},key:o(16,e.obsId)},[i("td",{classMap:{"slds-cell-wrap":!0},key:14},[r(e.comName)]),i("td",{classMap:{"slds-cell-wrap":!0},key:15},[r(e.locName)])])})))])])])])]):null]}var k=Object(a.e)(v);v.stylesheets=[],m&&v.stylesheets.push.apply(v.stylesheets,m),v.stylesheetTokens={hostAttribute:"my-my-sightings_sightings-host",shadowAttribute:"my-my-sightings_sightings"};class b extends a.a{constructor(...e){super(...e),this.sightings=void 0,this.header=void 0}get sightingList(){let e=[];return this.sightings.forEach(s=>{e.find(e=>e.comName===s.comName&&e.locName===s.locName)||e.push({comName:s.comName,locName:s.locName,obsId:s.obsId})}),e}}Object(a.d)(b,{publicProps:{sightings:{config:0},header:{config:0}}});var f=Object(a.c)(b,{tmpl:k});function _(e,s,t,a){const{c:l,h:i}=e;return[i("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-gutters":!0,"slds-p-left_medium":!0,"slds-p-right_medium":!0,main:!0,"slds-p-bottom_xx-large":!0,"slds-p-top_medium":!0},key:7},[i("div",{classMap:{"slds-col":!0,"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0,"slds-p-left_x-small":!0},key:2},[i("div",{key:1},[l("my-sightings",f,{props:{sightings:s.localSightings,header:s.localSightingsHeader},key:0},[])])]),i("div",{classMap:{"slds-col":!0,"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0},key:5},[i("div",{key:4},[l("my-sightings",f,{props:{sightings:s.vaSightings,header:s.vaSightingHeader},key:3},[])])]),i("div",{classMap:{"slds-col":!0,"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0},key:6},[])])]}var M=Object(a.e)(_);_.stylesheets=[],u&&_.stylesheets.push.apply(_.stylesheets,u),_.stylesheetTokens={hostAttribute:"my-my-resources_resources-host",shadowAttribute:"my-my-resources_resources"};const S="https://ebird.org/ws2.0/",w="cjsr36ksmnsn";class x extends a.a{constructor(...e){super(...e),this.localSightings=void 0,this.localSightingsDaysBack=7,this.vaSightings=void 0,this.vaSightingsDaysBack=1}connectedCallback(){this.getLocalSightings(),this.getVirginiaNotableSightings()}get localSightingsHeader(){return`Notable Fredericksburg Region Sightings for the past ${this.localSightingsDaysBack} days`}getLocalSightings(){const e={lat:38.31,long:-77.46,daysBack:this.localSightingsDaysBack},s=sessionStorage.getItem("sightings");s?this.localSightings=JSON.parse(s):(({lat:e,long:s,dist:t=50,daysBack:a=7})=>{const l=`${S}data/obs/geo/recent/notable?lat=${e}&lng=${s}&dist=${t}&back=${a}&detail=full`;return new Promise((e,s)=>{fetch(l,{method:"GET",headers:{"X-eBirdApiToken":w}}).then(e=>e.json()).then(s=>{e(s)}).catch(e=>{s(e)})})})(e).then(e=>{sessionStorage.setItem("sightings",JSON.stringify(e)),this.localSightings=e})}getVirginiaNotableSightings(){const e={regionCode:"US-VA",daysBack:this.vaSightingsDaysBack},s=sessionStorage.getItem("vasightings");s?this.vaSightings=JSON.parse(s):(({regionCode:e,daysBack:s=14})=>{const t=S+"data/obs/"+e+"/recent/notable?back="+s;return new Promise((e,s)=>{fetch(t,{method:"GET",headers:{"X-eBirdApiToken":w}}).then(e=>e.json()).then(s=>{e(s)}).catch(e=>{s(e)})})})(e).then(e=>{sessionStorage.setItem("vasightings",JSON.stringify(e)),this.vaSightings=e})}get vaSightingHeader(){return"Notable Virginia Sightings for the past day"}}Object(a.d)(x,{fields:["localSightings","localSightingsDaysBack","vaSightings","vaSightingsDaysBack"]});var E=Object(a.c)(x,{tmpl:M});function j(e,s,t,a){const{t:l,h:i,b:n,c:r}=e,{_m0:o,_m1:d,_m2:c}=a;return[i("div",{classMap:{"slds-box":!0,header:!0,"slds-size-large_1-of-1":!0,"slds-size-small_1-of-1":!0},key:2},[i("div",{classMap:{center:!0,header1:!0},key:0},[l("Fredericksburg Birding Club")]),i("div",{classMap:{center:!0,header2:!0},key:1},[l("A Local Chapter of the Virginia Society of Ornithology")])]),i("div",{classMap:{"slds-context-bar":!0},key:31},[i("div",{classMap:{"slds-context-bar__primary":!0},key:19},[i("div",{classMap:{"slds-context-bar__item":!0,"slds-context-bar__dropdown-trigger":!0,"slds-dropdown-trigger":!0,"slds-dropdown-trigger_click":!0,"slds-no-hover":!0},key:18},[i("div",{classMap:{"slds-context-bar__icon-action":!0},key:15},[i("button",{classMap:{"slds-button":!0,"slds-icon-waffle_container":!0,"slds-context-bar__button":!0},attrs:{title:"Description of the icon when needed"},key:14},[i("span",{classMap:{"slds-icon-waffle":!0},key:12},[i("span",{classMap:{"slds-r1":!0},key:3},[]),i("span",{classMap:{"slds-r2":!0},key:4},[]),i("span",{classMap:{"slds-r3":!0},key:5},[]),i("span",{classMap:{"slds-r4":!0},key:6},[]),i("span",{classMap:{"slds-r5":!0},key:7},[]),i("span",{classMap:{"slds-r6":!0},key:8},[]),i("span",{classMap:{"slds-r7":!0},key:9},[]),i("span",{classMap:{"slds-r8":!0},key:10},[]),i("span",{classMap:{"slds-r9":!0},key:11},[])]),i("span",{classMap:{"slds-assistive-text":!0},key:13},[l("Open App Launcher")])])]),i("span",{classMap:{"slds-context-bar__label-action":!0,"slds-context-bar__app-name":!0},key:17},[i("span",{attrs:{title:"App Name"},key:16},[l("FBC")])])])]),i("nav",{classMap:{"slds-context-bar__secondary":!0,"slds-p-top_x-small":!0},attrs:{role:"navigation"},key:30},[i("ul",{classMap:{"slds-grid":!0},key:29},[i("li",{className:s.homeStyle,key:22},[i("a",{classMap:{"slds-context-bar__label-action":!0},attrs:{href:"javascript:void(0);",title:"Home"},key:21,on:{click:o||(a._m0=n(s.handleHomeClick))}},[i("span",{classMap:{"slds-truncate":!0},attrs:{title:"Home"},key:20},[l("Home")])])]),i("li",{className:s.sightingsStyle,key:25},[i("a",{classMap:{"slds-context-bar__label-action":!0},attrs:{href:"javascript:void(0);",title:"Home"},key:24,on:{click:d||(a._m1=n(s.handleResourcesClick))}},[i("span",{classMap:{"slds-truncate":!0},attrs:{title:"Sightings"},key:23},[l("Sightings")])])]),i("li",{className:s.hotspotsStyle,key:28},[i("a",{classMap:{"slds-context-bar__label-action":!0},attrs:{href:"javascript:void(0);",title:"Home"},key:27,on:{click:c||(a._m2=n(s.handleHotspotsClick))}},[i("span",{classMap:{"slds-truncate":!0},attrs:{title:"Hotspots"},key:26},[l("Hotspots")])])])])])]),s.homeSelected?r("my-home",y,{key:32},[]):null,s.sightingsSelected?r("my-resources",E,{key:33},[]):null]}var O=Object(a.e)(j);j.stylesheets=[],l&&j.stylesheets.push.apply(j.stylesheets,l),j.stylesheetTokens={hostAttribute:"my-my-app_app-host",shadowAttribute:"my-my-app_app"};class C extends a.a{constructor(...e){super(...e),this.homeSelected=!0,this.sightingsSelected=!1,this.hotspotsSelected=!1}handleHomeClick(){this.homeSelected=!0,this.sightingsSelected=!1,this.hotspotsSelected=!1}handleResourcesClick(){this.homeSelected=!1,this.sightingsSelected=!0,this.hotspotsSelected=!1}handleHotspotsClick(){this.homeSelected=!1,this.sightingsSelected=!1,this.hotspotsSelected=!0}get homeStyle(){return this.getMenuStyle(this.homeSelected)}get sightingsStyle(){return this.getMenuStyle(this.sightingsSelected)}get hotspotsStyle(){return this.getMenuStyle(this.hotspotsSelected)}getMenuStyle(e){return e?"slds-context-bar__item slds-is-active":"slds-context-bar__item"}}Object(a.d)(C,{fields:["homeSelected","sightingsSelected","hotspotsSelected"]});var N=Object(a.c)(C,{tmpl:O});const z=Object(a.b)("my-app",{is:N});document.querySelector("#main").appendChild(z)}]);