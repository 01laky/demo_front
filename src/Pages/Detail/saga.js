import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import _ from 'lodash';
import { push } from 'connected-react-router';

import {deleteDetail, getNoteById } from './api';

import {
  DELETE_NOTE_INIT,
  GET_NOTE_INIT,
} from './constants';

import {
  getNoteStartAction,
  getNoteSuccessAction,
} from './actions';

export function* deleteNoteSaga(_action) {
  const noteId = _.get(_action, 'data.noteId', null);
  try {
    yield call(deleteDetail, noteId);
  } catch (err) {
    console.log(err);
  }
  yield put(push('/'))
  return null;
}

export function* getNoteSaga(_action) {
  const noteId = _.get(_action, 'data.noteId', null);
  yield put(getNoteStartAction());
  let payload = null;
  try {
    payload = yield call(getNoteById, noteId);
  } catch (err) {
    console.log(err);
  }
  yield put(getNoteSuccessAction(payload));
  return null;
}

export default function* noteDetailSaga() {
  yield takeLatest(DELETE_NOTE_INIT, deleteNoteSaga);
  yield takeLatest(GET_NOTE_INIT, getNoteSaga);
}
