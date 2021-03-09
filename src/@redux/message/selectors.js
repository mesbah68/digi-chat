import { createSelector } from 'reselect';

// memoized message
const getMessage = (state) => {
  console.log("SSSS", state.message)
  return state.message;
}

export default {
  getActiveMessage: createSelector(getMessage, (message) => {
    if(!message.activeChat) return {};

    const found = message.messagesList.filter((msg) => msg.id === message.activeChat) || null;
    return found ? found[0]: {};
  }),
  getMessagesList: createSelector(getMessage, (message) => {
    return message.messagesList;
  }),
};
