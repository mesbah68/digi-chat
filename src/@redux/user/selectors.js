import { createSelector } from 'reselect';

// memoized intent
const getUser = (state) => state.user;

export default {
  getContacts: createSelector(getUser, (user) => user.contacts),
  getContactsAdding: createSelector(getUser, (user) => user.adding),
  getContactDetail: createSelector(getUser, (user) => user.detail),
  getUser: createSelector(getUser, (user) => (id) => {
    return user.contacts.filter(usr => usr.id === id)
  }),
};
