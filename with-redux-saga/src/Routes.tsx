import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './store';

import Search from './pages/Search/';
import NotFound from './pages/NotFound/';

import { Layout } from './components';
import { ThemeName } from './styles/themes';
interface RoutesProps {
  theme: ThemeName;
  onChange: (newName: ThemeName) => void;
}
// Routes with exact paths must be listed last
const Routes = ({ theme, onChange }: RoutesProps) => (
  <Router history={history}>
    <Switch>
      <Layout themeName={theme} setThemeName={onChange}>
        <Switch>
          <Route exact path="/" name="Home" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  </Router>
);

export default Routes;
