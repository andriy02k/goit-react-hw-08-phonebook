"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[348],{348:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(9439),s=n(2791),i=n(4420),o=n(2114),a=function(e){return e.contacts.items},l=function(e){return e.filter.filter},u=n(2552),c=n(7438),m=n(7236),f=n(9055),d=n(3329),y=function(){var e=(0,u.F)(),t=(0,i.v9)(a),n=(0,i.I0)(),l=(0,s.useState)(""),y=(0,r.Z)(l,2),p=y[0],x=y[1],v=(0,s.useState)(""),h=(0,r.Z)(v,2),j=h[0],g=h[1];(0,s.useEffect)((function(){n((0,o.m$)())}),[n]);return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.some((function(e){return e.name.toLocaleLowerCase()===p.toLocaleLowerCase()}))?alert("".concat(p," is alredy in contacts")):(n((0,o.G3)({name:p,phone:j})),x(""),g(""))},children:[(0,d.jsxs)(c.l,{children:["Name",(0,d.jsx)(m.I,{type:"text",name:"name",value:p,onChange:function(e){var t=e.target.value;return x(t)},required:!0})]}),(0,d.jsxs)(c.l,{style:{fontSize:e.fonts.sizes.medium,marginBottom:"12px"},children:["Number",(0,d.jsx)(m.I,{type:"tel",name:"phone",value:j,onChange:function(e){var t=e.target.value;return g(t)},required:!0})]}),(0,d.jsx)(f.z,{type:"submit",children:"Add contact"})]})},p=n(5805),x=n(824),v=function(){var e=(0,u.F)(),t=(0,i.v9)(l),n=(0,i.I0)();return(0,d.jsxs)(x.xu,{style:{fontSize:e.fonts.sizes.medium,marginBottom:"12px"},children:["Filter contacts by name",(0,d.jsx)(m.I,{type:"text",value:t,onChange:function(e){var t=e.target.value;n((0,p.K)(t))}})]})},h=n(1413),j=n(4942),g=n(4925),Z=n(9640),L=n(9886);var S=n(5597),C=n(5986),z=n(2996),_=n(5113),k=["children","styleType","stylePosition","spacing"],w=["as"],b=["as"],I=(0,L.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),N=(0,r.Z)(I,2),G=N[0],B=N[1],F=(0,S.G)((function(e,t){var n=(0,C.jC)("List",e),r=(0,z.Lr)(e),i=r.children,o=r.styleType,a=void 0===o?"none":o,l=r.stylePosition,u=r.spacing,c=(0,g.Z)(r,k),m=function(e){return s.Children.toArray(e).filter((function(e){return(0,s.isValidElement)(e)}))}(i),f=u?(0,j.Z)({},"& > *:not(style) ~ *:not(style)",{mt:u}):{};return(0,d.jsx)(G,{value:n,children:(0,d.jsx)(_.m.ul,(0,h.Z)((0,h.Z)({ref:t,listStyleType:a,listStylePosition:l,role:"list",__css:(0,h.Z)((0,h.Z)({},n.container),f)},c),{},{children:m}))})}));F.displayName="List",(0,S.G)((function(e,t){e.as;var n=(0,g.Z)(e,w);return(0,d.jsx)(F,(0,h.Z)({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))})).displayName="OrderedList",(0,S.G)((function(e,t){e.as;var n=(0,g.Z)(e,b);return(0,d.jsx)(F,(0,h.Z)({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))})).displayName="UnorderedList",(0,S.G)((function(e,t){var n=B();return(0,d.jsx)(_.m.li,(0,h.Z)((0,h.Z)({ref:t},e),{},{__css:n.item}))})).displayName="ListItem",(0,S.G)((function(e,t){var n=B();return(0,d.jsx)(Z.J,(0,h.Z)((0,h.Z)({ref:t,role:"presentation"},e),{},{__css:n.icon}))})).displayName="ListIcon";var T=function(){var e=(0,u.F)(),t=(0,i.v9)(a),n=(0,i.v9)(l),r=(0,i.I0)(),s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,d.jsx)(F,{children:s.map((function(t){var n=t._id,s=t.name,i=t.number;return(0,d.jsxs)("li",{style:{fontSize:e.fonts.sizes.medium,marginBottom:"4px"},children:[s,": ",i,(0,d.jsx)(f.z,{onClick:function(){return e=n,void r((0,o.jc)(e));var e},children:"Delete"})]},n)}))})},P=function(){var e=(0,u.F)();return(0,d.jsxs)(x.xu,{style:{display:"flex",flexDirection:"column"},children:[(0,d.jsx)("h1",{style:{color:e.colors.primary,fontSize:e.fonts.sizes.large,marginBottom:"12px"},children:"Phonebook"}),(0,d.jsx)(y,{}),(0,d.jsx)("h2",{style:{color:e.colors.primary,fontSize:e.fonts.sizes.large,marginBottom:"12px"},children:"Contacts"}),(0,d.jsx)(v,{}),(0,d.jsx)(T,{})]})}}}]);
//# sourceMappingURL=348.2630449f.chunk.js.map