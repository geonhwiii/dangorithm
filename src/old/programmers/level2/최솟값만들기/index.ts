export function solution(A: number[], B: number[]): number {
	const sortedA = A.toSorted((a, b) => a - b);
	const sortedB = B.toSorted((a, b) => b - a);
	return sortedA.reduce((sum, num, index) => sum + num * sortedB[index], 0);
}
