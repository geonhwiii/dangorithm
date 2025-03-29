export function solution(enroll: string[], referral: string[], seller: string[], amount: number[]) {
	const enrollMap = new Map();
	const profitMap = new Map();
	referral.forEach((name, index) => {
		if (name !== '-') {
			enrollMap.set(enroll[index], name);
		}
	});
	enroll.forEach((name) => profitMap.set(name, 0));

	seller.forEach((name, index) => {
		let 판매자 = name;
		let 수익 = amount[index] * 100;
		while (판매자 !== '-' && 수익 >= 1) {
			const 이자 = Math.floor(수익 * 0.1);
			const 실수익 = 수익 - 이자;
			profitMap.set(판매자, profitMap.get(판매자) + 실수익);
			수익 = 이자;
			판매자 = enrollMap.get(판매자) || '-';
			if (이자 < 1) break;
		}
	});

	return enroll.map((name) => profitMap.get(name));
}
