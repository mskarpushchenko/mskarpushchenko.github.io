(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(14),n(15),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),i=n(3),s=n(4),h=n(6),u=n(5),m=n(7),d=function(e){var t=e.robots;return console.log(t),r.a.createElement("div",{className:"robotsdiv"},t.map(function(e,n){return r.a.createElement(l,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},g=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",onChange:t,placeholder:"search box"}))},b=(n(16),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){console.log(t),e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield;console.log(this.onSearchChange);var a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Kitty Friends"),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robots:a}))):r.a.createElement("h1",null," Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.13752093.chunk.js.map