import { combineReducers } from "redux";

import accountsReducer from './accountsReducer';
import errorReducer from './errorsReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
    accounts: accountsReducer,
    transactions: transactionsReducer,
    errors: errorReducer
}
);