import {createStore} from 'redux'
import todosReducer from './reducers/todosReducers'
const store = createStore(todosReducer)

export default store;