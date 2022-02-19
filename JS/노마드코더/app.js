// let a = 5;
// let b = 2;
// let myName = "jongHyeon";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// console.log("hello " + myName);
// boolean = true, false
// undefined = 메모리 값이 만들어졌지만 값이 할당되지 않음
// null = 자연적으로 발생하는 값이 아님
// const amIFat = null;
// let something;
// console.log(amIFat, something);
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const son = "sond";

// const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// const nonsense = [1, 2, "hello", false, null, true, undefined, ""];

// console.log(dayOfWeek);

// dayOfWeek.push("sun");

// console.log(dayOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy[2]);

// const playerName = "justin";
// const playerPoint = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// const player = {
//   name: "justin",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// player.lastName = "potato";
// player.points = 15;
// console.log(player);

// function hello(name, age) {
//   console.log(`hello! my name is${name} and i'm ${age}`);
// }

// hello("justin", 10);
// hello("hyeon", 23);
// hello("jong", 21);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(1, 2);

// const player = {
//   name: "justin",
//   age: 97,
// };
// console.log(player);
// player.name = "jongHyeon";
// console.log(player);
// player.sexy = "soon";
// console.log(player);

// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   multiply: function (a, b) {
//     console.log(a * b);
//   },
//   division: function (a, b) {
//     console.log(a / b);
//   },
//   power: function (a, b) {
//     console.log(Math.pow(a, b));
//   },
//   remain: function (a, b) {
//     console.log(a % b);
//   },
// };

// calculator.add(10, 20);
// calculator.minus(20, 10);
// calculator.multiply(10, 10);
// calculator.division(10, 2);
// calculator.power(2, 5);
// calculator.remain(13, 4);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All GOOOOOOODDD!!!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
