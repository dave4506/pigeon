import firebase from 'firebase'
import swearjar from 'swearjar'
import {
  CHANGE_LOCAL_QUOTE_DATA,
  PUSH_QUOTE_DATA__PUSHED,
  PUSH_QUOTE_DATA__PUSHING,
  PUSH_QUOTE_DATA__FAILED
} from '../constants'
import quoteAddHelper from './quoteAddHelper'

var database = firebase.database();

const censorify = ({text}) => {
  if(swearjar.profane(text))
    return {text:swearjar.censor(text),profanity:true}
  else
    return {text,profanity:false}
}

const bigWordify = (quote) => {
  var words = quote.text.split(" ");
  var bigWords = false
  words.forEach((w)=>{
    if(w.length >= 7)
      bigWords = true
  })
  return Object.assign({},quote,{bigWords})
}

const longify = (quote) => {
  var length = false
  if(quote.text.length > 0 && quote.text.length <= 150)
    length = true;
  if(quote.text.length > 150)
    quote.text = quote.text.slice(0,15);
  return Object.assign({},quote,{length})
}

export const changeLocalQuoteText = (text) => {
  var modifiedQuote = {text}
  modifiedQuote = censorify(modifiedQuote);
  modifiedQuote = bigWordify(modifiedQuote);
  modifiedQuote = longify(modifiedQuote);
  return {
    type:CHANGE_LOCAL_QUOTE_DATA,
    quote:modifiedQuote
  }
}

export const pushQuoteData = (quote) => {
  return (dispatch,getState) => {
    const uid = getState().userSettings.id;
    dispatch((()=>{return {type:PUSH_QUOTE_DATA__PUSHING}})())
    var quote_payload = Object.assign({},quote,{view:0,author:uid,createdAt:firebase.database.ServerValue.TIMESTAMP});
    var updates = {}
    var quoteKey = database.ref('/quotes').push().key;
    updates['/quotes/' + quoteKey] = quote_payload;
    updates = Object.assign({},updates,quoteAddHelper('/user_quotes/'+uid,quote_payload,quoteKey))
    return database.ref().update(updates).then((snapshot)=>{
      dispatch((()=>{return {type:PUSH_QUOTE_DATA__PUSHED}})())
    }).catch((error)=>{
      dispatch(()=>{return {type:PUSH_QUOTE_DATA__FAILED,error}})
    });
  }
}
