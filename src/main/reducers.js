import {combineReducers} from 'redux'
import transformerReducer from '../transformersList/transformerReducers'

const rootReducer= combineReducers({
    transformer: transformerReducer
})

export default rootReducer