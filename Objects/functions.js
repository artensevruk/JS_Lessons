/*
 * Получение массива всех имен сотрудников
 */

export const getNames = (employees) => {
  const array = [];
  for (let i = 0; employees.length > i; i++) {
    const employee = employees[i];
    console.log(employee.name);
    array.push(employee.name);
  }
  return array;
}; // employees => arrayOfNames

export const sum = (a, b) => {
  return a + b;
};

/*
 * Подсчет суммы зарплат сотрудников
 */
export const getSalariesSum = () => {}; // employees => salariesSum

/*
 * Подсчет общей стоимости корзины
 */
export const getCartTotalPrice = () => {}; // (prices, cart) => cartTotalPrice
