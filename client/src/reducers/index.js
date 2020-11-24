import {combineReducers} from 'redux'
import diseseaReducers from './disesea'
const rootReducer = combineReducers ({
    disesea: diseseaReducers
})
export default rootReducer
