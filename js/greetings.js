// * HTML 오브젝트
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

/*
* 문자열 변수들 
! 문자열 변수명은 대문자로 할 것
*/
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// * 이벤트 처리
function onLoginSubmit(event) {
  event.preventDefault(); // * 기본 이벤트 무시
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // ! `` <- 중요
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// * localStorage에 username이 있는지 확인
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
