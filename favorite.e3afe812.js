!function(){"use strict";var e,t,n,r;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelector("#search-form"),r=document.body,e.addEventListener("click",(function(){var a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),n.classList.toggle("visually-hidden"),e.getAttribute("aria-expanded",!a),t.classList.toggle("is-open"),r.classList.toggle("modal-open")}));var a=document.querySelector(".switch__theme");function o(){"dark-mode"===localStorage.getItem("theme")?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}a.addEventListener("click",(function(){"dark-mode"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark-mode");o()})),o();var c=document.querySelector("#menu-container"),i=document.querySelector(".container-logo-search"),l=document.querySelector("#search-form"),s=function(){window.innerWidth<768?(c.appendChild(a),i.appendChild(l)):(document.querySelector(".container").appendChild(a),document.querySelector(".container__search").appendChild(l))};s(),window.addEventListener("resize",(function(){s()})),c.addEventListener("click",(function(){s()}));var d="favoriteNews",u=new Date;dateForKey="".concat(u.getDate(),"/").concat(u.getMonth(),"/").concat(u.getFullYear());dateForKey;var m="visually-hidden",v="remove-favorite-btn",g="add-favorite-btn";function h(e){var t=e.map((function(e){var t=e.imgUrl,n=e.category,r=e.title,a=e.text,o=e.date,c=e.readMoreLink,i=e.id;return'<li class="card fav-card" id="'.concat(i,'">\n               <div class="block-photo">\n               <img class="card-photo" src="').concat(t,'" alt="Сітка користувачів">\n              <p class="news-category-text">').concat(n,'</p>\n               <p class="checked-news visually-hidden">Already read\n                  <svg class="checked-news-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M16.1882 3.59413C16.0324 3.59878 15.8844 3.66393 15.7757 3.77577L6.59995 12.9516L2.82417 9.17577C2.76888 9.11819 2.70266 9.07222 2.62939 9.04054C2.55611 9.00887 2.47725 8.99214 2.39742 8.99133C2.3176 8.99052 2.23842 9.00564 2.16451 9.03581C2.0906 9.06599 2.02346 9.11061 1.96701 9.16705C1.91057 9.2235 1.86595 9.29064 1.83578 9.36455C1.8056 9.43846 1.79048 9.51764 1.79129 9.59746C1.7921 9.67729 1.80883 9.75615 1.84051 9.82943C1.87218 9.9027 1.91815 9.96892 1.97573 10.0242L6.17573 14.2242C6.28826 14.3367 6.44085 14.3999 6.59995 14.3999C6.75906 14.3999 6.91165 14.3367 7.02417 14.2242L16.6242 4.62421C16.7109 4.53993 16.7701 4.43143 16.7941 4.31292C16.818 4.19441 16.8057 4.07141 16.7585 3.96006C16.7114 3.84871 16.6317 3.75419 16.53 3.6889C16.4282 3.6236 16.3091 3.59057 16.1882 3.59413Z" fill="#00DD73"/>\n                  </svg>\n              </p>\n              <button class="card-button remove-favorite-btn" type="button">Remove from favorite\n                  <svg class="card-button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M4.66683 2C2.82616 2 1.3335 3.47733 1.3335 5.3C1.3335 6.77133 1.91683 10.2633 7.65883 13.7933C7.76168 13.8559 7.87976 13.889 8.00016 13.889C8.12056 13.889 8.23864 13.8559 8.3415 13.7933C14.0835 10.2633 14.6668 6.77133 14.6668 5.3C14.6668 3.47733 13.1742 2 11.3335 2C9.49283 2 8.00016 4 8.00016 4C8.00016 4 6.5075 2 4.66683 2Z" fill="#4B48DA"/>\n                  </svg>\n              </button>\n          </div>\n          <h2 class="card-title">').concat(r,'</h2>\n          <p class="card-text">').concat(a,'</p>\n          <div class="card-link">\n              <p class="card-data">').concat(o,'</p>\n              <a href="').concat(c,'" target="_blank" class="card-more-news">Read more</a>\n          </div>\n      </li>')})).join("");p.innerHTML=t}var p=document.querySelector(".favorite-page-wrap"),f=JSON.parse(localStorage.getItem(d))||[];h(f),document.getElementById("search").addEventListener("input",(function(e){e.preventDefault();var t=e.currentTarget.value.trim().toUpperCase(),n=f.filter((function(e){return e.title.toUpperCase().includes(t)})),r=document.querySelector(".no-data .error"),a=document.querySelector(".container.list__cards");console.log(r),0===n.length?(r.querySelector(".title-error").innerHTML="We haven’t found <br> favorite news",r.classList.remove(m),a.classList.add(m)):(h(n),r.classList.add(m),a.classList.remove(m))}));var L="/favorite.html",y=document.querySelector(".list-card");function S(){if(window.location.pathname.includes(L)){var e=JSON.parse(localStorage.getItem(d))||[],t=document.querySelector(".no-data .error"),n=document.querySelector(".container.list__cards");0==e.length?(t.querySelector(".title-error").innerHTML="We haven’t found <br> favorite news",t.classList.remove(m),n.classList.add(m)):(t.classList.add(m),n.classList.remove(m))}}y.addEventListener("click",(function(e){if(e.target.classList.contains(g)){var t=e.target.parentElement,n=t.parentElement;console.log(t,"fav");var r={};r.imgUrl=t.children[0].src,r.category=t.children[1].innerText,r.title=n.children[1].innerText,r.text=n.children[2].innerText,r.date=n.children[3].children[0].innerText,r.readMoreLink=n.children[3].children[1].href,r.id=n.id;var a=JSON.parse(localStorage.getItem(d))||[];a.push(r),localStorage.setItem(d,JSON.stringify(a)),e.target.classList.add(m),t.children[4].classList.remove(m)}})),y.addEventListener("click",(function(e){if(e.target.classList.contains(v)){var t=e.target.parentElement.parentElement,n=t.id,r=(JSON.parse(localStorage.getItem(d))||[]).filter((function(e){return e.id!==n}));localStorage.setItem(d,JSON.stringify(r)),a=t,window.location.pathname.includes(L)?a.remove():(a.querySelector(".".concat(v)).classList.add(m),a.querySelector(".".concat(g)).classList.remove(m)),S()}var a})),S()}();
//# sourceMappingURL=favorite.e3afe812.js.map
