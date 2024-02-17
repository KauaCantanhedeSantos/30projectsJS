let userInputAge = document.getElementById("dateInput");
userInputAge.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

let buttonCalc = document.getElementById("btnCalc");

buttonCalc.addEventListener("click", calcAge);

function calcAge(){
  let birhtDayUser = new Date(userInputAge.value);

  let d1 = birhtDayUser.getDate();
  let m1 = birhtDayUser.getMonth();
  let y1 = birhtDayUser.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth();
  let y2 = today.getFullYear();
  
  let d3, m3, y3;

  y3 = y2 - y1;
  d3 = d2 - d1;
  
  if(m2 >= m1){
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if(d2 >= d1){
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDayInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0){
    m3 = 11;
    y3--;
  }
  result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days`
}

function getDayInMonth(year, month){
  return new Date(year, month, 0).getDate();
}
