import React from 'react';
import axios from 'axios';
import TransactionData from './data/TransactionData';

class Page1 extends React.Component {

  constructor(props) {
    super(props);
    /*this.onSubmit = this.onSubmit.bind(this);*/

    this.state = {
      accountId: ''
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  /*onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      accountId: this.state.accountId
    });
  }*/

  render() {

    const {accountId} = this.state;

    return (
      <div>
        <div className="transactionsNav">
        <p>acc: {accountId}</p>
        <form onSubmit={this.onSubmit}>
          <label for="transactionNum">Transaction number:</label>
          <input type="number" name="accountId" onChange={this.handleInputChange}/>
          <input type="submit" />
        </form>
        </div>

      {TransactionData.map((transactions, index) => {
        return (
          <div className="card">
          <h1>Account ID:{transactions.accountId}</h1>
          <p>Type: {transactions.type}</p>
          <p>Amount: {transactions.amount}</p>
          <p>Name: {transactions.name}</p>
        </div>
        )
      })}
      </div>
    )
  }
}




export default Page1;
