import React from 'react';
import AccountList from './AccountList';
import css from './style.css';


const Page1 = () => {
    return (
        <div>
            <div>

                <div>
                    <AccountList title="Accounts" stateList="not_selected"></AccountList>
                </div>
            </div>
        </div>
    );
}

export default Page1;
