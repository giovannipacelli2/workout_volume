"use strict";(self.webpackChunknews=self.webpackChunknews||[]).push([[996],{883:(e,t,n)=>{var r=n(294),l=n(935),c=(n(804),n(575));function a(){var e=[];for(var t in c.w.repsPercent){var n=r.createElement("tr",null,r.createElement("td",null,t),r.createElement("td",null,c.w.repsPercent[t]));e.push(n)}return e}function o(){return r.createElement("div",{id:"info-page"},r.createElement("div",{id:"info-container"},r.createElement("div",{className:"close exit"},"x"),r.createElement("table",{className:"table"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Reps"),r.createElement("th",null,"Volume %"))),r.createElement("tbody",{id:"info-body"},r.createElement(a,null)))))}var i=document.body.querySelector("#page"),u=document.body.querySelector("#info"),s=!0;u.onclick=function(e){var t=document.createElement("DIV");i.append(t),l.render(r.createElement(o,null),t),s=!1,u.onclick=null},i.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("exit")){document.body.querySelector("#info-page").style.display="none"}if("info"!==t.id||s)return;document.body.querySelector("#info-page").style.display=""}))},575:(e,t,n)=>{n.d(t,{w:()=>r});var r={repsPercent:{1:1,2:.95,3:.875,4:.85,5:.8,6:.775,7:.75,8:.75,9:.725,10:.7,11:.7,12:.65,13:.65,14:.65,15:.6,16:.6,17:.55,18:.55,19:.55,20:.5,">20":.4},getVolume:function(e){return!!this.repsPercent[e]&&this.repsPercent[e]}}},804:(e,t,n)=>{var r=n(783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},e=>{e.O(0,[99],(()=>{return t=883,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=info.3a000c827cc0787c4a86.js.map