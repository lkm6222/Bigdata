// mode-btn class 안 텍스트 가져오기
// 텍스트가 Dark 일 경우(조건)
// mode-btn 클릭하면(클릭이벤트 발생) 텍스트를 'Light'로 바꾼다.
// header 태그에 dark class add

let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle() {
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');

  //count = count + 1;
  count += 1;
  console.log(count);

  
  // 1, 3, 5, 7 => 홀수 Dark mode
  // 2, 4, 6, 8 => 짝수 Light mode
  
  if(count % 2 == 0){
    this.innerHTML = 'Dark';
    header.classList.remove('dark');
  }
  else{
    this.innerHTML = 'Light';
    header.classList.add('dark');
  }


  // if (modeTxt == 'Dark') {
  //   //텍스트를 'Light'로 바꾼다.
  //   modeBtn.innerHTML = 'Light';

  //   // header 태그에 dark class add
  //   header.classList.add('dark');
  // }
  // else {
  //   modeBtn.innerHTML = 'Dark';
  //   header.classList.add('dark');
  // }
}

modeBtn.addEventListener('click', modeToggle);