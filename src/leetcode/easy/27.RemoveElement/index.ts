export function removeElement(nums: number[], val: number): number {
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		const target = nums[i];
		if (target !== val) {
			nums[k] = target;
			k++;
		}
	}
	return k;
}
