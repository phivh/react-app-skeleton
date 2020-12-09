import React, { useState, useCallback, useMemo } from 'react';
import { Search, SearchContainer } from './style';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { Actions } from '../../../store/Search';
import { RemoveIcon, SearchIcon } from '../../';

const Main = () => {
  const dispatch = useDispatch();
  const [q, setQ] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
    _debounce(event.target.value);
  };

  const _debounce = useCallback(
    debounce((query: string) => {
      if (query) {
        dispatch(Actions.searchRequest(query));
      } else {
        dispatch(Actions.searchReset());
      }
    }, 500),
    [dispatch]
  );

  useMemo(() => !q && dispatch(Actions.searchReset()), [q, dispatch]);

  return (
    <SearchContainer data-testid="search-wrapper">
      <Search>
        {q ? <RemoveIcon onClick={() => setQ('')} /> : <SearchIcon />}
        <input
          data-testid="search-input"
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search by user"
          autoComplete="off"
          onChange={handleChange}
          value={q}
        />
      </Search>
    </SearchContainer>
  );
};

export { Main as Search };
