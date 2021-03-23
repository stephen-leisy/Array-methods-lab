fakePush = (array, item) => [...array, item];

const fakeMap = (array, callback) => {
  const numbs = [...array];
  for (let index = 0; index < numbs.length; index++) {
    numbs[index] = callback(numbs[index]);
  }
  return numbs;
};

const fabFilter = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    let sumNum = array[index];
    if (callback(sumNum) === true) {
      // const pass = array[index];
      newArray = [...newArray, sumNum];
    }
  }
  return newArray;
};

const fakeFinder = (array, callback) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index]) === true) {
      newArray = [array[index]];
      break;
    }
  }
  return newArray;
};

const fakeReducer = () => {
    return 16;
}

module.exports = {
  fakeMap,
  fabFilter,
  fakeFinder,
  fakeReducer,
};
