(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(12),r=c.n(i),s=(c(20),c(8)),p=c.n(s),l=c(13),o=c(5),j=(c(22),c(4)),u=c.n(j),b=c(1),d=function(e){var t=e.title,c=e.calories,a=e.image,n=e.ingredients;return Object(b.jsxs)("div",{className:u.a.recipe,children:[Object(b.jsx)("h1",{style:{margin:"10px"},children:t}),Object(b.jsx)("ol",{className:u.a.ingredients,children:n.map((function(e,t){return Object(b.jsx)("li",{children:e.text},t)}))}),Object(b.jsxs)("p",{className:u.a.calories,children:[Object(b.jsx)("span",{style:{padding:"20px",fontFamily:"serif"},children:"Calories:"}),c]}),Object(b.jsx)("img",{className:u.a.image,src:a,alt:""})]})},m=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),s=r[0],j=r[1],u=Object(a.useState)("chicken"),m=Object(o.a)(u,2),f=m[0],h=m[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("1bbe4936","&app_key=").concat("1cfa492a65d64fc3eeaf4ab805f26080"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(s),j("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){j(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},f=c(15);r.a.render(Object(b.jsx)(f.a,{children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})})}),document.getElementById("root"))},4:function(e,t,c){e.exports={recipe:"recipe_recipe__JPp7-",image:"recipe_image__GPuF_",calories:"recipe_calories__3dJ-K",ingredients:"recipe_ingredients__2xLTg"}}},[[29,1,2]]]);
//# sourceMappingURL=main.528c1cda.chunk.js.map