import { userService } from "../../services/user-service";

export function loadContact() {

    
    return async (dispatch, getState) => {
        try {
            const contacts = await userService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }

}




