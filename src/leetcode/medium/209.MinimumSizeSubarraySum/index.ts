export function minSubArrayLen(target: number, nums: number[]): number {
	let left = 0;
	let right = 0;
	let sum = 0;
	let minLength = 105; // nums.length의 최대값

	while (right < nums.length) {
		sum += nums[right];
		while (sum >= target) {
			minLength = Math.min(minLength, right - left + 1);
			sum -= nums[left];
			left++;
		}
		right++;
	}

	return minLength === 105 ? 0 : minLength;
}
