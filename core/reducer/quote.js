import {
  PULL_QUOTE_DATA__PULLED,DOWNVOTE_QUOTE__PUSHED,UPVOTE_QUOTE__PUSHED
} from "../constants"

const defaultState = {
}


export default function(state=defaultState,action) {
  switch (action.type) {
    case PULL_QUOTE_DATA__PULLED:
      return Object.assign({},action.quote);
    case DOWNVOTE_QUOTE__PUSHED:
    case UPVOTE_QUOTE__PUSHED:
      return Object.assign({},state,{upvoted:action.upvoted})
    default:
      return state;
  }
}
