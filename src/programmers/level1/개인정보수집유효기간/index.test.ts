import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_1_개인정보수집유효기간', () => {
	it('case 1', () => {
		const today = '2022.05.19';
		const terms = ['A 6', 'B 12', 'C 3'];
		const privacies = ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'];
		const result = solution(today, terms, privacies);
		expect(result).toEqual([1, 3]);
	});
	it('case 2', () => {
		const today = '2020.01.01';
		const terms = ['Z 3', 'D 5'];
		const privacies = ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'];
		const result = solution(today, terms, privacies);
		expect(result).toEqual([1, 4, 5]);
	});
});
