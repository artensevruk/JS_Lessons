const add = (a, b) => a + b;

const spy = fn => {
  const decoratedFn = (...args) => {
    // добавлем список арг-во при каждом вызове
    decoratedFn.calls.push(args);
    return fn(...args);
  };

  // списки арг-ов, с которыми ф-я вызвалась
  decoratedFn.calls = [];

  return decoratedFn;
};

const spyAdd = spy(add);

spyAdd(1, 2);

spyAdd(3, 2);

spyAdd(4, 5);

console.log(spyAdd.calls);