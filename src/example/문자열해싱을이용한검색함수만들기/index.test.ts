import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('example_문자열 해싱을 이용한 검색 함수 만들기', () => {
	it('case 1', () => {
		const stringList = ['apple', 'banana', 'cherry'];
		const queryList = ['banana', 'kiwi', 'melon', 'apple'];
		const answer = solution(stringList, queryList);
		expect(answer).toEqual([true, false, false, true]);
	});
});
