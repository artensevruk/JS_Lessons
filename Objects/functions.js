/*
 * Получение массива всех имен сотрудников
 */

export const getNames = (employees) => {
  const array = [];
  for ( const employee of employees) {
    if (employee.name) {
      array.push(employee.name);
    } 
  }
  return array;
}; // employees => arrayOfNames

/*
 * Подсчет суммы зарплат сотрудников
 */
export const getSalariesSum = (employees) => {
  let sum = 0;
  for (const employee of employees) {
    if (employee.salary) {
      sum += employee.salary;
    }
  } 
  return sum;
}; // employees => salariesSum

/*
 * Подсчет общей стоимости корзины
 */
export const getCartTotalPrice = (prices, cart) => {
  let sum = 0;

  for (const cartItem of cart) {
   const {product , amount } = cartItem;
    sum = sum + amount * prices[product];
  }

  return sum;
};
