/*
 * Тут можно импортировать и вызывать функции, логировать результат их выполнения
 */
import {
  getNames,
  sum,
  getSalariesSum,
  getCartTotalPrice,
} from "./functions.js";
console.log(getNames([{ name: "John Doe" }, { name: "Jane Doe" }]));
console.log(getSalariesSum([{ salary: 1250 }, { salary: 1200 }]));
console.log(
  getCartTotalPrice({
    milk: 0.8,
    "chocolate bar": 0.25,
    bread: 0.5,
    cheese: 1.25,
    eggs: 1.2,
  })[({ product: "milk", amount: 2 }, { product: "chocolate bar", amount: 1 })]
);
