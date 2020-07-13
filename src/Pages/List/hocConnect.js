import React, { Component } from 'react';

import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';

import {
  loadNoteListInitAction,
} from './actions';

const mapStateToProps = state => ({
  list: _.get(state, 'list'),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    loadNoteListInitAction,
    push,
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
