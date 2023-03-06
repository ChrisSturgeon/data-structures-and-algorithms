function bubbleSort(arr) {
  let unsortedUntilIndex = arr.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      const firstPointerValue = arr[i];
      const secondPointerValue = arr[i + 1];

      if (firstPointerValue > secondPointerValue) {
        arr[i] = secondPointerValue;
        arr[i + 1] = firstPointerValue;
        sorted = false;
      }
    }
    unsortedUntilIndex--;
  }
  return arr;
}

bubbleSort([65, 55, 45, 35, 25, 15, 10]);
// Returns [10, 15, 25, 35, 45, 55, 65]

function bubbleSortCommented(arr) {
  // Create a variable to keep track of the right-most unsorted index. Initially, this is the last index of the array
  let = unsortedUntilIndex = arr.length - 1;

  // Create a boolean to act as switch to break out the sorting loop.
  let sorted = false;

  // Start a while loop that runs as long as the array is not sorted. Each round of this loop represents a single pass up through the array.
  while (!sorted) {
    // Assume the array is sorted until a swap is encountered. If an entire pass of the array is completed we know the array is sorted and the while loop can be terminated.
    sorted = true;

    // Start a for loop starting at array index 0 and moving up incrementally until the last index known to be unsorted is reached
    for (let i = 0; i < unsortedUntilIndex; i++) {
      // For each iteration assign values for each of the two pointer values in case they need to be swapped
      // Example of pass 1: [65, 55, 45, 35, 25, 15, 10]
      //                      ^   ^
      //                      |   |
      //                      |    - Pointer 2, i.e. i+1
      //                       - Pointer 1, i.e. i

      const firstPointerValue = arr[i];
      const secondPointerValue = arr[i + 1];

      // Compare the two pointer values, swap them if neccessary and switch the sorted boolean back to false
      arr[i] = secondPointerValue;
      arr[i + 1] = firstPointerValue;
      sorted = false;
    }
    // Decrement the unsorted until variable once the two pointers have reached the top of the unsorted index as all necessary swaps for this pass have been made
    unsortedUntilIndex--;
  }

  // Return the array once the while loop has broken because the array must now be sorted.
  return arr;
}
