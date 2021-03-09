import types from './types';
import {uuid} from "uuidv4";

export const initialValues = {
  contacts: [],
  adding: false,
  detail: {},
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.ADD_CONTACT:
      const id = uuid();
      const newContact = { id: uuid(), ...payload, avatar: payload.avatar + '?id=' + id };
      return {
        ...state,
        adding: false,
        detail: {},
        contacts: [newContact].concat(state.contacts)
      };
    case types.DELETE_CONTACT:
      return {
        ...state,
        detail: {},
        contacts: state.contacts.filter((usr) => usr.id !== payload)
      }
    case types.SET_ADDING:
      return {
        ...state,
        detail: {},
        adding: payload
      }
    case types.SET_DETAIL:
      return {
        ...state,
        detail: payload
      }
    case types.CLEAR_CONTACTS:
      return initialValues;
    default:
      return state;
  }
}
