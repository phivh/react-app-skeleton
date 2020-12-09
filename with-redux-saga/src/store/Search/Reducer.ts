import { createReducer } from 'reduxsauce';
import { IItem } from '../../components';
import { Types } from './Actions';

export interface ISearch {}

export interface ISearchState {
  result: Array<IItem> | null;
  query: string | null;
  error: string | null;
  loading: boolean;
}

export const INITIAL_STATE = {
  result: null,
  query: null,
  error: null,
  loading: false,
};

export const searchReset = (state: ISearchState) => ({
  ...INITIAL_STATE,
});

export const searchRequest = (state: ISearchState) => ({
  ...state,
  loading: true,
});

export const searchFilterRequest = (state: ISearchState) => ({
  ...state,
  loading: true,
});
export const searchRequestSuccess = (
  state: ISearchState,
  { payload, query }: { payload: Array<IItem>; query: string }
) => ({
  ...state,
  loading: false,
  result: payload,
  query,
});
export const searchRequestFailure = (state: ISearchState, { error }: { error: string }) => ({
  ...state,
  loading: false,
  error,
});

export const search = createReducer(INITIAL_STATE, {
  [Types.SEARCH_RESET]: searchReset,
  [Types.SEARCH_REQUEST]: searchRequest,
  [Types.SEARCH_FILTER_REQUEST]: searchFilterRequest,
  [Types.SEARCH_REQUEST_SUCCESS]: searchRequestSuccess,
  [Types.SEARCH_REQUEST_FAILURE]: searchRequestFailure,
});
