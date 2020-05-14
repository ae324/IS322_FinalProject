import React from 'react';
import { connect } from 'react-redux';

class Transactions extends React.Component {

  render() {
    return (
      <div className=" accounts-container ">
          <h3>Transactions:</h3>
      {this.props.transactions.map((transaction, index) => {
        return <div classname="accountlist">
        <ul className="card ">
          <p>Account ID: {transaction._id}</p>
          <p>Type: {transaction.type}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Description: {transaction.name}</p>
          </ul>
        </div>
      })}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions:state.accounts.transactions
  }
}

export default connect(mapStateToProps)(Transactions);
