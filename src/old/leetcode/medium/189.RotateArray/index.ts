/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
	const copiedNums = [...nums];
	for (let i = 0; i < nums.length; i++) {
		const index = (i + k) % nums.length;
		nums[index] = copiedNums[i];
	}
}
