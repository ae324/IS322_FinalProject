const DEFAULT_STATE = {
    get_accounts: ''
};

const errorReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'LOAD_ERROR':
            return {
                ...state,
                get_accounts:''
            }
        default:
            return true;
    }
};

export default errorReducer;