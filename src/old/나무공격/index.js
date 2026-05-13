const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
});

rl.on('close', () => {
	const [n, m] = input[0].split(' ').map(Number);
	const grid = input.slice(1, n + 1).map((line) => line.split(' ').map(Number));
	const [L1, R1] = input[n + 1].split(' ').map(Number);
	const [L2, R2] = input[n + 2].split(' ').map(Number);

	const first = attack(grid, L1, R1);
	const second = attack(first, L2, R2);
	const count = second.flat().filter((item) => item === 1).length;
	console.log(count);
});

function attack(grid, L, R) {
	const result = grid.map((item) => [...item]);
	for (let row = L - 1; row < R; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			if (result[row][col] === 1) {
				result[row][col] = 0;
				break;
			}
		}
	}
	return result;
}
