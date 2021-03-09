import { uuid } from 'uuidv4';
import types from './types';

export const initialValues = {
  activeChat: 0,
  messagesList: [],
};

export default function (state = initialValues, { type, payload }) {
  switch (type) {
    case types.OPEN_NEW_MESSAGE:
      const newMessage = { id: uuid() ,user: payload, messages: []};
      return {
        ...state,
        activeChat: newMessage.id,
        messagesList: [newMessage].concat(state.messagesList)
      };
    case types.SEND_MESSAGE:
      return {
        ...state,
        messagesList: payload
      };
    case types.SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: payload,
      };
    case types.REMOVE_MESSAGE:
      return {
        ...state,
        messagesList: state.messagesList.filter((msg) => msg.id !== payload)
      }
    case types.CLEAR_ALL_MESSAGES:
      return initialValues;
    default:
      return state;
  }
}
