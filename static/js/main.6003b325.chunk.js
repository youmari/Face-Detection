(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{100:function(e,a,t){},306:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(42),i=t.n(l),s=(t(96),t(84)),c=t(85),o=t(90),m=t(89),u=function(e){var a=e.onRouteChange;return e.signedIn?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return a("signout")},className:"f3 link dim black pa1 pointer underline w-20"},"Sign out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black pa1 pointer underline w-20"},"Sign in"),r.a.createElement("p",{onClick:function(){return a("register")},className:"f3 link dim black pa1 pointer underline w-20"},"Register"))},p=(t(97),function(e){var a=e.onInputChange,t=e.onSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 center"},"This Magic will detect faces in your pictures. give it a try !"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"pa4 form br3 shadow-5 w-80 center "},r.a.createElement("input",{className:"f4 pa2 w-60 ",onChange:a}),r.a.createElement("button",{style:{background:"#FF5EDF"},className:"pa2 w-40 grow link ph3 pv2 dib f4   white",onClick:t},"Detect"))))}),d=t(86),h=t.n(d),b=(t(98),t(87)),g=t.n(b),f=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{className:"Tilt br2 shadow-7",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner "}," ",r.a.createElement("img",{alt:"logo",src:g.a}))))},E=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3 center "},"Youmari, your current rank is ..."),r.a.createElement("div",{className:"white f1 center"},"#1"))},w=(t(99),function(e){var a=e.imageUrl,t=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",alt:"",src:a,width:"500px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,left:t.leftCol,bottom:t.bottomRow}})))}),v=(t(100),t(101),t(88)),N=t.n(v),k=t(43),y=t.n(k),C=function(e){var a=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 center"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{onClick:function(){return a("home")},className:"b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-bg-black hover-white",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3 center"},r.a.createElement("p",{onClick:function(){return a("register")},className:"f6 link dim black db grow pointer"},"Register")))))},x=function(e){var a=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 center"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"Name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{onClick:function(){return a("home")},className:"b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-bg-black hover-white",type:"submit",value:"Register"})),r.a.createElement("div",{className:"lh-copy mt3 center"}))))},R=new y.a.App({apiKey:"a02c5a5457e04370b86a03bfd52f4c1f"}),S={particles:{number:{value:150,density:{enable:!0,value_area:800}},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},F=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).calculateFaceLocation=function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputimage"),n=Number(t.width),r=Number(t.height);return{leftCol:a.left_col*n,topRow:a.top_row*r,rightCol:n-a.right_col*n,bottomRow:r-a.bottom_row*r}},e.displayFaceBox=function(a){e.setState({box:a})},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),R.models.predict(y.a.FACE_DETECT_MODEL,e.state.input).then((function(a){return e.displayFaceBox(e.calculateFaceLocation(a))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(a){"signout"===a?e.setState({signedIn:!1}):"home"===a&&e.setState({signedIn:!0}),e.setState({route:a})},e.state={input:"",imageUrl:"",box:{},route:"signin",signedin:!1},e}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{className:"particles",params:S}),r.a.createElement(u,{signedIn:this.state.signedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(E,null),r.a.createElement(p,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),r.a.createElement(w,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?r.a.createElement(C,{onRouteChange:this.onRouteChange}):r.a.createElement(x,{onRouteChange:this.onRouteChange}),"}")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,a,t){e.exports=t.p+"static/media/brain.34f00771.png"},91:function(e,a,t){e.exports=t(306)},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.6003b325.chunk.js.map