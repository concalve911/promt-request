"use strict";
const name = prompt("What is Your Name?");
if (name === null) {
  // првоеряем не отменил ли пользователь запрос
  alert("You Canceled");
} else if (!name.trim()) {
  // проверяем не ввел ли пользователь пустую строку
  alert("You enetered nothing");
} else {
  alert(`Hello, ${name}! How are you? `);
}
