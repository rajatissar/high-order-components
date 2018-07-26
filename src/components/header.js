import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionsReducers from "../actions/index";

class Header extends React.Component {
  signIn() {
    if (this.props.authenticated)
      return (
        <button onClick={() => this.props.authenticate(false)}>Sign Out</button>
      );
    else
      return (
        <button onClick={() => this.props.authenticate(true)}>Sign in</button>
      );
  }
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/resources">Resources Component</Link>
        <Link to="/sign">{this.signIn()}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { authenticated: state.authenticated };
};
export default connect(
  mapStateToProps,
  actionsReducers
)(Header);
