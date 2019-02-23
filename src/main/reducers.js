import {combineReducers} from 'redux'
import transformerReducer from './transformerReducers'
import temporaryReducer from './temporaryReducer'

const rootReducer= combineReducers({
    transformer: transformerReducer
    //,temporaryTransformer: temporaryReducer,
})

export default rootReducer