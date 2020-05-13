import React from 'react';
import { connect } from 'react-redux';

class Transactions extends React.Component {

  render() {
    return (
      <div className="row">
      {this.props.transactions.map((transaction, index) => {
        return <div className="d-flex card col-5 m-2">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><p>Account ID: {transaction._id}</p></li>
          <li className="list-group-item"><p>Type: {transaction.type}</p></li>
          <li className="list-group-item"><p>Amount: {transaction.amount}</p></li>
          <li className="list-group-item"><p>Description: {transaction.name}</p></li>
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
