import { describe, expect, it } from 'vitest';
import { reverseWords } from './index';

describe('MEDIUM_134_GasStation', () => {
	it('case 1', () => {
		const s = 'the sky is blue';
		const answer = reverseWords(s);
		expect(answer).toEqual('blue is sky the');
	});
	it('case 2', () => {
		const s = '  hello world  ';
		const answer = reverseWords(s);
		expect(answer).toEqual('world hello');
	});
	it('case 3', () => {
		const s = 'a good   example';
		const answer = reverseWords(s);
		expect(answer).toEqual('example good a');
	});
});
