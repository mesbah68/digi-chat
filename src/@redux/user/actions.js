import types from './types';
import actionMaker from '../actionMaker';

export default {
  addContact: actionMaker(types.ADD_CONTACT),
  deleteContact: actionMaker(types.DELETE_CONTACT),
  setAdding: actionMaker(types.SET_ADDING),
  setDetail: actionMaker(types.SET_DETAIL),
  clearContacts: actionMaker(types.CLEAR_CONTACTS),
};
