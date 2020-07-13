import React, { Component } from 'react';

import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import {
  deleteNoteAction,
  getNoteInitAction,
} from './actions';

const mapStateToProps = state => {
  const noteId = _.get(state, 'router.location.query.noteId', '');

  return {
    detail: _.get(state, 'detail', {}),
    noteId,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deleteNoteAction,
    push,
    getNoteInitAction,
  }, dispatch,
);

export default (WrappedDetailComponent) => {
  class HocConnectNoteDetail extends Component {
    render() {
      return (
        <WrappedDetailComponent {...this.props} />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(HocConnectNoteDetail);
};
