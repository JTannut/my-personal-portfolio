$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
   // toggle menu/navbar //
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
   });

   //owl carousel script//
   $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
   });
   $('.carouselskills').owlCarousel({
    margin: 10,
    loop: true,
    autoplayTimeOut: 1300,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 1,
            nav: false
        }
    }
   });
   $('.carouselcert').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        1000:{
            items: 2,
            nav: false
        }
    }
   });
});


const progressbar = document.querySelector('#progressbar');
const section = document.querySelector("section");

const animateprogressbar = () =>{
  let scrollDistance = -section.getBoundingClientRect().top;
  let progresswidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 2;
let value = Math.floor(progresswidth);
progressbar.style.width = value + "%";
  if(value < 0 ){
    progressbar.style.width = "0%"
  }
};
window.addEventListener("scroll", animateprogressbar);