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

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
