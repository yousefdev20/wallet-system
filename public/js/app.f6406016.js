(function(e){function t(t){for(var n,r,c=t[0],o=t[1],l=t[2],d=0,b=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&b.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(b.length)b.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({routes:"routes"}[e]||e)+"."+{"chunk-2d0d0262":"06098a5b","chunk-2d0d6f04":"ad9935f3","chunk-2d2178ab":"2c329076","chunk-d56c2da0":"d8dad398",routes:"8d9af3f7"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={routes:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({routes:"routes"}[e]||e)+"."+{"chunk-2d0d0262":"31d6cfe0","chunk-2d0d6f04":"31d6cfe0","chunk-2d2178ab":"31d6cfe0","chunk-d56c2da0":"31d6cfe0",routes:"935b5036"}[e]+".css",s=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===s))return t()}var b=document.getElementsByTagName("style");for(c=0;c<b.length;c++){l=b[c],d=l.getAttribute("data-href");if(d===n||d===s)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],u.parentNode.removeChild(u),a(i)},u.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=c(e);var b=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",b.name="ChunkLoadError",b.type=n,b.request=r,a[1](b)}s[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var u=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"166e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b0c0"),a("d3b7");var n=a("7a23"),r={style:{background:"#f0f2f5 !important",height:"100vh"}},s={key:0},i={class:"main-content position-relative max-height-vh-100 h-100 border-radius-lg",style:{"margin-inline-start":"17.125rem"}},c={class:"container-fluid py-4"},o={key:1},l={class:"main-content position-relative max-height-vh-100 h-100 border-radius-lg",style:{"margin-inline-start":"17.125rem"}},d={class:"container-fluid py-4"};function b(e,t,a,b,u,h){var m=Object(n["D"])("app-drawer"),p=Object(n["D"])("app-navbar"),v=Object(n["D"])("router-view"),f=Object(n["D"])("app-drawer-admin"),g=Object(n["D"])("app-navbar-admin"),j=Object(n["D"])("notifications");return Object(n["v"])(),Object(n["g"])("div",r,[e.$route.meta.isRoot?(Object(n["v"])(),Object(n["g"])("div",o,[Object(n["k"])(f),Object(n["h"])("main",l,[Object(n["k"])(g),Object(n["h"])("div",d,[Object(n["k"])(v,{key:e.$route.fullPath})])])])):(Object(n["v"])(),Object(n["g"])("div",s,[e.$route.meta.public?(Object(n["v"])(),Object(n["e"])(v,{key:e.$route.fullpath})):(Object(n["v"])(),Object(n["g"])(n["a"],{key:0},[Object(n["k"])(m),Object(n["h"])("main",i,[Object(n["k"])(p),Object(n["h"])("div",c,[Object(n["k"])(v,{key:e.$route.fullPath})])])],64))])),Object(n["k"])(j,{position:"bottom right",type:"success"})])}var u={class:"sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark",id:"sidenav-main"},h=Object(n["i"])('<div class="sidenav-header"><i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i><a class="navbar-brand m-0" href="javascript:void"><h5 class="text-center"><span class="ms-1 font-weight-bold text-white text-capitalize">ingot brokerage</span></h5></a></div><hr class="horizontal light mt-0 mb-2">',2),m={class:"collapse navbar-collapse w-auto max-height-vh-100",id:"sidenav-collapse-main"},p={class:"navbar-nav"},v={class:"nav-item"},f=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Dashboard",-1),g=[f],j={class:"nav-item"},O=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Desposit",-1),x=[O],y={class:"nav-item"},k=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Withdraw",-1),w=[k];function D(e,t,a,r,s,i){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("aside",u,[h,Object(n["h"])("div",m,[Object(n["h"])("ul",p,[Object(n["h"])("li",v,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-primary":1==s.tab}]),onClick:t[0]||(t[0]=function(e){return i.go({name:"User.Dashboard"})}),href:"javascript: void"},g,2)]),Object(n["h"])("li",j,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-primary":2==s.tab}]),onClick:t[1]||(t[1]=function(e){return i.go({name:"User.Dashboard.Deposit"})}),href:"javascript: void"},x,2)]),Object(n["h"])("li",y,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-primary":3==s.tab}]),onClick:t[2]||(t[2]=function(e){return i.go({name:"User.Dashboard.Withdraw"})}),href:"javascript: void"},w,2)])])])])])}var L={name:"appDrawer",data:function(){return{tab:1}},methods:{go:function(e){switch(this.$router.push(e),e.name){case"User.Dashboard":this.tab=1;break;case"User.Dashboard.Deposit":this.tab=2;break;case"User.Dashboard.Withdraw":this.tab=3;break}}}},A=a("6b0d"),S=a.n(A);const C=S()(L,[["render",D]]);var N=C,U={class:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","navbar-scroll":"true"},P={class:"container-fluid py-1 px-3"},T=Object(n["i"])('<nav aria-label="breadcrumb"><ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5"><li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li><li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li></ol><h6 class="font-weight-bolder mb-0">Dashboard</h6></nav>',1),M={class:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",id:"navbar"},I=Object(n["h"])("div",{class:"ms-md-auto pe-md-3 d-flex align-items-center"},[Object(n["h"])("div",{class:"input-group input-group-outline"},[Object(n["h"])("label",{class:"form-label"},"Type here..."),Object(n["h"])("input",{type:"text",class:"form-control"})])],-1),E={class:"navbar-nav justify-content-end"},_={class:"nav-item d-flex align-items-center"},B={href:"javascript:;",class:"nav-link text-body font-weight-bold px-0"},F=Object(n["h"])("i",{class:"fa fa-user me-sm-1"},null,-1),$=Object(n["i"])('<li class="nav-item d-xl-none ps-3 d-flex align-items-center"><a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav"><div class="sidenav-toggler-inner"><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i></div></a></li><li class="nav-item px-3 d-flex align-items-center"><a href="javascript:;" class="nav-link text-body p-0"><i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i></a></li>',2),R=Object(n["h"])("li",{class:"nav-item dropdown pe-2 d-flex align-items-center"},[Object(n["h"])("a",{href:"javascript:;",class:"nav-link text-body p-0",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(n["h"])("i",{class:"fa fa-bell cursor-pointer"})]),Object(n["h"])("ul",{class:"dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4","aria-labelledby":"dropdownMenuButton"},[Object(n["h"])("li",null,[Object(n["h"])("a",{class:"dropdown-item border-radius-md",href:"javascript:;"},[Object(n["h"])("div",{class:"d-flex py-1"},[Object(n["h"])("div",{class:"avatar avatar-sm bg-gradient-secondary me-3 my-auto"},[Object(n["h"])("svg",{width:"12px",height:"12px",viewBox:"0 0 43 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Object(n["h"])("title",null,"credit-card"),Object(n["h"])("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[Object(n["h"])("g",{transform:"translate(-2169.000000, -745.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[Object(n["h"])("g",{transform:"translate(1716.000000, 291.000000)"},[Object(n["h"])("g",{transform:"translate(453.000000, 454.000000)"},[Object(n["h"])("path",{class:"color-background",d:"M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z",opacity:"0.593633743"}),Object(n["h"])("path",{class:"color-background",d:"M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"})])])])])])]),Object(n["h"])("div",{class:"d-flex flex-column justify-content-center"},[Object(n["h"])("h6",{class:"text-sm font-weight-normal mb-1"}," Payment successfully completed "),Object(n["h"])("p",{class:"text-xs text-secondary mb-0"},[Object(n["h"])("i",{class:"fa fa-clock me-1"}),Object(n["j"])(" 2 days ")])])])])])])],-1);function q(e,t,a,r,s,i){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("nav",U,[Object(n["h"])("div",P,[T,Object(n["h"])("div",M,[I,Object(n["h"])("ul",E,[Object(n["h"])("li",_,[Object(n["h"])("a",B,[F,Object(n["h"])("span",{class:"d-sm-inline d-none",onClick:t[0]||(t[0]=function(){return i.Logout&&i.Logout.apply(i,arguments)})},"Sign Out")])]),$,R])])])])])}var z={name:"appNavbar",methods:{Logout:function(){this.$store.commit("LOGOUT_CLIENT"),this.$notify({text:"SignOut Successful",type:"success"}),this.$router.push({name:"Login"})}}};const G=S()(z,[["render",q]]);var Z=G,J={class:"sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark",id:"sidenav-main"},W=Object(n["i"])('<div class="sidenav-header"><i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i><a class="navbar-brand m-0" href="javascript:void"><h5 class="text-center"><span class="ms-1 font-weight-bold text-white text-capitalize">ingot brokerage</span></h5></a></div><hr class="horizontal light mt-0 mb-2">',2),H={class:"collapse navbar-collapse w-auto max-height-vh-100",id:"sidenav-collapse-main"},K={class:"navbar-nav"},Q={class:"nav-item"},V=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Dashboard",-1),X=[V],Y={class:"nav-item"},ee=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Users",-1),te=[ee],ae={class:"nav-item"},ne=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Transactions",-1),re=[ne],se={class:"nav-item"},ie=Object(n["h"])("span",{class:"nav-link-text ms-1"},"Payment gateways",-1),ce=[ie];function oe(e,t,a,r,s,i){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("aside",J,[W,Object(n["h"])("div",H,[Object(n["h"])("ul",K,[Object(n["h"])("li",Q,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-info":1==s.tab}]),onClick:t[0]||(t[0]=function(e){return i.go({name:"Admin.Dashboard"})}),href:"javascript: void"},X,2)]),Object(n["h"])("li",Y,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-info":2==s.tab}]),onClick:t[1]||(t[1]=function(e){return i.go({name:"Admin.Dashboard.User"})}),href:"javascript: void"},te,2)]),Object(n["h"])("li",ae,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-info":3==s.tab}]),onClick:t[2]||(t[2]=function(e){return i.go({name:"Admin.Dashboard.Transaction"})}),href:"javascript: void"},re,2)]),Object(n["h"])("li",se,[Object(n["h"])("a",{class:Object(n["q"])(["nav-link text-white",{"active bg-gradient-info":4==s.tab}]),onClick:t[3]||(t[3]=function(e){return i.go({name:"Admin.Dashboard.PaymentGateway"})}),href:"javascript: void"},ce,2)])])])])])}var le={name:"appDrawerAdmin",data:function(){return{tab:1}},methods:{go:function(e){switch(this.$router.push(e),e.name){case"Admin.Dashboard":this.tab=1;break;case"Admin.Dashboard.User":this.tab=2;break;case"Admin.Dashboard.Transaction":this.tab=3;break;case"Admin.Dashboard.PaymentGateway":this.tab=4;break}}}};const de=S()(le,[["render",oe]]);var be=de,ue={class:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","navbar-scroll":"true"},he={class:"container-fluid py-1 px-3"},me=Object(n["i"])('<nav aria-label="breadcrumb"><ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5"><li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li><li class="breadcrumb-item text-sm text-dark active" aria-current="page">Admin</li><li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li></ol><h6 class="font-weight-bolder mb-0">Dashboard</h6></nav>',1),pe={class:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",id:"navbar"},ve=Object(n["h"])("div",{class:"ms-md-auto pe-md-3 d-flex align-items-center"},[Object(n["h"])("div",{class:"input-group input-group-outline"},[Object(n["h"])("label",{class:"form-label"},"Type here..."),Object(n["h"])("input",{type:"text",class:"form-control"})])],-1),fe={class:"navbar-nav justify-content-end"},ge={class:"nav-item d-flex align-items-center"},je={href:"javascript:;",class:"nav-link text-body font-weight-bold px-0"},Oe=Object(n["h"])("i",{class:"fa fa-user me-sm-1"},null,-1),xe=Object(n["i"])('<li class="nav-item d-xl-none ps-3 d-flex align-items-center"><a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav"><div class="sidenav-toggler-inner"><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i></div></a></li><li class="nav-item px-3 d-flex align-items-center"><a href="javascript:;" class="nav-link text-body p-0"><i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i></a></li>',2),ye=Object(n["h"])("li",{class:"nav-item dropdown pe-2 d-flex align-items-center"},[Object(n["h"])("a",{href:"javascript:;",class:"nav-link text-body p-0",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(n["h"])("i",{class:"fa fa-bell cursor-pointer"})]),Object(n["h"])("ul",{class:"dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4","aria-labelledby":"dropdownMenuButton"},[Object(n["h"])("li",null,[Object(n["h"])("a",{class:"dropdown-item border-radius-md",href:"javascript:;"},[Object(n["h"])("div",{class:"d-flex py-1"},[Object(n["h"])("div",{class:"avatar avatar-sm bg-gradient-secondary me-3 my-auto"},[Object(n["h"])("svg",{width:"12px",height:"12px",viewBox:"0 0 43 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[Object(n["h"])("title",null,"credit-card"),Object(n["h"])("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[Object(n["h"])("g",{transform:"translate(-2169.000000, -745.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[Object(n["h"])("g",{transform:"translate(1716.000000, 291.000000)"},[Object(n["h"])("g",{transform:"translate(453.000000, 454.000000)"},[Object(n["h"])("path",{class:"color-background",d:"M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z",opacity:"0.593633743"}),Object(n["h"])("path",{class:"color-background",d:"M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"})])])])])])]),Object(n["h"])("div",{class:"d-flex flex-column justify-content-center"},[Object(n["h"])("h6",{class:"text-sm font-weight-normal mb-1"}," Payment successfully completed "),Object(n["h"])("p",{class:"text-xs text-secondary mb-0"},[Object(n["h"])("i",{class:"fa fa-clock me-1"}),Object(n["j"])(" 2 days ")])])])])])])],-1);function ke(e,t,a,r,s,i){return Object(n["v"])(),Object(n["g"])("div",null,[Object(n["h"])("nav",ue,[Object(n["h"])("div",he,[me,Object(n["h"])("div",pe,[ve,Object(n["h"])("ul",fe,[Object(n["h"])("li",ge,[Object(n["h"])("a",je,[Oe,Object(n["h"])("span",{class:"d-sm-inline d-none",onClick:t[0]||(t[0]=function(){return i.Logout&&i.Logout.apply(i,arguments)})},"Sign Out")])]),xe,ye])])])])])}var we={name:"appNavbarAdmin",methods:{Logout:function(){this.$store.commit("LOGOUT_ADMIN"),this.$notify({text:"SignOut Successful",type:"success"}),this.$router.push({name:"Admin.Login"})}}};const De=S()(we,[["render",ke]]);var Le=De;a("166e");var Ae={components:{AppDrawer:N,AppNavbar:Z,AppDrawerAdmin:be,AppNavbarAdmin:Le}};const Se=S()(Ae,[["render",b]]);var Ce=Se,Ne=a("2909"),Ue=(a("99af"),a("6c02")),Pe=a("1da1"),Te=(a("96cf"),a("3ca3"),a("ddb0"),a("e9c4"),a("5502")),Me=a("bc3a"),Ie=a.n(Me),Ee=Object(Te["a"])({state:{user:JSON.parse(localStorage.getItem("user")),admin:JSON.parse(localStorage.getItem("admin"))},mutations:{LOGIN_CLIENT:function(e,t){e.user=t,Ie.a.defaults.headers.common.Authorization="Bearer ".concat(e.user.token),localStorage.setItem("user",JSON.stringify(t))},LOGOUT_CLIENT:function(e){e.user=null,localStorage.removeItem("user")},LOGIN_ADMIN:function(e,t){e.admin=t,Ie.a.defaults.headers.common.Authorization="Bearer ".concat(e.admin.token),localStorage.setItem("admin",JSON.stringify(t))},LOGOUT_ADMIN:function(e){e.admin=null,localStorage.removeItem("admin")}},getters:{cleanCache:function(e){e.user=null,localStorage.removeItem("user")}},actions:{},modules:{}}),_e=[{path:"/404",meta:{public:!0},name:"NotFound",component:function(){return a.e("routes").then(a.bind(null,"9703"))}},{path:"/admin/login",meta:{public:!0},name:"Admin.Login",component:function(){return a.e("chunk-2d0d0262").then(a.bind(null,"676a"))},beforeEnter:function(e,t,a){Ee.state.admin?a({name:"Admin.Dashboard"}):a()}},{path:"/admin",meta:{breadcrumb:!0,isRoot:!0},name:"Root_",beforeEnter:function(e,t,a){return Object(Pe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Ee.state.admin?a():a("/admin/login?next=".concat(e.name));case 1:case"end":return t.stop()}}),t)})))()},component:function(){return a.e("chunk-2d2178ab").then(a.bind(null,"c6bd"))},redirect:{name:"Admin.Dashboard"},children:[{path:"/admin/dashboard",meta:{breadcrumb:!0,title:"Dashboard"},name:"Admin.Dashboard",component:function(){return a.e("routes").then(a.bind(null,"0a6e"))}},{path:"/admin/dashboard/users",meta:{breadcrumb:!0,title:"Dashboard"},name:"Admin.Dashboard.User",component:function(){return a.e("routes").then(a.bind(null,"de51"))}},{path:"/admin/dashboard/transactions",meta:{breadcrumb:!0,title:"Dashboard"},name:"Admin.Dashboard.Transaction",component:function(){return a.e("routes").then(a.bind(null,"ddd7"))}},{path:"/admin/dashboard/payment/gateways",meta:{breadcrumb:!0,title:"Dashboard"},name:"Admin.Dashboard.PaymentGateway",component:function(){return a.e("routes").then(a.bind(null,"a044"))}}]}],Be=[{path:"/user/register",meta:{public:!0},name:"Register",component:function(){return a.e("chunk-d56c2da0").then(a.bind(null,"8c72"))},beforeEnter:function(e,t,a){Ee.state.user?a({name:"User.Dashboard"}):a()}},{path:"/user/login",meta:{public:!0},name:"Login",component:function(){return a.e("chunk-2d0d6f04").then(a.bind(null,"754d"))},beforeEnter:function(e,t,a){Ee.state.user?a({name:"User.Dashboard"}):a()}},{path:"",meta:{breadcrumb:!0,isRoot:!1},name:"Root",beforeEnter:function(e,t,a){return Object(Pe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Ee.state.user?a():a("/user/login?next=".concat(e.name));case 1:case"end":return t.stop()}}),t)})))()},component:function(){return a.e("chunk-2d2178ab").then(a.bind(null,"c6bd"))},redirect:{name:"User.Dashboard"},children:[{path:"/user/dashboard",meta:{breadcrumb:!0,title:"Dashboard"},name:"User.Dashboard",component:function(){return a.e("routes").then(a.bind(null,"3d05"))}},{path:"/user/dashboard/deposit",meta:{breadcrumb:!0,title:"Dashboard"},name:"User.Dashboard.Deposit",component:function(){return a.e("routes").then(a.bind(null,"25f7"))}},{path:"/user/dashboard/withdraw",meta:{breadcrumb:!0,title:"Dashboard"},name:"User.Dashboard.Withdraw",component:function(){return a.e("routes").then(a.bind(null,"69d8"))}}]}],Fe=[].concat(Object(Ne["a"])(_e),Object(Ne["a"])(Be)),$e=Object(Ue["a"])({history:Object(Ue["b"])("/"),routes:Fe}),Re=$e,qe=a("130e"),ze=a("bfbe");Ie.a.defaults.timeout=3e5,Ie.a.defaults.baseURL="http://localhost:8000/api/";var Ge=Object(n["d"])(Ce);Ge.provide("$axios",Ie.a),Ge.use(ze["a"]).use(qe["a"],Ie.a),Ge.use(Ee).use(Re).mount("#app");var Ze=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).token:"";Ie.a.defaults.headers.common.Authorization="Bearer ".concat(Ze),Ie.a.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&(Re.currentRoute.name,Ee.getters.cleanCache),Promise.reject(e)}))}});
//# sourceMappingURL=app.f6406016.js.map