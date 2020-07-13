import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import _ from 'lodash';
import { push } from 'connected-react-router';

import { loadNoteList } from './api';
import {
  loadNoteListStartAction,
  loadNoteListSuccessAction,
} from './actions';

import {
  LOAD_NOTE_LIST_INIT,
} from './constants';

export function* loadNoteListSaga(_action) {
  yield put(loadNoteListStartAction());
  let payload = null;
  try {
    payload = yield call(loadNoteList);
  } catch (err) {
    console.log(err);

    return null;
  }
  yield put(loadNoteListSuccessAction(payload));

  return null;
}

export default function* noteListSaga() {
  yield takeLatest(LOAD_NOTE_LIST_INIT, loadNoteListSaga);
}
