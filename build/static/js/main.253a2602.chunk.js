(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(17),o=n.n(c),r=n(8),a=n(3),i=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},l=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},f=n(6),b=n.n(f),d="https://desolate-shelf-64235.herokuapp.com/api/notes",p=function(){var t=b.a.get(d),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},m=function(t){return b.a.post(d,t).then((function(t){return t.data}))},h=function(t,e){return b.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))},O=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)(""),f=Object(a.a)(o,2),b=f[0],d=f[1],O=Object(i.useState)(!1),v=Object(a.a)(O,2),x=v[0],g=v[1],S=Object(i.useState)(null),k=Object(a.a)(S,2),y=k[0],w=k[1];Object(i.useEffect)((function(){p().then((function(t){c(t)}))}),[]);var N=x?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),o=Object(r.a)(Object(r.a)({},e),{},{important:!e.important});h(t,o).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(t){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()>.5};m(e).then((function(t){c(n.concat(t)),d("")}))},children:[Object(u.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(l,{})]})};n(41);o.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.253a2602.chunk.js.map