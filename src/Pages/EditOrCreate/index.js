import React, { useEffect } from 'react';

import hocConnect from './hocConnect';

import NoteForm from './components/Form';
import Preloader from '../../components/Preloader';

const EditOrCreate = ({ createNoteInitAction, updateNoteInitAction, noteId, note, detail, getNoteInitAction }) => {
  useEffect(() => {
    getNoteInitAction(noteId);
  }, []);

  const handleOnSubmit = (args) => {
    if (noteId) {
      updateNoteInitAction(noteId, args);
    } else {
      createNoteInitAction(args);
    }
  }

  if (detail.loading || !detail.loaded) {
    return (
      <Preloader />
    );
  }
  const initialValues = (detail.note) ? { title: detail.note.title, text: detail.note.text } : {};

  return (
    <NoteForm
      onSubmit={handleOnSubmit}
      initialValues={initialValues}
      noteId={noteId}
    />
  );
}

export default hocConnect(EditOrCreate);
