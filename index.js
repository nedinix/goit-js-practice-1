//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const inputAlertEl = document.querySelector("#alertInput");
// const btnAlertEl = document.querySelector("#alertButton");

// btnAlertEl.addEventListener("click", () => {
// 	alert(inputAlertEl.value);
// });

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

/*const leftSwapInputEl = document.querySelector('#leftSwapInput');
const rightSwapInputEl = document.querySelector('#rightSwapInput');
const swapBtnEl = document.querySelector('#swapButton');

swapBtnEl.addEventListener('click', change);

function change() {
  const input1 = leftSwapInputEl.value;
  const input2 = rightSwapInputEl.value;
  leftSwapInputEl.value = input2;
  rightSwapInputEl.value = input1;
}*/

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const inputEl = document.querySelector("#passwordInput");
// const btnEl = document.querySelector("#passwordButton");
// btnEl.addEventListener('click', onClick);

// function onClick() {
//   if (inputEl.getAttribute('type') === 'text') {
//     inputEl.setAttribute('type', 'password');
//     btnEl.textContent = "Показать";
//   } else {
//     inputEl.setAttribute('type', 'text');
//     btnEl.textContent = "Скрыть";
//   }
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

// const boxEl = document.querySelector("#box");
// const btnDecreaseEl = document.querySelector("#decrease");
// const btnIncreaseEl = document.querySelector("#increase");

// btnDecreaseEl.addEventListener("click", () => {
//   let currentWidth = parseInt(getComputedStyle(boxEl).width);
//   boxEl.style.width = currentWidth - 10 + "px";
//   boxEl.style.height = currentWidth - 10 + "px";
// });
// btnIncreaseEl.addEventListener("click", () => {
//   let currentWidth = parseInt(getComputedStyle(boxEl).width);
//   boxEl.style.width = currentWidth + 10 + "px";
//   boxEl.style.height = currentWidth + 10 + "px";
// });

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

// const placeRef = document.querySelector("#place");
// addEventListener("click", (e) => {
//   console.dir(e);
//   console.log(e.target === placeRef ? true : false);
// });

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const listEl = document.querySelectorAll(".listItem");
// const btnEl = document.querySelector("#double");

// btnEl.addEventListener("click", onDoubleClick);

// function onDoubleClick() {
// 	listEl.forEach((item) => {
// 		console.log(item.textContent);
// 		item.textContent = Number(item.textContent) * 2;
// 	});
// }

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
