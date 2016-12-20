import {
  PULL_USER_DATA__PULLING,
  PULL_USER_DATA__FAILED,
  PULL_USER_DATA__PULLED,
  PULL_USER_SETTINGS_DATA__PULLING,
  PULL_USER_SETTINGS_DATA__PULLED,
  PULL_USER_SETTINGS_DATA__FAILED,
  PULL_QUOTE_DATA__PULLING,
  PULL_QUOTE_DATA__FAILED,
  PULL_QUOTE_DATA__PULLED,
  PUSH_QUOTE_DATA__PUSHING,
  PUSH_QUOTE_DATA__FAILED,
  PUSH_QUOTE_DATA__PUSHED,
  CHANGE_LOCAL_QUOTE_DATA,
  UPVOTE_QUOTE__PUSHED,
  UPVOTE_QUOTE__PUSHING,
  UPVOTE_QUOTE__FAILED,
  DOWNVOTE_QUOTE__PUSHED,
  DOWNVOTE_QUOTE__PUSHING,
  DOWNVOTE_QUOTE__FAILED
} from "../constants"

const defaultState = {
  USER_SETTINGS:"INIT",
  USER_DATA:"INIT",
  QUOTE:"INIT",
  CREATE_QUOTE:"NONE",
  LOCAL_QUOTE_STATUS:{qualify:false,publicStatus:"GET SOME WORDS DOWN"},
  UPVOTE:"INIT"
}


const quoteStatus = ({text,profanity,bigWords,length}) => {
  if(!length) {
    return {qualify:false,publicStatus:text.length == 0 ? "GET SOME WORDS DOWN!":"AIGHT, A LITTLE TOO MUCH."}
  }
  if(bigWords && profanity) {
    return {qualify:true,publicStatus:"Whata-bang! You are a literary genius spitting some sweet words! Sweet!"}
  }
  if(profanity) {
    return {qualify:true,publicStatus:"Motherf**k! I didn't see that coming!"}
  }
  if(bigWords) {
    return {qualify:true,publicStatus:"Big words makes you sound smarter... I like it."}
  }
  return {qualify:true,publicStatus:"Keep on going!"}
}

export default function(state=defaultState,action) {
  switch (action.type) {
    case PULL_USER_DATA__PULLING:
      return Object.assign({},state,{USER_DATA:"PULLING"});
    case PULL_USER_DATA__FAILED:
      return Object.assign({},state,{USER_DATA:"FAILED"});
    case PULL_USER_DATA__PULLED:
      return Object.assign({},state,{USER_DATA:"PULLED"});
    case PULL_USER_SETTINGS_DATA__PULLING:
      return Object.assign({},state,{USER_SETTINGS:"PULLING"});
    case PULL_USER_SETTINGS_DATA__PULLED:
      return Object.assign({},state,{USER_SETTINGS:"PULLED"});
    case PULL_USER_SETTINGS_DATA__FAILED:
      return Object.assign({},state,{USER_SETTINGS:"FAILED"});
    case PULL_QUOTE_DATA__PULLING:
      return Object.assign({},state,{QUOTE:"PULLING"});
    case PULL_QUOTE_DATA__FAILED:
      return Object.assign({},state,{QUOTE:"FAILED"});
    case PULL_QUOTE_DATA__PULLED:
      return Object.assign({},state,{QUOTE:"PULLED"});
    case PUSH_QUOTE_DATA__PUSHING:
      return Object.assign({},state,{CREATE_QUOTE:"PUSHING"});
    case PUSH_QUOTE_DATA__FAILED:
      return Object.assign({},state,{CREATE_QUOTE:"FAILED"});
    case PUSH_QUOTE_DATA__PUSHED:
      return Object.assign({},state,{CREATE_QUOTE:"PUSHED"});
    case CHANGE_LOCAL_QUOTE_DATA:
      return Object.assign({},state,{LOCAL_QUOTE_STATUS:quoteStatus(action.quote)});
    case UPVOTE_QUOTE__FAILED:
    case DOWNVOTE_QUOTE__FAILED:
      return Object.assign({},state,{UPVOTE:"FAILED"});
    case UPVOTE_QUOTE__PUSHED:
    case DOWNVOTE_QUOTE__PUSHED:
      return Object.assign({},state,{UPVOTE:"PUSHED"});
    case UPVOTE_QUOTE__PUSHING:
    case DOWNVOTE_QUOTE__PUSHING:
      return Object.assign({},state,{UPVOTE:"PUSHING"});
    default:
      return state;
  }
}
