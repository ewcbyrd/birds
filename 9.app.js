(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{21:function(t,s,e){"use strict";var a=e(1),l=e(3),o=e.n(l),i=e(7);function n(t,s,e,a){const{c:l,d:o,h:n}=t;return[n("div",{classMap:{"slds-form-element__icon":!0},key:0},[n("button",{classMap:{"slds-button":!0,"slds-button_icon":!0},attrs:{type:"button"},key:1},[l("lightning-primitive-icon",i.a,{props:{svgClass:s.computedSvgClass,iconName:s.iconName,variant:"bare"},key:2},[]),n("span",{classMap:{"slds-assistive-text":!0},key:3},[o(s.alternativeText)])])])]}var r=Object(a.registerTemplate)(n);n.stylesheets=[],o.a&&n.stylesheets.push.apply(n.stylesheets,o.a),n.stylesheetTokens={hostAttribute:"my-src-lightning_helptext-host",shadowAttribute:"my-src-lightning_helptext"};var c=e(9),d=e(0),h=e(4),p=e(13);class y extends a.LightningElement{constructor(...t){super(...t),this.state={iconName:"utility:info",iconVariant:"bare",alternativeText:"Help"},this._tooltip=null}get content(){return this._tooltip?this._tooltip.value:void 0}set content(t){this._tooltip?this._tooltip.value=t:t&&(this._tooltip=new p.a(t,{root:this,target:()=>this.template.querySelector("button"),type:p.b.Toggle}),this._tooltip.initialize())}set iconName(t){this.state.iconName=t}get iconName(){return Object(c.d)(this.state.iconName)?this.state.iconName:"utility:info"}set iconVariant(t){this.state.iconVariant=t}get iconVariant(){return Object(d.y)(this.state.iconVariant,{fallbackValue:"bare",validValues:["bare","error","inverse","warning"]})}get alternativeText(){return this.state.alternativeText}set alternativeText(t){t&&"string"==typeof t&&""!==t.trim()?this.state.alternativeText=t:console.warn("<lightning-helptext> Invalid alternativeText value: "+t)}disconnectedCallback(){this._tooltip&&!this._tooltip.initialized&&this._tooltip.hide(),this._tooltip=null}renderedCallback(){this._tooltip&&!this._tooltip.initialized&&this._tooltip.initialize()}get computedSvgClass(){const t=Object(h.a)("slds-button__icon");switch(this.iconVariant){case"error":t.add("slds-icon-text-error");break;case"warning":t.add("slds-icon-text-warning");break;case"inverse":case"bare":break;default:t.add("slds-icon-text-default")}return t.toString()}}Object(a.registerDecorators)(y,{publicProps:{content:{config:3},iconName:{config:3},iconVariant:{config:3},alternativeText:{config:3}},track:{state:1},fields:["_tooltip"]});s.a=Object(a.registerComponent)(y,{tmpl:r})},47:function(t,s,e){"use strict";e.r(s);var a=e(1);var l=[function(t,s,e){return[".body",s,"{max-height:450px}"].join("")}],o=e(21);function i(t,s,e,l){const{h:i,t:n,b:r,k:c,d:d,i:h,c:p}=t,{_m0:y,_m1:g}=l;return[s.showHotspots?i("div",{key:0},[i("div",{classMap:{"slds-card":!0},key:1},[i("div",{classMap:{"slds-card__header":!0},key:2},[i("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:3},[i("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-event":!0},attrs:{title:"Description of icon when needed"},key:4},[i("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:5},[i("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/custom-sprite/svg/symbols.svg#custom3")},key:6},[])]),i("span",{classMap:{"slds-assistive-text":!0},key:7},[n("Description of icon when needed")])]),i("div",{classMap:{"slds-media__body":!0},key:8},[i("h2",{classMap:{"slds-p-left_small":!0,"slds-text-heading--small":!0,"slds-truncate":!0},key:9},[n("Hotspots for  "),i("select",{key:10,on:{change:y||(l._m0=r(s.handleLocationChange))}},h(s.locations,(function(t){return i("option",{attrs:{value:t.value},key:c(11,t.value)},[d(t.label)])}))),p("lightning-helptext",o.a,{classMap:{"slds-var-p-left_small":!0},props:{content:"Select a county from the dropdown to view a list of hotspots. Click on a hotspot to see a list of birds recorded for that selected sight and a location map."},key:12},[])])])])]),i("div",{classMap:{"slds-card__body":!0},key:13},[i("div",{classMap:{"slds-scrollable--y":!0,"slds-is-relative":!0,body:!0},key:14},[i("table",{classMap:{fixed_header:!0,"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:15},[i("thead",{key:16},[i("tr",{classMap:{"slds-text-heading--label":!0},key:17},[i("th",{attrs:{scope:"col"},key:18},[i("span",{classMap:{"slds-truncate":!0},key:19},[n("Location")])]),i("th",{attrs:{scope:"col"},key:20},[i("span",{classMap:{"slds-truncate":!0},key:21},[n("Last Visited")])]),i("th",{attrs:{scope:"col"},key:22},[i("span",{classMap:{"slds-truncate":!0,"slds-text-align_center":!0},key:23},[n("Species")])])])]),i("tbody",{key:24},h(s.filteredHotspots,(function(t){return i("tr",{classMap:{"slds-hint-parent":!0},attrs:{"data-item":t.locId},key:c(25,t.locId),on:{click:g||(l._m1=r(s.handleHotspotClick))}},[i("td",{classMap:{"slds-cell-wrap":!0},key:26},[d(t.locName)]),i("td",{classMap:{"slds-cell-wrap":!0},key:27},[d(t.latestObsDt)]),i("td",{classMap:{"slds-cell-wrap":!0,"slds-text-align_center":!0},key:28},[d(t.numSpeciesAllTime)])])})))])])])])]):null]}var n=Object(a.registerTemplate)(i);i.stylesheets=[],l&&i.stylesheets.push.apply(i.stylesheets,l),i.stylesheetTokens={hostAttribute:"my-my-hotspots_hotspots-host",shadowAttribute:"my-my-hotspots_hotspots"};var r=e(15);class c extends a.LightningElement{constructor(...t){super(...t),this.hotspots=[],this.regions=void 0,this.locations=[],this.selectedId=""}connectedCallback(){const t=sessionStorage.getItem("hotspots");if(this.regions=JSON.parse(sessionStorage.getItem("regions")),t)this.hotspots=JSON.parse(t),this.locations=this.setLocations(),this.selectedId=this.locations[0].value;else{const t={lat:38.31,long:-77.46};Object(r.b)(t).then(t=>{this.hotspots=t,sessionStorage.setItem("hotspots",JSON.stringify(t)),this.locations=this.setLocations(),this.selectedId=this.locations[0].value})}}setLocations(){let t=[],s=new Set(this.hotspots.map(t=>t.subnational2Code));return s.delete(void 0),s.forEach(s=>{let e=this.regions.find(t=>s===t.code);t.push({value:s,label:e.name})}),t.sort((t,s)=>t.label>s.label?1:-1)}get filteredHotspots(){return this.hotspots.filter(t=>t.subnational2Code===this.selectedId)}handleLocationChange(t){this.selectedId=t.target.value,this.dispatchEvent(new CustomEvent("locationchange"))}handleHotspotClick(t){this.dispatchEvent(new CustomEvent("hotspotclick",{bubbles:!0,composed:!0,detail:t.currentTarget.dataset.item}))}get showHotspots(){return this.hotspots.length>0}}Object(a.registerDecorators)(c,{fields:["hotspots","regions","locations","selectedId"]});var d=Object(a.registerComponent)(c,{tmpl:n});var h=[function(t,s,e){return[".body",s,"{max-height:375px}"].join("")}];function p(t,s,e,a){const{d:l,h:o,t:i,k:n,i:r}=t;return[s.showHotspot?o("article",{classMap:{"slds-card":!0},key:0},[o("div",{classMap:{"slds-card__header":!0,"slds-grid":!0},key:1},[o("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:2},[o("div",{classMap:{"slds-media__body":!0},key:3},[o("h2",{classMap:{"slds-card__header-title":!0},key:4},[o("a",{classMap:{"slds-card__header-link":!0,"slds-truncate":!0},attrs:{href:s.ebirdLink,title:s.hotspot.name,target:"_blank"},key:5},[o("span",{key:6},[l(s.hotspot.hierarchicalName)])])])])])]),o("div",{classMap:{"slds-card__body":!0,"slds-card__body_inner":!0},key:7},[o("div",{classMap:{"slds-grid":!0,"slds-wrap":!0},key:8},[o("div",{classMap:{"slds-small-size_1-of-1":!0,"slds-large-size_1-of-2":!0,"slds-col":!0},key:9},[s.showSpeciesList?o("div",{classMap:{"slds-card":!0},key:10},[o("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:11},[o("div",{classMap:{"slds-media__body":!0},key:12},[o("h3",{classMap:{"slds-card__header-title":!0},key:13},[i("Species List")])])]),o("div",{classMap:{"slds-card__body":!0},key:14},[o("div",{classMap:{"slds-scrollable--y":!0,"slds-is-relative":!0,body:!0},key:15},[o("table",{classMap:{fixed_header:!0,"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:16},[o("thead",{key:17},[o("tr",{classMap:{"slds-text-heading--label":!0},key:18},[o("th",{attrs:{scope:"col"},key:19},[o("span",{classMap:{"slds-truncate":!0},key:20},[i("Common")])]),o("th",{attrs:{scope:"col"},key:21},[o("span",{classMap:{"slds-truncate":!0},key:22},[i("Scientific")])]),o("th",{attrs:{scope:"col"},key:23},[o("span",{classMap:{"slds-truncate":!0},key:24},[i("Family")])])])]),o("tbody",{key:25},r(s.sightings,(function(t){return o("tr",{classMap:{"slds-hint-parent":!0},key:n(26,t.comName)},[o("td",{classMap:{"slds-cell-wrap":!0},key:27},[l(t.comName)]),o("td",{classMap:{"slds-cell-wrap":!0},key:28},[o("i",{key:29},[l(t.sciName)])]),o("td",{classMap:{"slds-cell-wrap":!0},key:30},[l(t.familyComName)])])})))])])])]):null]),o("div",{classMap:{"slds-small-size_1-of-1":!0,"slds-large-size_1-of-2":!0,"slds-col":!0},key:31},[o("iframe",{styleMap:{border:"0"},attrs:{width:"100%",height:"400px",frameborder:"0",src:s.mapUrl,allowfullscreen:""},key:32},[])])])])]):null]}var y=Object(a.registerTemplate)(p);p.stylesheets=[],h&&p.stylesheets.push.apply(p.stylesheets,h),p.stylesheetTokens={hostAttribute:"my-my-hotspotDetails_hotspotDetails-host",shadowAttribute:"my-my-hotspotDetails_hotspotDetails"};class g extends a.LightningElement{constructor(...t){super(...t),this.hotspot=void 0,this.sightings=[]}get showHotspot(){return void 0!==this.hotspot&&null!==this.hotspot}get mapUrl(){return`https://www.google.com/maps/embed/v1/place?key=AIzaSyCB3Q5szLx_1-UE-WIkFSgA3fFi7-KWFAM&q=${this.hotspot.latitude},${this.hotspot.longitude}&zoom=14`}get ebirdLink(){return"https://ebird.org/hotspot/"+this.hotspot.locId}get showSpeciesList(){return void 0!==this.sightings&&null!==this.sightings}}Object(a.registerDecorators)(g,{publicProps:{hotspot:{config:0},sightings:{config:0}}});var m=Object(a.registerComponent)(g,{tmpl:y});function u(t,s,e,a){const{b:l,c:o,h:i}=t,{_m0:n,_m1:r}=a;return[i("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-gutters":!0,"slds-p-left_medium":!0,"slds-p-right_medium":!0,main:!0,"slds-p-bottom_xx-large":!0,"slds-p-top_medium":!0},key:0},[i("div",{classMap:{"slds-col":!0,"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0,"slds-p-left_x-small":!0},key:1},[i("div",{key:2},[o("my-hotspots",d,{key:3,on:{hotspotclick:n||(a._m0=l(s.handleHotspotClick)),locationchange:r||(a._m1=l(s.handleLocationChange))}},[])])]),i("div",{classMap:{"slds-col":!0,"slds-large-size_2-of-3":!0,"slds-small-size_1-of-1":!0},key:4},[o("my-hotspot-details",m,{props:{hotspot:s.hotspot,sightings:s.sightings},key:5},[])])])]}var b=Object(a.registerTemplate)(u);u.stylesheets=[],u.stylesheetTokens={hostAttribute:"my-my-hotspotParent_hotspotParent-host",shadowAttribute:"my-my-hotspotParent_hotspotParent"};class k extends a.LightningElement{constructor(...t){super(...t),this.hotspot=void 0,this.sightings=void 0}handleHotspotClick(t){Object(r.a)({locId:t.detail}).then(t=>{this.hotspot=t,Object(r.g)({locId:this.hotspot.locId}).then(t=>{this.sightings=t.sort((t,s)=>t.comName>s.comName?1:-1)})})}handleLocationChange(){this.hotspot=void 0,this.sightings=void 0}}Object(a.registerDecorators)(k,{fields:["hotspot","sightings"]});s.default=Object(a.registerComponent)(k,{tmpl:b})}}]);