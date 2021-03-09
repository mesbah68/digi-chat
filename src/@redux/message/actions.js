import types from './types';
import actionMaker from '../actionMaker';

export default {
  openNewMessage: actionMaker(types.OPEN_NEW_MESSAGE),
  sendMessage: actionMaker(types.SEND_MESSAGE),
  clearMessages: actionMaker(types.CLEAR_MESSAGES),
};
