import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = props => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google"> Login With Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: "0 10px" }}>Credits: {props.auth.credits}</li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="left brand-logo" to={props.auth ? "/surveys" : "/"}>
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
