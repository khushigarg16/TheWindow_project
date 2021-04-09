const loader = document.querySelector('.loader');
const wpage = document.querySelector('.wpage');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        
        wpage.style.display = 'block';
        wpage.style.opacity = 1;
        
    }, 3500);
}

init();

//window.addEventListener("scroll", function(){
//    var header = document.querySelector('.navbar');
//    header.classList.toggle("sticky", window.scrollY > 0);
//})

var lastScrollTop = 0;
    navbar = document.querySelector('.navbar');
window.addEventListener("scroll", function(){
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top = "-90px";
    }
    else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})