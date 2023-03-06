// Linear search on an ordered array;

function linearSearch(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return `${searchValue} found at index ${i} in the array`;
    }
  }

  return `${searchValue} not found in array`;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 20, 2345], 1));
