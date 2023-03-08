function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];
    let position = i - 1;

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position -= 1;
      } else {
        break;
      }
    }
    array[position + 1] = tempValue;
  }
  return array;
}

insertionSort([3, 2, 5, 7456, 2345, 234]);
// Returns [2, 3, 5, 234, 7456]

function insertionSortCommented(array) {
  // Start a loop beginning at index 1 that runs through the entire array.
  // Each round of this loop represents a pass-through.
  for (i = 1; i < array.length; i++) {
    // Within each pass through, save the value we're 'removing' in a variable
    // called 'tempValue'
    let tempValue = array[index];

    // Next, create a variable called positions which will start immediately
    // to the left of the index of temp value. This position will keep moving
    // leftward as we compare each value against the temp value
    let position = i - 1;

    // As we move through each pass-throug, this positoin will keep moving leftward
    // as we compare each value to the temp_value.

    // We then being an inner while loop, which runs as long as the position is greater
    // or equal to 0
    while (position >= 0) {
      // We then perform our comparison. That is, we check whether the value at the
      // position is great than the tempValue
      if (array[position > tempValue]) {
        // If it is greater, we shift that value to the right:
        array[position + 1] = array[position];

        // We then decrement position by one to make the next comparison
        position -= 1;
      } else {
        // If the value at position is not greater or equal or tempValue
        // break to end this pass through
        break;
      }
    }
    // Move tempValue into the gap in the array
    array[position + 1] = tempValue;
  }

  // Return the sorted array
  return array;
}
