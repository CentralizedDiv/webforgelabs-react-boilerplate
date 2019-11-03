import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from './root';

export const history = createBrowserHistory();
export const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const middlewares: ReadonlyArray<any> = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers: ReadonlyArray<any> = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer(history), undefined, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
