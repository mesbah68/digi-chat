import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import types from './types';

/**
 * Main action dispatcher
 * see react-redux examples: https://react-redux.js.org/api/hooks#examples
 */
export default function () {
  const dispatch = useDispatch();

  /**
   * Add new contact
   */
  const addContact = useCallback((payload) => dispatch({ type: types.ADD_CONTACT, payload }), [dispatch]);

  /**
   * Delete a contact
   */
  const deleteContact = useCallback((id) => dispatch({ type: types.DELETE_CONTACT, payload: id }), [dispatch]);

  /**
   * Change contact adding status
   */
  const setContactAdding = useCallback((payload) => dispatch({ type: types.SET_ADDING, payload }), [dispatch]);

  /**
   * Change contact detail
   */
  const setContactDetail = useCallback((payload) => dispatch({ type: types.SET_DETAIL, payload }), [dispatch]);

  /**
   * Clear contacts list
   */
  const clearContacts = useCallback(() => dispatch({ type: types.CLEAR_CONTACTS }), [dispatch]);

  return {
    addContact,
    deleteContact,
    setContactAdding,
    setContactDetail,
    clearContacts
  };
}
