export function solution(arr: number[]) {
	return arr.filter((n, index) => {
		const next = arr[index + 1];
		if (n !== next) {
			return true;
		}
		return false;
	});
}

export function solution2(arr: number[]) {
	if (arr.length <= 1) return arr;
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const prev = arr[i];
		const curr = arr[i + 1];
		if (prev !== curr) {
			result.push(prev);
		}
	}
	return result;
}
