let year = document.querySelector('.year');

//한국 표준시 (Korea Standard Time)
let kst = new Date();
let getYear = kst.getFullYear();  //년도값만
let getMonth = kst.getMonth();
let getDate = kst.getDate();
//console.log(getMonth);



for(let i = 1920; i <= 2024; i++) {
  // let options = document.createElement('option');
  // options.innerHTML = i;
  // year.appendChild(options);

  let options = `<option>${i}</option>`;
  // afterbegin, beforebegin, afterend, beforeend
  // 추가하고 싶은곳.insertAdjacentHTML('위치', 추가할 요소);
  year.insertAdjacentHTML('beforeend', options);

  // // jQuery
  // $('.year').append('<option>'+ i +'</option>');
}

