// 스크롤 시 .badges(팝업 이미지) 사라짐
const badgeEl = document.querySelector('header .badges');

// 버튼 클릭 시 최상단으로 이동
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY) {
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 최상단 이동 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }  else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 최상단 이동 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// 버튼 클릭 시 최상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
})

// .visual 이미지 애니메이션 (fade in)
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7, // 0.7, 1.7, 2.1, 2.7 
    opacity: 1
  });
});

// Swiper Slide
const swiperNoticeLine = new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
const swiperPromotion = new Swiper('.promotion .swiper', {
  slidesPerView: 3, 
  spaceBetween: 10,
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', 
    clickable: true 
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});
const swiperAwards = new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
});


// .promotion 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleBtnIcon = promotionToggleBtn.querySelector('.material-icons')
let isHidePromotion = false; // 프로모션 영역이 안 숨겨져 있음
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
    promotionToggleBtnIcon.textContent = "keyboard_double_arrow_down";
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
    promotionToggleBtnIcon.textContent = "keyboard_double_arrow_up";
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// .youtube 영역 이미지 애니메이션 함수 - 범위 랜덤 함수 사용
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시
    { // 옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true, //  한번 재생된 애니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // m 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});