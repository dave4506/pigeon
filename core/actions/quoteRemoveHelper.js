export default (ref,quote,key) => {
  var updates={};
  updates[ref+'/all/'+key] = null;
  if(quote.profanity)
    updates[ref+'/profanity/'+key] = null;
  else
    updates[ref+'/no_profanity/'+key] = null;
  if(quote.bigWords != 0)
    updates[ref+'/big_words/'+key] = null;
  return updates;
}
