// meeting place for all reducers
import {combineReducers} from 'redux'

// import your reducers
import auth_Reducer from './auth'
export default combineReducers({
    authReducer: auth_Reducer
})