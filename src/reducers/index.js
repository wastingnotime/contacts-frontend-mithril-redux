import { GET_ALL_CONTACTS, GET_CONTACT, CREATE_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../actions/types'

const isProduction = process.env.NODE_ENV === 'production'

const initialState = {
    current: {},
    contacts: []
}

export default (state = initialState, action) => {
    if (!isProduction)
        console.log(action)
    switch (action.type) {
        case CREATE_CONTACT:
            return ({ current: {}, contacts: [...state.contacts, action.payload] })
        case DELETE_CONTACT:
            return ({ current: {}, contacts: state.contacts.filter(contact => contact.id !== action.payload.id) })
        case UPDATE_CONTACT:
            let index = state.contacts.findIndex(c => c.id === action.payload.id)
            return ({ current: {}, contacts: [...state.contacts.slice(0, index), action.payload, ...state.contacts.slice(index + 1)] })
        case GET_ALL_CONTACTS:
            return ({ current: {}, contacts: action.payload })
        case GET_CONTACT:
            return ({ current: action.payload, contacts: state.contacts })
        default:
            return state
    }
}