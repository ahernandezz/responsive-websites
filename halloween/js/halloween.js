
//function for search button to appear adn disappear when icon is click
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