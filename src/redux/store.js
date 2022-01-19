import {createStore , combineReducers, applyMiddleware} from "redux";
import newsReducer from './news/newsReducer'
import favoritesReducer from "./favorites/favoritesReducers";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    news: newsReducer, 
    favorites: favoritesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store