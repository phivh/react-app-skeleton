import React, { useState } from 'react';
import { FilterContainer, FilterTitle, FilterContent, Pill } from './style';
import Skeleton from 'react-loading-skeleton';
import upperFirst from 'lodash/upperFirst';

const types = ['all', 'owner', 'member'];

interface IFilterProps {
  onClick?: (e: string) => void;
  loading?: boolean;
}

export const Filter = ({ loading, onClick = () => {} }: IFilterProps) => {
  const [active, setActive] = useState('');
  return (
    <FilterContainer data-testid="filter-area">
      <FilterTitle>Filter by:</FilterTitle>
      {loading ? (
        <FilterContent>
          <Skeleton width={300} count={1} />
        </FilterContent>
      ) : (
        <FilterContent>
          {types.map((type: string, i: number) => (
            <Pill
              key={i}
              active={active === type}
              onClick={() => {
                onClick(type);
                if (active && type === active) {
                  setActive('');
                } else {
                  setActive(type);
                }
              }}
            >
              {upperFirst(type)}
            </Pill>
          ))}
        </FilterContent>
      )}
    </FilterContainer>
  );
};
