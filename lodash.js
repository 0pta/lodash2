var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  if(array.length > 0) {
    return array[0]
  } else {
    return null
  }
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
	let newArray = []
  for (var i = 0; i < n; i++) {
    newArray.push(array[i])
  }
  return (newArray)
};

// Returns the last element of an array.
_.last = function(array) {
  return array[array.length - 1]
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  let newArray = []
  for (var i = array.length -n; i < array.length; i++) {
    newArray.push(array[i])
  }
  return newArray

};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  let newArray = []
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i])
    }
  }
  return  newArray
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
  let newArray = []
  let hold = false
  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        hold = true;
      }
    }
    if (!hold) {
      newArray.push(arrayOne[i])
    }
    hold = false;
  }
  return newArray
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
  return (Math.min.apply(null, array))
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
  for (let x of array) {
    if (max < x) {
      max = item
    }
  }
  return max
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return i
    }
  }
  return -1
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  let newArray = []
  let count = array.length

  while (count > 0) {
    newArray.push(array.splice(Math.random() * array.length),1) [0])
    count--;
  }
  return newArray
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  if (typeof collection === 'object') {
    return Object.keys(collection).length;
  } else {
    return collection.length
  }
  return collection.length
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
  for (var x in collection) {
    callback(collection[x])
    }
    return collection
  }

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
  let newArray = []
  for (var x in collection) {
    newArray.push(callback(collection[x]))
  }
  return newArray
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
  let newArray = []
  for (var x in collection) {
    if (callback(collection)[x]) {
      newArray.push(collection[x])
    }
  }
  return newArray
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
  let newArray = []
  for (var x in collection) {
    if (!callback(collection[x])) {
      newArray.push(collection[x])
    }
  }
  return newArray
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
