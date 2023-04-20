const logger = (fn) => {
    
};

const add = (a, b) => {
  a + b;
};

const sub = (a, b) => {
  a - b;
};

const loggedAdd = logger(add);

const result = loggedAdd(1, 2); // write console 1, 2
console.log(result);

const loggedSub = logger(sub);

const result1 = loggedSub(3, 2); // write console 3, 2
console.log(result1); // 1