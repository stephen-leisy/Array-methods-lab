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

module.exports = {
  fakeMap,
  fabFilter,
};
