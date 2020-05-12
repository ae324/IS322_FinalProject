import React from 'react';
import axios from 'axios';
import TransactionData from './data/TransactionData';

class Page1 extends React.Component {

  render() {
    return (
      <div>
      {TransactionData.map((transactions, index) => {
        return <div className="card">
          <h1>{transactions.accountId}</h1>
          <p>{transactions.type}</p>
          <p>{transactions.amount}</p>
          <p>{transactions.name}</p>
        </div>
      })}
      </div>
    )
  }
}




export default Page1;
