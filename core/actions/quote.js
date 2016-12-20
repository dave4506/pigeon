import firebase from 'firebase'

import {
  UPVOTE_QUOTE__PUSHED,
  DOWNVOTE_QUOTE__PUSHED,
  PULL_QUOTE_DATA__PULLED,
  PULL_QUOTE_DATA__PULLING,
  PULL_QUOTE_DATA__FAILED,
  DOWNVOTE_QUOTE__FAILED,
  UPVOTE_QUOTE__FAILED,
  DOWNVOTE_QUOTE__PUSHING,
  UPVOTE_QUOTE__PUSHING
} from '../constants'

import quoteAddHelper from './quoteAddHelper'

import quoteRemoveHelper from './quoteRemoveHelper'

var database = firebase.database();

const categoryRef = (category,id) => {
  switch (category) {
    case "popular":
      return database.ref('quotes')
    case "latest":
      return database.ref('quotes')
    case "yours":
      return database.ref('/user_quotes/'+id)
    case "upvoted":
      return database.ref('/user_upvoted/'+id)
  }
}

const filterChild = (ref,filter,category,tries) => {
  if(category == "popular" || category == "latest")
    switch (filter) {
      case "profanity":
        return ref.orderByChild('profanity').equalTo(true).startAt(tries);
      case "no_profanity":
        return ref.orderByChild('profanity').equalTo(false).startAt(tries);
      case "all":
        return ref.startAt(tries);
      case "big_words":
      return ref.orderByChild('bigWords').equalTo(true).startAt(tries);
    }
  if(category == "yours" || category == "upvoted")
    switch (filter) {
      case "profanity":
        return ref.child('profanity')
      case "no_profanity":
        return ref.child('no_profanity')
      case "all":
        return ref.child('all')
      case "big_words":
        return ref.child('big_words')
    }
}

const existInHistory = (uid,quoteKey) => {
  return database.ref('user_history/' + uid + '/' + quoteKey).once('value').then((snapshot)=>{
    return {exists:snapshot.exists(),key:quoteKey};
  })
}

const recursiveQoutePuller = (userSettings,userData,tries) => {
  const {category,filter} = userSettings
  return filterChild(categoryRef(category),filter,category,tries).limitToFirst(1).once('value').then((snapshot)=>{
    console.log("heresdf?",snapshot.val())
    return existInHistory(userData.id,Object.keys(snapshot.val())[0])
  }).then(({exists,key})=>{
    if(exists)
      return recursiveQoutePuller(userSettings,userData,tries+1)
    else
      return database.ref('/quotes/'+key).once('value')
  }).then((snapshot)=>{
    return Object.assign({},snapshot.val(),{key:snapshot.key})
  })
}

const updateHistory = (uid,key) => {
  const historyRef = database.ref('/user_history/'+uid)
  return historyRef.orderByValue().limitToFirst(19).once('value').then((snapshot)=>{
    var clippedHistory = snapshot.val();
    const newHistoryObj = {}
    newHistoryObj[key] = firebase.database.ServerValue.TIMESTAMP
    return historyRef.set(Object.assign({},clippedHistory,newHistoryObj))
  })
}

export const pullQuoteData = () => {
  return (dispatch,getState) => {
    const {userSettings} = getState();
    const {id,filter,category} = userSettings;
    var updates = {};
    updates['/user_settings/'+id] = {filter,category};
    dispatch((()=>{return {type:PULL_QUOTE_DATA__PULLING}})())
    return database.ref().update(updates).then(()=>{
      return recursiveQoutePuller({filter,category},{id},0)
    }).then((quote)=>{
      return database.ref('/user_upvoted/'+id+"/"+quote.key).once('value').then((snapshot)=>{
        if(snapshot.exists())
          return Object.assign({},quote,{upvoted:true})
        else
          return Object.assign({},quote,{upvoted:false})
      })
    }).then((quote)=>{
      dispatch((()=>{return {type:PULL_QUOTE_DATA__PULLED,quote}})())
      return updateHistory(id,quote.key).then(()=>{
        return database.ref('quotes/'+quote.key).transaction((quote)=>{quote.view = quote.view + 1; return quote})
      })
    }).catch((error)=>{
      dispatch((()=>{return {type:PULL_QUOTE_DATA__FAILED,error}})())
    });
  }
}

export const upvote = (quote,uid) => {
  return (dispatch) => {
    dispatch((()=>{type:UPVOTE_QUOTE__PUSHING})())
    var upvoteRef = database.ref('user_upvoted/'+uid);
    var updates = quoteAddHelper(upvoteRef,quote,quote.key)
    return upvoteRef.update(updates).then(()=>{
      return database.ref('quotes/' + quote.key).transaction((quote)=>{quote.upvote = quote.upvote + 1; return quote})
    }).then(()=>{
      dispatch((()=>{return {type:UPVOTE_QUOTE__PUSHED,upvoted:true}})())
    }).catch((error)=>{
      dispatch((()=>{type:UPVOTE_QUOTE__FAILED,error})())
    });
  }
}

export const downvote = (quote,uid) => {
  return (dispatch) => {
    dispatch((()=>{type:DOWNVOTE_QUOTE__PUSHING})())
    var upvoteRef = database.ref('user_upvoted/'+uid);
    var updates = quoteRemoveHelper(upvoteRef,quote,quote.key)
    return upvoteRef.update(updates).then(()=>{
      return database.ref('quotes/' + quote.key).transaction((quote)=>{quote.upvote = quote.upvote - 1; return quote})
    }).then(()=>{
      dispatch((()=>{return {type:DOWNVOTE_QUOTE__PUSHED,upvoted:false}})())
    }).catch((error)=>{
      dispatch((()=>{type:DOWNVOTE_QUOTE__FAILED,error})())
    });
  }
}
