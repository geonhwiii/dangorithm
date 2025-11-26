export function threeSum(nums: number[]): number[][] {
	// 1. 결과
	let result = [];

	// 2. 정렬
	const sortedNums = nums.sort((a, b) => a - b);

	// 3. 순회
	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;

		if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
			continue;
		}

		while (left < right) {
			const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
			if (sum === 0) {
				result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
}
