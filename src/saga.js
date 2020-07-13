import { all, fork } from 'redux-saga/effects';

import listSaga from './Pages/List/saga';
import detailSaga from './Pages/Detail/saga';
import editOrCreateNoteSaga from './Pages/EditOrCreate/saga';


export function* rootSaga () {
  yield all([
    listSaga(),
    detailSaga(),
    editOrCreateNoteSaga(),
  ]);
};
