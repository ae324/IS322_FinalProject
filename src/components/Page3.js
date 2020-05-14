import React from 'react';
import AccountList from './AccountList';

const Page3 = props => {
  return (
      <div>
        <h2>Select an account:</h2>
        <div className="accounts-container">
          <div className="accountlist">
            <div>
                <AccountList title="Account List" stateList="not_selected"></AccountList>
            </div>
              <div>
                <div>
                  <AccountList title="Account Details" stateList="selected"></AccountList>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
}

export default Page3;
