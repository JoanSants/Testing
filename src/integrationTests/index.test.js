import moxios from 'moxios';
import '@testing-library/jest-dom';
import { testStore } from '../../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts sction', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('Store is updated correctly', () => {
		const expectedState = [
			{
				title: 'Title',
				body: 'Body'
			},{
				title: 'Title',
				body: 'Body'
			},
			{
				title: 'Title',
				body: 'Body'
			},
			{
				title: 'Title',
				body: 'Body'
			}
		];

		const store = testStore();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			})
		});

		return store.dispatch(fetchPosts())
		.then(() => {
			const newState = store.getState();
			expect(newState.posts).toBe(expectedState);
		});
	});
});