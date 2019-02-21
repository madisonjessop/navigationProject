import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
        <NavLink to="/january" activeClassName="nav-link-active">January</NavLink>
        <NavLink to="/february" activeClassName="nav-link-active">February</NavLink>
        <NavLink to="/march" activeClassName="nav-link-active">March</NavLink>

        { false ? <button>Add Blog</button> : null }
      </div>
    );
  }
}