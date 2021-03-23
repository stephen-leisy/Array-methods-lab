const { fakeMap, fabFilter } = require('./functions');

describe('map without map', () => {
  it('it takes in an array of numbers and adds 2 onto each of them', () => {
    const addTwo = (num) => num + 2;
    expect(fakeMap([2, 5, 3], addTwo)).toEqual([4, 7, 5]);
  });
});

describe('filter no filter', () => {
  it('it takes in an array of numbers and returns all even numbers', () => {
    const myArray = [2, 3, 7, 4];
    const findEvens = (num) => num % 2 === 0;

    expect(fabFilter(myArray, findEvens)).toEqual([2, 4]);
  });
});
