import { createSelector } from 'reselect';
import { ISearchState } from './Reducer';

const selector = (state: { search: any }) => state.search;

export const getSearchResult = createSelector(selector, (search: ISearchState) => search);

export const getSearchCount = createSelector(
  selector,
  (search: ISearchState) => search.result?.length || 0
);
