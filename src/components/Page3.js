import React from 'react';
import AccountList from './AccountList';

const Page3 = props => {
  return (
      <div className="container" style={{marginTop: '15px'}}>
        <h2>Select an account:</h2>
        <div className="col-sm-5">
            <AccountList title="Account List" stateList="not_selected"></AccountList>
        </div>
          <div className="row">
              <div className="col-sm-7">
              <AccountList title="Account Details" stateList="selected"></AccountList>
              </div>
          </div>
      </div>
  );
}

export default Page3;
