(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),l=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://nick-oyk.github.io",j="NOYK.",h="Nicholas Ooi Yu Khai",d="Software Engineer",b="I am a software engineer with knowledgeable skills in modern-day technologies and experience using Frontend and Backend Technology stacks, focusing on Nodejs and Reactjs.",u="https://example.com",m={linkedin:"https://www.linkedin.com/in/ooi-yu-khai-3a1930193/",github:"https://github.com/Nick-Oyk"},O=[{name:"Setel EV Charging",description:"The production-ready Backend EV Charging service enables users to charge with multiple vendors, including JomCharge and ChargeNGo, through the Setel app. Built on Nest JS, it leverages MongoDB as its database and is deployed on AWS using Kubernetes and ArgoCD for efficient management and scalability. This comprehensive solution seamlessly integrates various charging vendors, providing users with a convenient and reliable platform for EV charging needs. With robust technology stack and deployment infrastructure, it ensures optimal performance and scalability for evolving user demands in the electric vehicle charging ecosystem.      ",stack:["NestJs","React","MongoDB","AWS","Kubernetes","ArgoCD"],livePreview:"https://www.setel.com/ev-charging"},{name:"Micro-service Architecture test ",description:"The Microservice Architecture Test Application is a versatile platform for evaluating microservices-based systems. It offers comprehensive testing for service communication, fault tolerance, scalability, and resilience. With modular architecture and real-time monitoring, it provides developers insights to optimize deployments for reliability and efficiency in production environments.",stack:["NestJs","MongoDB","Kubernetes","Docker","Postgresql"],sourceCode:"https://github.com/Nick-Oyk/Micro-service-Architecture-Test"}],f=["HTML","CSS","JavaScript","TypeScript","React","Git","AWS","Kubernetes","Gitops","NestJs","ArgoCD"],g="nicholasoyk@gmail.com",p=n(16),x=n.n(p),v=n(14),k=n.n(v),N=n(18),_=n.n(N),y=n(17),w=n.n(y),C=(n(28),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(i.useState)(!1),o=Object(s.a)(l,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,g?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(k.a,{}):Object(a.jsx)(x.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(w.a,{}):Object(a.jsx)(_.a,{})})]})}),S=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),A=n(11),E=n.n(A),T=n(19),B=n.n(T),J=(n(33),function(){var e=h,t=d,n=b,c=u,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(B.a,{})})]})]})]})}),M=n(7),D=n.n(M),P=n(20),K=n.n(P),I=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(K.a,{})})]})}),R=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(I,{project:e},D()())}))})]}):null}),W=(n(37),function(){return f.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),L=n(21),G=n.n(L),V=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(G.a,{fontSize:"large"})})}):null}),Y=(n(39),function(){return g?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(g),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),F=(n(41),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(S,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(J,{}),Object(a.jsx)(R,{}),Object(a.jsx)(W,{}),Object(a.jsx)(Y,{})]}),Object(a.jsx)(V,{}),Object(a.jsx)(z,{})]})});n(42);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fbbd8b49.chunk.js.map