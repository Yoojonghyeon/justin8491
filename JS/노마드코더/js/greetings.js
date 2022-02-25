const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const removeBtn = document.querySelector(".remove"); //Storage 삭제 엘리먼트

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  //removeBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // 폼을 보여준다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //h1을 보여줌
  paintGreetings(savedUsername);
  //removeBtn.classList.remove(HIDDEN_CLASSNAME);
}

// function removeStorage() {
//   localStorage.removeItem(USERNAME_KEY);
//   window.location.reload();
// }

//removeBtn.addEventListener("click", removeStorage);
