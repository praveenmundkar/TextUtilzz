(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),i=(a(9),a(10),a(0));function l(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:"Contact"})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}var o=a(2);function b(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)("copy"),l=Object(o.a)(r,2),b=l[0],j=l[1],d=Object(n.useState)(".."),u=Object(o.a)(d,2),h=u[0],m=u[1],x=function(e){for(var t=e.split(" "),a=0;a<t.length;a++)""===t[a]&&t.splice(a,1);return t};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("h1",{className:"mb-2",children:[" ",e.heading," "]}),Object(i.jsxs)("div",{className:"mb-3 tac",children:[Object(i.jsx)("textarea",{className:"form-control tarea",value:c,onChange:function(e){s(e.target.value),j("copy");var t=x(c);console.log(t)},id:"mybox",rows:"8",placeholder:"Paste or Type your Text here"}),Object(i.jsxs)("button",{className:"btn btn-dark mx-1 cb",onClick:function(){navigator.clipboard.writeText(c),j("copied")},children:[" ",b]}),Object(i.jsxs)("button",{className:"btn-danger LAct",style:{color:"white",cursor:"#auto"},children:[Object(i.jsx)("strong",{children:" Recent Activity : "}),Object(i.jsx)("span",{style:{color:"#07ffff"},children:h})]})]}),Object(i.jsx)("button",{className:"btn btn-outline-dark mx-1",onClick:function(){var e=c.toUpperCase();s(e),j("copy"),m("Converted To Uppercase")},children:" Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-outline-dark mx-1",onClick:function(){var e=c.toLowerCase();s(e),j("copy"),m("Converted To Lowercase")},children:" Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-outline-dark mx-1",onClick:function(){var e=function(e){for(var t=e.split("."),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].substring(1);return t.join(" ")}(c);s(e),j("copy"),m("Capitalized text")},children:" Capitalize Each Sentence"}),Object(i.jsx)("button",{className:"btn btn-outline-dark mx-1",onClick:function(){var e=function(e){for(var t=e.toLowerCase().split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].substring(1);return t.join(" ")}(c);s(e),j("copy"),m("Capitalized Each Word")},children:" Capitalize Each Word"}),Object(i.jsx)("button",{className:"btn btn-outline-dark mx-1",onClick:function(){var e=c.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");s(e),j("copy"),m("Removed Punctuation")},children:" Remove Puntuation"}),Object(i.jsx)("button",{className:"btn btn-outline-dark mx-1",onClick:function(){var e=c.split(/[ ]+/);s(e.join(" ")),m("Removed Extra Spaces")},children:" Remove ExtraSpaces"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Summary Of Your Text"}),Object(i.jsxs)("p",{children:[x(c).length," Words and ",c.length," Characters"]}),Object(i.jsxs)("p",{children:["Average reading time ",.008*c.split(" ").length," Minutes"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("div",{className:"preview my-3",children:Object(i.jsx)("p",{children:c})})]})]})}var j=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{title:"TextUtilzz"}),Object(i.jsx)("div",{className:"container cdesign my-3",children:Object(i.jsx)(b,{heading:"Enter Text to Analyze"})})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.4010d0b2.chunk.js.map