export function solution(players: string[], callings: string[]) {
	const 결과 = new Map();
	players.forEach((player, index) => {
		결과.set(player, index);
	});
	for (const 현재선수 of callings) {
		const 현재위치 = 결과.get(현재선수);
		const 앞선수위치 = 현재위치 - 1;
		const 앞선수 = players[앞선수위치];

		players[앞선수위치] = 현재선수;
		players[현재위치] = 앞선수;

		결과.set(현재선수, 앞선수위치);
		결과.set(앞선수, 현재위치);
	}
	return players;
}
