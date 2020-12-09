import { takeLatest, all } from 'redux-saga/effects';

import { Sagas as SearchSagas, Types as SearchTypes } from './Search';

const rootSaga = function* root() {
  yield all([
    takeLatest(SearchTypes.SEARCH_REQUEST, SearchSagas.search),
    takeLatest(SearchTypes.SEARCH_FILTER_REQUEST, SearchSagas.filter),
  ]);
};

export default rootSaga;
