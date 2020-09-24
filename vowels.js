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

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
