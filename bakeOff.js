const recipeCheck = (bakery, recipes) => {
	let match = [];
	//this looks like callback hell
	for (let i = 0; i < bakery.length; i++) {
		for (let x = 0; x < recipes.length; x++) {
			for (let y = 0; y < recipes.length; y++) {
				if (bakery[i] === recipes[x].ingredients[y]) {
					match.push(recipes[x].name);
				}
			}
		}
	}
	return match;
};

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
	let match = [];
	let bakeryAMatches = recipeCheck(bakeryA, recipes);
	let bakeryBMatches = recipeCheck(bakeryB, recipes);
	for (let i = 0; i < bakeryAMatches.length; i++) {
		for (let x = 0; x < bakeryBMatches.length; x++) {
			if (bakeryAMatches[i] === bakeryBMatches[x]) {
				match.push(bakeryAMatches[i]);
			}
		}
	}
	//had to add this because returning the array was putting an
	//escape backslash like this 'Nima\'s Famous Dijon Raisins'
	//left the array code in incase there was two matches
	if (match.length <= 1) {
		return match[0];
	} else if (match.length > 1) {
		return match;
	}
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
	{
		name: "Coconut Sponge Cake",
		ingredients: ["coconut", "cake base"],
	},
	{
		name: "Persian Cheesecake",
		ingredients: ["saffron", "cream cheese"],
	},
	{
		name: "Custard Surprise",
		ingredients: ["custard", "ground beef"],
	},
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
	{
		name: "Potato Ganache",
		ingredients: ["potatoes", "chocolate"],
	},
	{
		name: "Sweet Fish",
		ingredients: ["anchovies", "honey"],
	},
	{
		name: "Nima's Famous Dijon Raisins",
		ingredients: ["dijon mustard", "raisins"],
	},
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
