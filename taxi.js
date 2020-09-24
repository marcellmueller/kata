let direction = "start";
let east = 0;
let north = 0;

const blocksAway = (directions) => {
	for (let i = 0; i < directions.length; i + 2) {
		if ((directions[i] = "right")) {
		}
	}
};

let changeDirection = (directions) => {
	switch (true) {
		case directions === "right" && direction === "start":
			direction = "east";
			break;
		case directions === "left" && direction === "start":
			direction = "north";
			break;
		case directions === "right" && direction === "north":
			direction === "east";
			break;
		case directions === "left" && direction === "north":
			direction === "west";
			break;
		case directions === "right" && direction === "east":
			direction === "south";
			break;
		case directions === "left" && direction === "east":
			direction === "north";
			break;
		case directions === "right" && direction === "west":
			direction === "north";
			break;
		case directions === "left" && direction === "west":
			direction === "south";
			break;
		case directions === "right" && direction === "south":
			direction === "west";
			break;
		case directions === "left" && direction === "south":
			direction === "east";
			break;
	}
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
	blocksAway([
		"left",
		1,
		"right",
		1,
		"left",
		1,
		"right",
		1,
		"left",
		1,
		"right",
		1,
	])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
