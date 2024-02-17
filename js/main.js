// 검색창 포커 시 input 넓이 가변
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
}); 

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 스크롤 시 badge(팝업 이미지) 사라짐
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY > 500);
  if (window.scrollY) {
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  }  else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));