import React from 'react';
import axios from 'axios';
import Transactions from './Transactions';
import css from './style.css';

class Page2 extends React.Component {


  render () {
    return(
      <div className="accounts-container">
      <h3>Account Transactions</h3>
        <div className="accountlist">
          <Transactions title="Account List"></Transactions>
        </div>
      </div>
    )
  }
}




export default Page2;
