import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = props => {
  useEffect(() => {
    props.onFetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: () => dispatch(actions.fetchUser())
  };
};

export default connect(null, mapDispatchToProps)(App);
