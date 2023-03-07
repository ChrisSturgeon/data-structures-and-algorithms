function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    if (lowestNumberIndex != i) {
      const temp = arr[i];
      arr[i] = arr[lowestNumberIndex];
      arr[lowestNumberIndex] = temp;
    }
  }
  return arr;
}

selectionSort([56, 3, 5, 7898]);
// returns [3, 4, 56, 7898]

function selectionSortCommented(arr) {
  // Establish a loop to represent each walk through up the array.
  // It stops before the last element as this will be sorted by then
  for (let i = 0; i < arr.length - 1; i++) {
    // Keep track of the index containing the lowest number encountered so far
    let lowestNumberIndex = i;

    // Within each pass through check the remaining values to see if there is a lower value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }

    // At the end of the array traversal, make the swap if neccessary
    if (lowestNumberIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[lowestNumberIndex];
      arr[lowestNumberIndex] = temp;
    }
  }

  // Return the sorted array
  return arr;
}
