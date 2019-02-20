import {combineReducers} from 'redux'
import transformerReducer from './transformerReducers'

const rootReducer= combineReducers({
    transformer: transformerReducer
})

export default rootReducer