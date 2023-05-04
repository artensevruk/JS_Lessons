import assert from 'assert/strict';
import { getCartTotalPrice, getNames, getSalariesSum } from './functions.js';

describe('getNames', () => {
  it('returns array of employees names', () => {
    const persons = [
      { name: 'Mary' },
      { name: 'Jane' }
    ];
  
    assert.deepEqual(
      getNames(persons),
      [
        'Mary',
        'Jane'
      ]
    );
  });

  it('returns empty array if employees list is empty', () => {
    assert.deepEqual(getNames([]), []);
  });

  it('does not add null or undefined values', () => {
    const characters = [
      { name: 'Jon Snow' },
      { /* unknown character */ },
      { firstName: 'Ygritte' },
      { name: 'Harry Potter' }
    ];

    assert.deepEqual(getNames(characters), [
      'Jon Snow',
      'Harry Potter'
    ]);
  });
});

describe('getSalariesSum', () => {
  it('returns sum of employees salaries', () => {
    const salaries = [
      { salary: 400 },
      { salary: 230 }
    ];

    assert.deepEqual(getSalariesSum(salaries), 630);
  });

  it('ignores employees without salaries', () => {
    const salaries = [
      { name: 'Alice', salary: 400 },
      { name: 'Bob' },
      { name: 'Harry', salary: 630 }
    ];

    assert.deepEqual(getSalariesSum(salaries), 1030);
  });
});

describe('getCartTotalPrice', () => {
  it('calculate cart total price', () => {
    const prices = {
      lemonade: 0.5,
      lolypop: 0.25
    };

    const cart = [
      { product: 'lemonade', amount: 1 },
      { product: 'lolypop', amount: 3 }
    ];

    const actualPrice = 0.5 + 3 * 0.25;

    const expectedPrice = getCartTotalPrice(prices, cart);

    assert.equal(actualPrice, expectedPrice);
  });

  it('returns zero for empty cart', () => {
    const prices = {
      'iphone 16 pro max': 2500
    };

    assert.equal(getCartTotalPrice(prices, []), 0);
  });
});
