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

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
