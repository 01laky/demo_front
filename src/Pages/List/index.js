import React, { useEffect } from 'react';
import _ from 'lodash';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import Preloader from '../../components/Preloader';
import hocConnect from './hocConnect';

import './style.less';

const NoteList = (props) => {
  const { list: { notes, loading } } = props;
  useEffect(() => {
    const { loadNoteListInitAction } = props;

    loadNoteListInitAction();
  }, []);
  const handleOnItemClick = id => () => {
    const { push } = props;

    push(`/detail?noteId=${id}`);
  }

  const handleOnItemCreate = () => {
    const { push } = props;

    push('/create');
  }

  if (loading) {
    return (<Preloader />);
  }
  return (
    <>
        <List>
          {_.map(notes, ({ id, title, text }) => (
            <ListItem
              key={`list-item-${id}`}
              className={'list-item-wrap'}
              onClick={handleOnItemClick(id)}
            >
              <ListItemText className={'id'}>
                {id}
              </ListItemText>
              <ListItemText className={'title'}>
                {title}
              </ListItemText>
              <ListItemText className={'text'}>
                {text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnItemCreate}
        >
          <FormattedMessage
            id="create"
          />
        </Button>
      </>
  );
}

export default hocConnect(NoteList);
