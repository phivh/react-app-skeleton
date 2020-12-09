import React, { useState } from 'react';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import { AppState } from './store/rootReducer';
import { ThemeName, themes } from './styles/themes';
import { GlobalStyle } from './styles/GlobalStyle';
import './index.css';

interface AppProps {
  store: Store<AppState>;
  history: History;
}

const App = ({ store, history }: AppProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(
    localStorage.getItem('@aztheme') === 'dark' ? 'dark' : 'light'
  );
  const currentTheme = themes[themeName];
  return (
    <ThemeProvider theme={{ mode: 'ccad', withMode: currentTheme }}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <GlobalStyle />
          <Routes theme={themeName} onChange={setThemeName} />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
