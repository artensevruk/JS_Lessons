const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const addAndSub = (a, b, c) => {
  return sub(add(a, b), c);
};
console.log(addAndSub(3, 2, 1));
// addAndSub(3, 2, 1); // 3 + 2 - 1 = 5 - 1 = 4;

const addMult = (a, b, c) => {
  return add(mult(a, b), c);
};
console.log(addMult(3, 2, 1));
