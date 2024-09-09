import{A as q,S as b,a as P,N as A,P as I,K as D,E as N,C as j,i as w}from"./assets/vendor-C-gZTN3c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();document.querySelector(".menu-link").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".dropdown-menu").classList.toggle("show")});document.addEventListener("click",function(e){const t=document.querySelector(".dropdown-menu"),n=document.querySelector(".menu-link");!t.contains(e.target)&&!n.contains(e.target)&&t.classList.remove("show")});document.querySelectorAll(".dropdown-menu a").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".dropdown-menu").classList.remove("show")})});document.addEventListener("DOMContentLoaded",function(){function e(){document.querySelectorAll(".main-headline, .hero-contact-info").forEach(n=>{const r=n.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight;r.top<=o-100&&r.bottom>=0?n.classList.add("in-view"):n.classList.remove("in-view")})}window.addEventListener("load",e),window.addEventListener("scroll",e)});document.addEventListener("DOMContentLoaded",function(){new q(".accordion-info-about-me-list",{duration:300,showMultiple:!0,openOnInit:[0]})});document.querySelector(".first-element-about");const h=document.querySelector(".about-me"),V=h.querySelector(".about-me-swiper"),g=new b(V,{slidesPerView:"auto",loop:!0,speed:600,navigation:{nextEl:h.querySelector(".swiper-button-next"),loop:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0}),k=h.querySelector(".swiper-button-next");k&&(k.addEventListener("click",function(){g.slideNext()}),document.addEventListener("keydown",function(e){e.key==="ArrowRight"?g.slideNext():e.key==="ArrowLeft"&&g.slidePrev()}));const m=document.querySelector(".projects-section"),M=m.querySelector(".swiper-projects-container");new b(M,{direction:"horizontal",loop:!1,speed:600,spaceBetween:50,pagination:{el:m.querySelector(".swiper-pagination"),clickable:!0},navigation:{nextEl:m.querySelector(".swiper-button-next"),prevEl:m.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,slidesPerView:1,spaceBetween:40},1440:{speed:600,slidesPerView:1,spaceBetween:50}}});const a=M.swiper,f=m.querySelector(".swiper-button-next"),p=m.querySelector(".swiper-button-prev");function O(){a.isEnd?f.classList.add("swiper-button-disabled"):f.classList.remove("swiper-button-disabled"),a.isBeginning?p.classList.add("swiper-button-disabled"):p.classList.remove("swiper-button-disabled")}O();f.addEventListener("click",()=>{f.classList.contains("swiper-button-disabled")||a.slideNext()});p.addEventListener("click",()=>{p.classList.contains("swiper-button-disabled")||a.slidePrev()});document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":p.classList.contains("swiper-button-disabled")||a.slidePrev();break;case"ArrowRight":f.classList.contains("swiper-button-disabled")||a.slideNext();break}});a.on("slideChange",O);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".projects-button").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-url");n&&(window.location.href=n)})})});document.addEventListener("DOMContentLoaded",function(){new q(".accordion-container",{showMultiple:!0,duration:300})});const z=async()=>{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(e.status);return await e.json()};function H({author:e,avatar_url:t,review:n}){return`<li class="swiper-slide">
    <div class="reviews-item">
    <div class="element">
        <img class="review-section-img" src="${t}" alt="${e}"  />
        <h3 class="reviews-title">${e}</h3>
        <p class="reviews-text">${n}</p>
        </div>
    </div>
  </li>`}function R(e){return e.map(H).join("")}const $=e=>{const t=document.querySelector(".reviews-section"),n=t.querySelector(".swiper-wrapper"),r=t.querySelector(".swiper-reviews");z().then(o=>{const s=R(o);n.insertAdjacentHTML("beforeend",s),new e(r,{slidesPerView:1,autoHeight:!1,speed:600,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")}})}).catch(o=>{w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Reviews not found",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0}),r.innerHTML='<p class="reviews-notfound">Not found</p>'})};document.addEventListener("DOMContentLoaded",e=>{b.use([P,A,I,D,N,j]),$(b)});(()=>{const e=document.querySelector(".menu-burger"),t=document.querySelector(".js-open-burger"),n=document.querySelector(".js-close-burger"),r=document.querySelectorAll(".burger-menu-nav-link"),o=document.querySelector(".burger-button-link"),s=document.body,c=()=>{if(e){const l=e.classList.contains("is-open");e.classList.toggle("is-open",!l),t.setAttribute("aria-expanded",!l),l?s.classList.remove("no-scroll"):s.classList.add("no-scroll")}},v=()=>{e&&(e.classList.remove("is-open"),t&&t.setAttribute("aria-expanded",!1),s.classList.remove("no-scroll"))};t&&t.addEventListener("click",c),n&&n.addEventListener("click",c),r.forEach(l=>{l.addEventListener("click",v)}),o&&o.addEventListener("click",v),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&e&&(e.classList.remove("is-open"),t&&t.setAttribute("aria-expanded",!1),s.classList.remove("no-scroll"))})})();const C=document.querySelector(".coopForm");let i=document.querySelector("#email"),d=document.querySelector("#comment"),u=document.querySelector(".coopResultMsg"),y=document.querySelector(".modal-footer-overlay"),T=document.querySelector(".modal-footer-close-button"),x=document.body;const S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(i.value=S.email||"",d.value=S.comment||"");function L(e){e.value=e.dataset.fullValue||e.value}function B(e){e.value.length>36&&(e.dataset.fullValue=e.value,e.value=`${e.value.substring(0,36)}...`)}i.addEventListener("focus",()=>L(i));i.addEventListener("blur",()=>B(i));d.addEventListener("focus",()=>L(d));d.addEventListener("blur",()=>B(d));i.addEventListener("input",function(){i.value===""?(u.textContent="",i.style.removeProperty("border-color")):i.validity.patternMismatch?(u.textContent="Enter your Email correctly.",u.style.color="#e74a3b",i.style.borderColor="#e74a3b"):(u.textContent="Success!",u.style.color="#3cbc81",i.style.borderColor="#3cbc81")});C.addEventListener("submit",async function(e){e.preventDefault(),L(i),L(d);const t=i.value,n=d.value;if(!t||!n){w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Both fields are required.",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0});return}const r={email:t,comment:n};localStorage.setItem("feedback-form-state",JSON.stringify(r));try{(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(x.classList.add("no-scroll"),y.classList.remove("hidden"),u.textContent="",i.style.removeProperty("border-color"),C.reset(),localStorage.removeItem("feedback-form-state")):w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Request was not delivered",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0})}catch{w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Request was not delivered",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0})}});T.addEventListener("click",E);document.addEventListener("keydown",function(e){e.key==="Escape"&&E()});y.addEventListener("click",function(e){e.target===y&&E()});function E(){y.classList.add("hidden"),x.classList.remove("no-scroll")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".marquee-line");if(!e)return;const n=o=>{o.forEach(s=>{if(s.isIntersecting)for(let c of t)c.classList.add("animate");else for(let c of t)c.classList.remove("animate")})};new IntersectionObserver(n,{threshold:.2}).observe(e)});(function(){const e=localStorage.getItem("selectedColor");e&&document.body.classList.add(e)})();document.addEventListener("DOMContentLoaded",()=>{const e=document.body,t=document.querySelector(".color-div"),n=document.querySelectorAll(".color-button");document.querySelector(".icon-paint-brush");const r=["red","green","blue","brick","rain","orange"],o=()=>{r.forEach(s=>e.classList.remove(s))};n.forEach((s,c)=>{s.addEventListener("click",v=>{v.stopPropagation(),o();const l=r[c];e.classList.add(l),t.classList.add("collapsed"),t.classList.remove("open"),localStorage.setItem("selectedColor",l)})})});
//# sourceMappingURL=commonHelpers.js.map
