import React from 'react';
import axios from 'axios';
import Transactions from './Transactions';
import css from './style.css';

class Page2 extends React.Component {


  render () {
    return(
      <div>
        <Transactions title="Account List"></Transactions>
      </div>
    )
  }
}




export default Page2;
