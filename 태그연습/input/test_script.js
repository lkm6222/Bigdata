//let nation = document.querySelector('.nation');


let year = document.querySelector('.year');
let month = document.querySelector('.month');
let date = document.querySelector('.date');

let kst = new Date();
let getYear = kst.getFullYear();
let getMonth = kst.getMonth();
let getDate = kst.getDate();

//년도 가져오기
for( let i = 1920; i <= getYear; i++ ){
  let options = `<option>${i}</option>`;
  year.insertAdjacentHTML("beforeend", options);
}

//월 가져오기
for( let i = 1; i <= 12; i++ ){
  let options = `<option>${i}</option>`;
  month.insertAdjacentHTML("beforeend", options);
}


//일 가져오기 
//if문 사용 월별 다르게 적용하기
for( let i = 1; i <= 31; i++ ){
  let options = `<option>${i}</option>`;
  date.insertAdjacentHTML("beforeend", options);
}

