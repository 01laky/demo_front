import {
  put, takeLatest, call, delay,
} from 'redux-saga/effects';
import _ from 'lodash';
import { push } from 'connected-react-router';

import { createNote, updateNote } from './api';

import {
  createNoteStartAction,
  updateNoteStartAction,
  createNoteSuccessAction,
  updateNoteSuccessAction,
} from './actions';
import {
  CREATE_NOTE_INIT,
  UPDATE_NOTE_INIT,
} from './constants';

export function* createNoteSaga(_action) {
  yield put(createNoteStartAction());
  const data = _.get(_action, 'data', null);
  if (!data) return null;
  let payload = null;
  try {
    yield call(createNote, data);
  } catch (err) {
    console.log(err);
  }
  yield put(push('/'));

  return null;
}

export function* updateNoteSaga(_action) {
  yield put(updateNoteStartAction());
  const noteId = _.get(_action, 'data.noteId', null);
  const data = _.get(_action, 'data.data', null);
  let payload = null;
  try {
    yield call(updateNote, data, noteId);
  } catch (err) {
    console.log(err);
  }

  yield put(push('/'));

  return null;
}

export default function* editOrCreateNoteSaga() {
  yield takeLatest(CREATE_NOTE_INIT, createNoteSaga);
  yield takeLatest(UPDATE_NOTE_INIT, updateNoteSaga);
}
