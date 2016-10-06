import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import Login from './components/login';


//Create Routes for app. Uses hashHistory (not for production).
function render(){
  ReactDom.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
      </Route>

    </Router>, document.getElementById('root')

  );
};

render();
