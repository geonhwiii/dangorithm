/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let p1 = m - 1;
	let p2 = n - 1;
	let p = m + n - 1;

	// 두 배열의 요소를 뒤에서부터 비교하여 큰 값을 결과 배열의 뒤에서부터 채움
	while (p2 >= 0) {
		if (p1 >= 0 && nums1[p1] > nums2[p2]) {
			nums1[p] = nums1[p1];
			p1--;
		} else {
			nums1[p] = nums2[p2];
			p2--;
		}
		p--;
	}
}

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
	nums1.splice(m);
	nums1.push(...nums2);
	nums1.sort((a, b) => a - b);
	return;
}
