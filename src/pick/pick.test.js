import assert from "assert/strict";

import { pick } from "./pick.js";

describe("pick", () => {

  // возвращает объект c переданными ключами и значениями из переданного объекта
  it("returns object with given keys and values from given object", () => {
    const userInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@mail.com',
      id: 345
    };
    
    const names = pick(userInfo, [ 'firstName', 'lastName' ]);
    assert.deepEqual(names, {
      firstName: 'John',
      lastName: 'Doe' 
    });
  });

  // в результирующем объекте не должно быть ключей которые отсутствуют в переданном объекте
  it('result should not contains keys missed in passed object', () => {
    const page = {
      title: 'About',
      path: '/about'
    };
    
    const route = pick(page, [ 'path', 'params' ]);
    // ключа 'params' не должно быть в результате
    assert.deepEqual(route, {
      path: '/about'
    });
  });

  // возвращает пустой объект, если массив ключей пуст
  it("returns empty object for empty keys array", () => {

    const product = {
      name: "milk",
      price: '$0.98'
    };

    const empty = pick(product, []);

    assert.deepEqual(empty, {});
  });

});
