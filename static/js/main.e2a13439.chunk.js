(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(1)),a=n(4),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabet",d="length",h="reverse";var g=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(""),a=Object(r.a)(c,2),g=a[0],p=a[1],f=function(t,e){var n=e.sortField,s=e.reverseField,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case d:return t.length-e.length;default:return 0}})),s&&c.reverse(),c}(b,{sortField:n,reverseField:g});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return s(j)},type:"button",className:l()("button is-info",{"is-light":n!==j}),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return s(d)},type:"button",className:l()("button is-success",{"is-light":n!==d}),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return p(g?"":h)},type:"button",className:l()("button is-warning ",{"is-light":g!==h}),children:"Reverse"}),(n||g)&&Object(u.jsx)("button",{onClick:function(){s(""),p("")},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:f.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e2a13439.chunk.js.map