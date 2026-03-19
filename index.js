import{r as e}from"./assets/rolldown-runtime-Cq0jCQ29.js";import{n as t,r as n,t as r}from"./assets/vendor-CkfIhDXx.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=new r(`.gallery a`,{captionsData:`alt`,captionDelay:250});function o(e){let t=document.querySelector(`.gallery`),n=e.map(e=>` <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="info">
        <p><b>Likes:</b>${e.likes}</p>
        <p><b>Views:</b>${e.views}</p>
        <p><b>Comments:</b>${e.comments}</p>
        <p><b>Downloads:</b>${e.downloads}</p>
        </div>
      </li>`).join(``);t.insertAdjacentHTML(`beforeend`,n),a.refresh()}function s(){let e=document.querySelector(`.gallery`);e.innerHTML=``}function c(){let e=document.querySelector(`.loader`);e&&e.classList.remove(`is-hidden`)}function l(){let e=document.querySelector(`.loader`);e&&e.classList.add(`is-hidden`)}async function u(e,n){try{return(await t.get(`https://pixabay.com/api/`,{params:{key:`54988394-76eeb0dc25d7c96559704c852`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:15}})).data}catch(e){throw console.error(`Помилка запиту:`,e.message),Error(`Помилка завантажених даних`)}}t.interceptors.request.use(function(e){return c(),e},function(e){return l(),Promise.reject(e)}),t.interceptors.response.use(function(e){return l(),e},function(e){return l(),Promise.reject(e)}),document.querySelector(`.form`).addEventListener(`submit`,e=>{e.preventDefault();let t=e.currentTarget.elements.query.value.trim();t&&(s(),c(),u(t).then(e=>{e.hits.length===0?i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,background:`#ef4040`,position:`topRight`,width:`432`,height:`88`}):o(e.hits)}).catch(e=>i.default.error({message:`Sorry, there are no images matching your search query. Please try again!`,background:`#ef4040`,position:`topRight`,width:`432`,height:`88`})).finally(()=>l()))});
//# sourceMappingURL=index.js.map