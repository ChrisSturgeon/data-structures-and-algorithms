# Chapter 3 Exercises

### Question 1

Use Big O notation to describe the time complexity of the following function that determines whether a given year is a leap year:

```javascript
function isLeapYear(year) {
  return (year & (4 === 0) && year % 100 != 0) || year % 400 === 0;
}
```

The efficiency is $O(N)$.

### Question 2

Use Big O noation to describe the time complexity of the following function that sums up all the numbers from a given array:

```javascript
function arraySum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
```

The efficiency is $O(N)$.

### Question 3

Give the efficiency of the following function:

```javascript
function chessBoardSpace(numberOfGrains) {
  let chessboardSpaces = 1;
  let placedGrains = 1;

  while (placedGrains < numberOfGrains) {
    placedGrains *= 2;
    chessboardSpaces += 1;
  }
  return chessboardSpaces;
}
```

The efficiency is $O(log{_2}{N})$.

### Question 4

The following function accepts an array of strings and returns a new array that only contains the strings that start with the character 'a'. Use Big O notation to describe the time complexity of the function:

```javascript
function selectAsStrings(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith('a')) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
```

The efficiency is $O(N)$.

### Question 5

The following function calculates the median from an ordered array. Describe its time complexity in terms of Big O notation:

```javascript
function median(array) {
  const middle = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return array[middle - 1] + array[middle / 2];
  } else {
    return array[middle];
  }
}
```

The function has a time complexity of $O(1)$.
