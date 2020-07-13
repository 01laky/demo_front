import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import List from './Pages/List';
import Detail from './Pages/Detail';
import EditOrCreate from './Pages/EditOrCreate';

import './style.less';

const useStyles = makeStyles(theme => ({
  App: {
    width: '90%',
    height: '100%',
    'margin-left': '5%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const App = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <AppBar position={'static'}>
        <Typography variant="h6" className={classes.title}>
          Note demo app
        </Typography>
      </AppBar>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/detail" component={Detail} />
          <Route path="/create" component={EditOrCreate} />
          <Route path="/edit" component={EditOrCreate} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
