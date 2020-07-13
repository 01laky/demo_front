import _ from 'lodash';
import {
  LOAD_NOTE_LIST_INIT,
  LOAD_NOTE_LIST_START,
  LOAD_NOTE_LIST_SUCCESS,
} from './constants';

export const InitialNoteListState = {
  loading: false,
  loaded: false,
  notes: null,
};

export default (noteListState = InitialNoteListState, _action = {}) => {
  const type = _.get(_action, 'type', null);

  if (type === LOAD_NOTE_LIST_INIT) {
    return InitialNoteListState;
  }

  if (type === LOAD_NOTE_LIST_START) {
    return {
      loading: true,
      loaded: false,
      note: null,
    };
  }

  if (type === LOAD_NOTE_LIST_SUCCESS) {
    const payload = _.get(_action, 'payload', null)
    return {
      loading: false,
      loaded: true,
      notes: payload,
    };
  }

  return noteListState;
}
