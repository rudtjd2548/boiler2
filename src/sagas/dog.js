import { takeLatest, call, put } from 'redux-saga/effects'
import * as dogActions from 'src/reducers/dog'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* dogWatcher() {
  yield takeLatest("API_CALL_REQUEST", dogWorker)
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  })
}

// worker saga: makes the api call when watcher saga sees the action
function* dogWorker() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    //dispatch a success action to the store with the new dog
    yield put(dogActions.api_call_success(dog));
  } catch (error) {
    yield put(dogActions.api_call_failure(error));
  }
}
