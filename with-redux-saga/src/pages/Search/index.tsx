import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, List } from '../../components';
import { Filter } from '../../components';
import { Actions, Selectors } from '../../store/Search';
import { Grid, GridCell } from '../../styles/Grid';
import { isMobile } from '../../styles/isMobile';
import { Para } from '../../styles/Para';
import { ResultTitle } from './style';

export default () => {
  const { result, loading, query } = useSelector(Selectors.getSearchResult);
  const searchCount = useSelector(Selectors.getSearchCount);
  const dispatch = useDispatch();
  const data = useMemo(() => result, [result]);
  const onFilter = useCallback(
    (param) => {
      if (result) {
        dispatch(Actions.searchFilterRequest({ query, param }));
      }
    },
    [dispatch, query, result]
  );
  return (
    <>
      {query && (
        <ResultTitle>
          Search for <b>{query}</b> with {searchCount} repos
        </ResultTitle>
      )}
      <Grid variant={isMobile() ? 'sm' : 'lg'}>
        <GridCell span="10">
          <Filter loading={loading} onClick={onFilter} />
        </GridCell>
      </Grid>
      <List loading={loading}>
        {data ? <Item data={data} /> : <Para style={{ textAlign: 'center' }}>No search found</Para>}
      </List>
    </>
  );
};
