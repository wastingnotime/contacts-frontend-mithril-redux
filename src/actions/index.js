import m from 'mithril'
import { createContactSuccess, updateContactSuccess, deleteContactSuccess, getAllContactsSuccess, getContactSuccess } from './internal'

const API_URL = '/contacts'

/* side effects */
export const createContact = contact =>
    dispatch =>
    call({ method: "POST", url: API_URL, body: contact })
    .then(response => dispatch(createContactSuccess(response)))

export const updateContact = (contact) =>
    dispatch =>
    call({ method: "PUT", url: `${API_URL}/${contact.id}`, body: contact })
    .then(() => dispatch(updateContactSuccess(contact)))

export const deleteContact = id =>
    dispatch =>
    call({ method: "DELETE", url: `${API_URL}/${id}` })
    .then(() => dispatch(deleteContactSuccess(id)))

export const getAllContacts = () =>
    dispatch =>
    call({ method: "GET", url: API_URL })
    .then(response => dispatch(getAllContactsSuccess(response)))

export const getContact = id =>
    dispatch =>
    call({ method: "GET", url: `${API_URL}/${id}` })
    .then(response => dispatch(getContactSuccess(response)))


const call = option => m.request(option).catch(error => { throw (error) })