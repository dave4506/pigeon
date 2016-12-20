import {
  PULL_USER_DATA__PULLED,
  PULL_USER_SETTINGS_DATA__PULLED,
  PUSH_QUOTE_DATA__PUSHED
} from "../constants"

const defaultState = {
  id:"dave4506",
  name:"David Sun",
  category:"popular",
  filter:"all"
}


export default function(state=defaultState,action) {
  switch (action.type) {
    case PULL_USER_DATA__PULLED:
      return Object.assign({},state,action.user);
    case PULL_USER_SETTINGS_DATA__PULLED:
      return Object.assign({},state,action.userSettings);
    case PUSH_QUOTE_DATA__PUSHED:
      return Object.assign({},state,action.userSettings);
    default:
      return state;
  }
}
