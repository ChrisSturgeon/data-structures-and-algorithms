# Chapter 6 Exercises

### Question 1

Use Big O Notiation to describe the efficiency of an algorithm that takes $3N^2 + 2N _ 1$ steps.

Answer: $O(N^2)$ because big O ignores constants and only takes into account the higher order of N when there are multiple orders added together.

### Question 2

Use Big O Notation to describe the efficiency of an algorithm that takes $N+log{_2}{N}$ steps.

Answer: $O(N)$

### Question 3

The following function checks whether an array of numbers contains a pair of two numbers that add up to 10.

```javascript
function twoSum(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] + array[j] === 10) {
        return true;
      }
    }
  }
  return false;
}
```

What are the best, average and worst-case scenarios? Then express the worst-case scenario in terms of Big O notation.

The best case scenarios is the first two elements in the array (array[0] and array[1]) equal 10.

The average case scenario is the two elements in the middle of the array equal 10.

The worst case scenario is none of the elements add together to be 10, but all elements must be compared to determine this which has a Big O of $O(N^2)$.

### Question 4

The following function returns whether or not a capital "X" is present within a string.

```javascript
function containsX(string) {
  let foundX = false;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'X') {
      foundX = true;
    }
  }
  return foundX;
}
```

What is the function's time complexity in terms of Big O Notation?

Answer: $(N)$

Then, modify the code to improve the algorithm's efficiency for best and average case scenarios.

```javascript
function containsX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'X') {
      return true;
    }
  }
  return false;
}
```
