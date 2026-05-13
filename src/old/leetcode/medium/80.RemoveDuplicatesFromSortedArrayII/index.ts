export function removeDuplicates(nums: number[]): number {
	if (!nums.length) return 0;
	let pointer = 0;
	const countMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		const value = nums[i];
		const prev = countMap.get(value) || 0;
		if (prev === 0 || prev === 1) {
			countMap.set(value, prev + 1);
			nums[pointer] = nums[i];
			pointer++;
		}
	}
	return pointer;
}
