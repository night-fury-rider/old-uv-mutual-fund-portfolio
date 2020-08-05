import { uvPieSaga } from './uv-pie/uv-pie-saga';

const sagas = [uvPieSaga];

export function runAllSaga(middleware) {
  for(const saga of sagas) {
    middleware.run(saga);
  }
}