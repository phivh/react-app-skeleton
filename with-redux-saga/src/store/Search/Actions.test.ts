import { FACTORY_SEARCH } from '../../factories';
import { Actions, Types } from './Actions';

describe('Search - Action', () => {
  it('has action location request', () => {
    const expected = {
      type: Types.SEARCH_REQUEST,
    };

    expect(Actions.searchRequest()).toEqual(expected);
  });

  it('has action search success', () => {
    const expected = {
      payload: FACTORY_SEARCH,
      type: Types.SEARCH_REQUEST_SUCCESS,
    };

    expect(Actions.searchRequestSuccess(FACTORY_SEARCH)).toEqual(expected);
  });

  it('has action search failure', () => {
    const error = 'something error';

    const expected = {
      error,
      type: Types.SEARCH_REQUEST_FAILURE,
    };

    expect(Actions.searchRequestFailure(error)).toEqual(expected);
  });
});
