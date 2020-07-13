import { LOAD_NOTE_LIST_INIT, LOAD_NOTE_LIST_SUCCESS } from './constants';
import { loadNoteListInitAction, loadNoteListSuccessAction } from './actions';
import reducer, { InitialNoteListState } from './reducer';

describe('Note list actions', () => {
    it('Should create load note list init action', () => {
        const expectedAction = { type: LOAD_NOTE_LIST_INIT }
        expect(loadNoteListInitAction()).toEqual(expectedAction)
    });
    it('Should create load note list success action', () => {
        const payload = [{ title: 'TODO 33', text: 'TODO 33 text', id: 33 }];
        const expectedAction = { type: LOAD_NOTE_LIST_SUCCESS, payload }
        expect(loadNoteListSuccessAction(payload)).toEqual(expectedAction)
    });
});

describe('TODO list reducer', () => {
    it('Should create note list initial redux state', () => {
        expect(reducer(undefined, {})).toEqual(InitialNoteListState);
    });
    it('Should save note list payload to redux state', () => {
        const noteListPayload = [{ title: 'TODO 11', text: 'TODO 11 text', id: 11 }];
        expect(reducer({
            loading: true,
            loaded: false,
            notes: null,
        }, {
            type: LOAD_NOTE_LIST_SUCCESS,
            payload: noteListPayload,
        })).toEqual({
            loading: false,
            loaded: true,
            notes: noteListPayload,
        });
    });
});