import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";

import coreSaga from "../features/core/redux/sagas";

export default function* rootSaga(): SagaIterator {
  yield all([fork(coreSaga)]);
}
