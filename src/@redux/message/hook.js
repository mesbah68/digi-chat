import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function useHook() {
  const dispatch = useDispatch();

  /**
   * Create new message to chat with user
   */
  const openNewMessage = useCallback((user) => dispatch({ type: types.OPEN_NEW_MESSAGE, payload: user }), [dispatch]);

  /**
   * Send a message to active chat
   */
  const sendMessage = useCallback((message) => dispatch({ type: types.SEND_MESSAGE, payload: message }), [dispatch]);

  /**
   * Send active chat
   */
  const setActiveChat = useCallback((id) => dispatch({ type: types.SET_ACTIVE_CHAT, payload: id }), [dispatch]);

  /**
   * Remove a message from messages list
   */
  const removeMessage = useCallback((id) => dispatch({ type: types.REMOVE_MESSAGE, payload: id }), [dispatch]);

  /**
   * Clear all messages
   */
  const clearAllMessages = useCallback(() => dispatch({ type: types.CLEAR_ALL_MESSAGES }), [dispatch]);


  return {
    openNewMessage,
    sendMessage,
    setActiveChat,
    removeMessage,
    clearAllMessages
  };
}
