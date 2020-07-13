import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import './style.less';

const FormField = (props) => {
  const { id, label, multiline, rows, input } = props;
  return (
    <TextField
      {...input}
      id={id}
      label={label}
      multiline={multiline}
      rows={rows}
      variant="outlined"
    />
  )
}

const Form = ({ noteId, handleSubmit }) => {
  return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          component={FormField}
          id="outlined-basic"
          label="Note title"
          variant="outlined"
          type="text"
        />
        <Field
          name="text"
          component={FormField}
          id="outlined-multiline-static"
          label="Note text"
          multiline
          rows="8"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          {(noteId) ? 'Update' : 'Create'}
        </Button>
      </form>
  );
}

export default reduxForm({ form: 'note' })(Form);
