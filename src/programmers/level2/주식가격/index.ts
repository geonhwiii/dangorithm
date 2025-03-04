// O(n)
export function solution(prices: number[]) {
	const n = prices.length;
	const answer = new Array(n).fill(0);
	const indices = Array.from({ length: n }, (_, i) => i);
	const remainingStack = indices.reduce((stack, currentIndex) => {
		const newStack = [];
		for (const stackIndex of stack) {
			if (prices[stackIndex] > prices[currentIndex]) {
				answer[stackIndex] = currentIndex - stackIndex;
			} else {
				newStack.push(stackIndex);
			}
		}
		newStack.push(currentIndex);
		return newStack;
	}, [] as number[]);
	for (const index of remainingStack) {
		answer[index] = n - 1 - index;
	}
	return answer;
}
// O(n^2)
function solution2(prices: number[]) {
	const answer = [];
	for (let i = 0; i < prices.length; i++) {
		let count = 0;
		for (let j = i + 1; j < prices.length; j++) {
			d;
			count++;
			if (prices[i] > prices[j]) {
				break;
			}
		}
		answer.push(count);
	}
	return answer;
}

// const prices = [1, 2, 3, 2, 3];
// const answer = solution(prices);
// expect(answer).toEqual([4, 3, 1, 1, 0]);
