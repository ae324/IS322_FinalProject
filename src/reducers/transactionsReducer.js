const transactionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_DEPOSIT':
            return state + action.payload;
        case 'MAKE_WITHDRAWAL':
            return ;
        case 'DISPLAY_TRANSACTIONS':
            return ;
        default:
            return state;
    }
}

export default transactionsReducer;