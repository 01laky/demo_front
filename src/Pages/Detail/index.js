import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';


import hocConnect from './hocConnect';

import Preloader from '../../components/Preloader';

import './style.less';

const Detail = (props) => {
  useEffect(() => {
    props.getNoteInitAction(props.noteId);
  }, []);

  const handleMoveToEdit = id => () => {
    const { push } = props;

    push(`/edit?noteId=${id}`);
  }

  const handleDeleteNote = id => () => {
    const { push, deleteNoteAction } = props;

    deleteNoteAction(id);
  }

  const { detail } = props;
  if (detail.loading || !detail.loaded) {
    return (
      <Preloader />
    );
  }
  return (
    <div>
      <div className={`detail-element`}>
        {detail.note.id}
      </div>
      <div className={'detail-element'}>
        {detail.note.title}
      </div>
      <div className={'detail-element'}>
        {detail.note.text}
      </div>
      <div className={'buttons-wrap'}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleMoveToEdit(detail.note.id)}
        >
          <FormattedMessage
            id="edit"
          />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteNote(detail.note.id)}
        >
          <FormattedMessage
            id="delete"
          />
        </Button>
      </div>
    </div>
  );
}

export default hocConnect(Detail);
