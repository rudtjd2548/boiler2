import { all, fork } from "redux-saga/effects";

import * as dogWatcher from './dog'

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(dogWatcher)
    ].map(fork)
  );
}
