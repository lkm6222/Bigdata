//아이디 중복체크 메세지
let userId = document.querySelector('.user_id');
function idChkBtn(obj){
  if( userId.value == ""){
    alert('아이디를 입력하세요.');
    return;
  }
  else{
    alert('사용가능한 아이디입니다.');
    return;
  }
}


let year = document.querySelector('.year');
let month = document.querySelector('.month');
let date = document.querySelector('.date');


let kst = new Date();
let getYear = kst.getFullYear();
let getMonth = kst.getMonth();
let getDate = kst.getDate();

//년도 가져오기
for (let i = 1920; i <= getYear; i++) {
  let options = `<option>${i}</option>`;
  year.insertAdjacentHTML("beforeend", options);
}

//월 가져오기
for (let i = 1; i <= 12; i++) {
  let options = `<option>${i}</option>`;
  month.insertAdjacentHTML("beforeend", options);
}


//일 가져오기 
//if문 사용 월별 다르게 적용하기
for (let i = 1; i <= 31; i++) {
  let options = `<option>${i}</option>`;
  date.insertAdjacentHTML("beforeend", options);
}

// if (count == 2) {
//   //2 ->29일
// }
// else if (count == 4, 6, 9, 11) {
//   //4,6,9,11 ->30일
// }
// else {
//   //1,3,5,7,8,1,12 ->31일
// }


// 취미 체크박스 5개 이상 알림
function hb_chk(obj) {
  //체크박스 chk 불러옴
  let chkBox = document.getElementsByName("chk");
  //체크 카운트 초기값 0으로 설정
  let chkCnt = 0;

  //반복문으로 초기값 증감식 설정
  for( let i=0; i<chkBox.length; i++ ){
    //체크박스 체크됐을 경우 체크 카운트 1씩 증가
    if(chkBox[i].checked){
      chkCnt++;
      //console.log(chkCnt);
    }
  }
  if( chkCnt > 5 ){
    //조건문 체크카운트 5 이상일 경우 alert 띄우고 체크되지않도록 설정
    alert("5개까지 체크할 수 있습니다.");
    obj.checked = false;
    return false;
  }
}
