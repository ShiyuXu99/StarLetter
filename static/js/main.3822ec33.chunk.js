(this.webpackJsonpstarletters=this.webpackJsonpstarletters||[]).push([[0],{40:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(26),r=c.n(s),i=(c(57),c(14)),o=(c(39),c(40),c.p+"static/media/machine.ccbaeefb.gif"),j=c.p+"static/media/machine.6b8d0ff1.png",l=c.p+"static/media/planet.5138cd14.gif",u=c(8),b=c(67),d=c(1),O=c.n(d),h=c(6),x=c(41),m=c(20),p=Object(x.a)({apiKey:"AIzaSyAsrXo0XBf8srEnJ3ZdVC2_X9TK4MRb4jQ",authDomain:"star-letter-2020.firebaseapp.com",projectId:"star-letter-2020",storageBucket:"star-letter-2020.appspot.com",messagingSenderId:"755999183317",appId:"1:755999183317:web:fef717a13e923035832d5c"}),f=Object(m.e)(p,{useFetchStreams:!1});function v(){return(v=Object(h.a)(O.a.mark((function e(){var t,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.f)(Object(m.b)(f,"Notes")),e.next=3,Object(m.d)(t);case 3:return c=e.sent,a=[],c.forEach((function(e){var t=e.data();t.id=e.id,t.readStatus||a.push(t)})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(h.a)(O.a.mark((function e(){var t,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(m.f)(Object(m.b)(f,"Notes")),e.next=3,Object(m.d)(t);case 3:return c=e.sent,a=[],c.forEach((function(e){var t=e.data();t.id=e.id,t.readStatus&&a.push(t)})),console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(h.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(m.b)(f,"Notes"),e.next=3,Object(m.a)(c,t);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(O.a.mark((function e(t,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.g)(Object(m.c)(f,"Notes",t),{header:c.header,text:c.text,readStatus:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=c(5);var S=function(e){var t=e.instantlyCloseCard,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){if(0===e.length){r([{header:"\u563f\u563f",text:"\u5df2\u7ecf\u770b\u5b8c\u6240\u6709\u7684\u5566"}])}else{r(e);var t,c=Object(u.a)(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;k(a.id,a)}}catch(n){c.e(n)}finally{c.f()}}}))}),[]),Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)("button",{className:"cardCloseBtn",onClick:t,children:"X"}),Object(y.jsx)(b.a.Body,{children:s.map((function(e){return Object(y.jsxs)("div",{className:"scrollComponent",children:[Object(y.jsx)(b.a.Title,{children:e.header}),Object(y.jsx)(b.a.Text,{children:e.text})]})}))})]})})},w=c.p+"static/media/bottle.52f95d91.png",B=c(65),I=c(68),T=c(66),E=c(49);var X=function(e){var t=new Date,c="".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()),n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],o=s[1],j=Object(a.useState)(c),l=Object(i.a)(j,2),u=l[0],b=l[1];return Object(y.jsx)(B.a,{show:e.show,onHide:e.handleClose,backdrop:e.backdrop,keyboard:e.keyboard,centered:!0,children:Object(y.jsxs)(B.a.Body,{className:"modalBack",children:[Object(y.jsx)(I.a,{variant:"btn bg-transparent",className:"mdcloseBtn",onClick:function(){e.onHide()},children:"X"}),Object(y.jsxs)(T.a,{children:[Object(y.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(y.jsx)(T.a.Label,{children:"\u6807\u9898"}),Object(y.jsx)(T.a.Control,{type:"text",className:"transparent-input",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(y.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(y.jsx)(T.a.Label,{children:"\u6b63\u6587"}),Object(y.jsx)(T.a.Control,{as:"textarea",className:"transparent-input",rows:10,onChange:function(e){return o(e.target.value)}})]})]}),Object(y.jsxs)(I.a,{variant:"btn bg-transparent",className:"mdsubmitBtn",onClick:function(){""===u||""===r?alert("\u8bf7\u5199\u6807\u9898\u548c\u5185\u5bb9\u54e6"):(!function(e){C.apply(this,arguments)}({header:u,text:r,readStatus:!1}),e.onHide())},children:[Object(y.jsx)(E.a,{})," \u6295\u9001"]})]})})},L=c(50);function F(e){var t=e.data,c=(e.setShowList,e.handleOpenItem),a=e.setItem;return Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:"scrollComponent",children:Object(y.jsx)(b.a.Body,{children:t.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(b.a.Text,{children:Object(y.jsx)("button",{className:"machineBack",onClick:function(){return function(e){a(e),c()}(e)},children:e.header})})})}))})})})}var H=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!0),o=Object(i.a)(r,2),j=o[0],l=o[1],u=Object(a.useState)(!1),d=Object(i.a)(u,2),O=d[0],h=d[1],x=Object(a.useState)({}),m=Object(i.a)(x,2),p=m[0],f=m[1];return Object(a.useEffect)((function(){(function(){return N.apply(this,arguments)})().then((function(e){s(e)}))}),[]),Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)(b.a,{children:[Object(y.jsx)("button",{className:"cardCloseBtn",onClick:function(){e.close()},children:"X"}),j?Object(y.jsx)(F,{setShowList:l,data:n,handleOpenItem:function(){l(!1),h(!0)},setItem:f}):null,O?Object(y.jsxs)("div",{children:[Object(y.jsxs)("button",{className:"machineBack",onClick:function(){l(!0),h(!1)},children:[Object(y.jsx)(L.a,{}),"\u4e3b\u9875"]}),Object(y.jsx)("div",{className:"scrollComponent",children:Object(y.jsx)(b.a.Body,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(b.a.Title,{children:p.header}),Object(y.jsx)(b.a.Text,{children:p.text})]})})})]}):null]})})};var D=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),u=r[0],b=r[1],d=Object(a.useState)(!1),O=Object(i.a)(d,2),h=O[0],x=O[1],m=Object(a.useState)(!1),p=Object(i.a)(m,2),f=p[0],v=p[1];return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"C1",children:Object(y.jsxs)("div",{className:"C1container",children:[Object(y.jsx)("div",{className:"buttonContainer",children:Object(y.jsx)("button",{className:"machineBack",children:Object(y.jsx)("img",{src:l,onClick:function(){return v(!0)},className:"planet"})})}),Object(y.jsx)("div",{className:"buttonContainer",children:Object(y.jsx)("button",{className:"machineBack",children:Object(y.jsx)("img",{src:w,onClick:function(){x(!0)},className:"planet"})})})]})}),Object(y.jsx)("div",{className:"C2",children:Object(y.jsxs)("div",{className:"cardBox",children:[h?Object(y.jsx)(H,{close:function(){x(!1)}}):null,u?Object(y.jsx)(S,{instantlyCloseCard:function(){b(!1)}}):null]})}),Object(y.jsx)("div",{className:"C3",children:Object(y.jsx)("button",{className:"machineBack",children:Object(y.jsx)("img",{src:c?j:o,onClick:function(){n(!1),setTimeout((function(){n(!0),b(!0),setTimeout((function(){b(!1)}),6e4)}),6e3)},className:"machine",alt:"Logo"})})}),Object(y.jsx)(X,{show:f,onHide:function(){return v(!1)},backdrop:"static",keyboard:!1})]})};r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.3822ec33.chunk.js.map