(this.webpackJsonpinotebook=this.webpackJsonpinotebook||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(12),s=a.n(c),r=(a(17),a(18),a(5)),o=a(2),l=a(0),i=function(){var e=Object(o.g)(),t=Object(o.f)();Object(n.useEffect)((function(){console.log(t.pathname)}),[t]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(r.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/",children:"Navbar"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link ".concat("/"===t.pathname?"active":""),"aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link ".concat("/about"===t.pathname?"active":""),to:"/about",children:"About"})})]}),localStorage.getItem("token")?Object(l.jsx)("button",{onClick:function(){localStorage.removeItem("token"),e("/login")},className:"btn btn-primary",children:"Logout"}):Object(l.jsxs)("form",{autoComplete:"off",className:"d-flex",role:"search",children:[Object(l.jsx)(r.b,{className:"btn btn-primary mx-1",to:"/login",role:"button",children:"Login"}),Object(l.jsx)(r.b,{className:"btn btn-primary mx-1",to:"/signup",role:"button",children:"Signup"})]})]})]})})})},d=Object(n.createContext)(),b=a(6),m=a(4),j=a(7),u=function(e){var t=Object(n.useContext)(d).deletenote,a=e.note,c=e.updatenote;return Object(l.jsx)("div",{className:"col-md-3",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("div",{className:" d-flex align-item-center ",children:[Object(l.jsx)("h5",{className:"card-title",children:a.title}),Object(l.jsx)("i",{className:"fa-solid fa-trash mx-2",onClick:function(){t(a._id)}}),Object(l.jsx)("i",{className:"fa-solid fa-pen-to-square mx-2",onClick:function(){c(a)}})]}),Object(l.jsx)("p",{className:"card-text",children:a.description})]})})})},p=function(){var e=Object(n.useContext)(d).addnote,t=Object(n.useState)({title:"",description:"",tag:""}),a=Object(j.a)(t,2),c=a[0],s=a[1],r=function(e){s(Object(m.a)(Object(m.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"my-3",children:"Add  a Note"}),Object(l.jsxs)("form",{autoComplete:"off",children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"title",name:"title","aria-describedby":"emailHelp",value:c.title,onChange:r})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"description",name:"description",value:c.description,onChange:r})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"tag",name:"tag",value:c.tag,onChange:r})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault(),e(c.title,c.description,c.tag),s({title:"",description:"",tag:""})},children:"Add Note"})]})]})},h=function(){var e=Object(n.useContext)(d),t=e.notes,a=(e.addnote,e.getnote),c=e.editnote,s=Object(o.g)();Object(n.useEffect)((function(){localStorage.getItem("token")?a():s("/login")}),[]);var r=Object(n.useRef)(null),i=Object(n.useRef)(null),h=Object(n.useState)({id:"",etitle:"",edescription:"",etag:""}),x=Object(j.a)(h,2),O=x[0],f=x[1],g=function(e){r.current.click(),f({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},v=function(e){f(Object(m.a)(Object(m.a)({},O),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{}),Object(l.jsx)("button",{ref:r,type:"button",className:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(l.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(l.jsx)("div",{className:"modal-dialog",children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsx)("h1",{className:"modal-title fs-5",id:"exampleModalLabel",children:"Modal title"}),Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsxs)("form",{autoComplete:"off",children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"etitle",name:"etitle","aria-describedby":"emailHelp",value:O.etitle,onChange:v})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"edescription",name:"edescription",value:O.edescription,onChange:v})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"etag",name:"etag",value:O.etag,onChange:v})]})]})}),Object(l.jsxs)("div",{className:"modal-footer",children:[Object(l.jsx)("button",{ref:i,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){c(O.id,O.etitle,O.edescription,O.etag),i.current.click()},children:"update note"})]})]})})}),Object(l.jsxs)("div",{className:"row my-3",children:[Object(l.jsx)("h1",{children:"Your Note   "}),t.map((function(e){return Object(l.jsx)(u,{updatenote:g,note:e},e._id)}))]})]})},x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsx)(h,{})})})},O=function(){Object(n.useContext)(d);return Object(l.jsx)(l.Fragment,{children:"this is about"})},f=a(3),g=a.n(f),v=a(9),N=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],s=a[1],r=function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/deletenote/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:a=e.sent,a.json(),n=c.filter((function(e){return e._id!==t})),s(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(v.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/fetchallnotes",{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n){var r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/addnote",{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:t,description:a,tag:n})});case 2:return r=e.sent,e.next=5,r.json();case 5:o=e.sent,s(c.concat(o));case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(v.a)(g.a.mark((function e(t,a,n,r){var o,l,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/updatenote/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")},body:JSON.stringify({title:a,description:n,tag:r})});case 2:return o=e.sent,e.next=5,o.json();case 5:e.sent,l=JSON.parse(JSON.stringify(c)),i=0;case 8:if(!(i<l.length)){e.next=19;break}if(l[i]._id!==t){e.next=15;break}return l[i].title=a,l[i].description=n,l[i].tag=r,e.abrupt("break",19);case 15:s(l);case 16:i++,e.next=8;break;case 19:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}();return Object(l.jsxs)(d.Provider,{value:{notes:c,deletenote:r,getnote:o,addnote:i,editnote:b},children:[e.children,";"]})},y=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"alert alert-primary",role:"alert"})})},C=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(j.a)(t,2),c=a[0],s=a[1],r=Object(o.g)(),i=function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:c.email,password:c.password})});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),n.success?(localStorage.setItem("token",n.authtoken),r("/")):alert("Invalid credentials");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){s(Object(m.a)(Object(m.a)({},c),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{autoComplete:"off",onSubmit:i,children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",autoComplete:"off",className:"form-control",value:c.email,onChange:d,id:"email",name:"email","aria-describedby":"emailHelp"}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(l.jsx)("input",{type:"password",autoComplete:"off",className:"form-control",value:c.password,onChange:d,name:"password",id:"password"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},k=function(){var e=Object(n.useState)({name:"",email:"",password:"",cpassword:""}),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(o.g)(),r=function(){var e=Object(v.a)(g.a.mark((function e(t){var n,c,r,o,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.name,c=a.email,r=a.password,e.next=4,fetch("/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:n,email:c,password:r})});case 4:return o=e.sent,e.next=7,o.json();case 7:l=e.sent,console.log(l),localStorage.setItem("token",l.authtoken),s("/");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e){c(Object(m.a)(Object(m.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{autoComplete:"off",onSubmit:r,children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",autoComplete:"off",className:"form-control",id:"name",name:"name",onChange:i,"aria-describedby":"emailHelp"})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",autoComplete:"off",className:"form-control",id:"email",name:"email",onChange:i,"aria-describedby":"emailHelp"}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(l.jsx)("input",{type:"password",autoComplete:"off",className:"form-control",id:"password",onChange:i,name:"password"})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:"confirmPassword"}),Object(l.jsx)("input",{type:"password",autoComplete:"off",className:"form-control",id:"cpassword",onChange:i,name:"cpassword"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})};var w=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(N,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(y,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(x,{}),children:" "}),Object(l.jsx)(o.a,{exact:!0,path:"/about",element:Object(l.jsx)(O,{}),children:" "}),Object(l.jsx)(o.a,{exact:!0,path:"/login",element:Object(l.jsx)(C,{}),children:" "}),Object(l.jsx)(o.a,{exact:!0,path:"/signup",element:Object(l.jsx)(k,{}),children:" "})]})})]})})})};s.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.50b035d9.chunk.js.map