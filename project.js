// project..................
// Task 1:
map()
let array = [10, 20, 30, 40, 50];
let newArray = array.map(x => x * 5);
console.log(newArray);


// Task 2: 
filter()
let array1 = [15, 26, 33, 40, 18, 29];
let evenNumbers = array1.filter(x => x % 2 === 0);
console.log(evenNumbers);


// Task 3:
let array2 = [5, 10, 15, 20];
let sum = array2.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// Task 4: find() Method
// javascript
let array3 = [7, 14, 21, 28, 35];
let result = array3.find(x => x > 20);
console.log(result);


// Task 5: findIndex() Method
// javascript
let array4 = [3, 5, 7, 9, 11];
let index1 = array4.findIndex(x => x === 7);
console.log(index1);


// Task 6: includes() Method
// javascript
let array5 = [12, 24, 36, 48, 60];
let isIncluded = array5.includes(36);
console.log(isIncluded);


// Task 7: indexOf() Method
// javascript
let array6 = [1, 2, 3, 4, 2, 5];
let index = array6.indexOf(2);
console.log(index);


// Task 8: lastIndexOf() Method
// javascript
let array7 = [1, 2, 3, 4, 2, 5];
let lastIndex = array7.lastIndexOf(2);
console.log(lastIndex);
