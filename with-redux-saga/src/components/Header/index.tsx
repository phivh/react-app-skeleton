import React, { useState } from 'react';
import { Header, Heading } from './style';
import { Search } from './Search';

interface IHeaderProps {
  onChangeTheme: () => void;
}

const Main = ({ onChangeTheme }: IHeaderProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Header data-testid="header">
        <div className="switch-container" data-testid="switch-button">
          <label>
            <input
              checked={checked}
              onChange={() => {
                onChangeTheme();
                setChecked(!checked);
              }}
              className="switch"
              type="checkbox"
            />
            <div>
              {' '}
              <div></div>{' '}
            </div>
          </label>
        </div>
        <Heading data-testid="heading">
          Github <sup>Search</sup>
        </Heading>
      </Header>
      <Search />
    </>
  );
};

export { Main as Header };
