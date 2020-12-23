import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './Components/BaseLayout'
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import About from './Components/About'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Classes from './Components/Classes'
import RegistrationStudent from './Components/RegistrationStudent';
import RegistrationTutor from './Components/RegistrationTutor'
import { setAuthenticationHeader } from './utils/authenticate';
import LoginStudent from './Components/LoginStudent';


// resets the token in the default axios authentication headers when user
// refreshes page
const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route  path = '/about' component = {About} />
            <Route  path = '/profile' component = {Profile} />
            <Route exact path = '/login' component = {Login} />
            <Route path = "/login/student" component ={LoginStudent} />
            <Route  path = '/classes' component = {Classes} />
            <Route  path = '/registration-student' component = {RegistrationStudent} />
            <Route  path = '/registration-tutor' component = {RegistrationTutor} />
            <Route exact path = '/' component = {App} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
