const organizeInstructors = (instructors) => {
	let organized = [];
	let iOS = [];
	let web = [];
	let blockchain = [];
	for (let i = 0; i < instructors.length; i++) {
		instructors[i].course === "iOS" ? iOS.push(instructors[i].name) : null;
		instructors[i].course === "Web" ? web.push(instructors[i].name) : null;
		instructors[i].course === "Blockchain"
			? blockchain.push(instructors[i].name)
			: null;
	}
	iOS.length > 0 ? organized.push({ iOS: iOS }) : null;
	web.length > 0 ? organized.push({ Web: web }) : null;
	blockchain.length > 0 ? organized.push({ Blockchain: blockchain }) : null;
	return organized;
};

console.log(
	organizeInstructors([
		{ name: "Samuel", course: "iOS" },
		{ name: "Victoria", course: "Web" },
		{ name: "Karim", course: "Web" },
		{ name: "Donald", course: "Web" },
	])
);
console.log(
	organizeInstructors([
		{ name: "Brendan", course: "Blockchain" },
		{ name: "David", course: "Web" },
		{ name: "Martha", course: "iOS" },
		{ name: "Carlos", course: "Web" },
	])
);
