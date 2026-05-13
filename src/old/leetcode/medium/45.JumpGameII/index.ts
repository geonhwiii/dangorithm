export function jump(nums: number[]): number {
	let maxReach = 0;
	let jumps = 0;
	let current = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		maxReach = Math.max(maxReach, i + nums[i]);
		if (i === current) {
			jumps++;
			current = maxReach;
		}
	}
	return jumps;
}
