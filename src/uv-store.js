import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from './root-reducer';
import { runAllSaga } from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

export const uvStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ?
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()) :
    applyMiddleware(sagaMiddleware)
);

runAllSaga(sagaMiddleware);