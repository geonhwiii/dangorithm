export function removeDuplicates(nums: number[]): number {
	if (nums.length === 0) return 0;
	let pointer = 0;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[pointer]) {
			pointer++;
			nums[pointer] = nums[i];
		}
	}
	return pointer + 1;
}

export function removeDuplicates2(nums: number[]): number {
	let index = 0;
	const numSet = new Set();
	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		if (!numSet.has(value)) {
			numSet.add(value);
			nums[index] = nums[i];
			index++;
		}
	}
	return index;
}
