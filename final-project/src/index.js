import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './Components/BaseLayout'
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import App from './App';
import About from './Components/About'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Classes from './Components/Classes'
import RegistrationStudent from './Components/RegistrationStudent';
import RegistrationTutor from './Components/RegistrationTutor'
import { setAuthenticationHeader } from './utils/authenticate';
import LoginStudent from './Components/LoginStudent';
import "bootstrap/dist/css/bootstrap.min.css";
import TutorDetails from './Components/TutorDetails'
import requireAuth from './Components/requireAuth'
import 'bootstrap/dist/css/bootstrap.min.css';
import DateAndTimePickers from './Components/DatePickerTest';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import TutorProfile from './Components/TutorProfile'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// resets the token in the default axios authentication headers when user
// refreshes page
const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)


if(token) {
  store.dispatch({
    type: 'ON_AUTH'
  })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route
                path="/tutor/:tutorId"
                component={requireAuth(TutorDetails)}
              />
              <Route path="/about" component={About} />
              <Route path="/profile" component={requireAuth(Profile)} />
              <Route
                path="/tutor-profile"
                component={requireAuth(TutorProfile)}
              />
              <Route exact path="/login/tutor" component={Login} />
              <Route path="/login/student" component={LoginStudent} />
              <Route path="/classes" component={Classes} />
              <Route
                path="/registration-student"
                component={RegistrationStudent}
              />
              <Route path="/registration-tutor" component={RegistrationTutor} />
              <Route exact path="/" component={App} />
              <Route path="/datepicker" component={DateAndTimePickers} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
