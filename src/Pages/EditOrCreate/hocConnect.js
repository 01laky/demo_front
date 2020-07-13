import React, { Component } from 'react';

import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createNoteInitAction,
  updateNoteInitAction,
} from './actions';

import { getNoteInitAction } from '../Detail/actions';

const mapStateToProps = state => {
  return {
    detail: _.get(state, 'detail', {}),
    noteId: _.get(state, 'router.location.query.noteId', ''),
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    createNoteInitAction,
    updateNoteInitAction,
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
