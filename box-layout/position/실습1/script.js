//Javascript 변수명 (낙타표기법)
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');

//function(){}
//popupOpenBtn 클릭 시 popup에 is-active class Add
popupOpenBtn.addEventListener('click', function () {
  // classList.add
  popup.classList.add('is-active')
})

popupCloseBtn.addEventListener('click', function () {
  popup.classList.remove('is-active')
})


//sidebar

let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');

//console.log(sidebarOpenBtn)


// //1. sidebarOpenBtn을 클릭 했을 때
// //  sidebar에 is-active 클래스 추가

// sidebarOpenBtn.addEventListener('click', function(){
// //클래스 추가함수 add
// sidebar.classList.add('is-active')
// })

// sidebarCloseBtn.addEventListener('click', function(){
// //클래스 제거함수 remove
// sidebar.classList.remove('is-active')
// })


function openSideBar() {
  //1. sidebar라는 클래스에 is-active 클래스 추가
  sidebar.classList.add('is-active')
}

function closeSideBar() {
  //1. sidebar 라는 클래스에 is-active 클래스 제거
  sidebar.classList.remove('is-active')
}

sidebarOpenBtn.addEventListener('click', openSideBar);
sidebarCloseBtn.addEventListener('click', closeSideBar);



// //함수 소괄호 안 : 매개변수
// function plus(num1, num2) {
//   //실행 할 코드
//   console.log(num1, num2)
//   console.log(num1 + num2)
// }
// //함수는 호출했을 때 실행된다.
// plus(10, 1111111111);
