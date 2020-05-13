const accountsReducer = (state =[], action) => {
 switch (action.type) {
     case 'ADD_ACCOUNT':
         return [
             ...state, {id: state.length + 1,
                 name: action.payload.name,
                 balance: action.payload.balance
         } //maybe add another payload to add acount action
         ];
     case 'DELETE_ACCOUNT':
         const accountIndex = state.findIndex(t =>
             t.id === action.payload);
         let accountList = [...state];
         accountList.splice(accountIndex, 1);
         return accountList;

         default:
         return state;
 }
}

export default accountsReducer;