import React from 'react';
import AccountList from './AccountList';

const Page3 = props => {
  return (
      <div className="container">
        <h2>Select an account:</h2>
        <div>
            <AccountList title="Account List" stateList="not_selected"></AccountList>
        </div>
          <div>
              <div>
              <AccountList title="Account Details" stateList="selected"></AccountList>
              </div>
          </div>
      </div>
  );
}

export default Page3;
