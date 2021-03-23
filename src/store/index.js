import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const persistConfig = {
    key: 'root',
    storage,
    blacklist:['countState',"book"],
    // whitelist:['book']
  }
const persistedReducer =  persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer,composeWithDevTools( applyMiddleware(thunk)));
export const persistor = persistStore(store)
export default store;