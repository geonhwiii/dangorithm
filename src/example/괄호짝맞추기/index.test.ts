import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_괄호짝맞추기', () => {
	it('case 1', () => {
		const s = '(())()';
		const answer = solution(s);
		expect(answer).toEqual(true);
	});
	it('case 2', () => {
		const s = '((())()';
		const answer = solution(s);
		expect(answer).toEqual(false);
	});
});
