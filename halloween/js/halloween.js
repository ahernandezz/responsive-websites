
//function for search button to appear and disappear when icon is click
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}


//function for when menu icon is click to make the nav links appear
let navbar = document.querySelector('.navbar');
 
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');    
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0 ){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}



//for slider
var swiper = new Swiper(".home-slider",{
    spaceBetween: 20,
    effect:"fade",
    loop:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction:false,
    },
});