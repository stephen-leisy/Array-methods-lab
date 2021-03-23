const { fakeMap, fabFilter, fakeFinder, fakeReducer } = require('./functions');

const myArray = [2, 3, 7, 4];
const mySecondArray = [3, 7, 2, 2, 9];
const findEvens = (num) => num % 2 === 0;

describe('map without map', () => {
  it('it takes in an array of numbers and adds 2 onto each of them', () => {
    const addTwo = (num) => num + 2;
    expect(fakeMap([2, 5, 3], addTwo)).toEqual([4, 7, 5]);
  });
});

describe('filter no filter', () => {
  it('it takes in an array of numbers and returns all even numbers', () => {
    expect(fabFilter(myArray, findEvens)).toEqual([2, 4]);
  });
  it('it takes in an array of numbers and returns all even numbers', () => {
    expect(fabFilter(mySecondArray, findEvens)).toEqual([2, 2]);
  });
});

describe('index no index()', () => {
  it('it takes an array and returns the the first even number it encounters', () => {
    expect(fakeFinder(myArray, findEvens)).toEqual([2]);
  });
  it('it takes an array and returns the the first even number it encounters', () => {
    expect(fakeFinder(mySecondArray, findEvens)).toEqual([2]);
  });
});

describe('reduce no reduce()', () => {
    it('it takes an array of numbers adds them together and returns the sum', () => {
        const accumulator = (acc, num) => acc + num;
        expect(fakeReducer(myArray, accumulator, 0)).toEqual(16);
    })
})
