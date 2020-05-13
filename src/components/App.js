import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setAccounts, loadError} from '../actions';
import AccountsList from './AccountsList';
class App extends React.Component{


componentDidMount(){
this.getData();
}

getData() {
    axios.get ('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
            this.props.setAccounts(response.data);
        }).catch(error => {
            this.props.loadError();
    });
}

render(){
return (
    <div className="container">
            <AccountsList/>
        </div>
        );
}
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors.get_accounts
    };
}

export default connect(mapStateToProps, { setAccounts, loadError })(App);