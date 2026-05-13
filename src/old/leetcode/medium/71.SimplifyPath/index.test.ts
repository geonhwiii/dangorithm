import { describe, expect, it } from 'vitest';
import { simplifyPath } from './index';

describe('MEDIUM_71_SimplifyPath', () => {
	it('case 1', () => {
		const path = '/home/';
		const answer = simplifyPath(path);
		expect(answer).toEqual('/home');
	});
	it('case 2', () => {
		const path = '/home//foo/';
		const answer = simplifyPath(path);
		expect(answer).toEqual('/home/foo');
	});
	it('case 3', () => {
		const path = '/home/user/Documents/../Pictures';
		const answer = simplifyPath(path);
		expect(answer).toEqual('/home/user/Pictures');
	});
	it('case 4', () => {
		const path = '/../';
		const answer = simplifyPath(path);
		expect(answer).toEqual('/');
	});
	it('case 5', () => {
		const path = '/.../a/../b/c/../d/./';
		const answer = simplifyPath(path);
		expect(answer).toEqual('/.../b/d');
	});
});
