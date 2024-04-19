import{a as x,S as $,i as p}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function y(e,s){const r="https://pixabay.com/api/",a={key:"42820907-70ae148b9f4c1259f26bcae54",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};return await x.get(r,{params:a})}const k=new $(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function L(e){const s=q(e);d.insertAdjacentHTML("beforeend",s),k.refresh()}function q(e){return e.map(E).join("")}function E(e){const{webformatURL:s,largeImageURL:r,previewWidth:a,previewHeight:t,views:o,likes:n,comments:v,downloads:M,tags:C}=e;return`<li class="gallery-list">
          <a class="link-gallery" href="${r}">
            <img
            class="gallery-img"
            src="${s}"
            alt="${C}"
            width="${a}"
            height="${t}" />
          </a>
          <ul class="list">
            <li class="gallery-li">
              <h3 class="gallery-item">Likes</h3>
              <p>${n}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Views</h3>
              <p>${o}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Comments</h3>
              <p>${v}</p>
            </li>
            <li class="gallery-li">
              <h3 class="gallery-item">Downloads</h3>
              <p>${M}</p>
            </li>
          </ul>
        </li>`}function h(){d.innerHTML=""}const w=document.querySelector(".loader"),g=document.querySelector(".load-btn");function b(){w.classList.remove("is-hide")}function i(){w.classList.add("is-hide")}function f(e){const s={message:e,progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040"};p.show(s)}function O(){g.classList.remove("is-hide")}function B(){g.classList.add("is-hide")}function S(e,s){e>=s&&(B(),H("We're sorry, but you've reached the end of search results."))}function H(e){const s={message:e,messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",theme:"dark",position:"topRight",class:"message"};p.show(s)}const P=document.querySelector(".js-search-form");document.querySelector(".js-gallery");P.addEventListener("submit",j);g.addEventListener("click",I);let l,c,u;const m=15;async function j(e){if(e.preventDefault(),b(),h(),l=1,c=e.target.elements.data.value.trim().split(" ").filter(r=>r).join("+"),!c){h(),f("Error, empty field"),i();return}try{const r=await y(c,l);u=Math.ceil(r.data.totalHits/m),r.data.hits.length===0?(i(),f("Sorry, there are no images matching your search query. Please try again!")):(L(r.data.hits),O()),i(),r.data.totalHits<=m&&B(),S(l,u)}catch(r){console.log(r),i()}e.target.reset()}async function I(){b(),l+=1;try{const e=await y(c,l);L(e.data.hits),R(),S(l,u),i()}catch(e){console.log(e),i()}}function R(){const e=d.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({behavior:"smooth",top:e})}
//# sourceMappingURL=commonHelpers.js.map
