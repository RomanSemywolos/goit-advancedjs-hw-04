import{a as m,i as l}from"./assets/vendor-1c96f17f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(o,t){return m({method:"get",url:`https://pixabay.com/api/?key=44704679-3d51d8c0a578dd091a2071345&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${t}`,responseType:"json"})}function h(o){let t="";o.forEach(s=>{t+=`
        <div class="photo-card">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${s.likes}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${s.views}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${s.comments}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${s.downloads}
            </p>
          </div>
        </div>
      `}),document.querySelector(".gallery").insertAdjacentHTML("beforeEnd",t)}const i=document.querySelector(".load-more"),f=document.querySelector(".search-form");let n=1,a=0,d="";async function p(){const{data:o}=await y(d,n);if(a=Math.ceil(o.totalHits/40),o.totalHits===0){l.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"center"});return}h(o.hits),a>1&&(i.style.display="block",n===a&&(i.style.display="none",l.error({message:"We're sorry, but you've reached the end of search results.",position:"center",timeout:1e4})))}i==null||i.addEventListener("click",()=>{n<a&&(n+=1,p())});f.addEventListener("submit",o=>{var t;if(o.preventDefault(),document.querySelector(".gallery").innerHTML="",d=(t=f.elements.searchQuery)==null?void 0:t.value.trim(),n=1,i.style.display="none",d.length===0){l.error({title:"Error",message:"Search field is empty",position:"center"});return}p()});
//# sourceMappingURL=commonHelpers.js.map
