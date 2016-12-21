const defaultQuote = {
  text:"In the depth of winter, I finally learned that within me there lay an invincible summer.",
  subtext:"-Albert Camus",
  source:"Quotes",
  link:"https://google.com"
}

const randomInArray = (arr) => {
  return arr[Math.floor(Math.random()*arr.length)];
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

const fetchQuote = (category) => {
  return fetch(`https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${category}`, {
    method: 'POST',
    headers: {
      'X-Mashape-Key':"QkqI7NAyaimshCQLFCb4FsFnPC3Dp1HaWNzjsn9kt7kLx7WFLU",
      'Content-Type': "application/x-www-form-urlencoded",
      'Accept': "application/json"
    }
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(({quote,author}) => {
    return {
      text:quote,
      subtext:`-${author}`,
      source:"quotes",
      link:`https://www.brainyquote.com/search_results.html?q=${author}`
    }
  })
}

const fetchNy = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=2c326878821b4223842c8caff1d775ea`)
    .then(checkStatus)
    .then(parseJSON)
    .then((topics) => {
      const {byline,title,url} = randomInArray(topics.results)
      return {
        text:title,
        subtext:byline,
        source:"nyTimes",
        link:url
      }
    })
}

const fetchReddit = (category,subreddit) => {
  return fetch(`https://www.reddit.com/r/${subreddit}/${category}/.json?limit=50`)
    .then(checkStatus)
    .then(parseJSON)
    .then((topics) => {
      const {data} = randomInArray(topics.data.children)
      const {author,subreddit,title,permalink} = data;
      return {
        text:title,
        subtext:`By ${author} in /r/${subreddit}`,
        source:"reddit",
        link:`http://www.reddit.com${permalink}`
      }
    })
}

const fetchHacker = (category) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/${category}stories.json?print=pretty`)
    .then(checkStatus)
    .then(parseJSON)
    .then((ids) => {
      const id = randomInArray(ids)
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    }).then(checkStatus)
    .then(parseJSON).then(({by, title, url}) => {
      return {
        text:title,
        subtext:`By ${by}`,
        source:"hackerNews",
        link:`${url}`
      }
    })
}

const fetchDesigner = () => {
  return fetch(`https://www.designernews.co/?format=json`)
    .then(checkStatus)
    .then(parseJSON)
    .then(({stories}) => {
      const {title,url,submitter_display_name} = randomInArray(stories)
      return {
        text:title,
        subtext:`By ${submitter_display_name}`,
        source:"designerNews",
        link:`${url}`
      }
    })
}

const testRequest = (sourceKey,source) => {
  const params = source.selectedParams
  switch (sourceKey) {
    default:
      return Promise.resolve(defaultQuote);
  }
}

const sourceRequest = (sourceKey,source) => {
  var params = null
  if(source)
     params = source.selectedParams;
  switch (sourceKey) {
    case "quotes":
      return fetchQuote(params.category.select);
    case "nyTimes":
      return fetchNy(params.category.select);
    case "reddit":
      return fetchReddit(params.category.select,params.subreddit.select);
    case "hackerNews":
      return fetchHacker(params.category.select);
    case "designerNews":
      return fetchDesigner();
    default:
      return Promise.resolve(defaultQuote);
  }
}

export {sourceRequest,testRequest}
