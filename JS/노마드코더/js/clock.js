const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //String 으로 묶어준 이유는 padStart 함수를 사용하려면 String값이어야 하기에 묶어줌
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 함수 실행전 1초 간격 쿨타임 때문
setInterval(getClock, 1000);
