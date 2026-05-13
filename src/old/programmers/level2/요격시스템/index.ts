export function solution(targets: number[][]): number {
	let count = 0;
	let lastEnd = -1;
	const sortedTargets = targets.sort((a, b) => a[1] - b[1]);
	for (const [start, end] of sortedTargets) {
		if (start >= lastEnd) {
			count++;
			lastEnd = end;
		}
	}
	return count;
}
