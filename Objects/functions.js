/*
 * Получение массива всех имен сотрудников
 */

export const getNames = (employees) => {
  const array = [];
  for (let i = 0; employees.length > i; i++) {
    const employee = employees[i];
    if (employee.name) {
      array.push(employee.name);
    } else {
      console.log("Такого обьекта нету");
    }
  }
  return array;
}; // employees => arrayOfNames

export const sum = (a, b) => {
  return a + b;
};

/*
 * Подсчет суммы зарплат сотрудников
 */
export const getSalariesSum = (employees) => {
  let sum = 0;
  for (let i = 0; employees.length > i; i++) {
    const employee = employees[i];
    console.log(employee.salary);
    if (employee.salary) {
      sum += employee.salary;
    }
  }
  return sum;
}; // employees => salariesSum

/*
 * Подсчет общей стоимости корзины
 */
export const getCartTotalPrice = (cart, prices) => {
  for (const cartItem of cart) {
    let product = cartItem.product;

    // let amount = cartItem.amount;
    console.log(product);
    // console.log(prices); 

    for (let key in prices) {
      if(product === key ){
        console.log(key); 
        
      }
    }
    
  };
 
    
   
  
};
