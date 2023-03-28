import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';


import ordersReducer from './reducers/ordersReducer';
import addItemReducer from './reducers/addItemReducer';
import viewItemsReducer from './reducers/viewItemsReducer';
import   editItemReducer from './reducers/editItemReducer';
import editStatusReducer from './reducers/editStatusReducer';
import SearchItemReducer from './reducers/SearchItemReducer';
import SearchRestroReducer from './reducers/SearchRestroReducer';
import RestroListReducer from './reducers/RestroListReducer';
import ItemsListReducer from './reducers/ItemsListReducer';


const rootReducer = combineReducers({
    orders: ordersReducer,
    items: addItemReducer,
    viewItems: viewItemsReducer,
    editItem: editItemReducer,
    editStatus: editStatusReducer,
    searchItems: SearchItemReducer,
    searchRestros: SearchRestroReducer,
    restaurant: RestroListReducer,
    items: ItemsListReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;