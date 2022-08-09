(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{130:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){},338:function(e,t,n){},361:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),c=n.n(o),s=(n(205),n(29)),i=n(51),l=n(20),u=n(21),d=n(22),h=n(23),f=(n(130),n(3)),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.handleClick=function(t){e.setState({collapsed:!t.collapsed})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h4",{className:"title",children:t.summary}),this.state.collapsed&&Object(f.jsxs)("div",{className:"event_details",children:[Object(f.jsxs)("p",{className:"start-time",children:["Starts: ",t.start.dateTime]}),Object(f.jsxs)("p",{className:"location",children:["Where: ",t.location]}),Object(f.jsx)("p",{className:"details",children:t.description}),Object(f.jsx)("a",{className:"event-link",href:t.htmlLink,children:"Add to calendar"})]}),Object(f.jsx)("button",{className:"btn",onClick:function(){return e.handleClick(e.state)},children:this.state.collapsed?"Hide details":"Show Details"})]})}}]),n}(a.Component),v=p,m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(v,{event:e})},e.id)}))})}}]),n}(a.Component),b=m,j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="lightblue",a}return Object(u.a)(n)}(j),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(u.a)(n)}(j),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).color="aqua",a}return Object(u.a)(n)}(j),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(g,{text:this.state.infoText}),Object(f.jsxs)("label",{children:["Select Your Nearest City:",Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),y=x,k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={errorText:""},e.handleInputChanged=function(t){var n=parseInt(t.target.value);n<=20&&n>0?e.setState({numberOfEvents:n,errorText:""}):e.setState({numberOfEvents:20,errorText:"Please select a number between 0 and 20."}),e.props.updateEvents(void 0,n)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.numberOfEvents;return Object(f.jsxs)("div",{className:"event-count",children:[Object(f.jsxs)("label",{children:["Number Of Events:",Object(f.jsx)("input",{className:"event-number",type:"number",min:"1",max:"20",value:e,onChange:this.handleInputChanged})]}),Object(f.jsx)(O,{text:this.state.errorText})]})}}]),n}(a.Component),S=k;n(207);var T=function(e){return e.showWelcomeScreen?Object(f.jsxs)("div",{className:"WelcomeScreen",children:[Object(f.jsx)("h1",{children:"Welcome to the Meet app"}),Object(f.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{className:"google-btn",children:[Object(f.jsx)("div",{className:"google-icon-wrapper",children:Object(f.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with google"})}),"Page 1 \0"]})}),Object(f.jsx)("a",{href:"https://DarkFather63.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},E=n(18),N=n(362),C=n(369),W=n(185),A=n(98),Z=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(E.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){c((function(){return i()}))}),[t]);var s=["#0088FE","#00C49F","#FFBB28","#FF8042","#6A0DAD"],i=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))};return Object(f.jsx)(N.a,{height:400,children:Object(f.jsx)(C.a,{width:100,height:100,children:Object(f.jsx)(W.a,{data:o,cx:400,cy:100,labelLine:!1,outerRadius:80,fill:"#fff",dataKey:"value",nameKey:"genre",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e){return Object(f.jsx)(A.a,{fill:s[e%s.length]},"cell-".concat(e))}))})})})},I=(n(338),n(194)),L=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],D=n(124),F=n.n(D),M=n(80),q=n.n(M),J=function(e){var t=e.map((function(e){return e.location}));return Object(I.a)(new Set(t))},B=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var n,a,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://34fflj9wpl.execute-api.us-west-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},_=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,n,a,r,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",L);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,P();case 11:if(!(n=e.sent)){e.next=21;break}return U(),a="https://34fflj9wpl.execute-api.us-west-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,F.a.get(a);case 17:return(r=e.sent).data&&(o=J(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),q.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,n,a,r,o,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,B(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,F.a.get("https://34fflj9wpl.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&R(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=n(366),H=n(367),Y=n(190),G=n(191),K=n(81),V=n(195),X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],selectedLocation:"all",numberOfEvents:20,showWelcomeScreen:void 0},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))},e.updateEvents=function(t,n){void 0===n?n=e.state.numberOfEvents:e.setState({numberOfEvents:n}),void 0===t&&(t=e.state.selectedLocation),_().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),numberOfEvents:n,selectedLocation:t})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,n,a,r,o=this;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,B(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&_().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:J(e)})})),navigator.onLine?this.setState({offlineText:""}):this.setState({offlineText:"You are offline. Only cached results loaded."});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events;return void 0===this.state.showWelcomeScreen?Object(f.jsx)("div",{className:"App"}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Meet App"}),Object(f.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(S,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(f.jsx)(w,{text:this.state.offlineText}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(Z,{events:e}),Object(f.jsx)(N.a,{height:400,children:Object(f.jsxs)(z.a,{margin:{top:10,right:10,bottom:10,left:10},children:[Object(f.jsx)(H.a,{}),Object(f.jsx)(Y.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(G.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(f.jsx)(K.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(V.a,{data:this.getData(),fill:"#fff"})]})})]}),Object(f.jsx)(b,{events:this.state.events,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(f.jsx)(T,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){P()}})]})}}]),n}(a.Component),Q=X,$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var te=n(192),ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,370)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ee(t,e)}))}}(),ne(),te.config("18141f2cbec944839d68c7209095dc3e").install()}},[[361,1,2]]]);
//# sourceMappingURL=main.97da3c53.chunk.js.map