import React from 'react';

const Account = props => {
    return(
        <li className="list-group-item">
            { props.account.name }
            <button type="button"
                    onClick={() => props.deleteAccount(props.account)}
                    className="btn btn-primary" style={{float: 'right'}}>
                Delete
            </button>
        </li>
    );
};

export default Account;