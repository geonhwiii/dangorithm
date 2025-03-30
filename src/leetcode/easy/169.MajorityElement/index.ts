export function majorityElement(nums: number[]): number {
	const threshold = Math.floor(nums.length / 2);
	const countMap = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const prev = countMap.get(num) || 0;
		const currentCount = prev + 1;
		countMap.set(num, currentCount);
		if (currentCount > threshold) {
			return num;
		}
	}
	return 0;
}
