(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{43:function(s,t,e){"use strict";e.r(t);var l=e(0);var a=[function(s,t,e){return[".body",t,"{max-height:450px}"].join("")}];function o(s,t,e,a){const{h:o,t:i,b:d,k:c,d:r,i:n}=s,{_m0:h,_m1:p}=a;return[t.showHotspots?o("div",{key:0},[o("div",{classMap:{"slds-card":!0},key:1},[o("div",{classMap:{"slds-card__header":!0},key:2},[o("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:3},[o("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-event":!0},attrs:{title:"Description of icon when needed"},key:4},[o("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:5},[o("use",{attrs:{"xlink:href":Object(l.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/custom-sprite/svg/symbols.svg#custom3")},key:6},[])]),o("span",{classMap:{"slds-assistive-text":!0},key:7},[i("Description of icon when needed")])]),o("div",{classMap:{"slds-media__body":!0},key:8},[o("h2",{classMap:{"slds-p-left_small":!0,"slds-text-heading--small":!0,"slds-truncate":!0},key:9},[i("Hotspots for  "),o("select",{key:10,on:{change:h||(a._m0=d(t.handleLocationChange))}},n(t.locations,(function(s){return o("option",{attrs:{value:s.value},key:c(11,s.value)},[r(s.label)])})))])])])]),o("div",{classMap:{"slds-card__body":!0},key:12},[o("div",{classMap:{"slds-scrollable--y":!0,"slds-is-relative":!0,body:!0},key:13},[o("table",{classMap:{fixed_header:!0,"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:14},[o("thead",{key:15},[o("tr",{classMap:{"slds-text-heading--label":!0},key:16},[o("th",{attrs:{scope:"col"},key:17},[o("span",{classMap:{"slds-truncate":!0},key:18},[i("Location")])]),o("th",{attrs:{scope:"col"},key:19},[o("span",{classMap:{"slds-truncate":!0},key:20},[i("Last Visited")])]),o("th",{attrs:{scope:"col"},key:21},[o("span",{classMap:{"slds-truncate":!0,"slds-text-align_center":!0},key:22},[i("Species")])])])]),o("tbody",{key:23},n(t.filteredHotspots,(function(s){return o("tr",{classMap:{"slds-hint-parent":!0},attrs:{"data-item":s.locId},key:c(24,s.locId),on:{click:p||(a._m1=d(t.handleHotspotClick))}},[o("td",{classMap:{"slds-cell-wrap":!0},key:25},[r(s.locName)]),o("td",{classMap:{"slds-cell-wrap":!0},key:26},[r(s.latestObsDt)]),o("td",{classMap:{"slds-cell-wrap":!0,"slds-text-align_center":!0},key:27},[r(s.numSpeciesAllTime)])])})))])])])])]):null]}var i=Object(l.registerTemplate)(o);o.stylesheets=[],a&&o.stylesheets.push.apply(o.stylesheets,a),o.stylesheetTokens={hostAttribute:"my-my-hotspots_hotspots-host",shadowAttribute:"my-my-hotspots_hotspots"};var d=e(1);class c extends l.LightningElement{constructor(...s){super(...s),this.hotspots=[],this.regions=void 0,this.locations=[],this.selectedId=""}connectedCallback(){const s=sessionStorage.getItem("hotspots");if(this.regions=JSON.parse(sessionStorage.getItem("regions")),s)this.hotspots=JSON.parse(s),this.locations=this.setLocations(),this.selectedId=this.locations[0].value;else{const s={lat:38.31,long:-77.46};Object(d.b)(s).then(s=>{this.hotspots=s,sessionStorage.setItem("hotspots",JSON.stringify(s)),this.locations=this.setLocations(),this.selectedId=this.locations[0].value})}}setLocations(){let s=[],t=new Set(this.hotspots.map(s=>s.subnational2Code));return t.delete(void 0),t.forEach(t=>{let e=this.regions.find(s=>t===s.code);s.push({value:t,label:e.name})}),s.sort((s,t)=>s.label>t.label?1:-1)}get filteredHotspots(){return this.hotspots.filter(s=>s.subnational2Code===this.selectedId)}handleLocationChange(s){this.selectedId=s.target.value,this.dispatchEvent(new CustomEvent("locationchange"))}handleHotspotClick(s){this.dispatchEvent(new CustomEvent("hotspotclick",{bubbles:!0,composed:!0,detail:s.currentTarget.dataset.item}))}get showHotspots(){return this.hotspots.length>0}}Object(l.registerDecorators)(c,{fields:["hotspots","regions","locations","selectedId"]});var r=Object(l.registerComponent)(c,{tmpl:i});var n=[function(s,t,e){return[".body",t,"{max-height:375px}"].join("")}];function h(s,t,e,l){const{d:a,h:o,t:i,k:d,i:c}=s;return[t.showHotspot?o("article",{classMap:{"slds-card":!0},key:0},[o("div",{classMap:{"slds-card__header":!0,"slds-grid":!0},key:1},[o("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:2},[o("div",{classMap:{"slds-media__body":!0},key:3},[o("h2",{classMap:{"slds-card__header-title":!0},key:4},[o("a",{classMap:{"slds-card__header-link":!0,"slds-truncate":!0},attrs:{href:t.ebirdLink,title:t.hotspot.name,target:"_blank"},key:5},[o("span",{key:6},[a(t.hotspot.hierarchicalName)])])])])])]),o("div",{classMap:{"slds-card__body":!0,"slds-card__body_inner":!0},key:7},[o("div",{classMap:{"slds-grid":!0,"slds-wrap":!0},key:8},[o("div",{classMap:{"slds-small-size_1-of-1":!0,"slds-large-size_1-of-2":!0,"slds-col":!0},key:9},[t.showSpeciesList?o("div",{classMap:{"slds-card":!0},key:10},[o("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:11},[o("div",{classMap:{"slds-media__body":!0},key:12},[o("h3",{classMap:{"slds-card__header-title":!0},key:13},[i("Species List")])])]),o("div",{classMap:{"slds-card__body":!0},key:14},[o("div",{classMap:{"slds-scrollable--y":!0,"slds-is-relative":!0,body:!0},key:15},[o("table",{classMap:{fixed_header:!0,"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:16},[o("thead",{key:17},[o("tr",{classMap:{"slds-text-heading--label":!0},key:18},[o("th",{attrs:{scope:"col"},key:19},[o("span",{classMap:{"slds-truncate":!0},key:20},[i("Common")])]),o("th",{attrs:{scope:"col"},key:21},[o("span",{classMap:{"slds-truncate":!0},key:22},[i("Scientific")])]),o("th",{attrs:{scope:"col"},key:23},[o("span",{classMap:{"slds-truncate":!0},key:24},[i("Family")])])])]),o("tbody",{key:25},c(t.sightings,(function(s){return o("tr",{classMap:{"slds-hint-parent":!0},key:d(26,s.comName)},[o("td",{classMap:{"slds-cell-wrap":!0},key:27},[a(s.comName)]),o("td",{classMap:{"slds-cell-wrap":!0},key:28},[o("i",{key:29},[a(s.sciName)])]),o("td",{classMap:{"slds-cell-wrap":!0},key:30},[a(s.familyComName)])])})))])])])]):null]),o("div",{classMap:{"slds-small-size_1-of-1":!0,"slds-large-size_1-of-2":!0,"slds-col":!0},key:31},[o("iframe",{styleMap:{border:"0"},attrs:{width:"100%",height:"400px",frameborder:"0",src:t.mapUrl,allowfullscreen:""},key:32},[])])])])]):null]}var p=Object(l.registerTemplate)(h);h.stylesheets=[],n&&h.stylesheets.push.apply(h.stylesheets,n),h.stylesheetTokens={hostAttribute:"my-my-hotspotDetails_hotspotDetails-host",shadowAttribute:"my-my-hotspotDetails_hotspotDetails"};class y extends l.LightningElement{constructor(...s){super(...s),this.hotspot=void 0,this.sightings=[]}get showHotspot(){return void 0!==this.hotspot&&null!==this.hotspot}get mapUrl(){return`https://www.google.com/maps/embed/v1/place?key=AIzaSyCB3Q5szLx_1-UE-WIkFSgA3fFi7-KWFAM&q=${this.hotspot.latitude},${this.hotspot.longitude}&zoom=14`}get ebirdLink(){return"https://ebird.org/hotspot/"+this.hotspot.locId}get showSpeciesList(){return void 0!==this.sightings&&null!==this.sightings}}Object(l.registerDecorators)(y,{publicProps:{hotspot:{config:0},sightings:{config:0}}});var m=Object(l.registerComponent)(y,{tmpl:p});function g(s,t,e,l){const{b:a,c:o,h:i}=s,{_m0:d,_m1:c}=l;return[i("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-gutters":!0,"slds-p-left_medium":!0,"slds-p-right_medium":!0,main:!0,"slds-p-bottom_xx-large":!0,"slds-p-top_medium":!0},key:0},[i("div",{classMap:{"slds-col":!0,"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0,"slds-p-left_x-small":!0},key:1},[i("div",{key:2},[o("my-hotspots",r,{key:3,on:{hotspotclick:d||(l._m0=a(t.handleHotspotClick)),locationchange:c||(l._m1=a(t.handleLocationChange))}},[])])]),i("div",{classMap:{"slds-col":!0,"slds-large-size_2-of-3":!0,"slds-small-size_1-of-1":!0},key:4},[o("my-hotspot-details",m,{props:{hotspot:t.hotspot,sightings:t.sightings},key:5},[])])])]}var k=Object(l.registerTemplate)(g);g.stylesheets=[],g.stylesheetTokens={hostAttribute:"my-my-hotspotParent_hotspotParent-host",shadowAttribute:"my-my-hotspotParent_hotspotParent"};class u extends l.LightningElement{constructor(...s){super(...s),this.hotspot=void 0,this.sightings=void 0}handleHotspotClick(s){Object(d.a)({locId:s.detail}).then(s=>{this.hotspot=s,Object(d.f)({locId:this.hotspot.locId}).then(s=>{this.sightings=s.sort((s,t)=>s.comName>t.comName?1:-1)})})}handleLocationChange(){this.hotspot=void 0,this.sightings=void 0}}Object(l.registerDecorators)(u,{fields:["hotspot","sightings"]});t.default=Object(l.registerComponent)(u,{tmpl:k})}}]);