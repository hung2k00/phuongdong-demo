const topMenu = document.getElementById('tqd-top-menu')
const tonggleTopMenuIcon = document.getElementById('tqd-tonggle-top-menu-icon')

document.addEventListener('click',(e) =>{
    if(tonggleTopMenuIcon.contains(e.target)){
        topMenu.classList.toggle('hidden')
    }
    else{

    }
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });