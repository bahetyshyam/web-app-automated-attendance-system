import React, { Fragment } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Attendance from './Attendance';
import View from './View';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/students')
      .then(
        response => {
          const studentObject = {};
          response.data.students.map(item => {
            studentObject[item.usn] = item;
          })
          setStudents(studentObject);
        }
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} students={students} />} />
        <Route path="/attendance" exact render={(props) => <Attendance {...props} students={students} />} />
        <Route path="/view" exact render={(props) => <View {...props} students={students} />} />
      </Switch>
    </Fragment>
  )
}

export default App;
