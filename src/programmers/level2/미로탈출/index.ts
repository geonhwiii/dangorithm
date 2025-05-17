export function solution(maps: string[]) {
	const n = maps.length;
	const m = maps[0].length;

	let visited = Array.from({ length: n }, () => Array(m).fill(false));

	const bfs = (start: number[], target: string) => {
		// 1. 큐 초기화
		const queue = new Queue();

		// 2. 시작점을 큐에 넣고 방문 true체크
		queue.push([start[0], start[1], 0]);
		visited[start[0]][start[1]] = true;

		// 3. 큐가 빌 때까지 반복
		while (!queue.isEmpty()) {
			const current = queue.pop();

			if (maps[current[0]][current[1]] === target) {
				return current[2];
			}

			// 4. 현재 위치에서 4방향 탐색
			for (const [dRow, dCol] of directions) {
				const nextRow = current[0] + dRow;
				const nextCol = current[1] + dCol;

				// 5. 미로를 벗어났는지 체크
				if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= m) {
					continue;
				}

				// 6. 벽 체크
				if (maps[nextRow][nextCol] === 'X') {
					continue;
				}

				// 7. 방문했는지 체크
				if (visited[nextRow][nextCol]) {
					continue;
				}

				// 8. 방문 체크
				visited[nextRow][nextCol] = true;

				// 9. 큐에 추가
				queue.push([nextRow, nextCol, current[2] + 1]);
			}
		}

		return -1; // 목표점에 도달하지 못한 경우 -1 반환
	};

	const startRow = maps.findIndex((row) => row.includes('S'));
	const startCol = maps[startRow].indexOf('S');

	const leverRow = maps.findIndex((row) => row.includes('L'));
	const leverCol = maps[leverRow].indexOf('L');

	const toLever = bfs([startRow, startCol], 'L');
	visited = Array.from({ length: n }, () => Array(m).fill(false));
	const toExit = bfs([leverRow, leverCol], 'E');

	if (toLever === -1 || toExit === -1) {
		return -1;
	}

	return toLever + toExit;
}

const directions = [
	[-1, 0], // 상
	[1, 0], // 하
	[0, -1], // 좌
	[0, 1], // 우
];

class Queue {
	items: number[][] = [];
	front = 0;
	rear = 0;

	push(item: number[]) {
		this.items.push(item);
		this.rear++;
	}

	pop() {
		return this.items[this.front++];
	}

	isEmpty() {
		return this.front === this.rear;
	}
}
