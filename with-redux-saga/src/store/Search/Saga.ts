import { put, call } from 'redux-saga/effects';
import * as searchService from '../../services';

import { Actions } from './Actions';

export function* search({ query }: any) {
  try {
    const { data } = yield call(searchService.getRepos, query);
    yield put(Actions.searchRequestSuccess(data, query));
  } catch (e) {
    yield put(Actions.searchRequestFailure(e.message || e.toString()));
  }
}

export function* filter({ filter }: any) {
  try {
    const { data } = yield call(searchService.filterRepos, filter);
    yield put(Actions.searchRequestSuccess(data, filter.query));
  } catch (e) {
    yield put(Actions.searchRequestFailure(e.message || e.toString()));
  }
}
