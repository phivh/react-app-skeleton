import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore } from '../../factories';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from '.';
let rendered: any;

describe('Search - Actions', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    const store = mockStore({
      search: {
        query: null,
        list: null,
      },
    });
    rendered = render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" name="Home" component={Header} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render Search page', async () => {
    const { getByText, getByTestId } = rendered;
    expect(getByText(/Github/)).toBeTruthy();
    await waitFor(() => {
      expect(getByTestId('header')).toBeTruthy();
      expect(getByTestId('heading')).toBeTruthy();
      expect(getByTestId('search-wrapper')).toBeTruthy();
      expect(getByTestId('search-input')).toBeTruthy();
    });
  });
});
