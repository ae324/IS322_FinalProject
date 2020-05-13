import React from 'react';
import { connect } from 'react-redux';
import { addAccount } from '../actions';
import css from './style.css';

class AddAccount extends React.Component {
    state = {name: '', balance: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.addAccount(this.state.name, this.state.balance, "not_selected",);
        this.setState({name: '', balance:''})
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="addform">
                <div classname="accounts-container">
                  <div className="accountlist">
                      <h3>Add an account:</h3>
                      <label>Name</label>
                      <input type="text"
                             className="form-control name"
                             name="name"
                             value={this.state.name}
                             onChange={(e) => this.setState({name: e.target.value})} />
                  </div>

                  <div>
                      <label>Starting Balance</label>
                      <input type="number"
                             className="form-control"
                             name="balance"
                             value={this.state.balance}
                             onChange={(e) => this.setState({balance: e.target.value})} />
                  </div>
                </div>

                <input type="submit" value={'Add Account'}/>
            </form>
        )
    }
}

export default connect(null, {addAccount})(AddAccount);
