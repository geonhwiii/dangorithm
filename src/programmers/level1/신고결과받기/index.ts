export function solution(id_list: string[], report: string[], k: number) {
	const reportMap = new Map<string, string[]>();
	const reportedMap = new Map<string, number>();
	report.forEach((item) => {
		const [user, target] = item.split(' ');
		// 이전에 신고한 목록
		const prevReport = reportMap.get(user) || [];
		// 이전에 target을 신고를 한 적이 없다면
		if (!prevReport.includes(target)) {
			prevReport.push(target);
			reportMap.set(user, prevReport);
			reportedMap.set(target, (reportedMap.get(target) || 0) + 1);
		}
	});
	const result = id_list.map((id) => {
		const reportList = reportMap.get(id) || [];
		return reportList.filter((user) => (reportedMap.get(user) || 0) >= k).length;
	});
	return result;
}
