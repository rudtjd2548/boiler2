import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from 'src/reducers';

import rootSaga from "src/sagas"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// create a redux store with our reducer above and middleware
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), devTools)
)

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
