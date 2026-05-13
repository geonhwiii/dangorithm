export function canJump(nums: number[]): boolean {
	let maxReach = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i > maxReach) {
			return false;
		}
		const maxJump = i + nums[i];
		maxReach = Math.max(maxJump, maxReach);

		if (maxReach >= nums.length - 1) {
			return true;
		}
	}
	return false;
}
