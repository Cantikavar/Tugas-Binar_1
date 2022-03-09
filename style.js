var swiper = new Swiper(".mySwiper", { 
    slidesPerView: 2, 
    spaceBetween: 30, 
    loop: true, 
    loopFillGroupWithBlank:true, 
    centeredSlides: true, 
    pagination: { 
      el: ".swiper-pagination", 
      clickable: true, 
    }, 
    navigation:{ 
      nextEl: ".swipper-button-next", 
      prevEl: ".swipper-button-prev", 
    }, 
    breakpoint: { 
      720:{ 
      slidesPerView: 1, 
      }, 
      1024: { 
        slidesPerView2:2, 
    }, 
    } 
  });