import {

} from "../constants"

const defaultState = {
  USER_SETTINGS:"INIT",
  USER_DATA:"INIT",
  QUOTE:"INIT",
  CREATE_QUOTE:"NONE",
  LOCAL_QUOTE_STATUS:{qualify:false,publicStatus:"GET SOME WORDS DOWN"},
  UPVOTE:"INIT"
}


export default function(state={},action) {
  switch (action.type) {
    default:
      return state;
  }
}
