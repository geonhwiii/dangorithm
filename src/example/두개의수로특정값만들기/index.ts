export function solution(arr: number[], target: number) {
	const set = new Set<number>();
	for (const num of arr) {
		if (set.has(target - num)) {
			return true;
		}
		set.add(num);
	}
	return false;
}

function solution2(arr: number[], target: number) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) return true;
		}
	}
	return false;
}
