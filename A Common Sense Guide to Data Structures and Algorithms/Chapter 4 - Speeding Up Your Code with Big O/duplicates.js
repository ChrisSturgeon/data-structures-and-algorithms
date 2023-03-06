// Inefficient duplicates function with time complexity of 0(n^2) with nested loops

function hasDuplicatesNested(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

// More efficient with time complexity of O(N)
function hasDuplicatesLinear(arr) {
  let existingNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (existingNumbers[arr[i]] === 1) {
      return true;
    } else {
      existingNumbers[arr[i]] = 1;
    }
  }
  return false;
}

function returnGreatest(arr) {
  let greatestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatestNumber) {
      greatestNumber = arr[i];
    }
  }
  return greatestNumber;
}

// console.log(returnGreatest([1, 2, 5, 75, 234]));

function greatestNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isValTheGreatest = true;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isValTheGreatest = false;
      }
    }

    if (isValTheGreatest) {
      return arr[i];
    }
  }
}

console.log(greatestNumber([1, 2, 5, 75, 234]));
