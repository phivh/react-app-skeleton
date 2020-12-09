import configureMockStore from 'redux-mock-store';

export const mockStore = configureMockStore();
export const store = mockStore({
  search: {
    loading: false,
    result: null,
    error: null,
    query: null,
  },
});
