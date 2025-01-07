export function solution(cards1: string[], cards2: string[], goal: string[]) {
	let cards1Index = 0;
	let cards2Index = 0;
	for (const word of goal) {
		if (word === cards1[cards1Index]) {
			cards1Index++;
			continue;
		}
		if (word === cards2[cards2Index]) {
			cards2Index++;
			continue;
		}
		return "No";
	}
	return "Yes";
}
