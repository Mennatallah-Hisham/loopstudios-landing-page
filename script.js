

const headerEl = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");


navBtn.addEventListener("click",()=>{
    headerEl.classList.toggle("nav-open");
})