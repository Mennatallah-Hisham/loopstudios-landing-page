

const headerEl = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");
const htmlEl =document.querySelector("html");


navBtn.addEventListener("click",()=>{
    headerEl.classList.toggle("nav-open");
    htmlEl.classList.toggle("hide-overflow");
})