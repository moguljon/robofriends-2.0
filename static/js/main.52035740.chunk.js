(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,a){},14:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(2),s=a.n(o),i=(a(12),a(3)),c=a(4),l=a(6),m=a(5),u=function(e){var n=e.id,a=e.name,t=e.username,o=e.email;return r.a.createElement("div",{className:"tc bg-light-pink dib br3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("h2",null,a),r.a.createElement("p",null,t),r.a.createElement("p",null,o))},h=[{id:1,name:"Leanne Graham",username:"LG",email:"lg@business.corp"},{id:2,name:"Leslie Jay",username:"LJ",email:"lJ@business.corp"},{id:3,name:"Kim Porter",username:"KP",email:"KP@business.corp"},{id:4,name:"Jonathan Aguilar",username:"JA",email:"JA@business.corp"},{id:5,name:"Leanne Graham",username:"LG",email:"lg@business.corp"},{id:6,name:"Lisa James",username:"LJ",email:"LJ@business.corp"},{id:7,name:"Paul Henry",username:"PH",email:"PH@business.corp"},{id:8,name:"Holly Holm",username:"HH",email:"HH@business.corp"},{id:9,name:"Jon Jones",username:"JJ",email:"JJ@business.corp"},{id:10,name:"React Native",username:"RN",email:"RN@business.corp"}],d=function(e){var n=e.robots;return r.a.createElement("div",null,n.map((function(e,n){return r.a.createElement(u,{key:n,id:h[n].id,name:h[n].name,username:h[n].username,email:h[n].email})})))},b=function(e){e.searchfield;var n=e.searchchange;return r.a.createElement("div",null,r.a.createElement("input",{className:"bg-light-pink dib br3 ma2 grow bw2 shadow-5",type:"search",placeholder:"enter robot friend",onChange:n}))},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"800px"}},e.children)},f=function(e){Object(l.a)(a,e);var n=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchfield,t=n.filter((function(e){return e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"ROBOFRIENDS"),r.a.createElement(b,{searchchange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(d,{robots:t})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.52035740.chunk.js.map