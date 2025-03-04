import { describe, expect, it } from 'vitest';
import { solution } from './index';

describe('LEVEL_3_표편집', () => {
	it('case 1', () => {
		const n = 8;
		const k = 2;
		const cmd = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'];
		expect(solution(n, k, cmd)).toEqual('OOOOXOOO');
	});
	it('case 2', () => {
		const n = 8;
		const k = 2;
		const cmd = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C'];
		expect(solution(n, k, cmd)).toEqual('OOXOXOOO');
	});
});
