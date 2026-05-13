export function solution(genres: string[], plays: number[]) {
	const result: number[] = [];
	const genreMap = new Map();
	const playMap = new Map();
	genres.forEach((genre, index) => {
		const prevGenre = genreMap.get(genre) || 0;
		genreMap.set(genre, prevGenre + plays[index]);
		playMap.set(index, plays[index]);
	});
	const sortedGenre = [...genreMap].sort((a, b) => b[1] - a[1]).map((item) => item[0]);
	const sortedPlay = [...playMap].sort((a, b) => b[1] - a[1]).map((item) => item[0]);
	for (const genre of sortedGenre) {
		let count = 0;
		sortedPlay.forEach((play) => {
			const playGenre = genres[play];
			if (playGenre === genre && count < 2) {
				result.push(play);
				count++;
			}
		});
	}
	return result;
}

// genres	plays	return
// ["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]
