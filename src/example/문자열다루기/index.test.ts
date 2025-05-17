import { describe, it, expect } from 'vitest';
import { solution } from './index';

describe('example_문자열다루기', () => {
	it('case 1', () => {
		const str = 'Hello World';
		const result = solution(str);
		expect(result.uppercase).toBe('HELLO WORLD');
		expect(result.lowercase).toBe('hello world');
		expect(result.capitalize).toBe('Hello world');
		expect(result.replace).toBe('Hellx Wxrld');
	});

	it('case 2', () => {
		const str = 'TypeScript';
		const result = solution(str);
		expect(result.uppercase).toBe('TYPESCRIPT');
		expect(result.lowercase).toBe('typescript');
		expect(result.capitalize).toBe('Typescript');
		expect(result.replace).toBe('TypeScript');
	});
});
