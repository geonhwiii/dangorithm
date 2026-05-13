export function solution(nums: number[]) {
	const size = new Set(nums).size;
	const goal = nums.length / 2;
	return size > goal ? goal : size;
}
