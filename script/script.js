// To Make the Page Responsive
let width = window.innerWidth;
let height = window.innerHeight;

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

console.log(swiper2.slidesPerView);



if (width <= 600){
  document.querySelector('.navbar-brand').style.paddingTop = 0;
  document.querySelector('.navbar-brand').style.paddingBottom = 0;
  document.querySelector('.s1').src = "../img/m1.png"
  document.querySelector('.s2').src = "../img/m2.png"
  document.querySelector('.s3').src = "../img/m3.png"
  document.querySelector('.s4').src = "../img/m4.png"
  swiper2 = null;
  swiper2 = new Swiper("#swiper2", {
    slidesPerView: 1, // New slidesPerView value
});
  // document.getElementById('mobRem1').style.display = 'none'
  // document.getElementById('mobRem2').style.display = 'none'
  // document.getElementById('mobRem3').style.display = 'none'
  // document.getElementById('mobRem4').style.display = 'none'
}

// Product page Dropdown

function tshirt() {
  if(document.getElementById("t-shirt").style.display == 'none'){
    document.getElementById("t-shirt").style.display = '';
  } else{
    document.getElementById("t-shirt").style.display = 'none'
  }
  document.getElementById("hoody").style.display = 'none';
  document.getElementById("sweatshirt").style.display ='none';
  document.getElementById("limited").style.display ='none';
  document.getElementById("special").style.display = 'none';
}

function hoody() {
  document.getElementById("t-shirt").style.display = 'none';
  document.getElementById("sweatshirt").style.display ='none';
  document.getElementById("limited").style.display ='none';
  document.getElementById("special").style.display = 'none';
  if(document.getElementById("hoody").style.display == 'none'){
    document.getElementById("hoody").style.display = '';
  } else{
    document.getElementById("hoody").style.display = 'none'
  }
}
function sweatshirt() {
  if(document.getElementById("sweatshirt").style.display == 'none'){
    document.getElementById("sweatshirt").style.display = '';
  } else{
    document.getElementById("sweatshirt").style.display = 'none'
  }
  document.getElementById("t-shirt").style.display = 'none';
  document.getElementById("hoody").style.display ='none';
  document.getElementById("limited").style.display ='none';
  document.getElementById("special").style.display = 'none';
}
function limited() {
  if(document.getElementById("limited").style.display == 'none'){
    document.getElementById("limited").style.display = '';
  } else{
    document.getElementById("limited").style.display = 'none'
  }
  document.getElementById("t-shirt").style.display = 'none';
  document.getElementById("sweatshirt").style.display ='none';
  document.getElementById("hoody").style.display ='none';
  document.getElementById("special").style.display = 'none';
}
function special() {
  if(document.getElementById("special").style.display == 'none'){
    document.getElementById("special").style.display = '';
  } else{
    document.getElementById("special").style.display = 'none'
  }
  document.getElementById("t-shirt").style.display = 'none';
  document.getElementById("sweatshirt").style.display ='none';
  document.getElementById("limited").style.display ='none';
  document.getElementById("hoody").style.display = 'none';
}


