# Chapter 4 Exercises

### Question 1

Replace the question marks in the following table to describe how many steps occur for a given number of data elements across various types of Big O:

| N Elements | $O(N)$ | $O(log N)$ | $O(N^2)$ |
| ---------- | ------ | ---------- | -------- |
| 100        | ?      | ?          | ?        |
| 2000       | ?      | ?          | ?        |

| N Elements | $O(N)$ | $O(log N)$ | $O(N^2)$ |
| ---------- | ------ | ---------- | -------- |
| 100        | 100    | ~7         | 10,000   |
| 2000       | 200    | ~11        | 40,000   |

### Question 2

If we have an $O(N^2)$ algorithm that processes an array and find that it takes 256 steps, what is the size of the array?

$\sqrt256$ = 16 steps

### Question 3

Use big O notiation to descrivbe the time complexity of the following function. It find the greatest product of any pair of two numbers within a given array:

```python
def greatestProuct(array):
  greatestProductSoFar = array[0] + array[1]

  for i, iVal in enumerate(array):
    for j, jVal in enumerate(array):
      if i != j and iVal > greatestProductSoFar:
        greatestProductSoFar = iVal * jVal

    return greatestProductSoFar
```

The time complexity is $O(N^2)$.

### Question 4

The following function finds the greatest single number within an array, but has an efficiency of $O(N^2)$. Rewrite the function so that it becomes a speedy $O(N)$.

```javascript
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
```

With time-complexity of $O(N)$:

```javascript
function returnGreatest(arr) {
  let greatestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatestNumber) {
      greatestNumber = arr[i];
    }
  }
  return greatestNumber;
}
```
