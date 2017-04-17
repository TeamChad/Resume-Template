import { applyMiddleware, createStore, compose } from "redux"
import {responsiveStoreEnhancer} from 'redux-responsive'
import createLogger from "redux-logger"
import thunk from "redux-thunk"

import reducer from "./reducers"

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default createStore(
    reducer, 
    compose(
        responsiveStoreEnhancer,
        applyMiddleware(...middleware)
    )
)