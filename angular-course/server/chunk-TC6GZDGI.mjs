import './polyfills.server.mjs';
import{C as y,F as x,G as S,H as F,I as o,a as n,b as p,c,d as s,e as l,f as d,g as m,h as r,i as u,p as f,r as v,s as g,t as h,u as C,v as _,y as w}from"./chunk-MRBR4X2L.mjs";var b={production:!1,navBarBackgroundColor:"blue"};var q=()=>({page:1,name:"tofik"}),M=(()=>{let e=class e{constructor(){this.backgroundColor=b.navBarBackgroundColor}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=n({type:e,selectors:[["navbar"]],standalone:!0,features:[r],decls:7,vars:2,consts:[[1,"nav","nav-pills","mb-2"],[1,"nav-item"],["routerLink","followers","routerLinkActive","active",1,"nav-link","me-2",3,"queryParams"],["routerLink","posts","routerLinkActive","active",1,"nav-link","me-2"]],template:function(i,T){i&1&&(s(0,"ul",0)(1,"li",1)(2,"a",2),m(3,"Followers"),l()(),s(4,"li",1)(5,"a",3),m(6,"Posts"),l()()()),i&2&&(p(2),c("queryParams",u(1,q)))},dependencies:[o,x,S]});let t=e;return t})();var P=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=n({type:e,selectors:[["app-root"]],standalone:!0,features:[r],decls:2,vars:0,template:function(i,T){i&1&&d(0,"navbar")(1,"router-outlet")},dependencies:[y,o,v,M]});let t=e;return t})();var I=[];var E=(t,e)=>(console.log(`Request is on its way to ${t}`),e(t));var k={providers:[F(I),_(),g(h([E]))]};var O={providers:[w()]},N=f(k,O);var j=()=>C(P,N),Vt=j;export{Vt as a};
