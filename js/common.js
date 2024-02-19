// 검색창 포커스 시 .search(input) 넓이 가변
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

// Footer - 현재 년도 정보 반영
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();