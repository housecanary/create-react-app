import createSagaMiddleware from 'redux-saga';
import { routerSaga } from './router.saga';

export const sagaMiddleware = createSagaMiddleware();

export function runSagas() {
  sagaMiddleware.run(routerSaga);
}
