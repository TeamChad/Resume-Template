import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { responsiveStateReducer } from 'redux-responsive'
import resume from './Resume'


const rootReducer = combineReducers({
  browser: responsiveStateReducer,
  resume,
  routing: routerReducer
})

export default rootReducer