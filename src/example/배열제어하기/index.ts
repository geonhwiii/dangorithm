export function solution(input: number[]) {
	return [...new Set(input)].sort((a, b) => b - a);
}
