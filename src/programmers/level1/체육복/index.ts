export function solution(n: number, lost: number[], reserve: number[]) {
	const lostSet = new Set(lost.sort((a, b) => a - b));
	const reserveSet = new Set(reserve.sort((a, b) => a - b));

	// 체육복을 잃어버린학생 중에 여벌 체육복이 있는 학생이 있는 경우 잃어버리지 않은 것으로 간주
	for (const n of lostSet) {
		if (reserveSet.has(n)) {
			reserveSet.delete(n);
			lostSet.delete(n);
		}
	}

	// 체육복을 진짜 잃어버린 학생을 순회하면서 앞번과 뒷번 학생 체크
	for (const n of lostSet) {
		const 앞번호 = n - 1;
		const 뒷번호 = n + 1;
		if (reserveSet.has(앞번호)) {
			reserveSet.delete(앞번호);
			lostSet.delete(n);
		} else if (reserveSet.has(뒷번호)) {
			reserveSet.delete(뒷번호);
			lostSet.delete(n);
		}
	}
	return n - lostSet.size;
}

// 정렬이 필요한지 판단하는 체크리스트:

// ✅ 요소들 간의 순서가 결과에 영향을 미치는가?
// ✅ 인접한 요소들과의 관계가 중요한가?
// ✅ 최적의 결과를 위한 특정 기준이 필요한가?
// ✅ 다른 순서로 처리하면 다른 결과가 나오는가?
