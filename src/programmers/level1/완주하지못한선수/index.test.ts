import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_완주하지못한선수', () => {
	it('case 1', () => {
		const participant = ['leo', 'kiki', 'eden'];
		const completion = ['eden', 'kiki'];
		const result = solution(participant, completion);
		expect(result).toEqual('leo');
	});
	it('case 2', () => {
		const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
		const completion = ['josipa', 'filipa', 'marina', 'nikola'];
		const result = solution(participant, completion);
		expect(result).toEqual('vinko');
	});
	it('case 3', () => {
		const participant = ['mislav', 'stanko', 'mislav', 'ana'];
		const completion = ['stanko', 'ana', 'mislav'];
		const result = solution(participant, completion);
		expect(result).toEqual('mislav');
	});
});
