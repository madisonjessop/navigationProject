import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavContainer from './nav-container';
import Home from './navbar/home';
import January from './navbar/january';
import February from './navbar/february';
import March from './navbar/march';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Madison's Navigation Project</h1>
            <div>{moment().format('MMMM Do YYYY')}</div>
            <NavContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/january" component={January} />
              <Route path="/february" component={February} />
              <Route path="/march" component={March} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
