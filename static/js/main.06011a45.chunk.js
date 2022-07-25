(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{16:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(28),s=n.n(o),c=(n(35),n(7)),i=n(8),u=n(3),l=n(4),d=n(6),h=n(5),f=(n(16),n(0)),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!1},e.handleClick=function(t){e.setState({collapsed:!t.collapsed})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h4",{className:"title",children:t.summary}),this.state.collapsed&&Object(f.jsxs)("div",{className:"event_details",children:[Object(f.jsxs)("p",{className:"start-time",children:["Starts: ",t.start.dateTime]}),Object(f.jsxs)("p",{className:"location",children:["Where: ",t.location]}),Object(f.jsx)("p",{className:"details",children:t.description}),Object(f.jsx)("a",{className:"event-link",href:t.htmlLink,children:"Add to calendar"})]}),Object(f.jsx)("button",{className:"btn",onClick:function(){return e.handleClick(e.state)},children:this.state.collapsed?"Hide details":"Show Details"})]})}}]),n}(a.Component),v=p,m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"event-list",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(v,{event:e})},e.id)}))})}}]),n}(a.Component),b=m,j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(l.a)(n)}(j),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(l.a)(n)}(j),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)("h3",{children:"Select Your Nearest City"}),Object(f.jsx)(g,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),y=O,x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={errorText:""},e.handleInputChanged=function(t){var n=parseInt(t.target.value);n<=20&&n>0?e.setState({numberOfEvents:n,errorText:""}):e.setState({numberOfEvents:20,errorText:"Please select a number between 0 and 20."}),e.props.updateEvents(void 0,n)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.numberOfEvents;return Object(f.jsxs)("div",{className:"event-count",children:[Object(f.jsx)("p",{children:"Number of Events:"}),Object(f.jsx)("input",{className:"event-number",type:"number",min:"1",max:"20",value:e,onChange:this.handleInputChanged}),Object(f.jsx)(w,{text:this.state.errorText})]})}}]),n}(a.Component),k=x,S=(n(37),n(30)),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],E=n(15),C=n.n(E),N=n(10),Z=n.n(N),W=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},I=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,a,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://34fflj9wpl.execute-api.us-west-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,n,a,r,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,q();case 11:if(!(n=e.sent)){e.next=21;break}return L(),a="https://34fflj9wpl.execute-api.us-west-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,C.a.get(a);case 17:return(r=e.sent).data&&(o=W(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,n,a,r,o,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://34fflj9wpl.execute-api.us-west-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],selectedLocation:"all",numberOfEvents:20},e.updateEvents=function(t,n){void 0===n?n=e.state.numberOfEvents:e.setState({numberOfEvents:n}),void 0===t&&(t=e.state.selectedLocation),M().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),numberOfEvents:n,selectedLocation:t})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t=this;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,M().then((function(e){t.mounted&&t.setState({events:e.slice(0,t.state.numberOfEvents),locations:W(e)})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Meet App"}),Object(f.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)(k,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(f.jsx)(b,{events:this.state.events,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents})]})}}]),n}(a.Component),B=J,U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=n(29),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),F(),D.config("18141f2cbec944839d68c7209095dc3e").install()}},[[60,1,2]]]);
//# sourceMappingURL=main.06011a45.chunk.js.map