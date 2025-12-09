export function threeSum(nums: number[]): number[][] {
	const result: number[][] = [];

	// 정렬 (원본 배열을 변경하지 않도록 복사)
	const sortedNums = [...nums].sort((a, b) => a - b);

	for (let i = 0; i < sortedNums.length - 2; i++) {
		// i의 중복 건너뛰기
		if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
			continue;
		}

		let left = i + 1;
		let right = sortedNums.length - 1;

		while (left < right) {
			const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

			if (sum === 0) {
				// 결과 추가
				result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);

				// left의 중복 건너뛰기
				while (left < right && sortedNums[left] === sortedNums[left + 1]) {
					left++;
				}
				// right의 중복 건너뛰기
				while (left < right && sortedNums[right] === sortedNums[right - 1]) {
					right--;
				}

				// 한 번 더 이동 (다음 다른 값으로)
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}

	return result;
}
