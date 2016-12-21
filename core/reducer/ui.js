import {
  PULL_QUOTE
} from "../constants"

const defaultState = {
  QUOTE:"INIT"
}


export default function(state={},action) {
  switch (action.type) {
    case PULL_QUOTE:
      return Object.assign({},{QUOTE:action.status})
    default:
      return state;
  }
}
