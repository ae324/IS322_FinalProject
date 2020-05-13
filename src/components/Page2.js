import React from 'react';
import axios from 'axios';
import Transactions from './Transactions';

class Page2 extends React.Component {


  render () {
    return(
      <div className="card" style={{ padding: '10px' }}>
        <Transactions title="Account List"></Transactions>
      </div>
    )
  }
}




export default Page2;
