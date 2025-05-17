export function solution(n: number, computers: number[][]): number {
	let count = 0;
	const visited = new Set<number>();
	for (let i = 0; i < n; i++) {
		if (!visited.has(i)) {
			dfs(i, computers, visited);
			count++;
		}
	}
	return count;
}

function dfs(node: number, computers: number[][], visited: Set<number>) {
	visited.add(node);
	for (let i = 0; i < computers[node].length; i++) {
		if (computers[node][i] === 1 && !visited.has(i)) {
			dfs(i, computers, visited);
		}
	}
}
