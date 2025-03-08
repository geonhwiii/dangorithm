export function solution(participant: string[], completion: string[]) {
	const participantMap = new Map();
	for (const name of participant) {
		participantMap.set(name, (participantMap.get(name) || 0) + 1);
	}
	for (const name of completion) {
		const count = participantMap.get(name);
		if (count === 1) {
			participantMap.delete(name);
		} else {
			participantMap.set(name, count - 1);
		}
	}
	return participantMap.keys().next().value;
}

// 		const participant = ['mislav', 'stanko', 'mislav', 'ana'];
// 		const completion = ['stanko', 'ana', 'mislav'];
// 		const result = solution(participant, completion);
// 		expect(result).toEqual('mislav');
