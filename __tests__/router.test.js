/**
 * @jest-environment jsdom
 */
import { TestScheduler } from 'jest';
import { pushToHistory } from '../scripts/router.js';
describe ('test history stack', () => {
	test('settings page state', () => {
		expect(pushToHistory('settings', 0).state.page).toBe('settings');
	});
	test('entry page state', () => {
		expect(pushToHistory('entry', 1).state.page).toBe('entry1');
	});
	test('home page state', () => {
		expect(pushToHistory('', 0).state.page).toBe();
	});
});
