/* eslint-disable no-console */
import { SagaIterator } from "redux-saga";
import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

import { StatusEnum } from "../types";
import { initialize, setEmojisData, setStatus } from "./slice";
import { selectCount } from "./selectors";

function* core(): SagaIterator {
  yield all([
    takeLatest(initialize, function* initial() {
      try {
        yield put(setStatus(StatusEnum.loading));

        const count: number = yield select(selectCount);
        console.log("init", count);

        const { data }: AxiosResponse<Record<string, string>> = yield call(
          axios.get,
          "https://api.github.com/emojis"
        );

        yield put(setEmojisData(data));
        yield put(setStatus(StatusEnum.idle));
      } catch (error) {
        console.error(error);
        yield put(setStatus(StatusEnum.failed));
      }
    }),
  ]);
}

export default function* coreSaga(): SagaIterator {
  yield all([fork(core)]);
}
