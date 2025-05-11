export function fullJustify(words: string[], maxWidth: number): string[] {
	const result: string[] = [];
	let currentLine: string[] = [];
	let currentLineLength = 0;

	for (const word of words) {
		const space = currentLine.length;
		// 현재 라인에 단어를 추가할 수 있는 경우
		if (currentLineLength + word.length + space <= maxWidth) {
			currentLine.push(word);
			currentLineLength += word.length;
		} else {
			// 단어가 한 개 뿐일 경우
			if (currentLine.length === 1) {
				const line = currentLine[0] + ' '.repeat(maxWidth - currentLine[0].length);
				result.push(line);
			} else {
				// 단어가 여러 개일 경우
				// 1. 남은 공간 계산
				const remainingSpace = maxWidth - currentLineLength;
				// 2. 단어 사이의 공백 수 계산 (나머지는 버림)
				const baseSpace = Math.floor(remainingSpace / (currentLine.length - 1));
				// 3. 남은 공백 수 계산
				const extraSpace = remainingSpace - baseSpace * (currentLine.length - 1);
				// 4. 단어들을 공백으로 연결
				let line = '';
				for (let i = 0; i < currentLine.length; i++) {
					line += currentLine[i];
					// 마지막 단어가 아니면 공백 추가
					if (i < currentLine.length - 1) {
						// 기본 공백 + (남은 공백이 있으면 1개 추가)
						line += ' '.repeat(baseSpace + (i < extraSpace ? 1 : 0));
					}
				}
				result.push(line);
			}
			currentLine = [word];
			currentLineLength = word.length;
		}
	}

	if (currentLine.length > 0) {
		const lastLine = currentLine.join(' ');
		const remainingSpaces = maxWidth - lastLine.length;
		result.push(lastLine + ' '.repeat(remainingSpaces));
	}

	return result;
}
