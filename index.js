import{a as v,S as L,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function d(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=d(s);fetch(s.href,o)}})();const b="49679717-f5eb164bef18f43bdb971e28c",w="https://pixabay.com/api/";async function f(e,t){const d=new URLSearchParams({key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await v.get(`${w}?${d}`)).data}catch(r){throw console.error("Fetch error:",r),r}}const m=document.querySelector(".gallery"),p=document.querySelector(".loader");let n=null;function S(e){const t=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${t}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${e.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${e.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${e.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${e.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function h(e){const t=e.map(S).join("");m.insertAdjacentHTML("beforeend",t),n?n.refresh():n=new L(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){m.innerHTML="",n&&(n.destroy(),n=null)}function y(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function $(){const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({left:0,top:t*3,behavior:"smooth"})}}const I=document.querySelector(".form"),E=document.querySelector(".input"),a=document.querySelector(".load-more");let i=1,l="";I.addEventListener("submit",M);a.addEventListener("click",O);function M(e){e.preventDefault(),l=E.value.trim(),i=1,l&&(y(),q(),a.classList.add("load-more-hidden"),f(l,i).then(t=>{if(!t.hits||t.hits.length===0){c.warning({title:"No results",message:"Try another query"});return}h(t.hits),t.totalHits>i*15&&a.classList.remove("load-more-hidden")}).catch(t=>{c.error({title:"Error",message:t.message})}).finally(()=>{g()}))}function O(){i++,a.classList.add("load-more-hidden"),y(),f(l,i).then(e=>{h(e.hits),$(),i*15>=e.totalHits?c.info({message:"We're sorry, but you've reached the end of search results."}):a.classList.remove("load-more-hidden")}).catch(e=>{c.error({title:"Error",message:e.message})}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
