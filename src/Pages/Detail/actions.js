import {
  DELETE_NOTE_INIT,
  GET_NOTE_INIT,
  GET_NOTE_START,
  GET_NOTE_SUCCESS,
} from './constants';

export const deleteNoteAction = noteId => ({
  type: DELETE_NOTE_INIT, data: { noteId },
});

export const getNoteInitAction = noteId => ({
  type: GET_NOTE_INIT, data: { noteId },
});

export const getNoteStartAction = () => ({
  type: GET_NOTE_START,
});

export const getNoteSuccessAction = (payload) => ({
  type: GET_NOTE_SUCCESS, payload,
});
