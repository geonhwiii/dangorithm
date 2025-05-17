export function solution(graph: number[][], start: number): number[] {
	const adjacentList: Record<number, number[]> = {};
	graph.forEach(([from, to]) => {
		if (!adjacentList[from]) {
			adjacentList[from] = [];
		}
		adjacentList[from].push(to);
	});

	return bfs(start, adjacentList);
}

function bfs(node: number, adjacentList: Record<number, number[]>): number[] {
	const visited = new Set();
	const result: number[] = [];
	const queue: number[] = [];

	queue.push(node);
	visited.add(node);
	result.push(node);

	while (queue.length) {
		const n = queue.shift();
		if (n && adjacentList[n]) {
			for (const item of adjacentList[n]) {
				if (!visited.has(item)) {
					queue.push(item);
					visited.add(item);
					result.push(item);
				}
			}
		}
	}
	return result;
}
