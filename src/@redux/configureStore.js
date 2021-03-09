import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import messageReducer from './message/reducers';
import userReducer from './user/reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['message', 'user']
}

const configureStore = () => {
  const middleware = composeWithDevTools();
  const rootReducer = combineReducers({
    message: messageReducer,
    user: userReducer
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer)


  const store = createStore(persistedReducer, middleware);
  const persistor = persistStore(store);

  return { store, persistor }
};

export default configureStore;
