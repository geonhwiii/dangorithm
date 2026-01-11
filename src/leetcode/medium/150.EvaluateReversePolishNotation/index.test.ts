import { describe, expect, it } from 'vitest';
import { evalRPN } from './index';

describe('MEDIUM_150_EvaluateReversePolishNotation', () => {
	it('case 1', () => {
		const tokens = ['2', '1', '+', '3', '*'];
		const answer = evalRPN(tokens);
		expect(answer).toEqual(9);
	});
	it('case 2', () => {
		const tokens = ['4', '13', '5', '/', '+'];
		const answer = evalRPN(tokens);
		expect(answer).toEqual(6);
	});
	it('case 3', () => {
		const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
		const answer = evalRPN(tokens);
		expect(answer).toEqual(22);
	});
});
