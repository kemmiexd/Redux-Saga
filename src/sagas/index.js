import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select
} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess } from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const res = yield call(getList);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
      yield put(hideLoading());
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  console.log(payload);
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task => {
    return task.title
      .toLowerCase()
      .includes(keyword.trim().toLowerCase());
  });
  yield put(filterTaskSuccess(filteredTask));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
