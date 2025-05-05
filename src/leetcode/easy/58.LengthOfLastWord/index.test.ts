import { describe, expect, it } from 'vitest';
import { lengthOfLastWord } from './index';

describe('EASY_58_LengthOfLastWord', () => {
	it('case 1', () => {
		const s = 'Hello World';
		const answer = lengthOfLastWord(s);
		expect(answer).toEqual(5);
	});
	it('case 2', () => {
		const s = '   fly me   to   the moon  ';
		const answer = lengthOfLastWord(s);
		expect(answer).toEqual(4);
	});
	it('case 3', () => {
		const s = 'luffy is still joyboy';
		const answer = lengthOfLastWord(s);
		expect(answer).toEqual(6);
	});
});
