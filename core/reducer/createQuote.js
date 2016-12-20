import {
  CHANGE_LOCAL_QUOTE_DATA,
  PUSH_QUOTE_DATA__PUSHED
} from "../constants"

const defaultState = {
  text:"",
  profanity:false,
  bigWords:0,
  length:false
}


export default function(state=defaultState,action) {
  switch (action.type) {
    case CHANGE_LOCAL_QUOTE_DATA:
      return Object.assign({},state,action.quote);
    case PUSH_QUOTE_DATA__PUSHED:
      return Object.assign({},defaultState);
    default:
      return state;
  }
}
