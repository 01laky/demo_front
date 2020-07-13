import {
  CREATE_NOTE_INIT,
  CREATE_NOTE_START,
  CREATE_NOTE_SUCCESS,
  UPDATE_NOTE_INIT,
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS,
} from './constants';

export const createNoteInitAction = data => ({
  type: CREATE_NOTE_INIT, data,
});

export const createNoteStartAction = () => ({
  type: CREATE_NOTE_START,
});

export const createNoteSuccessAction = payload => ({
  type: CREATE_NOTE_SUCCESS, payload,
});

export const updateNoteInitAction = (noteId, data) => ({
  type: UPDATE_NOTE_INIT, data: { noteId, data },
});

export const updateNoteStartAction = noteId => ({
  type: UPDATE_NOTE_START,
});

export const updateNoteSuccessAction = (noteId, data) => ({
  type: UPDATE_NOTE_SUCCESS, data: { noteId, data },
});
