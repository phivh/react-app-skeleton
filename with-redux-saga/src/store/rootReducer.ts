import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';
import { search } from './Search';
import { History } from 'history';

const createRootReducer = (history: History) => {
  // combine all reducer to the root
  const rootReducer = combineReducers({
    router: connectRouter(history),
    search,
  });

  return rootReducer;
};

export default createRootReducer;

export interface AppState {
  router: RouterState;
}
