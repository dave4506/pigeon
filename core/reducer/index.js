import {combineReducers} from 'redux';
import ui from './ui'
import quote from './quote'
import sources from './sources'

const reducer = combineReducers({
  ui,
  quote,
  sources
})

export default reducer
