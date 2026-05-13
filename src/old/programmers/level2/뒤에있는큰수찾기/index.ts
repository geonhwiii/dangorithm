export function solution(numbers: number[]) {
	const result = new Array(numbers.length).fill(-1);
	const stack: number[] = [];

	for (let i = 0; i < numbers.length; i++) {
		const currentNumber = numbers[i];
		while (stack.length > 0) {
			const topIndex = stack[stack.length - 1];
			const topNumber = numbers[topIndex];
			if (topNumber >= currentNumber) break;
			const index = stack.pop()!;
			result[index] = currentNumber;
		}
		stack.push(i);
	}

	return result;
}
