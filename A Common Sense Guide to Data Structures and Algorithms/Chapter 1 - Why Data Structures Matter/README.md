# Chapter 1 Exercises

### Question 1

For an array containing 100 elements, provide the number of steps the following operations would take:

a) Reading: **1** step.

b) Searching for a value not contained within the array: **100** steps.

c) Insertion at the beginning of the array: 100 steps to shift existing elements to the right in memory to create gap, and an 1 step to insert the new element = **101** steps.

d) Insertion at the end of the array: **1** step.

e) Deletion at the beginning of the array: 1 step to delete the element and 99 steps to shift remaining elements left to close the gap = **100** steps.

f) Deletion at the end of the array: **1** step.

### Question 2

For an array-based set containing 100 elements, provide the number of steps the following actions would take:

a) Reading: **1** step.

b) Searching for a value not contained within the array: **100** steps.

c) Insertion of a new value at beginning of the array: 100 steps to check new value is not already present in the set, 100 steps to shift the existing elements to the right, and 1 step to insert the new element = **201** steps.

d) Insertion of a new value at the end of the set: 100 steps to check the new value is not already present in the set, and 1 step to insert the new element = **101** steps.

e) Deletion at the beginning of the set: 1 step to delete the element and 99 steps to shift the remaining element to the left to close the gap = **100** steps.

f) Deletion at the end of the set: **1** step.

### Question 3

Normally the search operation in an array looks for the first instance of a given value. But sometimes we may want to look for every instance of a given value. For example, say we want to count how many times the value "apple" is found inside an array. How many steps would it take to find all the "apples"? Give you answer in terms of _N_.

It would take _**N**_ steps.


