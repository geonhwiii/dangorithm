import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_짝지어제거하기', () => {
	it('case 1', () => {
		const s = 'baabaa';
		const answer = solution(s);
		expect(answer).toEqual(1);
	});
	it('case 2', () => {
		const s = 'cdcd';
		const answer = solution(s);
		expect(answer).toEqual(0);
	});
});
