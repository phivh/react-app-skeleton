import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory, History } from 'history';
import { routerMiddleware, routerActions } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import createRootReducer, { AppState } from './rootReducer';
import rootSaga from './rootSaga';

const history: History = createBrowserHistory();

declare global {
  interface Window {
    /* eslint-disable-next-line */
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const configureStore = (initialState: AppState): Store<AppState> => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Saga Middleware
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...routerActions,
  };

  /* eslint-disable no-underscore-dangle */

  // prettier-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
        actionCreators,
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(createRootReducer(history), initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export { configureStore, history };
