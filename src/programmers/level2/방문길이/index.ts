const UP = 'U';
const DOWN = 'D';
const RIGHT = 'R';
const LEFT = 'L';

function validateXY(x: number, y: number, dir: string) {
	if (x < -5 || x > 5 || y < -5 || y > 5) {
		return false;
	}
	return true;
}

export function solution(dirs: string) {
	let x = 0;
	let y = 0;
	const visited = new Set();
	for (const dir of dirs) {
		const prev = `${x},${y}`;
		let nextX = x;
		let nextY = y;
		switch (dir) {
			case UP:
				nextY++;
				break;
			case DOWN:
				nextY--;
				break;
			case RIGHT:
				nextX++;
				break;
			case LEFT:
				nextX--;
				break;
		}
		if (validateXY(nextX, nextY, dir)) {
			const path = [`${Math.min(x, nextX)},${Math.min(y, nextY)}`, `${Math.max(x, nextX)},${Math.max(y, nextY)}`].join(
				'-',
			);
			if (x !== nextX || y !== nextY) {
				visited.add(path);
			}
			x = nextX;
			y = nextY;
		}
	}
	return visited.size;
}
