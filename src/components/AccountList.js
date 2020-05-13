import React from 'react';
import { connect } from 'react-redux';
import { removeAccount } from '../actions';
import { switchAccount } from '../actions';
import AddAccount from './AddAccount';

class AccountList extends React.Component {


    renderList() {
        let accountArr = this.props[this.props.stateList];

        return accountArr.map(acc => {
            if(acc.status === "selected") {
                return (
                    <li className="list-group-item" key={acc._id}>
                        <h3>{ acc.name }</h3>
                        <div>Account ID: {acc._id}</div>
                        <button type='button'
                                onClick={() => { this.props.removeAccount(acc._id) }}
                                className="btn btn-danger"
                                style={{ float: 'right', margin: "5px" }}>
                                    Delete
                        </button>

                        <button type='button'
                                onClick={() => {  }}
                                className="btn btn-warning"
                                style={{ float: 'right', margin: "5px" }}>
                                    Edit
                        </button>

                        <div className="card">
                            <p>Balance: {acc.balance}</p>
                            <ul className="list-group" style={{ marginTop: '15px' }}>
                             </ul>
                        </div>
                    </li>
                );
            } else if (acc.status === 'not_selected'){
                return (
                    <li className="list-group-item" key={acc._id}>
                        { acc.name }
                        <br />
                        <p>Account ID: {acc._id}</p>
                        <button type='button'
                                onClick={() => { this.props.switchAccount(acc._id) }}
                                className="btn btn-success"
                                style={{ float: 'right' }}>
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
                <div className="card" style={{ padding: '10px' }}>
                    <h3>{this.props.title}</h3>

                    <ul className="list-group" style={{ marginTop: '15px' }}>
                       { accountList }
                    </ul>
                </div>
            );
        } else if(this.props.title === "Accounts") {
            return(
                <div className="card" style={{ padding: '10px' }}>
                    <h3>{this.props.title}</h3>
                    <AddAccount title={this.props.title}
                                stateList={this.props.stateList}
                                style={{ float: 'right' }}/>

                    <ul className="list-group" style={{ marginTop: '15px' }}>
                       { accountList }
                    </ul>
                </div>
            );
        } else if(this.props.title === "Account List") {
            return(
                <div className="card" style={{ padding: '10px' }}>
                    <h3>{this.props.title}</h3>

                    <ul className="list-group" style={{ marginTop: '15px' }}>
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
