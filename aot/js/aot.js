$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy 
  
      $('section').each(function(){
  
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let top = $(window).scrollTop();
  
        if(top > offset && top < offset + height){
          $('.navbar ul li a').removeClass('active')
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      )
  
  
    });
  
  });



  // change image on click
  let btnall = document.querySelector('#btnall');
  let btn1 = document.querySelector('#btn1');
  let btn2 = document.querySelector('#btn2');
  let btn3 = document.querySelector("#btn3");
  let btn4 = document.querySelector("#btn4");
  let btn5 = document.querySelector("#btn5");
  let btn6 = document.querySelector("#btn6");
  let btn7 = document.querySelector("#btn7");
  let btn8 = document.querySelector("#btn8");
  let btn9 = document.querySelector("#btn9");

  btn1.addEventListener('click', () =>{
  titan1.src = "aot/images/aot-eren-titan.jpg";
  eren_p.innerHTML = 'attack titan';
  eren_h3.innerHTML = "Attack, Founder, War Hammer titan";
  })
  btn2.addEventListener('click', () =>{
    titan2.src = "aot/images/aot-armin-titan.jpg";
   armin_p.innerHTML = "titan ";
   armin_h3.innerHTML = "Colossus titan";

  })
  btn3.addEventListener('click', () =>{
    titan3.src = "aot/images/aot-annie-titan.jpg";
    annie_p.innerHTML = "titan";
    annie_h3.innerHTML = "Female titan";

  })
  btn4.addEventListener('click', () =>{
    titan4.src = "aot/images/aot-zeke-titan.jpg";
    zeke_p.innerHTML = "titan";
    zeke_h3.innerHTML = "Beast titan";

  })
  btn5.addEventListener('click', () =>{
    titan5.src = "aot/images/aot-bertholdt-titan.png";
    bertholdt_p.innerHTML = "titan";
    bertholdt_h3.innerHTML = "Colossus titan";

  })
  btn6.addEventListener('click', () =>{
    titan6.src = "aot/images/aot-reiner-titan.jpg";
    reiner_p.innerHTML = "titan";
    reiner_h3.innerHTML = "Armor titan";

  })
  btn7.addEventListener('click', () =>{
    titan7.src = "aot/images/aot-Pieck-titan.png";
    pieck_p.innerHTML = "titan";
    pieck_h3.innerHTML = "Cart titan";

  })
  btn8.addEventListener('click', () =>{
    titan8.src = "aot/images/aot-Tybur-titan.png";
    tyber_p.innerHTML = "titan";
    tyber_h3.innerHTML = "War Hammer titan";

  })
  btn9.addEventListener('click', () =>{
    titan9.src = "aot/images/aot-porco-titan.png";
    porco_p.innerHTML = "titan";
    porco_h3.innerHTML = "Jaw titan";
  })

  btnall.addEventListener('click',() =>{
    titan1.src = "aot/images/aot-eren-titan.jpg";
    eren_p.innerHTML = 'attack titan';
    eren_h3.innerHTML = "Attack, Founder, War Hammer titan";

    titan2.src = "aot/images/aot-armin-titan.jpg";
    armin_p.innerHTML = "titan ";
    armin_h3.innerHTML = "Colossus titan";

    titan3.src = "aot/images/aot-annie-titan.jpg";
    annie_p.innerHTML = "titan";
    annie_h3.innerHTML = "Female titan";

    titan4.src = "aot/images/aot-zeke-titan.jpg";
    zeke_p.innerHTML = "titan";
    zeke_h3.innerHTML = "Beast titan";

    titan5.src = "aot/images/aot-bertholdt-titan.png";
    bertholdt_p.innerHTML = "titan";
    bertholdt_h3.innerHTML = "Colossus titan";

    titan6.src = "aot/images/aot-reiner-titan.jpg";
    reiner_p.innerHTML = "titan";
    reiner_h3.innerHTML = "Armor titan";

    titan7.src = "aot/images/aot-Pieck-titan.png";
    pieck_p.innerHTML = "titan";
    pieck_h3.innerHTML = "Cart titan";

    titan8.src = "aot/images/aot-Tybur-titan.png";
    tyber_p.innerHTML = "titan";
    tyber_h3.innerHTML = "War Hammer titan";
    
    titan9.src = "aot/images/aot-porco-titan.png";
    porco_p.innerHTML = "titan";
    porco_h3.innerHTML = "Jaw titan";
  })

  function clicked_on(){
    document.getElementById('future-clicked').innerHTML = 'Future World';
}