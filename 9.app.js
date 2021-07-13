(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{20:function(e,s,t){"use strict";var a=t(0);var l=[function(e,s,t){return["pre",s,"{white-space:pre-wrap;font-size:.8125rem;font-family:Arial,Helvetica,sans-serif}table",s,"{table-layout:fixed;width:100%}"].join("")}],i=t(10);function n(e,s,t,l){const{h:n,t:r,b:d,c:o,k:c,d:p,i:h}=e,{_m0:v,_m1:u,_m2:y}=l;return[s.yearEvents?n("div",{key:0},[n("div",{classMap:{"slds-card":!0},key:1},[n("div",{classMap:{"slds-card__header":!0},key:2},[n("div",{classMap:{"slds-media":!0,"slds-media--center":!0,"slds-has-flexi-truncate":!0},key:3},[n("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-event":!0},attrs:{title:"Description of icon when needed"},key:4},[n("svg",{classMap:{"slds-icon":!0},attrs:{"aria-hidden":"true"},key:5},[n("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#event")},key:6},[])]),n("span",{classMap:{"slds-assistive-text":!0},key:7},[r("Description of icon when needed")])]),n("div",{classMap:{"slds-media__body":!0},key:8},[n("h2",{classMap:{"slds-p-left_small":!0,"slds-card__header-title":!0},key:9},[s.isHome?r("Upcoming Events"):null,s.isHome?null:n("select",{key:10,on:{change:v||(l._m0=d(s.handleYearChange))}},[n("option",{attrs:{value:"2021"},key:11},[r("2021")]),n("option",{attrs:{value:"2020"},key:12},[r("2020")]),n("option",{attrs:{value:"2019"},key:13},[r("2019")]),n("option",{attrs:{value:"2018"},key:14},[r("2018")]),n("option",{attrs:{value:"2017"},key:15},[r("2017")]),n("option",{attrs:{value:"2016"},key:16},[r("2016")]),n("option",{attrs:{value:"2015"},key:17},[r("2015")])]),s.isHome?null:r("  Calendar of Events"),s.isHome?null:o("lightning-helptext",i.a,{classMap:{"slds-var-p-left_small":!0},props:{content:"Select a year from the dropdown to view a list of events for that year. Click on an event to view event details and/or the trip report for the event."},key:18},[])])])])]),n("div",{classMap:{"slds-card__body":!0},key:19},[n("div",{classMap:{"slds-scrollable--y":!0,"slds-is-relative":!0},key:20},[s.loading?n("div",{classMap:{"slds-spinner_container":!0},key:21},[n("div",{classMap:{"slds-spinner":!0,"slds-spinner_medium":!0,"slds-spinner_brand":!0},attrs:{role:"status"},key:22},[n("span",{classMap:{"slds-assistive-text":!0},key:23},[r("Loading")]),n("div",{classMap:{"slds-spinner__dot-a":!0},key:24},[]),n("div",{classMap:{"slds-spinner__dot-b":!0},key:25},[])])]):null,n("table",{classMap:{fixed_header:!0,"slds-table":!0,"slds-table_cell-buffer":!0,"slds-table_bordered":!0,"slds-table_col-bordered":!0},key:26},[n("thead",{key:27},[n("tr",{classMap:{"slds-text-heading--label":!0},key:28},[n("th",{attrs:{scope:"col"},key:29},[n("span",{classMap:{"slds-truncate":!0},key:30},[r("Date(s)")])]),n("th",{attrs:{scope:"col"},key:31},[n("span",{classMap:{"slds-truncate":!0},key:32},[r("Event")])])])]),n("tbody",{key:33},h(s.yearEvents,(function(e){return n("tr",{classMap:{"slds-hint-parent":!0},attrs:{"data-item":e.id},key:c(34,e.id),on:{click:u||(l._m1=d(s.handleEventClick))}},[n("td",{classMap:{"slds-cell-wrap":!0},key:35},[p(e.date),n("div",{classMap:{"slds-float_right":!0},key:36},[e.cancelled?n("div",{classMap:{"slds-media__figure":!0},key:37},[n("span",{classMap:{"slds-icon_container":!0,"slds-icon-custom-custom60":!0},attrs:{title:"Cancelled"},key:38},[n("svg",{classMap:{"slds-icon":!0,"slds-icon_x-small":!0},attrs:{"aria-hidden":"true"},key:39},[n("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/custom-sprite/svg/symbols.svg#custom60")},key:40},[])])])]):null]),n("div",{classMap:{"slds-float_right":!0},key:41},[e.pdfFile?n("div",{classMap:{"slds-media__figure":!0},key:42},[n("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-knowledge":!0},attrs:{title:"Trip Report"},key:43},[n("svg",{classMap:{"slds-icon":!0,"slds-icon_x-small":!0},attrs:{"aria-hidden":"true"},key:44},[n("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#knowledge")},key:45},[])])])]):null]),n("div",{classMap:{"slds-float_right":!0},key:46},[e.details?n("div",{classMap:{"slds-media__figure":!0},key:47},[n("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-address":!0},attrs:{title:"Details"},key:48},[n("svg",{classMap:{"slds-icon":!0,"slds-icon_x-small":!0},attrs:{"aria-hidden":"true"},key:49},[n("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#address")},key:50},[])])])]):null])]),n("td",{classMap:{"slds-cell-wrap":!0},key:51},[p(e.event)])])})))])])]),s.isHome?n("footer",{classMap:{"slds-card__footer":!0},key:52},[n("a",{classMap:{"slds-card__footer-action":!0},attrs:{href:"#"},key:53,on:{click:y||(l._m2=d(s.handleViewAllEventsClick))}},[r("View All Events")])]):null])]):null]}var r=Object(a.registerTemplate)(n);n.stylesheets=[],l&&n.stylesheets.push.apply(n.stylesheets,l),n.stylesheetTokens={hostAttribute:"my-my-events_events-host",shadowAttribute:"my-my-events_events"};var d=t(9);class o extends a.LightningElement{constructor(...e){super(...e),this.year=void 0,this.yearEvents=void 0,this.showModal=!1,this.events={},this.selectedEvent=void 0,this.noEvents=!1,this.loading=!1,this.opts={autoScroll:!1,autoScrollTime:7},this.home=void 0,this.readOnly=!1}connectedCallback(){const e=(new Date).getFullYear();this.year=e,this.fetchEvents(e)}get options(){return Object.keys(this.events)}handleEventClick(e){const s=e.currentTarget.dataset.item;this.selectedEvent=this.yearEvents.find(e=>e.id===s),"0"!==s&&this.dispatchEvent(new CustomEvent("eventclick",{detail:this.selectedEvent}))}handleCloseClick(){this.showModal=!1}handleYearChange(e){const s=e.currentTarget.value;this.year=s,this.fetchEvents(s),this.dispatchEvent(new CustomEvent("eventyearchange"))}get eventCancelled(){return this.selectedEvent.cancelled}get tripReport(){return this.selectedEvent.tripReport}createEvents(e){if(this.yearEvents=[],0===e.length)return this.yearEvents=[{id:"0",date:"No Events Scheduled"}],void(this.noEvents=!0);this.noEvents=!1,e.sort((e,s)=>e.start>s.start?1:-1),e.forEach(e=>{let s=[];e.photos&&e.photos.forEach(e=>{s.push({header:""+e.caption,image:"https://fredbirds-098f.restdb.io/media/"+e.photo,href:"#"})}),e.species_sighted&&e.species_sighted.sort((e,s)=>e.common>s.common?1:-1),e.participants&&e.participants.sort((e,s)=>e.name>s.name?1:-1),this.yearEvents.push({id:e._id,date:this.getEventDate(new Date(e.start),e.end?new Date(e.end):null),event:e.event,sightings:e.species_sighted,details:e.details,tripReport:e.tripreport,participants:e.participants,start:e.start,cancelled:e.cancelled,photos:s,pdfFile:e.pdfFile})})}get showDetails(){return console.log(new Date<this.selectedEvent.start||"0"===this.yearEvents[0]._id),new Date<this.selectedEvent.start||"0"===this.yearEvents[0]._id}fetchEvents(e){this.loading=!0;const s="false"===this.home?sessionStorage.getItem(e+"events"):sessionStorage.getItem("upcomingevents");s?(this.createEvents(JSON.parse(s)),this.loading=!1):"false"===this.home?this.fetchYearEvents(e):this.fetchFutureEvents()}fetchFutureEvents(){const e=new Date;Object(d.d)(e,3).then(e=>{sessionStorage.setItem("upcomingevents",JSON.stringify(e)),this.createEvents(e),this.loading=!1}).catch(e=>{console.log(e)})}fetchYearEvents(e){Object(d.b)(e).then(s=>{sessionStorage.setItem(e+"events",JSON.stringify(s)),this.createEvents(s),this.loading=!1}).catch(e=>{console.log(e)})}getEventDate(e,s){const t=["January","February","March","April","May","June","July","August","September","October","November","December"];let a="";const l=t[e.getUTCMonth()];if(a=`${l} ${e.getUTCDate()}`,s){const e=t[s.getUTCMonth()];a+=l===e?" - "+s.getUTCDate():` - ${e} ${t[s.getUTCDate()]}`}return a}get isHome(){return"true"===this.home}handleViewAllEventsClick(){this.dispatchEvent(new CustomEvent("viewall",{detail:"events",bubbles:!0,composed:!0}))}}Object(a.registerDecorators)(o,{publicProps:{home:{config:0},readOnly:{config:0}},fields:["year","yearEvents","showModal","events","selectedEvent","noEvents","loading","opts"]});s.a=Object(a.registerComponent)(o,{tmpl:r})},45:function(e,s,t){"use strict";t.r(s);var a=t(0),l=[],i=t(20);var n=[function(e,s,t){return["lightning-formatted-rich-text",s,"{white-space:pre-wrap;font-size:1rem;font-family:Arial,Helvetica,sans-serif}"].join("")}],r=t(19);function d(e,s,t,l){const{h:i,d:n,t:d,gid:o,b:c,c:p}=e,{_m0:h,_m1:v}=l;return[s.showDetails?i("article",{classMap:{"slds-card":!0},key:0},[i("div",{classMap:{"slds-card__header":!0,"slds-grid":!0},key:1},[i("header",{classMap:{"slds-media":!0,"slds-media_center":!0,"slds-has-flexi-truncate":!0},key:2},[i("div",{classMap:{"slds-media__figure":!0},key:3},[i("span",{classMap:{"slds-icon_container":!0,"slds-icon-standard-account":!0},attrs:{title:"account"},key:4},[i("svg",{classMap:{"slds-icon":!0,"slds-icon_medium":!0},attrs:{"aria-hidden":"true"},key:5},[i("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/standard-sprite/svg/symbols.svg#knowledge")},key:6},[])])])]),i("div",{classMap:{"slds-media__body":!0},key:7},[i("h2",{classMap:{"slds-card__header-title":!0},key:8},[n(s.selectedEvent.event)])])])]),i("div",{classMap:{"slds-card__body":!0,"slds-card__body_inner":!0},key:9},[i("div",{classMap:{"slds-scrollable--y":!0},styleMap:{"max-height":"650px"},key:10},[s.eventCancelled?i("div",{classMap:{"slds-scoped-notification":!0,"slds-media":!0,"slds-media_center":!0,"slds-theme_error":!0},attrs:{role:"status"},key:11},[i("div",{classMap:{"slds-media__figure":!0},key:12},[i("span",{classMap:{"slds-icon_container":!0,"slds-icon-utility-error":!0},attrs:{title:"error"},key:13},[i("svg",{classMap:{"slds-icon":!0,"slds-icon_small":!0},attrs:{"aria-hidden":"true"},key:14},[i("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/utility-sprite/svg/symbols.svg#error")},key:15},[])]),i("span",{classMap:{"slds-assistive-text":!0},key:16},[d("error")])])]),i("div",{classMap:{"slds-media__body":!0},key:17},[i("p",{key:18},[d("This event was cancelled")])])]):null,s.showButtons?i("div",{classMap:{"slds-p-top_small":!0,"slds-p-bottom_small":!0},key:19},[i("fieldset",{classMap:{"slds-form-element":!0},key:20},[i("div",{classMap:{"slds-form-element__control":!0},key:21},[i("div",{classMap:{"slds-radio_button-group":!0},key:22},[i("span",{classMap:{"slds-button":!0,"slds-radio_button":!0},key:23},[i("input",{attrs:{type:"radio",name:"event",id:o("details"),disabled:s.detailsDisabled?"":null},props:{value:"details",checked:s.detailsSelected},key:24,on:{change:h||(l._m0=c(s.handleTypeChange))}},[]),i("label",{classMap:{"slds-radio_button__label":!0},attrs:{for:""+o("details")},key:25},[i("span",{classMap:{"slds-radio_faux":!0},key:26},[d("Details")])])]),i("span",{classMap:{"slds-button":!0,"slds-radio_button":!0},key:27},[i("input",{attrs:{type:"radio",name:"event",id:o("tripReport"),disabled:s.tripReportDisabled?"":null},props:{value:"tripReport",checked:s.tripReportSelected},key:28,on:{change:v||(l._m1=c(s.handleTypeChange))}},[]),i("label",{classMap:{"slds-radio_button__label":!0},attrs:{for:""+o("tripReport")},key:29},[i("span",{classMap:{"slds-radio_faux":!0},key:30},[d("Trip Report")])])])])])])]):null,i("div",{classMap:{"slds-text-body_small":!0},key:31},[s.eventCancelled||s.showButtons?null:i("div",{classMap:{"slds-scoped-notification":!0,"slds-media":!0,"slds-media_center":!0,"slds-theme_warning":!0},attrs:{role:"status"},key:32},[i("div",{classMap:{"slds-media__figure":!0},key:33},[i("span",{classMap:{"slds-icon_container":!0,"slds-icon-utility-warning":!0},attrs:{title:"warning"},key:34},[i("svg",{classMap:{"slds-icon":!0,"slds-icon_small":!0},attrs:{"aria-hidden":"true"},key:35},[i("use",{attrs:{"xlink:href":Object(a.sanitizeAttribute)("use","http://www.w3.org/2000/svg","xlink:href","resources/SLDS/icons/utility-sprite/svg/symbols.svg#warning")},key:36},[])]),i("span",{classMap:{"slds-assistive-text":!0},key:37},[d("warning")])])]),i("div",{classMap:{"slds-media__body":!0},key:38},[i("p",{key:39},[d("There are no event details or a trip report for this event")])])]),s.eventCancelled?null:s.detailsSelected?p("lightning-formatted-rich-text",r.a,{props:{value:s.selectedEvent.details},key:40},[]):null,s.eventCancelled?null:s.tripReportSelected?i("div",{styleMap:{overflow:"auto !important","-webkit-overflow-scrolling":"touch !important"},key:41},[i("iframe",{attrs:{src:s.pdfFileLocation,width:"100%",height:"600px"},key:42},[])]):null])])])]):null]}var o=Object(a.registerTemplate)(d);d.stylesheets=[],n&&d.stylesheets.push.apply(d.stylesheets,n),d.stylesheetTokens={hostAttribute:"my-my-eventDetails_eventDetails-host",shadowAttribute:"my-my-eventDetails_eventDetails"};class c extends a.LightningElement{constructor(...e){super(...e),this.selectedEvent=void 0,this.detailsSelected=void 0,this.tripReportSelected=void 0}get eventCancelled(){return this.selectedEvent.cancelled}get tripReport(){return this.selectedEvent.pdfFile}get showDetails(){return void 0!==this.selectedEvent}get detailsDisabled(){return void 0===this.selectedEvent.details||""===this.selectedEvent.details}get tripReportDisabled(){return void 0===this.selectedEvent.pdfFile||""===this.selectedEvent.pdfFile}get showButtons(){return void 0!==this.selectedEvent.pdfFile&&""!==this.selectedEvent.pdfFile||""!==this.selectedEvent.details&&void 0!==this.selectedEvent.details}resetSelected(e,s){e?(this.detailsSelected=!0,this.tripReportSelected=!1):s?(this.detailsSelected=!1,this.tripReportSelected=!0):(this.detailsSelected=!1,this.tripReportSelected=!1)}get pdfFileLocation(){return`https://drive.google.com/file/d/${this.selectedEvent.pdfFile}/preview?usp=sharing`}handleTypeChange(e){"details"===e.target.value?(this.detailsSelected=!0,this.tripReportSelected=!1):(this.detailsSelected=!1,this.tripReportSelected=!0)}}Object(a.registerDecorators)(c,{publicProps:{selectedEvent:{config:0}},publicMethods:["resetSelected"],fields:["detailsSelected","tripReportSelected"]});var p=Object(a.registerComponent)(c,{tmpl:o});function h(e,s,t,a){const{b:l,c:n,h:r}=e,{_m0:d,_m1:o}=a;return[r("div",{classMap:{"slds-grid":!0,"slds-wrap":!0,"slds-gutters":!0,"slds-p-left_medium":!0,"slds-p-right_medium":!0,main:!0,"slds-p-bottom_xx-large":!0,"slds-p-top_medium":!0},key:0},[r("div",{classMap:{"slds-col":!0,"slds-large-size_1-of-3":!0,"slds-small-size_1-of-1":!0,"slds-p-left_x-small":!0},key:1},[r("div",{key:2},[n("my-events",i.a,{props:{home:"false"},key:3,on:{eventclick:d||(a._m0=l(s.handleEventClick)),eventyearchange:o||(a._m1=l(s.handleYearChange))}},[])])]),r("div",{classMap:{"slds-col":!0,"slds-large-size_2-of-3":!0,"slds-small-size_1-of-1":!0},key:4},[n("my-event-details",p,{props:{selectedEvent:s.selectedEvent},key:5},[])])])]}var v=Object(a.registerTemplate)(h);h.stylesheets=[],l&&h.stylesheets.push.apply(h.stylesheets,l),h.stylesheetTokens={hostAttribute:"my-my-eventParent_eventParent-host",shadowAttribute:"my-my-eventParent_eventParent"};class u extends a.LightningElement{constructor(...e){super(...e),this.selectedEvent=void 0}handleEventClick(e){this.selectedEvent=e.detail,this.template.querySelector("my-event-details").resetSelected(void 0!==this.selectedEvent.details&&""!==this.selectedEvent.details,void 0!==this.selectedEvent.pdfFile&&""!==this.selectedEvent.pdfFile)}handleYearChange(){this.selectedEvent=void 0}}Object(a.registerDecorators)(u,{fields:["selectedEvent"]});s.default=Object(a.registerComponent)(u,{tmpl:v})},9:function(e,s,t){"use strict";t.d(s,"b",(function(){return i})),t.d(s,"d",(function(){return n})),t.d(s,"e",(function(){return r})),t.d(s,"g",(function(){return d})),t.d(s,"a",(function(){return o})),t.d(s,"c",(function(){return c})),t.d(s,"f",(function(){return p}));const a="https://fredbirds-api.herokuapp.com/",l=function(e){return new Promise((s,t)=>{fetch(e,{method:"GET",headers:{"cache-control":"no-cache"}}).then(e=>e.json()).then(e=>{s(e)}).catch(e=>{t(e)})})},i=e=>l(`${a}events/${e}`),n=(e,s=3)=>l(`${a}events/future/${s}`),r=()=>l("https://fredbirds-api.herokuapp.com/news"),d=e=>fetch("https://fredbirds-api.herokuapp.com/sendgrid",{method:"POST",headers:{"cache-control":"no-cache","content-type":"application/json"},body:e,json:!0}),o=()=>l("https://fredbirds-api.herokuapp.com/announcements"),c=()=>fetch("https://fredbirds-api.herokuapp.com/faqs",{method:"GET"}),p=()=>fetch("https://fredbirds-api.herokuapp.com/newsletters",{method:"GET"})}}]);