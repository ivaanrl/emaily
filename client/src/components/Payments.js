import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions/index";

const Payments = props => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 emaily credits"
      amount={500}
      token={token => props.onHandleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  ); //token is a callback functions that returns Token representing the charge;
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleToken: token => dispatch(actions.handleToken(token))
  };
};

export default connect(null, mapDispatchToProps)(Payments);
