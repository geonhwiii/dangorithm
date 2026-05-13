export function solution(input: number[]) {
	return input.toSorted((a, b) => a - b);
}
