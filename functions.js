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

const fakeReducer = (array, callback, initialValue) => {
    let accumulator;
    let i;
    if(initialValue) {
        accumulator = initialValue;
        i = 0;

    } else {
        accumulator = array[0];
        i = 1;
    }
    for ( i ; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }
    return accumulator;    
}
const fakeEvery = (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        if(callback(array[index]) !== true) {
            return false
        } else {
            
        };
        
    }
    return true
};

module.exports = {
  fakeMap,
  fabFilter,
  fakeFinder,
  fakeReducer,
  fakeEvery,
};
