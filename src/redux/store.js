import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'main',
    storage:AsyncStorage,
}

const persistdReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistdReducer,applyMiddleware(thunk))
const persistor = persistStore(store)

export default store
export {persistor}