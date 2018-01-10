
import {combineReducer} from 'redux'
import sessionReducer from './session'
import userReducer from './user'


const rootReducer  = combineReducer({
    sessionState : sessionReducer,
    userState : userReducer
})

export default rootReducer;