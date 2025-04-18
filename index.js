import{a as h,S as g,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const y="49679717-f5eb164bef18f43bdb971e28c",L="https://pixabay.com/api/";async function v(r,e){const a=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});try{return(await h.get(`${L}?${a}`)).data}catch(s){throw console.error("Fetch error:",s),s}}const p=document.querySelector(".gallery"),m=document.querySelector(".loader");let i=null;function b(r){const e=r.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${r.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${e}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${r.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${r.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${r.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${r.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function w(r){const e=r.map(b).join("");p.insertAdjacentHTML("beforeend",e),i?i.refresh():i=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function S(){p.innerHTML="",i&&(i.destroy(),i=null)}function q(){m.classList.remove("hidden")}function P(){m.classList.add("hidden")}const $=document.querySelector(".form"),d=document.querySelector(".input"),n=document.querySelector(".load-more");let f=1,u="";$.addEventListener("submit",E);n.addEventListener("click",onLoadMore);n.classList.replace("load-more","load-more-hidden");function E(r){if(r.preventDefault(),u=d.value.trim(),f=1,!u){c.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),d.focus();return}q(),S(),n.classList.replace("load-more","load-more-hidden"),v(u,f).then(e=>{if(!e.hits||e.hits.length===0){c.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}e.hits.length<e.totalHits?n.classList.replace("load-more-hidden","load-more"):n.classList.replace("load-more","load-more-hidden"),w(e.hits)}).catch(e=>{c.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",e)}).finally(()=>{P(),d.value=""})}
//# sourceMappingURL=index.js.map
