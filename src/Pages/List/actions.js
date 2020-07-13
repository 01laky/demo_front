import {
  LOAD_NOTE_LIST_INIT,
  LOAD_NOTE_LIST_START,
  LOAD_NOTE_LIST_SUCCESS,
} from './constants';

export const loadNoteListInitAction = () => ({
  type: LOAD_NOTE_LIST_INIT,
});

export const loadNoteListStartAction = () => ({
  type: LOAD_NOTE_LIST_START,
});

export const loadNoteListSuccessAction = payload => ({
  type: LOAD_NOTE_LIST_SUCCESS, payload,
});
