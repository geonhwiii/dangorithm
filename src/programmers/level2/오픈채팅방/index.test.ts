import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_2_오픈채팅방', () => {
	it('case 1', () => {
		const record = [
			'Enter uid1234 Muzi',
			'Enter uid4567 Prodo',
			'Leave uid1234',
			'Enter uid1234 Prodo',
			'Change uid4567 Ryan',
		];
		const answer = solution(record);
		expect(answer).toEqual([
			'Prodo님이 들어왔습니다.',
			'Ryan님이 들어왔습니다.',
			'Prodo님이 나갔습니다.',
			'Prodo님이 들어왔습니다.',
		]);
	});
});
