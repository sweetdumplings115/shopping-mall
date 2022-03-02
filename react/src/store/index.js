import {createStore,applyMiddleware,compose} from 'redux';

import thunk from "redux-thunk";
import reducers from './reducer';

// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; //localStorage机制






// const storageConfig = {
//     key: 'mystor', // 必须有的
//     storage:storage, // 缓存机制
//     // whitelist: ['name','age'] // reducer 里持久化的数据,除此外均为不持久化数据
// }
// const myPersistReducer = persistReducer(storageConfig, reducers);
//https://stackoverflow.com/questions/42116614/the-previous-state-received-by-the-reducer-has-unexpected-type-of-function-ex



const Enhancer =  applyMiddleware(thunk);




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;



const store = createStore(reducers,composeEnhancers(Enhancer));

// const persistor = persistStore(store);
export {
    store,
    // persistor
};