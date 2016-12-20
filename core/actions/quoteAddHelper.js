export default (ref,quote,key) => {
  var updates={};
  updates[ref+'/all/'+key] = true;
  if(quote.profanity)
    updates[ref+'/profanity/'+key] = true;
  else
    updates[ref+'/no_profanity/'+key] = true;
  if(quote.bigWords != 0)
    updates[ref+'/big_words/'+key] = true;
  return updates;
}
