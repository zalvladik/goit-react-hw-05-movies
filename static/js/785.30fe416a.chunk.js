"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),s=(n(724),n(791)),o=n(596),a=n(135),i=n(87),c=n(184),u=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],l=(0,i.lr)(),d=(0,r.Z)(l,2),h=d[0],m=d[1],f=h.get("query"),g=(0,s.useState)((function(){return f||""})),p=(0,r.Z)(g,2),v=p[0],x=p[1];return(0,c.jsx)("div",{className:"qwery_Container",children:(0,c.jsxs)("form",{className:"formQwery",onSubmit:function(e){return e.preventDefault(),""===v?o.Am.error("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}):n===v?o.Am.error("\u0412\u0438 \u0443\u0436\u0435 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u043f\u043e\u0448\u0443\u043a ".concat(v),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}):(u(v),void m({query:v}))},children:[(0,c.jsx)("label",{children:(0,c.jsx)("input",{value:v,className:"inputSearch",type:"text",onChange:function(e){x(e.currentTarget.value.toLowerCase().trim())}})}),(0,c.jsxs)("button",{className:"submitButton",type:"submit",children:[" ",(0,c.jsx)(a.U41,{className:"button_icon"})," "]})]})})},l=n(433),d=n(689),h=n(984),m=function(){var e,t=(0,i.lr)(),n=(0,r.Z)(t,1)[0],a=(0,s.useState)([]),u=(0,r.Z)(a,2),m=u[0],f=u[1],g=(0,s.useState)(1),p=(0,r.Z)(g,2),v=p[0],x=p[1],b=(0,s.useState)(!1),j=(0,r.Z)(b,2),k=j[0],y=j[1],_=(0,d.TH)(),C=null!==(e=n.get("query"))&&void 0!==e?e:"";return(0,s.useEffect)((function(){if(C){y((function(e){return!0})),setTimeout((function(){fetch("".concat("https://api.themoviedb.org","/3/search/movie?api_key=").concat("fb40b3f9c120ec573db898c0235ca89c","&language=en-US&query=").concat(C,"&page=").concat(v,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){if(0===e.results.length)return o.Am.error("\u041d\u0430\u0436\u0430\u043b\u044c \u043f\u043e \u0432\u0430\u0448\u043e\u043c\u0443 \u0437\u0430\u043f\u0438\u0442\u0443 \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",{position:"top-right",autoClose:2500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});console.log("movieList"),f((function(t){return[].concat((0,l.Z)(t),(0,l.Z)(e.results))}))})).catch((function(e){return console.log(e)})).finally(y((function(e){return!1})))}),2e3)}}),[v,C]),k?(0,c.jsx)("div",{className:"query_container",children:(0,c.jsx)("p",{className:"reviews_author",children:"Loading... \ud83d\udd53"})}):m.length>0?(0,c.jsxs)("div",{className:"query_container",children:[(0,c.jsx)("ul",{className:"query_list",children:m.map((function(e){var t;return(0,c.jsx)("li",{className:"query_item",id:e.id,children:(0,c.jsxs)(i.OL,{state:{from:_},to:"/movies/".concat(e.id),className:"query_link",children:["- ",null!==(t=e.title)&&void 0!==t?t:e.name]})},(0,h.x0)())}))}),m.length>0&&(0,c.jsx)("div",{className:"button_Container",children:(0,c.jsx)("button",{className:"buttonPlusPage",onClick:function(){x(v+1)},children:" Click me!"})})]}):void 0},f=(n(415),function(){return(0,c.jsxs)("main",{children:[(0,c.jsx)(u,{}),(0,c.jsx)(m,{})]})})}}]);
//# sourceMappingURL=785.30fe416a.chunk.js.map