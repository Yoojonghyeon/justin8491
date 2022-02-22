const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function paintToDo(newTodo) {
  const li = document.createElement("li"); //li 엘리먼트 생성
  li.id = newTodo.id;
  const span = document.createElement("span"); //span 엘리먼트 생성
  span.innerText = newTodo.text; //span 텍스트에 newTodo
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deletToDo);
  li.appendChild(span); //li 안에 span 넣기
  li.appendChild(button);

  toDoList.appendChild(li);
}

//ToDo리스트 저장
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//ToDo 삭제
function deletToDo(event) {
  //parentElement = 부모 엘리먼트
  const li = event.target.parentElement;
  li.remove();
  //filter = boolean 깂을 리턴해야 함
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //toDoInput 값을 복사후 초기화
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
