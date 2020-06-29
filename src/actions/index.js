import m from 'mithril'
import { createContactSuccess, updateContactSuccess, deleteContactSuccess, getAllContactsSuccess, getContactSuccess } from './internal'

const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = '/contacts'

/* side effects */
export const createContact = contact =>
    dispatch =>
    call({ method: "POST", url: apiUrl, body: contact })
    .then(response => dispatch(createContactSuccess(response)))

export const updateContact = (contact) =>
    dispatch =>
    call({ method: "PUT", url: `${apiUrl}/${contact.id}`, body: contact })
    .then(() => dispatch(updateContactSuccess(contact)))

export const deleteContact = id =>
    dispatch =>
    call({ method: "DELETE", url: `${apiUrl}/${id}` })
    .then(() => dispatch(deleteContactSuccess(id)))

export const getAllContacts = () =>
    dispatch =>
    call({ method: "GET", url: apiUrl })
    .then(response => dispatch(getAllContactsSuccess(response)))

export const getContact = id =>
    dispatch =>
    call({ method: "GET", url: `${apiUrl}/${id}` })
    .then(response => dispatch(getContactSuccess(response)))


const call = option => m.request(option).catch(error => { throw (error) })