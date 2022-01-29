// let name, admin;

// name = "John";
// admin = name;
// alert(admin);
// let admin = confirm("당신은 주인입니까?");

// let name = prompt("당신의 이름은 무엇입니까?", "");

// alert(name);
// 자바스크립트 공식명
// let name = prompt("자바스크립트의 공식 이름은 무엇입니까?");
// let script = "ECMAScript";
// if (name == script) {
//   alert("정답입니다.");
// } else {
//   alert("모르셨나요? 정답은 ECMAScript입니다!");
// }
//입력받은 숫자의 부호 표시하기
// let index = prompt("정수하나를 입력해주세요.");
// if (index > 0) {
//   alert(1);
// } else if (index < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
//if를 ? 로 교체하기
// let result = a + b < 4 ? "미만" : "이상";
// if else 를 ? 로 교체하기
let login = prompt("직함입력");
let message =
  login == "직원"
    ? "안녕하세요"
    : login == "임원"
    ? "환영합니다."
    : login == ""
    ? "로그인이 필요합니다."
    : "";

alert(message);
