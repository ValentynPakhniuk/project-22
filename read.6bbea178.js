(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelector("#search-form"),r=document.body;e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),n.classList.toggle("visually-hidden"),e.getAttribute("aria-expanded",!o),t.classList.toggle("is-open"),r.classList.toggle("modal-open")}))})();const e=document.querySelector(".switch__theme");function t(){"dark-mode"===localStorage.getItem("theme")?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}e.addEventListener("click",(function(){"dark-mode"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark-mode");t()})),t();const n=document.querySelector("#menu-container"),r=document.querySelector(".container-logo-search"),o=document.querySelector("#search-form"),a=function(){window.innerWidth<768?(n.appendChild(e),r.appendChild(o)):(document.querySelector(".container").appendChild(e),document.querySelector(".container__search").appendChild(o))};a(),window.addEventListener("resize",(function(){a()})),n.addEventListener("click",(function(){a()}));const i=new Date,c=`${i.getDate()}/${i.getMonth()}/${i.getFullYear()}`;const l=document.querySelector(".read-page-wrap"),d=document.querySelector(".dateDiv"),s=JSON.parse(localStorage.getItem(c))||[];!function(e){const t=e.map((({imgUrl:e,category:t,title:n,text:r,date:o,readMoreLink:a,id:i})=>`\n      \n      <li class="card fav-card" id="${i}">\n               <div class="block-photo">\n               <img class="card-photo" src="${e}" alt="Сітка користувачів">\n               <p class="news-category-text">Job searching</p>\n               <p class="checked-news">Already read\n                  <svg class="checked-news-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M16.1882 3.59413C16.0324 3.59878 15.8844 3.66393 15.7757 3.77577L6.59995 12.9516L2.82417 9.17577C2.76888 9.11819 2.70266 9.07222 2.62939 9.04054C2.55611 9.00887 2.47725 8.99214 2.39742 8.99133C2.3176 8.99052 2.23842 9.00564 2.16451 9.03581C2.0906 9.06599 2.02346 9.11061 1.96701 9.16705C1.91057 9.2235 1.86595 9.29064 1.83578 9.36455C1.8056 9.43846 1.79048 9.51764 1.79129 9.59746C1.7921 9.67729 1.80883 9.75615 1.84051 9.82943C1.87218 9.9027 1.91815 9.96892 1.97573 10.0242L6.17573 14.2242C6.28826 14.3367 6.44085 14.3999 6.59995 14.3999C6.75906 14.3999 6.91165 14.3367 7.02417 14.2242L16.6242 4.62421C16.7109 4.53993 16.7701 4.43143 16.7941 4.31292C16.818 4.19441 16.8057 4.07141 16.7585 3.96006C16.7114 3.84871 16.6317 3.75419 16.53 3.6889C16.4282 3.6236 16.3091 3.59057 16.1882 3.59413Z" fill="#00DD73"/>\n                  </svg>\n              </p>\n              <button class="card-button add-favorite-btn" type="button">Add to favorite\n                <svg class="card-button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66659 2C2.82592 2 1.33325 3.47733 1.33325 5.3C1.33325 6.77133 1.91659 10.2633 7.65858 13.7933C7.76144 13.8559 7.87952 13.889 7.99992 13.889C8.12032 13.889 8.2384 13.8559 8.34125 13.7933C14.0833 10.2633 14.6666 6.77133 14.6666 5.3C14.6666 3.47733 13.1739 2 11.3333 2C9.49258 2 7.99992 4 7.99992 4C7.99992 4 6.50725 2 4.66659 2Z" stroke="#4440F7" stroke-linecap="round" stroke-linejoin="round"/>\n                </svg>\n            </button>\n            <button class="card-button remove-favorite-btn visually-hidden" type="button">Remove from favorite\n                <svg class="card-button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z" fill="#4B48DA"/>\n                </svg>\n            </button>\n          </div>\n          <h2 class="card-title">${n}</h2>\n          <p class="card-text">${r}</p>\n          <div class="card-link">\n              <p class="card-data">${o}</p>\n              <a href="${a}" target="_blank" class="card-more-news-read">Read more</a>\n          </div>\n      </li>`)).join("");l.insertAdjacentHTML("beforeend",t)}(s),function(e){const t=e.map((()=>`\n      <div>\n      <p>\n      "${localStorage.key(0)}"\n      </p>\n      </div>\n      `)).join("");d.insertAdjacentHTML("beforeend",t)}(s);const u=document.querySelector(".list-card");function m(){if(window.location.pathname.includes("/favorite.html")){const e=JSON.parse(localStorage.getItem("favoriteNews"))||[],t=document.querySelector(".no-data .error"),n=document.querySelector(".container.list__cards");0==e.length?(t.querySelector(".title-error").innerHTML="We haven’t found <br> favorite news",t.classList.remove("visually-hidden"),n.classList.add("visually-hidden")):(t.classList.add("visually-hidden"),n.classList.remove("visually-hidden"))}}u.addEventListener("click",(function(e){if(e.target.classList.contains("add-favorite-btn")){const t=e.target.parentElement,n=t.parentElement;console.log(t,"fav");const r={};r.imgUrl=t.children[0].src,r.category=t.children[1].innerText,r.title=n.children[1].innerText,r.text=n.children[2].innerText,r.date=n.children[3].children[0].innerText,r.readMoreLink=n.children[3].children[1].href,r.id=n.id;const o=JSON.parse(localStorage.getItem("favoriteNews"))||[];o.push(r),localStorage.setItem("favoriteNews",JSON.stringify(o)),e.target.classList.add("visually-hidden"),t.children[4].classList.remove("visually-hidden")}})),u.addEventListener("click",(function(e){if(e.target.classList.contains("remove-favorite-btn")){const n=e.target.parentElement.parentElement,r=n.id,o=(JSON.parse(localStorage.getItem("favoriteNews"))||[]).filter((e=>e.id!==r));localStorage.setItem("favoriteNews",JSON.stringify(o)),t=n,window.location.pathname.includes("/favorite.html")?t.remove():(t.querySelector(".remove-favorite-btn").classList.add("visually-hidden"),t.querySelector(".add-favorite-btn").classList.remove("visually-hidden")),m()}var t})),m();document.querySelector(".list-card").addEventListener("click",(function(e){if(e.target.classList.contains("card-more-news")){const t=e.target.parentElement.parentElement,n=t.children[0];console.log(n);const r={};if(r.imgUrl=n.children[0].src,r.category=n.children[1].innerText,r.title=t.children[1].innerText,r.text=t.children[2].innerText,r.date=t.children[3].children[0].innerText,r.readMoreLink=t.children[3].children[1].href,r.id=t.id,h=r.id,g.includes(r.id))return;console.log(g,"idfrom-------"),console.log(r.id,"readobj");const o=JSON.parse(localStorage.getItem(c))||[];o.push(r),localStorage.setItem(c,JSON.stringify(o))}}));let h,g=[];(JSON.parse(localStorage.getItem(c))||[]).forEach((e=>{g.push(e.id)}));
//# sourceMappingURL=read.6bbea178.js.map
