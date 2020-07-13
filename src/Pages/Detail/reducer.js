import _ from 'lodash';
import {
  GET_NOTE_INIT,
  GET_NOTE_START,
  GET_NOTE_SUCCESS,
} from './constants';

const InitialNoteState = {
  loading: false,
  loaded: false,
  note: null,
};

export default (noteState = InitialNoteState, _action = {}) => {
  const type = _.get(_action, 'type', null);

  if (type === GET_NOTE_INIT) {
    return InitialNoteState;
  }

  if (type === GET_NOTE_START) {
    return {
      loading: true,
      loaded: false,
      note: null,
    };
  }

  if (type === GET_NOTE_SUCCESS) {
    const payload = _.get(_action, 'payload', null)
    return {
      loading: false,
      loaded: true,
      note: payload,
    };
  }

  return noteState;
}
