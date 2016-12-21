import {
  PULL_QUOTE
} from "../constants"

const defaultState = {
  text:"In the depth of winter, I finally learned that within me there lay an invincible summer.",
  subtext:"-Albert Camus",
  source:"quotes",
  link:"https://google.com"
}

export default function(state=defaultState,action) {
  switch (action.type) {
    case PULL_QUOTE:
      if(action.status == "complete")
        return action.quote;
    default:
      return state;
  }
}
