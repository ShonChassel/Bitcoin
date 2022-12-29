
const INITIAL_STATE = {
    loggedInUser: {
        name: 'Jorji',
        balance: 300
    }
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SPEND_BALANCE':
            const { loggedInUser } = state
            return {
                ...state,
                loggedInUser: { ...loggedInUser, balance: loggedInUser.balance - action.amount }
            }

        default:
            return state;
    }

}