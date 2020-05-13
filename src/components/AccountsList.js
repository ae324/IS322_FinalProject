import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../actions';

import Account from './Account';

class AccountsList extends React.Component {

    deleteAccount = (account) => {
        this.props.deleteAccount(account.id);
   }

   render() {
        const accountsList = this.props.accounts.map(account => {
            return <Account name={name} key={account.id} deleteAccount={this.deleteAccount} />
        });

        return(
            <ul className="list-group">
                {accountsList}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    };
}

export default connect(mapStateToProps, { deleteAccount })(AccountsList);