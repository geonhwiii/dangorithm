export function solution(maps: number[][]) {
	const n = maps.length;
	const m = maps[0].length;
	const start = [0, 0];

	const distanceMap = Array.from({ length: n }).map((_) => Array.from<number>({ length: m }).fill(-1));

	const res = bfs(start, distanceMap, maps);

	return res[n - 1][m - 1];
}

const move = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

function bfs(start: number[], distanceMap: number[][], maps: number[][]) {
	const n = distanceMap.length;
	const m = distanceMap[0].length;
	const queue: number[][] = [];
	queue.push(start);
	distanceMap[start[0]][start[1]] = 1;

	while (queue.length) {
		const current = queue.shift();
		if (current) {
			for (const [dx, dy] of move) {
				const x = current[0] + dx;
				const y = current[1] + dy;

				// 외곽 처리
				if (x < 0 || y < 0 || x >= n || y >= m) {
					continue;
				}

				// 벽 처리
				if (maps[x][y] === 0) {
					continue;
				}

				// 이동
				if (distanceMap[x][y] === -1) {
					queue.push([x, y]);
					distanceMap[x][y] = distanceMap[current[0]][current[1]] + 1;
				}
			}
		}
	}
	return distanceMap;
}

// it('case 1', () => {
//     const maps = [
//         [1, 0, 1, 1, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 1, 1, 1],
//         [1, 1, 1, 0, 1],
//         [0, 0, 0, 0, 1],
//     ];
//     const answer = solution(maps);
//     expect(answer).toEqual(11);
// });
