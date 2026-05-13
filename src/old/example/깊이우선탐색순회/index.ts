export function solution(graph: string[][], start: string): string[] {
	const visited = new Set<string>();
	const result: string[] = [];
	const list: Record<string, string[]> = {};

	graph.forEach(([from, to]) => {
		if (!list[from]) {
			list[from] = [];
		}
		list[from].push(to);
	});

	dfs(start, list, visited, result);

	return result;
}

function dfs(node: string, list: Record<string, string[]>, visited: Set<string>, result: string[]) {
	visited.add(node); // 방문할 노드
	result.push(node); // 결과 배열
	const target = list[node] || [];
	for (const item of target) {
		if (!visited.has(item)) {
			dfs(item, list, visited, result);
		}
	}
}
