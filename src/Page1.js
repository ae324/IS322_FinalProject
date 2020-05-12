import axios from 'axios';
import React from 'react';
import css from './css/Page1.css';

import AccountData from './data/AccountData.json';


class Page1 extends React.Component {

  render() {
    return (
      <div>
      {AccountData.map((account, index) => {
        return <div className="card">
          <h1>{account.name}</h1>
          <p>{account.balance}</p>
        <button className="infoButton">More information</button>
        </div>
      })}

      </div>
    )
  }
}




export default Page1;
