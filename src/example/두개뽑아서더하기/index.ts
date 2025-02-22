export function solution(numbers: number[]) {
	const results = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < i; j++) {
			results.push(numbers[i] + numbers[j]);
		}
	}
	return [...new Set(results)].toSorted((a, b) => a - b);
}

export function solution2(numbers: number[]) {
	const results = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			results.push(numbers[i] + numbers[j]);
		}
	}
	return [...new Set(results)].toSorted((a, b) => a - b);
}
