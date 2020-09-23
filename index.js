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
			if (values[i] % 2 !== 0) {
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

const numberOfVowels = (data) => {
	let vowels = ["a", "e", "i", "o", "u"];
	let numVowels = 0;
	for (let i = 0; i < data.length; i++) {
		for (let x = 0; x < vowels.length; x++) {
			if (data[i] === vowels[x]) {
				numVowels = numVowels + 1;
			}
		}
	}
	return numVowels;
};

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));
// Kata 4

const instructorWithLongestName = (instructors) => {
	let longestName = 0;
	let name;
	for (let i = 0; i < instructors.length; i++) {
		if (instructors[i].name.length > longestName) {
			longestName = instructors[i].name.length;
			name = instructors[i];
		}
	}
	return name;
};

// console.log(
// 	instructorWithLongestName([
// 		{ name: "Samuel", course: "iOS" },
// 		{ name: "Jeremiah", course: "Web" },
// 		{ name: "Ophilia", course: "Web" },
// 		{ name: "Donald", course: "Web" },
// 	])
// );
// console.log(
// 	instructorWithLongestName([
// 		{ name: "Matthew", course: "Web" },
// 		{ name: "David", course: "iOS" },
// 		{ name: "Domascus", course: "Web" },
// 	])
// );

// Kata 5

const urlEncode = (text) => {
	let encoded = "";
	for (let i = 0; i < text.length; i++) {
		if (text[i] === " " && (i === 0 || i === text.length - 1)) {
			encoded = encoded + "";
		} else if (text[i] === " ") {
			encoded = encoded + "%20";
		} else {
			encoded = encoded + text[i];
		}
	}
	return encoded;
};

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

//Kata 6

const whereCanIPark = (arr, type) => {
	let parkingCoords = [];
	//loop through each array within the array
	for (let i = 0; i < arr.length; i++) {
		//loop through each item in the sub array
		for (let y = 0; y < arr[i].length; y++) {
			//check for parking spot type and available spaces on each loop
			if (type === "regular" && arr[i][y] === "R") {
				parkingCoords[0] = y;
				parkingCoords[1] = i;
				return parkingCoords;
			} else if (type === "small" && (arr[i][y] === "S" || arr[i][y] === "R")) {
				parkingCoords[0] = y;
				parkingCoords[1] = i;
				return parkingCoords;
			} else if (
				type === "motorcycle" &&
				(arr[i][y] === "M" || arr[i][y] === "R" || arr[i][y] === "S")
			) {
				parkingCoords[0] = y;
				parkingCoords[1] = i;
				return parkingCoords;
			}
		}
	}
	//if loop doesn't find a match return false
	return false;
};

// console.log(
// 	whereCanIPark(
// 		[
// 			// COLUMNS ARE X
// 			// 0    1    2    3    4    5
// 			["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
// 			["s", "M", "s", "S", "r", "M"], // 1
// 			["s", "M", "s", "S", "r", "m"], // 2
// 			["S", "r", "s", "m", "r", "M"], // 3
// 			["S", "r", "s", "m", "r", "M"], // 4
// 			["S", "r", "S", "M", "M", "S"], // 5
// 		],
// 		"regular"
// 	)
// );

// console.log(
// 	whereCanIPark(
// 		[
// 			["M", "M", "M", "M"],
// 			["M", "s", "M", "M"],
// 			["M", "M", "M", "M"],
// 			["M", "M", "r", "M"],
// 		],
// 		"small"
// 	)
// );

// console.log(
// 	whereCanIPark(
// 		[
// 			["s", "s", "s", "s", "s", "s"],
// 			["s", "m", "s", "S", "r", "s"],
// 			["s", "m", "s", "S", "r", "s"],
// 			["S", "r", "s", "m", "r", "s"],
// 			["S", "r", "s", "m", "R", "s"],
// 			["S", "r", "S", "M", "m", "S"],
// 		],
// 		"motorcycle"
// 	)
// );

//Kata 7

const checkAir = (samples, threshold) => {
	let dirty = 0;
	for (let i = 0; i < samples.length; i++) {
		if (samples[i] === "dirty") {
			dirty++;
		}
	}
	let airQuality = dirty / samples.length;
	if (airQuality > threshold) {
		return "Polluted";
	} else {
		return "Clean";
	}
};

// console.log(
// 	checkAir(
// 		[
// 			"clean",
// 			"clean",
// 			"dirty",
// 			"clean",
// 			"dirty",
// 			"clean",
// 			"clean",
// 			"dirty",
// 			"clean",
// 			"dirty",
// 		],
// 		0.3
// 	)
// );

// console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

// console.log(
// 	checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
// );

//Kata 6/2????

const repeatNumbers = (arr) => {
	let outputString = "";
	for (let i = 0; i < arr.length; i++) {
		for (let y = 0; y < arr[i][1]; y++) {
			outputString = outputString + arr[i][0];
		}
		if (arr.length > 1 && i !== arr.length - 1) {
			outputString = outputString + ", ";
		}
	}
	return outputString;
};

// console.log(repeatNumbers([[1, 10]]));
// console.log(
// 	repeatNumbers([
// 		[1, 2],
// 		[2, 3],
// 	])
// );
// console.log(
// 	repeatNumbers([
// 		[10, 4],
// 		[34, 6],
// 		[92, 2],
// 	])
// );

//Kata 7/2;

//made my own method of converting a letter to upper case since
//we are trying not to use built in methods like toUpperCase().
//just searches for the index of the lower case array and returns
//the same letter from the upper case array

const findCase = (letter) => {
	const lowerCase = "abcdefghijklmnopqrstuvwxyz";
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (let i = 0; i < lowerCase.length; i++) {
		if (lowerCase[i] === letter) {
			return upperCase[i];
		}
	}
};

const camelCase = (input) => {
	let outputString = "";
	for (let i = 0; i < input.length; i++) {
		if (input[i] === " ") {
			outputString = outputString + findCase(input[i + 1]);
			i = i + 1;
		} else {
			outputString = outputString + input[i];
		}
	}
	return outputString;
};

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));

//Kata 8

const multiplicationTable = (maxValue) => {
	let returnedValues = "";
	for (let i = 1; i <= maxValue; i++) {
		for (let x = 1; x <= maxValue; x++) {
			if (x % maxValue === 0) {
				returnedValues = returnedValues + i * x + "\n";
			} else {
				returnedValues = returnedValues + i * x + " ";
			}
		}
	}

	return returnedValues;
};

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));

//Kata 9

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = (radius) => {
	return (4 / 3) * PI * (radius * radius * radius);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
	return (1 / 3) * PI * (radius * radius) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => {
	return depth * width * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = (solids) => {
	let total = 0;
	for (let i = 0; i < solids.length; i++) {
		if (solids[i].type === "sphere") {
			total = total + sphereVolume(solids[i].radius);
		} else if (solids[i].type === "cone") {
			total = total + coneVolume(solids[i].radius, solids[i].height);
		} else if (solids[i].type === "prism") {
			total =
				total + prismVolume(solids[i].height, solids[i].width, solids[i].depth);
		}
	}
	return total;
};

const largeSphere = {
	type: "sphere",
	radius: 40,
};

const smallSphere = {
	type: "sphere",
	radius: 10,
};

const cone = {
	type: "cone",
	radius: 3,
	height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

//Kata 10
