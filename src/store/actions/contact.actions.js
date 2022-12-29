import { contactService } from "../../services/contact-service";

export function loadContact() {


    return async (dispatch, getState) => {
        try {
            const filterBy = getState().contactModule.filterBy
            const contacts = await contactService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }

}

export function removeContact(contactId) {

    return async (dispatch) => {
        try {
            const contacts = await contactService.remove(contactId)
            dispatch({ type: 'SET_CONTACT', contactId })
            return 'hello'
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {

    return (dispatch) => {
        try {
            dispatch({ type: 'SET_FILTER_BY', filterBy: { ...filterBy } })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function onSearchOpen(val) {
    console.log('val', val)
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_SEARCH', onSearch: val  })
        } catch (err) {
            console.log('err:', err)
        }
    }
}