import { describe, expect, it } from 'vitest';
import { fullJustify } from './index';

describe('HARD_68_TextJustification', () => {
	it('case 1', () => {
		const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
		const maxWidth = 16;
		const answer = fullJustify(words, maxWidth);
		expect(answer).toEqual(['This    is    an', 'example  of text', 'justification.  ']);
	});
	it('case 2', () => {
		const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'];
		const maxWidth = 16;
		const answer = fullJustify(words, maxWidth);
		expect(answer).toEqual(['What   must   be', 'acknowledgment  ', 'shall be        ']);
	});
	it('case 3', () => {
		const words = [
			'Science',
			'is',
			'what',
			'we',
			'understand',
			'well',
			'enough',
			'to',
			'explain',
			'to',
			'a',
			'computer.',
			'Art',
			'is',
			'everything',
			'else',
			'we',
			'do',
		];
		const maxWidth = 20;
		const answer = fullJustify(words, maxWidth);
		expect(answer).toEqual([
			'Science  is  what we',
			'understand      well',
			'enough to explain to',
			'a  computer.  Art is',
			'everything  else  we',
			'do                  ',
		]);
	});
});
