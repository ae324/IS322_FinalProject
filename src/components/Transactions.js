import React from 'react';
import { connect } from 'react-redux';

class Transactions extends React.Component {

  render() {
    return (
      <div>
          
      {this.props.transactions.map((transaction, index) => {
        return <div className="card">
        <ul className="transactions">
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
