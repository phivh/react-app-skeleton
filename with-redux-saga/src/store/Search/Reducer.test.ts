import { FACTORY_SEARCH } from '../../factories';
import * as Reducer from './Reducer';

describe('Search - Reducer', () => {
  it('has handle request', () => {
    expect(Reducer.searchRequest(Reducer.INITIAL_STATE)).toEqual({
      ...Reducer.INITIAL_STATE,
      loading: true,
    });
  });

  it('has handle search request success', () => {
    const node = FACTORY_SEARCH;

    expect(
      Reducer.searchRequestSuccess(Reducer.INITIAL_STATE, { payload: node, query: 'string' })
    ).toEqual({
      ...Reducer.INITIAL_STATE,
      query: 'string',
      result: node,
      loading: false,
    });
  });

  it('has handle search request failure', () => {
    const error = 'Error message';

    expect(Reducer.searchRequestFailure(Reducer.INITIAL_STATE, { error })).toEqual({
      ...Reducer.INITIAL_STATE,
      error,
    });
  });
});
