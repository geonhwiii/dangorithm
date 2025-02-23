export function solution(N: number, stages: number[]) {
	const stageMap = new Map();
	for (let i = 1; i <= N; i++) {
		let failCount = 0;
		const 도전스테이지 = stages.filter((stage) => i <= stage);
		for (const stage of 도전스테이지) {
			if (i === stage) {
				failCount++;
			}
		}
		const rate = failCount / 도전스테이지.length;
		stageMap.set(i, rate);
	}
	const result = [...stageMap]
		.sort((a, b) => b[1] - a[1])
		.map((item) => item[0]);
	return result;
}
