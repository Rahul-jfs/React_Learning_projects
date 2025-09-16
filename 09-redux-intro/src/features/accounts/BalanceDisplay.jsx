import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);

/*
  in older way of connecting the redux store to the react is by using the connect() function, 

  before the useSelector() hooks, there was another big way to connect the redux store to the react, we use the connect() function

  1. connect() is a function that takes another function, which in turn returns new function, which in turn will take our component as an argunment

  so we will create the function mapStateToProps() and which will receive the state object from the store and we will return the object where we will define the name of the prop that our component will receive

  connect(maoStateToProps) will return a new function, and then the component will be the argument for the new funtion, which will take the BalanceDisplay component as an argument

  Then we can define the prop to the component as BalanceDisplay({balance})
*/
