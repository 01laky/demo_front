import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form'

import listReducer from './Pages/List/reducer';
import detailReducer from './Pages/Detail/reducer';

const rootReducer = (history) => combineReducers({
  detail: detailReducer,
  list: listReducer,
  router: connectRouter(history),
  form: formReducer,
});

export default rootReducer;
