/*
 * Примеры работы с замыканиями
 * https://learn.javascript.ru/closure
 */

// Пример 1: makeCounter

const makeCounter = () => {
  let count = 0;
  // возращаемая функция содержит ссылку на count
  return () => ++count;
};

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2

// переменная count создается каждый раз при вызове makeCounter()
const anotherCounter = makeCounter();

console.log(anotherCounter()); // 1

// Пример 2: sum(a)(b). Каррирование
// Подробнее: https://learn.javascript.ru/currying-partials

// Самый короткая реализация
// const sum = a => b => a + b;

// Более подробно
const sum = a => {
  // Переменная add создана только для большей выразительности
  // функция add "запоминает" значение a при каждом вызове sum
  const add = b => a + b;
  return add;
};

// пример использования

const three = sum(1)(2);
console.log(three);

// более подробно. Создаем ф-ю, которая прибаляет к своему аргумету 2
const add2 = sum(2);
const four = add2(2);

console.log(four);

// ф-я, которая которая прибаляет к своему аргумету 3

const add3 = sum(3);
const seven = add3(4);

console.log(seven);
