//kata 1

const sumLargestNumbers = (arr) => {
  let number1 = 0;
  let number2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (number1 < arr[i]) {
      number1 = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < number1 && arr[i] > number2) {
        number2 = arr[i];
      }
    }
  }
  return number1 + number2;
};

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Kata 2

const conditionalSum = (values, condition) => {
  let sum = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sum = sum + values[i];
      }
    }
  } else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 != 0) {
        sum = sum + values[i];
      }
    }
  }
  return sum;
};

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));

// Kata 3

const numberOfVowels = (data) => {};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
