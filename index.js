import{S as L,i as p,a as w}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const b=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function m(e){try{const t=document.querySelector(".gallery"),s=e.map(o=>`
      <a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}"/>
  <div class="image-info">
      <div class="info-item">
        <p class="info-title">Likes</p>
        <p class="info-value">${o.likes}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Views</p>
        <p class="info-value">${o.views}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Comments</p>
        <p class="info-value">${o.comments}</p>
      </div>
      <div class="info-item">
        <p class="info-title">Downloads</p>
        <p class="info-value">${o.downloads}</p>
      </div>
    </div>
      </a>
    `).join("");t.insertAdjacentHTML("beforeend",s),b.refresh()}catch(t){console.error("Error rendering images:",t),l("There was an issue rendering the images.")}}async function S(){try{const e=document.querySelector(".gallery");e.innerHTML=""}catch(e){console.error("Error clearing gallery:",e)}}function q(){p.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function l(e){p.error({title:"Error!",message:e,position:"topRight"})}function y(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function g(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}async function E(){const e=document.querySelector(".gallery a img");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}async function v(e,t=1){y();try{const s=await w.get("https://pixabay.com/api/",{params:{key:"48827585-ba4cf8d41bbd413a9ae07e3ba",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40}});return{hits:s.data.hits,totalHits:s.data.totalHits}}catch(s){throw console.error("Error fetching images:",s),s}finally{g()}}const P=document.querySelector(".search-form"),h=document.querySelector(".search-input"),i=document.querySelector(".load-more"),u=document.querySelector(".end-message");let n="",c=1,f=0;P.addEventListener("submit",async e=>{e.preventDefault();const t=h.value.trim();if(t===""){l("Please enter a search query!");return}t!==n&&(n=t,c=1,f=0,S(),i.classList.add("hidden"),u.classList.add("hidden"));try{const{hits:s,totalHits:o}=await v(n,1);s.length===0?(q(),i.classList.add("hidden")):(f=o,await m(s),i.classList.remove("hidden"))}catch{l("An unexpected error occurred. Please try again later.")}finally{h.value=""}});i.addEventListener("click",async()=>{try{y(),c++;const{hits:e,totalHits:t}=await v(n,c);e.length>0&&(await m(e),e.length<40||c*40>=f?(i.classList.add("hidden"),u.classList.remove("hidden")):(i.classList.remove("hidden"),u.classList.add("hidden")),E())}catch{l("An unexpected error occurred. Please try again later.")}finally{g()}});
//# sourceMappingURL=index.js.map
