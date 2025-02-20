import{S as c,i as n,a as u}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const f=new c(".gallery a",{captionsData:"alt",captionDelay:250});function d(e){const r=document.querySelector(".gallery");r.innerHTML="";const a=e.map(o=>`
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
    `).join("");r.innerHTML=a,f.refresh()}function p(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function m(){n.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function l(e){n.error({title:"Error!",message:e,position:"topRight"})}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function y(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function g(e){return h(),u.get("https://pixabay.com/api/",{params:{key:"48827585-ba4cf8d41bbd413a9ae07e3ba",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Error fetching images:",r),l("There was an error while fetching images. Please try again later."),[])).finally(()=>{y()})}document.querySelector(".search-form").addEventListener("submit",e=>{e.preventDefault();const r=document.querySelector(".search-input"),a=r.value.trim();if(a===""){l("Please enter a search query!"),r.value="";return}p(),g(a).then(o=>{o.length===0?m():d(o)}).finally(()=>{r.value=""})});
//# sourceMappingURL=index.js.map
