// @flow
import type { ViewTypes } from '../actions/view.actions';
import { createBrowserHistory } from 'redux-saga-router';

import { call, fork, put } from 'redux-saga/effects';
import { router } from 'redux-saga-router';
import { loadView } from '../actions/view.actions';
import { ROUTES } from '../routes';

function wrapSaga(view: ViewTypes, saga) {
  return function*(args) {
    try {
      yield put(loadView(view));
      yield call(saga, args);
    } catch (e) {}
  };
}

const ROUTE_ACTIONS = Object.keys(ROUTES).reduce((routeActions, key) => {
  const def = ROUTES[key];
  routeActions[key] = wrapSaga(def.id, def.saga);
  return routeActions;
}, {});

export function* routerSaga(): * {
  yield fork(router, createBrowserHistory(), ROUTE_ACTIONS);
}

if (module.hot) {
  (module.hot: any).accept('../routes', () => {});
}
