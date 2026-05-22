import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";

import {
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
} from "../types/studentTypes";

import { fetchStudentsApi } from "../../services/fakeApi";

function* getStudentsWorker(): any {
  try {
    const students = yield call(
      fetchStudentsApi
    );

    yield put({
      type: GET_STUDENTS_SUCCESS,
      payload: students,
    });
  } catch (error: any) {
    yield put({
      type: GET_STUDENTS_ERROR,
      payload: error.message,
    });
  }
}

export function* studentSaga() {
  yield takeLatest(
    GET_STUDENTS_REQUEST,
    getStudentsWorker
  );
}