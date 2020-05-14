import React from 'react';
import { connect } from 'react-redux';
import { removeAccount } from '../actions';
import { switchAccount } from '../actions';
import AddAccount from './AddAccount';
import css from './style.css';

class AccountList extends React.Component {


    renderList() {
        let accountArr = this.props[this.props.stateList];

        return accountArr.map(acc => {
            if(acc.status === "selected") {
                return (
                  <div className="accounts-container">
                    <div className="accountslist">
                      <li className="account-details" key={acc._id}>
                          <h3>{ acc.name }</h3>
                          <div>Account ID: {acc._id}</div>


                          <div>
                              <p>Balance: {acc.balance}</p>
                              <p>Transactions: {acc.transactions}</p>
                              <ul>
                               </ul>
                              <button type='button'
                                      className="edit"
                                      onClick={() => { this.props.removeAccount(acc._id) }}>
                                  Delete
                              </button>

                              <button type='button'
                                      className="edit"
                                      onClick={() => {  }}>
                                  Edit
                              </button>
                          </div>

                      </li>
                    </div>
                  </div>
                );
            } else if (acc.status === 'not_selected'){
                return (
                    <li className="card" key={acc._id}>
                        { acc.name }
                        <br />
                        <p>Account ID: {acc._id}</p>
                        <button type='button'
                                onClick={() => { this.props.switchAccount(acc._id) }}>
                                    View
                        </button>
                    </li>
                );
            }

        });
    }

    render() {

        let accountList = this.renderList();
        console.log(accountList)
        console.log(this.props)
        if(this.props.title === "Account Details") {
            return(
              <div className="accounts-container">
                <div className="accountlist">
                    <h3>{this.props.title}</h3>

                    <ul>
                       { accountList }
                    </ul>
                </div>
                </div>
            );
        } else if(this.props.title === "Accounts") {
            return(
              <div className="accounts-container">
                <div className="accountlist">
                    <h3 className="accountstitle">{this.props.title}</h3>
                    <ul>
                       { accountList }
                    </ul>
                  </div>
                <AddAccount title={this.props.title}
                            stateList={this.props.stateList}/>
              </div>
            );
        } else if(this.props.title === "Account List") {
            return(
                <div className="accountlist">
                    <h3>{this.props.title}</h3>

                    <ul>
                       { accountList }
                    </ul>
                </div>
            );
        }

    }
}


const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        selected: state.accounts.selected,
        not_selected: state.accounts.not_selected,
        list: state.accounts.list,
    }
};

export default connect(mapStateToProps, { removeAccount, switchAccount })(AccountList);
