import React, { Fragment } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Attendance from './Attendance';

const App = () => {
  return (
    <Fragment>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/attendance" exact component={Attendance}/>
        </Switch>
    </Fragment>
  )
}

export default App;
