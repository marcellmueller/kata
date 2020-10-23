const chooseRecipe = function (bakeryA, bakeryB, recipes) {
	// Code here!

	for (let recipe of recipes) {
		for (let i = 0; i < bakeryA.length; i++) {
			if (recipe.ingredients[0] == bakeryA[i]) {
				for (let j = 0; j < bakeryB.length; j++) {
					if (recipe.ingredients[1] == bakeryB[j]) {
						return recipe.name;
					}
				}
			}
		}
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
