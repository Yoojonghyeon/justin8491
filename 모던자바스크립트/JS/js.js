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
// let login = prompt("직함입력");
// let message =
//   login == "직원"
//     ? "안녕하세요"
//     : login == "임원"
//     ? "환영합니다."
//     : login == ""
//     ? "로그인이 필요합니다."
//     : "";

// alert(message);
//사이 범위 확인하기
// let age = prompt("나이");
// if (age >= 14 && age <= 90) {
//   alert("나이에 속합니다.");
// } else {
//   alert("나이에 속하지 않습니다.");
// }
// 바깥 범위 확인하기
// let age = prompt("나이");
// if (!(age >= 14 && age <= 90)) {
//   alert("나이에 속하지 않습니다.");
// } else {
//   alert("나이에 속합니다.");
// }
//로그인 구현
// let login = prompt("아이디를 입력해주세요");

// if (login == "Admin") {
//   let password = prompt("비밀번호를 입력해주세요.");
//   if (password == "TheMaster") {
//     alert("환영합니다.");
//   } else if (password != "TheMaster") {
//     alert("인증에 실패하였습니다.");
//   } else if (password == "") {
//     alert("취소되었습니다.");
//   }
// } else if (login == "" || login != "Admin") {
//   alert("취소되었습니다.");
// }
//for 반복문을 이용하여 짝수 출력하기
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 != 0) continue;
//   alert(i);
// }
//for 반복문을 while 반복문으로 바꾸기
// let i = 0;
// while (i < 3) {
//   alert(`number ${i} !`);
//   i++;
// }

//사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
// let num;

// do {
//   num = prompt("100보다 큰 숫자를 입력해 주세요.", 0);
// } while (num <= 100 && num);

//소수 출력하기
// let num = prompt(`까지의정수`);

// nextPrime: for (let i = 2; i < num; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   alert(i);
// }

//switch 문을 if문으로 변환하기

// let browser = prompt("어떤브라우저를 사용하고있나요?");

// if (browser == "Opera") {
//   alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
// } else if (browser == "Edge") {
//   alert("Edge를 사용하고 계시네요!");
// } else {
//   alert("현재 페이지가 괜찮아 보이길 바랍니다!");
// }

// let a = prompt("a?");

// switch (a) {
//   case "0":
//     alert(0);
//     break;
//   case "1":
//     alert(1);
//     break;
//   case "2":
//   case "3":
//     alert("2,3");
//     break;
// }
// min(a,b) 함수 만들기 작은 값 반환 함수
// function min(num1, num2) {
//   if (num1 > num2) {
//     return num2;
//   } else {
//     return num1;
//   }
// }
// min(2, 5);
// min(3, -1);
// min(1, 1);

//pow(x,n) 함수 만들기
// function pow(x, n) {
//   // 2, 5
//   let sum = x;
//   for (let i = 1; i < n; i++) {
//     sum *= x;
//   }
//   return sum;
// }

// x = prompt("정수 값");
// n = prompt("제곱근 값");

// if (n < 1) {
//   alert(`${n}은 양의 정수이어야 합니다.`);
// } else {
//   alert(pow(x, n));
// }
// let sayHi = () => alert("안녕하세요!");
// sayHi();

//화살표 함수로 변경하기

// let ask = (question, yes, no) => (confirm(qyestion) ? yes() : no());

// ask(
//   "동의 하십니까?",
//   () => alert("동의하셨습니다."),
//   () => alert("취소 버튼을 누르셨습니다.")
// );

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let sum = 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum);

// 함수 호출 전
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "Number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// x = 10;

// y = x;

// x = 5;

// alert("x는 ?" + x);
// alert("y는 ?" + y);
//계산기 만들기
// let calculator = {
//   sum() {
//     return (sum = this.num1 + this.num2);
//   },

//   mul() {
//     return (mul = this.num1 * this.num2);
//   },

//   read() {
//     this.num1 = +prompt("첫 번째 값은?", 0);
//     this.num2 = +prompt("두 번째 값은?", 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
//     alert(this.step);
//     return this;
//   },
// };

// ladder
//   .up()
//   .up()
//   .down()
//   .up()
//   .up()
//   .down()
//   .up()
//   .up()
//   .up()
//   .up()
//   .up()
//   .up()
//   .up()
//   .up()
//   .up()
//   .showStep();
// function User(name, isadmin) {
//   this.name = name;
//   this.isAdmin = isadmin;
// }

// let user = new User("보라", "admin");

// alert(user.name); // 보라
// alert(user.isAdmin);

//6.35.toFixed(1) == 6.3인 이유는 무엇일까요?
// let num = 6.35;
// alert(Math.round(num * 10) / 10);

// function readNumber() {
//   let num;
//   do {
//     num = +prompt("숫자를 입력하세요.");
//   } while (!isFinite(num));
//   if (num == null || num == "") {
//     alert(null);
//   }
//   return +num;
// }

// alert(`값은 : ${readNumber()}`);

// let styles = ["Jazz", "Blues"];
// alert(styles);
// styles.push("Rock-n-Roll");
// alert(styles);
// styles[1] = "Classics";
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift("Rap", "Reggae");
// alert(styles);

// let calculator = {
//   day1: 1,
//   day2: 2,
//   day4: 4,
// };
// let doubleCalculator = Object.fromEntries(
//   Object.entries(calculator).map(([key, value]) => [key, value * 2])
// );

// alert(doubleCalculator.day4); // 8
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

// alert(sumSalaries(salaries)); // 650

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

alert(count(user)); // 2
