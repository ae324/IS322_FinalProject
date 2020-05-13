import React from 'react';
import { connect } from 'react-redux';
import TransactionData from '../reducers/index'

class Transactions extends React.Component {

  render() {
    return (
      <div>
      {TransactionData.map((transaction, index) => {
        return <div className="card">
          <p>Account ID: {transaction._id}</p>
          <p>Type: {transaction.type}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Description: {transaction.name}</p>
        </div>
      })}

      </div>
    )
  }
}

export default Transactions;
