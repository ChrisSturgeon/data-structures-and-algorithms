function binarySearch(arr, searchValue) {
  // Create upper and lower bound pointers
  let lowerPointer = 0;
  let upperPointer = arr.length - 1;

  while (lowerPointer <= upperPointer) {
    // Find the midpoint between the two pointers
    let midPoint = Math.floor((lowerPointer + upperPointer) / 2);

    // Lookup the array value at the midpoints
    let valueAtMidPoint = arr[midPoint];

    // Return the midpoint if it matches the required value
    if (arr[midPoint] === searchValue) {
      return `${searchValue} found at array index ${midPoint}`;
    }

    // If the search value is smaller than the midpoint, move the upperbound pointer to just below the current midpoint
    if (searchValue < valueAtMidPoint) {
      upperPointer = midPoint - 1;
    }

    // If the search value is greater than the midpoint, move the lowerbound pointer to just above the current midpoint
    if (searchValue > valueAtMidPoint) {
      lowerPointer = midPoint + 1;
    }
  }

  // Return a not found message if not present;
  return `${searchValue} not found in array`;
}

