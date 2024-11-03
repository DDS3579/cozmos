// To Make the Page Responsive
let width = window.innerWidth;
let height = window.innerHeight;

// if (width >= 1024){
//   var swiper2 = new swiper2("#swiper2", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     pagination: {
//       el: "#swiper2 .swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: "#swiper2 .swiper-button-next",
//       prevEl: "#swiper2 .swiper-button-prev",
//     },
//   });
// } elseif(width < 1024 && width >= 800){
//   var swiper2 = new Swiper("#swiper2", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: "#swiper2 .swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: "#swiper2 .swiper-button-next",
//       prevEl: "#swiper2 .swiper-button-prev",
//     },
//   });
// }

var swiper2 = new Swiper("#swiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: "#swiper2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiper2 .swiper-button-next",
    prevEl: "#swiper2 .swiper-button-prev",
  },
});

var swiper1 = new Swiper("#swiper1", {
  spaceBetween: 0,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#swiper1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiper1 .swiper-button-next",
    prevEl: "#swiper1 .swiper-button-prev",
  },
});



if (width <= 600){
  document.querySelector('.navbar-brand').style.paddingTop = 0;
  document.querySelector('.navbar-brand').style.paddingBottom = 0;
  document.querySelector('.s1').src = "./img/m1.png"
  document.querySelector('.s2').src = "./img/m2.png"
  document.querySelector('.s3').src = "./img/m3.png"
  document.querySelector('.s4').src = "./img/m4.png"
}

