(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{53:function(e,t,s){"use strict";s.r(t);var a=s(1);var i=[function(e,t,s){return[".contact-us",t,"{background-color:#fff}.contact-us",t,",img",t,"{border:2px solid #000}img",t,"{margin-left:auto;margin-right:auto;height:100%;width:100%}.img-left",t,"{border-right-style:none}.img-right",t,"{border-left-style:none}@media only screen and (max-width:800px){.no-show",t,"{display:none}}"].join("")}],l=s(31),n=s(28),o=s(32),r=s(33);function m(e,t,s,a){const{h:i,t:m,b:c,c:h}=e,{_m0:d,_m1:g,_m2:p,_m3:u,_m4:b}=a;return[i("div",{classMap:{"slds-grid":!0,"slds-p-around_medium":!0},key:0},[i("div",{classMap:{"slds-large-size_1-of-4":!0,"slds-small-size_1-of-1":!0,"no-show":!0},key:1},[i("img",{classMap:{"img-left":!0},attrs:{src:"resources/photos/P1010796.jpeg"},key:2},[])]),i("div",{classMap:{"contact-us":!0,"slds-large-size_2-of-4":!0,"slds-small-size_1-of-1":!0,"slds-p-around_medium":!0},key:3},[i("div",{classMap:{"slds-text-align_center":!0,"slds-text-heading_large":!0,"slds-p-bottom_small":!0},key:4},[m("Contact Us")]),i("div",{classMap:{"slds-p-bottom_small":!0,"slds-text-heading_small":!0},key:5},[m("Need to reach us? We would love to hear from you. Just fill out and submit this form. We will get back to you with a response shortly.")]),h("lightning-input",l.a,{props:{name:"name",type:"text",variant:"label-inline",label:"Name",value:t.name,required:!0},key:6,on:{change:d||(a._m0=c(t.handleFormChange))}},[]),h("lightning-input",l.a,{props:{name:"email",type:"email",variant:"label-inline",label:"Email",value:t.email,required:!0},key:7,on:{change:g||(a._m1=c(t.handleFormChange))}},[]),h("lightning-combobox",n.a,{props:{name:"topic",label:"Topic",value:t.topic,placeholder:"Select a subject",options:t.options,variant:"label-inline",required:!0},key:8,on:{change:p||(a._m2=c(t.handleFormChange))}},[]),h("lightning-textarea",o.a,{props:{name:"message",label:"Message",value:t.message,variant:"label-inline",required:!0},key:9,on:{change:u||(a._m3=c(t.handleFormChange))}},[]),i("div",{classMap:{"slds-text-align_center":!0},key:10},[h("lightning-button",r.a,{props:{label:"Submit",variant:"brand"},key:11,on:{click:b||(a._m4=c(t.handleSubmit))}},[])])]),i("div",{classMap:{"slds-large-size_1-of-4":!0,"slds-small-size_1-of-1":!0,"no-show":!0},key:12},[i("img",{classMap:{"img-right":!0},attrs:{src:"resources/photos/P1010820.jpeg"},key:13},[])])])]}var c=Object(a.registerTemplate)(m);m.stylesheets=[],i&&m.stylesheets.push.apply(m.stylesheets,i),m.stylesheetTokens={hostAttribute:"my-my-contact_contact-host",shadowAttribute:"my-my-contact_contact"};var h=s(12);class d extends a.LightningElement{constructor(...e){super(...e),this.name="",this.email="",this.topic="",this.message="",this.emailMap=(new Map).set("membership","membership@fredbirds.com").set("website","admin@fredbirds.com").set("event","events@fredbirds.com").set("birding","communications@fredbirds.com").set("other","communications@fredbirds.com")}get options(){return[{label:"Membership",value:"membership"},{label:"Birding",value:"birding"},{label:"Event",value:"event"},{label:"Web Site",value:"website"},{label:"Other",value:"other"}]}handleSubmit(){if([...this.template.querySelectorAll("lightning-input,  lightning-combobox, lightning-textarea")].reduce((e,t)=>(t.reportValidity(),e&&t.checkValidity()),!0)){const e=this.emailMap.get(this.topic),t=JSON.stringify({to:e,from:{email:"admin@fredbirds.com",name:"Contact Us Message"},subject:"Contact Us Message",content:[{type:"text/plain",value:`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`}]});Object(h.h)(t).then(e=>{console.log(e),this.clearForm()}).catch(e=>{console.log(e)})}}handleFormChange(e){this[e.target.name]=e.target.value}clearForm(){this.name="",this.email="",this.topic="",this.message=""}}Object(a.registerDecorators)(d,{fields:["name","email","topic","message","emailMap"]});t.default=Object(a.registerComponent)(d,{tmpl:c})}}]);