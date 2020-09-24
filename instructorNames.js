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

console.log(
	instructorWithLongestName([
		{ name: "Samuel", course: "iOS" },
		{ name: "Jeremiah", course: "Web" },
		{ name: "Ophilia", course: "Web" },
		{ name: "Donald", course: "Web" },
	])
);
console.log(
	instructorWithLongestName([
		{ name: "Matthew", course: "Web" },
		{ name: "David", course: "iOS" },
		{ name: "Domascus", course: "Web" },
	])
);
