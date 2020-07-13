import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
// import { createBrowserHistory } from 'history'

import store, { history } from './store';
import App from './App';

const messages = {
    'cz': {
      create: 'Vytvorit novou poznamku',
      edit: 'Upravit poznamku',
      delete: 'Smazat poznamku'
    },
    'en': {
      create: 'Create new note',
      edit: 'Edit note',
      delete: 'Delete note'
    }
};

const rootElement = document.getElementById('app-root');
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale='en' messages={messages.en}>
      <App history={history} />
    </IntlProvider>
  </Provider>,
  rootElement
);
