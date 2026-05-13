import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_신고결과받기', () => {
	it('case 1', () => {
		const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
		const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
		const k = 2;
		const answer = solution(id_list, report, k);
		const result = [2, 1, 1, 0];
		expect(answer).toEqual(result);
	});
	it('case 2', () => {
		const id_list = ['con', 'ryan'];
		const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
		const k = 3;
		const answer = solution(id_list, report, k);
		const result = [0, 0];
		expect(answer).toEqual(result);
	});
});
