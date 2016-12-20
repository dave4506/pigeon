import {combineReducers} from 'redux';
import userSettings from './userSettings'
import quote from './quote'
import createQuote from './createQuote'
import ui from './ui'

const reducer = combineReducers({
  userSettings,
  quote,
  createQuote,
  ui
})

export default reducer
