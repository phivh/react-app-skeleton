import { FACTORY_SEARCH } from '../../factories';

import * as Selectors from './Selector';

const state = {
  search: {
    query: 'mastercard',
    result: FACTORY_SEARCH,
    error: 'Error Message',
    submitting: false,
  },
};

describe('Search request', () => {
  it('has an action get search result', () => {
    expect(Selectors.getSearchResult(state)).toEqual(state.search);
  });
  it('has count from get search filter', () => {
    expect(Selectors.getSearchCount(state)).toEqual(FACTORY_SEARCH.length);
  });
});
